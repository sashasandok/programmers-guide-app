'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import styles from './signInForm.module.scss'
import { Button, Input } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import { AppLoader } from '@/ui/components/AppLoader'

type Inputs = {
  email: string
  password: string
}

export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSignInUser: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true)
    const res = await signIn('credentials', { ...data, redirect: false }).then(
      ({ ok, error }: any) => {
        if (ok) {
          router.push('/')
        } else {
          alert(JSON.stringify(error))
          console.log('Credentials do not match!', { type: 'error' })
        }
      },
    )
    setIsLoading(false)
  }

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit(onSignInUser)} className={styles.signInFormWrapper}>
        <Input placeholder="email" {...register('email')} className={styles.Input} />
        {errors.email && <span>This field is required</span>}
        <Input
          placeholder="password"
          type="password"
          {...register('password')}
          className={styles.Input}
        />
        {errors.password && <span>This field is required</span>}
        <Button color="primary" type="submit">
          Sign In
        </Button>
      </form>
      {isLoading && <AppLoader size="md" />}
    </>
  )
}
