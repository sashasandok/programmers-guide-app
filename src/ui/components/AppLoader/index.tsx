import React, { FC } from 'react'
import { Spinner } from '@nextui-org/react'
import styles from './AppLoader.module.scss'
import { Backdrop } from '../Backdrop'

export interface IAppProps {
  size: 'sm' | 'md' | 'lg'
}

export const AppLoader: FC<IAppProps> = ({ size }) => {
  return (
    <div className={styles.AppLoader}>
      <Backdrop />
      <Spinner size={size} />
    </div>
  )
}
