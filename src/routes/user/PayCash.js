import React from 'react'

import { Link, useParams } from 'react-router-dom'
function PayCash() {
  const { jijum, curl, time, pay } = useParams()
  return (
    <h1>현금</h1>

  )
}

export default PayCash