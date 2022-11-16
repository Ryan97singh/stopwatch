import "preact/debug";
import { useState } from 'preact/hooks';
import {Stopwatch} from '@pages';
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stopwatch></Stopwatch>
    </>
  )
}
