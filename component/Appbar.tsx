'use client'

import { signIn, signOut } from 'next-auth/react'

export const Appbar = () => {
    return <div className='flex gap-6'>
        <div>

            <button onClick={() => {
                signIn()
            }}>
                Login
            </button>
        </div>

        <div>

            <button onClick={() => {
                signOut()
            }}>
                Logout
            </button>
        </div>
    </div>
} 