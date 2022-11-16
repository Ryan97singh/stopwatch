//*All imports go here!
import "./Stopwatch.scss";
import { useRef, useState } from 'preact/hooks';
import {Icon} from 'preact-material-components/Icon';
// import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-regular-svg-icons'
import { formatTime } from '@utils';
import { useTimer } from '@hooks';

const Stopwatch = () => {
    const {
        timer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleResume,
        handleReset
    } = useTimer(10);


    return(
        <>
        <div className="app">
    <h3>Preact Stopwatch <Icon>more_time</Icon> </h3>
    <div className='stopwatch-card'>
        <p>{formatTime(timer)}</p> {/* here we will show timer */}
        <div className='buttons'>
        {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
    </div>
    </div>
        </>
    )
}

export default Stopwatch;