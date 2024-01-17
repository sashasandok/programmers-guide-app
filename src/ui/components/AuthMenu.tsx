'use client'
import React from 'react'
import {
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  User,
  Spinner,
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export const AuthMenu = () => {
  const session = useSession()

  if (session?.status === 'loading') return <Spinner size="sm" />
  return session?.status === 'unauthenticated' && !session?.data ? (
    <>
      <NavbarItem className="lg:flex">
        <Link href="/auth/signin">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/auth/signup" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </>
  ) : (
    <Dropdown>
      <DropdownTrigger>
        <User
          name={session?.data?.user?.name}
          description="Product Designer"
          avatarProps={{
            src: 'https://avatars.githubusercontent.com/u/30373425?v=4',
          }}
          className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" onClick={() => signOut()}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
