import React from 'react'
import { useContext } from 'react'
import { DataContext } from './context/DataContext'

const Two = () => {
  const { name, count, setcount } = useContext(DataContext)

  const inc = () => setcount((c) => c + 1)
  const dec = () => setcount((c) => c - 1)

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {count}</p>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  )
}

export default Two