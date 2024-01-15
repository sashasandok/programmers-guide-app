import { SignInForm } from '@/ui/widgets/SignInForm'
import styles from './signIn.module.css'

const SignIn = () => {
  return (
    <div className={styles.SignInPageWrapper}>
      <SignInForm />
    </div>
  )
}

export default SignIn
