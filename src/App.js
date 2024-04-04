import "./App.css";
import Product from "./Components/Product";
import { Demo2 } from "./Components/Product";
import { Demo3 } from "./Components/Product";
import Banana from "./Components/PropsDestructuring";
 
function App() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>
        <Product name="Echo" desc="AI partner" price={67.78}></Product>
        <hr></hr>
        <Product name="Alexa" desc="Google help" price={123.34}></Product>
        <hr></hr>
        <Product name="demo" desc="Chrome help" price={3456.5678}></Product>
        <hr></hr>
        <Product name="dada" desc="Big Brother" price={56.67}></Product>
        <hr></hr>
        <Demo2></Demo2>
        <hr></hr>
        <Demo3></Demo3>
      </div>

      <div style={{ backgroundColor: "green" }}>
        <Banana name="Mahesh" city="Pune" address="gajanan nagar"></Banana>
      </div>
    </>
  );
}

export default App;
