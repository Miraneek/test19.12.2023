import './App.css'
import {Picture} from "./components/Picture.jsx";
import {ProductInfo} from "./components/ProductInfo.jsx";

function App() {

  return (
    <div className={"flex"}>
      <Picture imgSRC={"ps5.jpg"}/>
      <ProductInfo/>
    </div>
  )
}

export default App
