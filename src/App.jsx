import { Outlet } from "react-router-dom";
import { NavItems } from "./components/NavItems";
import "./App.css"


 const App = () => {
  return (
    <>
   <NavItems/>
    <Outlet/>
    </>
  )
}

export default App;