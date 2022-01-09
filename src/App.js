import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Slider title="Bienvenido a la web hecha con React de Gabriel Gutiérrez"></Slider>
            <div id="App-main-content">
                <Content></Content>
                <Sidebar></Sidebar>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
