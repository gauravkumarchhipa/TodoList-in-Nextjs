"use client";
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='login'>
            <section>
                <form>
                    <input type='email' placeholder='Enter Email' autoComplete='off' />
                    <input type='password' placeholder='Enter Password' autoComplete='off' />

                    <button type='submit'>Login</button>
                    <p>OR</p>
                    <Link href={"/register"}>New User</Link >
                </form>
            </section>
        </div>
    )
}

export const metadata = {
    title: 'Login',
    description: 'This is a Login page of Todo App project made by gaurav',
}
export default page