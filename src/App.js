import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3
} from "./containers";
import "./style/global.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div> 
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
