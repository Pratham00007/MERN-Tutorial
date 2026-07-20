
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {

  const [count,setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <Button hc={handleClick} text="Click Me Dear">
      <h1>{count}</h1>
    </Button>

    // <div>
    //   <Card>
    //     <h1>Hello I am P</h1>
    //     <p>This is react Course</p>
    //     <p>And try to be complete soon</p>
    //   </Card>
    // </div>
  )
}

export default App
