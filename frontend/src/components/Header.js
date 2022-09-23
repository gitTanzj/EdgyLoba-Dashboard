import logo from '../assets/EdgyLoba.png';

const Header = () => {
    return (
    <div className="header">
        <img src={logo} alt='logo' className="max-w-[5%]"/>
        <h1 className="p-4 text-2xl">Edgy-Loba Dashboard</h1>
    </div>
    );
}
 
export default Header;