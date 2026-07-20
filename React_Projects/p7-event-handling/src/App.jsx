
function App() {
  
  function handleClick(){
    alert("I am Clicked")
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
