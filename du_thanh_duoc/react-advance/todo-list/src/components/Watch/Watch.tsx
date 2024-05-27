import React, { useEffect, useState } from 'react'

export default function Watch() {
  const [seconds, setSeconds] = useState<number>(0)
  useEffect(() => {
    setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }, [])
  return <div>Watch: {seconds}</div>
}
