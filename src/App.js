import "./App.css"
import Layout from "./components/Layout"
import cities from "./Data"

function App() {
  return (
    <div className="App">
      <Layout cities={cities} />
    </div>
  )
}

export default App
