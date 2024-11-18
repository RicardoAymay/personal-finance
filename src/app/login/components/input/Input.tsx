import { forwardRef, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    icon?: string
    colorTag?: string
  }

const Input = forwardRef<HTMLInputElement, InputProps> (({name = '', labelText, type = 'text', id, ...props}, ref) => {
  return (
    <label className="flex flex-col mb-2 mt-2" htmlFor={id}>
        <span className="text-preset-5-bold text-grey-500 mb-1">{labelText}</span>
        <input className="border border-beige-500 h-[45px] rounded-lg indent-2" type={type} name={name} id={id} ref={ref} {...props}></input>
    </label>
  )
})

export default Input