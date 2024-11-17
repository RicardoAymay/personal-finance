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
    <form className="border" onSubmit={handleSubmit(onSubmit)}>
        <Input id='loginUserEmail' {...register("userEmail")} />
        <Input id='loginUserPassword' {...register("userPassword")} />
        <button>Login</button>
        <p>Need to create an account? <Link href={"/signup"}> Sign up</Link></p>
    </form>
  )
}

export default LoginForm