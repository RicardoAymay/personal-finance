import { Dispatch, forwardRef, InputHTMLAttributes, SetStateAction } from "react"
import hide from "../../../../assets/images/icon-hide-password.svg"
import show from "../../../../assets/images/icon-show-password.svg"
import Image from "next/image";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    icon?: boolean
    colorTag?: string
    visible?: boolean
    setVisible?: Dispatch<SetStateAction<boolean>>;
  }
  const Input = forwardRef<HTMLInputElement, InputProps> (({name, visible, setVisible, labelText, icon, id, ...props}, ref) => {
    const handleVisibility = () =>{
      if (setVisible){
        setVisible(!visible)
      }
    }
    return (
      <fieldset className="flex flex-col">
        {labelText && (
          <label className="mb-2 mt-2" htmlFor={id}>
            <span className="text-preset-5-bold text-grey-500 mb-1">{labelText}</span>
          </label>
        )}
        <div className="w-full flex relative">
          <input
            className="border border-beige-500 h-[45px] rounded-lg indent-2 w-full pr-10"
            name={name}
            id={id}
            ref={ref}
            {...props}
          />
          {icon && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
              onClick={handleVisibility}
            >
              <Image
                className="h-5 w-5"
                src={visible ? show : hide}
                alt={visible ? "Hide Password" : "Show Password"}
              />
            </div>
          )}
        </div>
      </fieldset>
    );
  }
);

export default Input