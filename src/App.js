import { Fragment } from "react";
import Benefit from "./components/Benefit";
import Care from "./components/Care";
import Coach from "./components/Coach";
import BackToTop from "./components/common/BackToTop";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Organizer from "./components/Organizer";
import Register from "./components/Register";
import Sale from "./components/Sale";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Hero></Hero>
      <Sale></Sale>
      <Care></Care>
      <Benefit></Benefit>
      <Coach></Coach>
      <Content></Content>
      <Register></Register>
      <Organizer></Organizer>
      <BackToTop></BackToTop>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
