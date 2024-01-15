'use client'
import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { SessionProvider } from 'next-auth/react'

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  )
}
