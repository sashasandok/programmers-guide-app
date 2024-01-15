import { SignUpForm } from '@/ui/widgets/SignUpForm'
import styles from './signUp.module.css'

const SignUp = () => {
  return (
    <div className={styles.SignUpPageWrapper}>
      <SignUpForm />
    </div>
  )
}

export default SignUp
