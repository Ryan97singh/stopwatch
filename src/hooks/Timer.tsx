import { useRef, useState } from 'preact/hooks';

const useTimer = (initialState:number = 0) => {
    const [timer, setTimer] = useState<number>(0)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const countRef = useRef<NodeJS.Timer>()

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(false)
    }
    
    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    
    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return {
        timer,
        isActive,
        isPaused,
        handlePause,
        handleResume,
        handleStart,
        handleReset,
    }
}

export default useTimer;
