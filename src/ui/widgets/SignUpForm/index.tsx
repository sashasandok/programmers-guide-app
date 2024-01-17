'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './signUpForm.module.scss'
import { Button, Input } from '@nextui-org/react'

type Inputs = {
  name: string
  email: string
  password: string
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onCreateNewUser: SubmitHandler<Inputs> = async (data) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ ...data, role: 'user' }),
    })
    console.log('res', res)
  }

  // console.log(watch('password')) // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onCreateNewUser)} className={styles.signUpFormWrapper}>
      <Input placeholder="email" {...register('email')} className={styles.Input} />
      {errors.email && <span>This field is required</span>}
      <Input placeholder="user name" {...register('name')} className={styles.Input} />
      {errors.name && <span>This field is required</span>}
      <Input
        placeholder="password"
        type="password"
        {...register('password')}
        className={styles.Input}
      />
      {errors.password && <span>This field is required</span>}
      <Button color="primary" type="submit">
        Create Account
      </Button>
    </form>
  )
}
