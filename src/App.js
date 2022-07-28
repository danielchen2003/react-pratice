import "./App.css"
// import Event from "./components/Event"
import Product from "./components/Product"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product
          title="Apple AirPods"
          description="Lorem ipsum dolor sit amet, graecis intellegat pertinacia cum et"
          image="https://cdn0.iconfinder.com/data/icons/household-items-2/100/airpod2-512.png"
        />
      </header>

      {/* <Event /> */}
    </div>
  )
}

export default App
