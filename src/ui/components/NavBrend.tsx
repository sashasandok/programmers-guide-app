'use client'
import { NavbarBrand } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export const NavBrend = () => {
  const router = useRouter()
  return (
    <NavbarBrand onClick={() => router.push('/')} className="cursor-pointer">
      Logo
    </NavbarBrand>
  )
}
