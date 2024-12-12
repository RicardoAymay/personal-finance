import Image from "next/image";
import logo from "../../../public/assets/images/illustration-authentication.svg"
import InitialForm from "../login/components/form/InitialForm";

export default function Login() {
  return (
    <>
    <div className="w-screen flex flex-col items-center justify-center bg-beige-100">
    <header className='md:hidden text-preset-1 border w-full absolute top-0 text-center text-white bg-grey-900 py-400 px-500 rounded-b-lg'>
        finance
    </header>
      {/* lado esquerdo */}
      <div className=" flex w-full max-h-[960px] p-2 items-center justify-center">
        <div className="hidden md:flex flex-1 relative max-w-[600px] p-2 h-full items-center justify-center">
          <figure className="relative h-fit max-h-full w-fit rounded-xl overflow-hidden">
            <Image src={logo} alt="You will see where your future leads"/>
            <div className="absolute bottom-10 flex flex-col text-white mx-500 pe-500 gap-300">
              <p className="text-preset-1">
                Keep track of your money and save for your future
              </p>
              <p className="text-preset-4">
                Personal finance app puts you in control of your spending. 
                Track transactions, set budgets, and add to savings pots easily.
              </p>
            </div>
          </figure>
        </div>

        {/* lado direito */}
        <div className="max-w-[840px] p-2 flex flex-1 h-full justify-center items-center">
          <div className="bg-white p-400 rounded-lg max-w-[560px] max-h-[527px] flex flex-1 flex-col">
            <p className="text-preset-1 mb-6">
              Sign up
            </p>
            <InitialForm />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
