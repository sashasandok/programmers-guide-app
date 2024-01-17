import React from 'react'
import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'

export const NavLinks = () => {
  return (
    <>
      <NavbarItem>
        <Link color="foreground" href="#">
          Features
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Customers
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Integrations
        </Link>
      </NavbarItem>
    </>
  )
}
