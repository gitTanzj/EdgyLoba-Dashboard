import Header from "../components/Header";
import Logs from "../components/Logs";
import Menu from "../components/Menu";


const Main = () => {
    return (
        <div className="main-page">
            <Header/>
            <Menu/>
            <Logs/>
        </div>
    );
}
 
export default Main;