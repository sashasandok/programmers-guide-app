import React from 'react'
import { Navbar, NavbarContent } from '@nextui-org/react'
import { AuthMenu } from '../../components/AuthMenu'
import { NavLinks } from '@/ui/components/NavLinks'
import { NavBrend } from '@/ui/components/NavBrend'

export const AppHeader = () => {
  return (
    <Navbar>
      <NavBrend />
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavLinks />
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthMenu />
      </NavbarContent>
    </Navbar>
  )
}
