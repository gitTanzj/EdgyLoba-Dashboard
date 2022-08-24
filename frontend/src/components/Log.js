const Log = (props) => {

    const log = props.log

    return (
    <div className="log">
        <p>{log.discordId}</p>
        <p>{log.file}</p>
        <p>{log.level}</p>
        <p>{log.message}</p>
        <p>{log.timestamp}</p>
    </div>
    );
}
 
export default Log;