'use client'
import React from 'react'
import Input from '../input/Input'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginSchema = z.object({
    'loginUserEmail': z.string().email({message:"Invalid data format"}).min(5, {message: "E-mail is too short"}).trim().toLowerCase(),
    'loginUserPassword': z.string()
})

interface FormValues {
userEmail: string,
userPassword: string,
}

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver: zodResolver(LoginSchema), mode: 'onBlur'})
    const onSubmit: SubmitHandler<FormValues> = (data) => {console.log(data)}
  return (
    <form  className="flex flex-col flex-1 max-w-[560px] max-h-[422px] p-500"  onSubmit={handleSubmit(onSubmit)}>
        <Input labelText='Email' id='loginUserEmail' {...register("userEmail")} />
        <Input labelText='Password' id='loginUserPassword' {...register("userPassword")} />
        <button>Login</button>
        <p>Need to create an account? <Link href={"/signup"}> Sign up</Link></p>
    </form>
  )
}

export default LoginForm