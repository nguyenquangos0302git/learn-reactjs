import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const test = () => {
  for (let i = 0; i < 100000; i++) {
    const obj = { name: 'Test' }
    const obj1 = JSON.stringify(obj)
    const test = JSON.parse(obj1)
  }
}

export default function Count() {
  const [count, setCount] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (count === 4) {
      setCount(0)
      console.log(count)
    }
  }, [count])

  useEffect(() => {
    const measure = () => setWidth(sectionRef.current?.offsetWidth || 0)
    measure()
    test()
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <div>
      <section ref={sectionRef}>Content</section>
      {width > 300 && <div>Size screen</div>}
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  )
}
