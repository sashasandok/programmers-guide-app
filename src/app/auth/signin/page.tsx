import { SignInForm } from '@/ui/widgets/SignInForm'
import styles from './signIn.module.scss'

const SignIn = () => {
  return (
    <div className={styles.SignInPageWrapper}>
      <SignInForm />
    </div>
  )
}

export default SignIn
