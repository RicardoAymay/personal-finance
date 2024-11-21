'use client'
import React, { useState } from 'react'
import Input from '../input/Input'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginSchema = z.object({
  'userEmail': z.string().email({ message: "Invalid data format" }).min(5, { message: "E-mail is too short" }).trim().toLowerCase(),
  'userPassword': z.string()
})

const SignUpSchema = z.object({
  'userName': z.string().min(2, { message: "Name is too short" }),
  'userEmail': z.string().email({ message: "Invalid data format" }).min(5, { message: "E-mail is too short" }).trim().toLowerCase(),
  'userPassword': z.string()
})

interface FormValues {
  userName?: string,
  userEmail: string,
  userPassword: string,
}

interface InitialFormProps {
  login?: boolean
}

const InitialForm = ({ login }: InitialFormProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(login ? LoginSchema : SignUpSchema), mode: 'onBlur' })
  const onSubmit: SubmitHandler<FormValues> = (data) => { console.log(data) }
  const [visible, setVisible] = useState<boolean>(false)

  return login ? (
    <form className="flex flex-col flex-1" onSubmit={handleSubmit(onSubmit)}>
      <Input labelText='Email' 
      id='loginUserEmail'
      type='text'
      {...register("userEmail")} />
      <span className="text-grey-500 text-preset-4 self-end text-sm mt-1">{errors && errors.userEmail && errors.userEmail.message}</span>

      <Input 
      labelText='Password' 
      visible={visible} 
      setVisible={setVisible} 
      type={visible ? "text" : "password"} 
      id='loginUserPassword' 
      icon 
      {...register("userPassword")} />
      <span className="text-grey-500 text-preset-4 self-end text-sm mt-1">{errors && errors.userEmail && errors.userEmail.message}</span>
      <button type='submit' className='h-[53px] mt-6 bg-grey-900 text-white text-preset-4-bold rounded-lg flex items-center justify-center'>Login</button>

      <p className='text-center mt-8 text-preset-4 text-grey-500'>Need to create an account? <Link className='text-grey-900 text-preset-4-bold underline underline-offset-4' href={"/signup"}>Sign Up</Link></p>

    </form>
  ) : (
    <form className="flex flex-col flex-1" onSubmit={handleSubmit(onSubmit)}>
      <Input labelText='Name' id='signUpUsername' {...register("userName")} />
      <span className="text-grey-500 self-end text-sm mt-1">{errors && errors.userName && errors.userName.message}</span>

      <Input labelText='Email' id='signUpUserEmail' {...register("userEmail")} />
      <span className="text-grey-500 text-sm mt-1">{errors && errors.userEmail && errors.userEmail.message}</span>
      
      <Input labelText='Create Password' visible={visible} setVisible={setVisible} 
      type={visible ? "text" : "password"} id='loginUserPassword' icon {...register("userPassword")} />
      <span className="text-grey-500 text-sm mt-1">{errors && errors.userPassword && errors.userPassword.message}</span>
      
      <button type='submit' className='h-[53px] mt-6 bg-grey-900 text-white text-preset-4-bold rounded-lg flex items-center justify-center'>Create account</button>
      <p className='text-center mt-8 text-preset-4 text-grey-500'>Already have an account? <Link className='text-grey-900 text-preset-4-bold underline underline-offset-4' href={"/login"}> Login</Link></p>
    </form>
  );
}
export default InitialForm