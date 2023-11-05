import { Outlet } from "react-router-dom"
import MainLayout from "./Componenets/Layout/MainLayout"
import Footer from "./Componenets/Footer/Footer"

function App() {

  return (
    <div>
      <MainLayout>
        <Outlet></Outlet>
        <Footer></Footer>
      </MainLayout>
    </div>
  )
}

export default App
