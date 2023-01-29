import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react'
import styles from '../css/SelectJijum.module.css'

function SelectJijum() {
  let navigate = useNavigate()
  const jiJums = ['gyoDong', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  function jiJum (J) {
    navigate(`/${J}/Home`)
  }
  return (
    <div className={styles["login-box"]}>
      {jiJums.map((J, idx) => (
        <button className={styles.btn} onClick={() => {jiJum(J)}} key={idx}>
          <p className={styles.loginP}>{J}</p>
        </button>
      ))}
    </div>
  )
}
export default SelectJijum