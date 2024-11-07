import { useState } from "react"
import Sandip from "./sandip"
import MyNavbar from "./MyNavbar"

function App() {
  const [color, setColor] = useState("olive")
  return (
      <>
      <MyNavbar/>
      </>
  )
}

export default App
 