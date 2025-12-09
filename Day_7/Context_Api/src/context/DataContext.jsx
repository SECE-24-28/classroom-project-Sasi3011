import { createContext ,useState} from "react";  

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [name, setname] = useState("Sasi");
  const [count, setcount] = useState(18);
  const demo=()=>{
    return "Hello World !";
  }
  return (
    <DataContext.Provider value={{ name, setname, count, setcount ,demo}}>
      {children}
    </DataContext.Provider>
  );
};  
export default DataProvider;