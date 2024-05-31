import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

const Input = forwardRef<{ type: () => void }>((props, ref) => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const type = () => {
    let numberIndex = 0
    const initalString = 'Quang Nguyen'
    inputRef.current?.focus()
    let interval: any = setInterval(() => {
      setValue(initalString.slice(0, numberIndex))
      if (numberIndex === initalString.length) {
        return clearInterval(interval)
      }
      numberIndex++
    }, 100)
  }

  useImperativeHandle(ref, () => {
    return {
      type
    }
  })

  return <input type='text' value={value} onChange={() => {}} ref={inputRef} />
})

export default function AutoText() {
  const funcInputRef = useRef<{ type: () => void }>({ type: () => {} })
  const handleClick = () => {
    funcInputRef.current.type()
  }
  return (
    <div>
      <button onClick={handleClick}>Auto Text</button>
      <Input ref={funcInputRef} />
    </div>
  )
}
