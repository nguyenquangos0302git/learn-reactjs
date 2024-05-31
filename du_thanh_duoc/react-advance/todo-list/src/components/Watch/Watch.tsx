import React, { useEffect, useRef, useState } from 'react'

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<any>(null)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return <div>Watch: {seconds}</div>
}

export default function Watch(props: any) {
  const [visible, setVisible] = useState<boolean>(true)
  return (
    <div>
      {' '}
      {visible && <WatchTimer />}
      <button onClick={() => setVisible(!visible)}>Hidden</button>
    </div>
  )
}
