import { forwardRef, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    icon?: string
    colorTag?: string
  }

const Input = forwardRef<HTMLInputElement, InputProps> (({name = '', labelText, type = 'text', id, ...props}, ref) => {
  return (
    <label htmlFor={id}>
        {labelText}
        <input className="border-2 border-gray-900" type={type} name={name} id={id} ref={ref} {...props}></input>
    </label>
  )
})

export default Input