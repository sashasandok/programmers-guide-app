'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import { AppLoader } from '@/ui/components/AppLoader'
import styles from './signUpForm.module.scss'

type Inputs = {
  name: string
  email: string
  password: string
}

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onCreateNewUser: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ ...data, role: 'user' }),
      })
      if (res.status === 200) {
        toast.success('Your account successfully created!')
        router.push('/auth/signin')
      }
    } catch (error: any) {
      toast.error(error?.message)
    }

    setIsLoading(false)
  }

  return (
    <>
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
      {isLoading && <AppLoader size="md" />}
    </>
  )
}
