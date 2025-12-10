import './App.css'
import AddStudent from './AddStudent'
import SearchStudents from './SearchStudents'
import Body from './Body'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
      <>
        <h1>Students List</h1>
        <AddStudent />
        <SearchStudents />
        <Body />
      </>
    </DataProvider>
  )
}

export default App
