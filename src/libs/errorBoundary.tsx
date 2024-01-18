import React from 'react'
import PropTypes from 'prop-types'
import styles from './ErrorBoundaryInfo.module.scss'

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ hasError: true, error, errorInfo })
  }

  render() {
    const state: any = this.state
    if (state?.hasError) {
      const { error, errorInfo } = state
      return (
        <div className={styles.errorBoundaryInfo}>
          <h1 className={styles.message}>{error?.message}</h1>
          <hr color="red" />
          <p className={styles.stack}>{errorInfo?.componentStack}</p>
        </div>
      )
    }
    return (this?.props as any)?.children
  }
}

export default ErrorBoundary
