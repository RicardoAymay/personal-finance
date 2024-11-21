import Image from "next/image";
import logo from "../assets/images/illustration-authentication.svg"
import InitialForm from "./login/components/form/InitialForm";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <Link href={'/login'}>Login</Link>
      <Link href={'/signup'}>Sign Up</Link>
    </>
  );
}
