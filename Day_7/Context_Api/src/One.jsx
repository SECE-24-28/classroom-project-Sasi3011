import React, { useContext, useState } from 'react'
import { DataContext } from './context/DataContext'

const One = () => {
  const { name, setname } = useContext(DataContext)
  const [localName, setLocalName] = useState(name)

  const applyName = () => setname(localName)

  return (
    <div>
      <h1>Hai {name}</h1>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          placeholder="Enter name"
          style={{ padding: 8, border: '1px solid #ddd', borderRadius: 4 }}
        />
        <button onClick={applyName}>Update Name</button>
      </div>
    </div>
  )
}

export default One