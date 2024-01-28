'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function NavBar() {
    const { isSignedIn, user, isLoaded } = useUser();
    return (
        <div className="p-2 flex justify-between">
            <Link href="/" className="text-2xl font-extrabold">CodeBin{"</>"}</Link>
            {!isLoaded && <p>Loading..</p>}
            {isLoaded && (
                isSignedIn ?
                    <div className='flex gap-2'>
                        <Link href="/codebin/create" className="text-xl text-blue-600 font-bold">+ Add Bin</Link>
                        <UserButton afterSignOutUrl='/' />
                    </div> :
                    <div className='flex gap-2'>
                        <Link href="/sign-up" className='text-xl text-blue-600 font-semibold'>SignUp</Link>
                        <Link href="/sign-in" className='text-xl text-blue-600 font-semibold'>SignIn</Link>
                    </div>
            )}

        </div>
    )
}

export default NavBar