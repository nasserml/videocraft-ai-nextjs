import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex p-5 shadow-md shadow-primary/50 justify-between items-center'>
      <Link href={"/"} className="flex  items-center ">
          <Image src={"/logo.png"} width={70} height={70} alt={"logo"} />
          <h2 className="font-medium text-lg">VideoCraft AI</h2>
        </Link>
      <UserButton />
    </div>
  )
}

export default Header
