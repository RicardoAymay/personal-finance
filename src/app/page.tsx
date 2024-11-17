import Image from "next/image";
import logo from "../assets/images/illustration-authentication.svg"
export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-beige-100">
      
      {/* lado esquerdo */}
      <div className="flex w-full h-[960px] items-center justify-center">
        <div className="max-w-[600px] items-center justify-center flex flex-1">
          <figure className="relative h-fit w-fit rounded-xl overflow-hidden">
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

        {/* lado direito */}
        <div className="max-w-[840px] flex flex-1">
          <div className="bg-white rounded-lg max-w-[560px] max-h-[422px] flex flex-1 flex-col">
            <p className="text-preset-1">
              Login
            </p>
            <form className="border">
              <label htmlFor="loginEmail">
                <p>Email</p>
                <input type="email" name="email" id="loginEmail" maxLength={100} required/>
              </label>
              <label htmlFor="loginPassword">
                <p>Password</p>
                <input type="password" name="" id="loginPassword" />
              </label>
              <button type="submit"> Login </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}
