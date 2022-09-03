import globe from '../assets/globe.gif'

const Welcome = () => {
    return (
    <div className="welcome">
        <div className="welcomeContent">
            <h1>Welcome Muumi! &#128525;</h1>
            <img src={globe} alt='globe'/>
        </div>
    </div>
    );
}
 
export default Welcome;