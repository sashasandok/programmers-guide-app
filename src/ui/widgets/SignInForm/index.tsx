'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './signInForm.module.css'
import { Button, Input } from '@nextui-org/react'
import { signIn } from 'next-auth/react'

type Inputs = {
  email: string
  password: string
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSignInUser: SubmitHandler<Inputs> = async (data) => {
    const res = await signIn('credentials', { ...data, redirect: false }).then(
      ({ ok, error }: any) => {
        if (ok) {
          window.location.replace('/')
        } else {
          alert(JSON.stringify(error))
          console.log('Credentials do not match!', { type: 'error' })
        }
      },
    )
    alert(JSON.stringify(res, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSignInUser)} className={styles.signInFormWrapper}>
      <Input placeholder="email" {...register('email')} />
      {errors.email && <span>This field is required</span>}
      <Input placeholder="password" type="password" {...register('password')} />
      {errors.password && <span>This field is required</span>}
      <Button color="primary" type="submit">
        Sign In
      </Button>
    </form>
  )
}
