import { UserButton, auth, currentUser } from '@clerk/nextjs'
import React from 'react'
import MainNav from '@/components/main-nav'
import CategorySwitcher from '@/components/category-switcher'
import { redirect } from 'next/navigation'
import prismadb from '@/lib/prismadb'

const Navbar = async () => {
  const {userId} = auth()
  if(!userId) {
    redirect("/sign-in")
  }

  const categories = await prismadb.category.findMany({
    where: {
      userId,
    }
  })

  return (
    <div className="border-b" >
        <div className="flex h-16 items-center px-4" >
            <CategorySwitcher items={categories} />
            <MainNav className='mx-6' />
            <div className="ml-auto flex items-center space-x-4" >
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    </div>
  )
}

export default Navbar