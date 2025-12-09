import './App.css'
import Header from './Header.jsx'
import Content from './Content.jsx'


function App() {
let demo=(name)=>{
  console.log("Hello Sree" + name);
}

  return (
    <>
    <Header/>
    <Content/>  
<button onClick={()=>demo("Sasikiran")}>Click Me</button>
    </>
  )
}

export default App
