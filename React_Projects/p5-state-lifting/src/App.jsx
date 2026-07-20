import { useState } from "react"
import Card from "./Card";

function App() {
const [name,setName]=useState('');
  return (
    <div>
        <Card name={name} setName={setName}/>
        {/* this is value change from child but can be seen in parent */}
        <p>The value in child textbox is : {name}</p>
    </div>
  )
}

export default App
