import { forwardRef, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    icon?: string
    colorTag?: string
  }

const Input = forwardRef<HTMLInputElement, InputProps> (({name = '', labelText, type = 'text', id, ...props}, ref) => {
  return (
    <label className="flex flex-col" htmlFor={id}>
        <span className="text-preset-5-bold">{labelText}</span>
        <input className="border border-beige-500 rounded-lg" type={type} name={name} id={id} ref={ref} {...props}></input>
    </label>
  )
})

export default Input