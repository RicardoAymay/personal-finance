import Image from "next/image";
import logo from "../assets/images/illustration-authentication.svg"
export default function Login() {
  return (
    <>
      <div className="flex w-full bg-beige-100 h-[960px] items-center justify-center">
        <div className="w-[600px]">
          <figure className="relative h-fit rounded-xl overflow-hidden">
            <Image src={logo} alt=""/>
            <div className="absolute bottom-10 flex flex-col text-white mx-500 pe-500 gap-300">
              <p className="text-preset-1">
                Keep track of your money and save for your future
              </p>
              <p className="text-preset-4">
                Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.
              </p>
            </div>
          </figure>
        </div>
      </div>
      <div>

      </div>
    </>
    
  );
}
