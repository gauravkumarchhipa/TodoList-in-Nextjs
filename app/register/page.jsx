"use client";
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='login'>
            <section>
                <form>

                    <input type='text' placeholder='Enter Name' autoComplete='off' />
                    <input type='email' placeholder='Enter Email' autoComplete='off' />
                    <input type='password' placeholder='Enter Password' autoComplete='off' />

                    <button type='submit'>Sign Up</button>
                    <p>OR</p>
                    <Link href={"/login"}>Login</Link >
                </form>
            </section>
        </div>
    )
}
export const metadata = {
    title: 'Register',
    description: 'This is a Register page of Todo App project made by gaurav',
}
export default page