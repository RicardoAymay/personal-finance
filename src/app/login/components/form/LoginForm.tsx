'use client'
import React, { useState } from 'react'
import Input from '../input/Input'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const LoginSchema = z.object({
    'userEmail': z.string().email({message:"Invalid data format"}).min(5, {message: "E-mail is too short"}).trim().toLowerCase(),
    'userPassword': z.string()
})

interface FormValues {
userEmail: string,
userPassword: string,
}

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver: zodResolver(LoginSchema), mode: 'onBlur'})
    const onSubmit: SubmitHandler<FormValues> = (data) => {console.log(data)}
    const [visible, setVisible] = useState<boolean>(false)

  return (
    <form  className="flex flex-col flex-1"  onSubmit={handleSubmit(onSubmit)}>
        <Input labelText='Email' id='loginUserEmail' {...register("userEmail")} />
        <Input labelText='Password' visible={visible} setVisible={setVisible} type={visible ? "text" : "password"} id='loginUserPassword' icon {...register("userPassword")} />
        <button type='submit' className='h-[53px] mt-6 bg-grey-900 text-white text-preset-4-bold rounded-lg flex items-center justify-center'>Login</button>
        <p className='text-center mt-8 text-preset-4 text-grey-500'>Need to create an account? <Link className='text-grey-900 text-preset-4-bold underline' href={"/signup"}> Sign up</Link></p>
    </form>
  )
}

export default LoginForm