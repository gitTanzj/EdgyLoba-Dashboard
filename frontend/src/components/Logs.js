import { useEffect, useState} from 'react'
import axios from 'axios';
import Log from './Log';

const Logs = () => {

    const [logs, setLogs] = useState(null)
    const [filters, setFilters] = useState(['index.js', 'scheduler.js', 'database.js', 'charts.js'])

    const setFilter = (filter) => {
        if(filters.includes(filter)){
            setFilters(filters => filters.filter(i => i !== filter))
        }else{
            setFilters(filters => [filter, ...filters])
        }
    
    }
    
    // fetches the logs
    useEffect(() => {
        const fetchLogs = async () => {
            const response = await (await axios.get('/api/logs')).data
            
            setLogs(response)
        }
        fetchLogs()
    })
    return (
    <div className='log-box'>  
        <div className='filters'>
            <h3>Filename filters:</h3>
            <input type='checkbox' id='sched' onClick={() => setFilter('scheduler.js')} defaultChecked/>
            <label htmlFor='sched'>scheduler.js</label>
            <input type='checkbox' id='db' onClick={() => setFilter('database.js')} defaultChecked/>
            <label htmlFor='db'>database.js</label>
            <input type='checkbox' id='i' onClick={() => setFilter('index.js')} defaultChecked/>
            <label htmlFor='i'>index.js</label>
            <input type='checkbox' id='charts' onClick={() => setFilter('charts.js')} defaultChecked/>
            <label htmlFor='charts'>charts.js</label>
        </div>
        <div className='logs'>
        {logs && logs.map((log, i) => (
            filters.includes(log.file) && <div key={i}>
            <Log log={log}/>
            </div>
        ))}
        </div>
    </div>
    );
}
 
export default Logs;