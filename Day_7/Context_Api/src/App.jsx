
import './App.css'
import DataProvider from './context/DataContext'
import One from './One.jsx'
import Two from './Two.jsx'

function App() {
  

  return (
    <>
      <DataProvider>
        <One />
        <Two />
      </DataProvider>
    </>
  )
}

export default App
