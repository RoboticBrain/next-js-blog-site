"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import {Button, buttonVariants } from '../../../components/ui/button'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from "next/link"
export function Navbar() {
    const {getUser} = useKindeBrowserClient();
    const user = getUser();
    return (
        <>
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href="/">
                <h1 className="text-3xl font-semibold">Blog <span className="text-blue-500">Marshal</span></h1>
                </Link>
                <div className="hidden sm:flex items-center gap-6 ">
                    <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/">Home</Link>
                    <Link href="../dashboard/" className="text-sm font-medium hover:text-blue-500 transition-colors">Dashboard</Link>
                </div>
            </div>
            {user ? (<div className='flex items-center justify-betweens gap-4'>
                <p className="whitespace-nowrap text-sm">Welcome {user?.given_name}</p>
                <LogoutLink className={buttonVariants({variant: "secondary"})}>Logout</LogoutLink>
                </div>
                ) :
             (<div className="flex items-center justify-between gap-8">
                <LoginLink className={buttonVariants()}>Login</LoginLink>
                <RegisterLink className={buttonVariants({variant: "secondary"})}>Sign Up</RegisterLink>
            </div>
          )
        }
        </nav>
     
      </> 
 )
        
}