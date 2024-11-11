import Image from "next/image";
import logo from "../assets/images/illustration-authentication.svg"
export default function Login() {
  return (
    <>
      <div className="flex w-full h-full border-2">
        <figure className="relative rounded-xl overflow-hidden">
          <Image src={logo} alt=""/>
          <div className="absolute bottom-10 p-10 text-white border-spacing-500 border-2">
            <p className="text-preset-1">
              Keep track of your money and save for your future
            </p>
            <p className="text-preset-4">
              Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </figure>
      </div>
      <div>

      </div>
    </>
    
  );
}
