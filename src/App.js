import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Partners from "./components/Partners/Partners";
import Sound from "./components/Equipment/Equip/Sound/Sound";
import Light from "./components/Equipment/Equip/Light/Light";
import Effects from "./components/Equipment/Equip/Effects/Effects";
import Complect from "./components/Equipment/Equip/Complect/Complect";
import EquipNavbar from "./components/Equipment/EquipNavbar/NavbarEquip";
import { Route, HashRouter, Redirect } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Rent from "./components/Rent/Rent";
import Footer from "./components/Footer/Footer";

const App = (props) => {
    return ( 
        <div >
            <div className = "bg" >
                <Navbar / >
                <Header / >
            </div> 
            <Partners / >
            <div className = "equip__bg" >
                <HashRouter >
                    <EquipNavbar / >
                        <Redirect from = "/" to = "sound" / >
                        <Route exact path = "/sound" render = {() => < Sound state = {props.state}/>}></Route >
                        <Route path = "/light" render = {() => < Light state = {props.state}/>}></Route >
                        <Route path = "/effects" render = {() => < Effects state = {props.state}/>}></Route >
                        <Route path = "/complect" render = {() => < Complect state = {props.state}/>}></Route >
                </HashRouter> 
            </div> 
                <Portfolio / >
            <div className = "equip__bg" >
            <Rent / >
            </div> 
                <Footer / >
        </div>
    );
}

export default App;