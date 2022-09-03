import Header from "../components/Header";
import Logs from "../components/Logs";
import Menu from "../components/Menu";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from "../components/Welcome";

const Main = () => {
    return (
        <BrowserRouter>
            <div className="main-page">
            <Header/>
            <Menu/>
                <Routes>
                    <Route exact path="/" element={
                        <Welcome/>
                    }/>
                    <Route exact path="/logs" element={
                        <Logs/>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
 
export default Main;