import { InputHTMLAttributes } from 'react'
import type { UseFormRegister } from 'react-hook-form'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
}

export default function Input({
  type,
  placeholder,
  errorMessage,
  className,
  name,
  register,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm'
}: Props) {
  const registerResult = register && name ? register(name) : {}
  return (
    <div className={className}>
      <input type={type} className={classNameInput} placeholder={placeholder} autoComplete='on' {...registerResult} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
