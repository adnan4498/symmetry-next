import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex gap-4'>
    <Link href="/" >Navbar</Link>
    <Link href="/abcd" >abc page</Link>
    </div>
    </>
  )
}

export default Navbar