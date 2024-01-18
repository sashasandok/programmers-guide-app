import React from 'react'
import styles from './Backdrop.module.scss'

export const Backdrop = () => {
  return <div className={styles.Backdrop} />
}

// modal backdrop
// const backdrop = ({ isModalOpen, closeModal }) =>
//   isModalOpen ? <div className="backdrop" onClick={closeModal} /> : null;
