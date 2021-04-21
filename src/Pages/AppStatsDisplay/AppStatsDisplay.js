import React, {useState, useEffect} from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { useParams, useLocation, useHistory } from "react-router-dom"
import axios from 'axios'
import './AppStatsDisplay.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AppStatsDisplay = (props) =>{

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const { id } = useParams();
    const [data, setData] = useState(props.app);
    const [stats, setStats] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const [color, setColor] = useState();

    useEffect(()=>{
        let mounted = true;
        const fetchApps = async() =>{
          const {data} = await axios.get(`https://api.npoint.io/d734975d2aee62d197ef/${id}`);
          setStats(data);
        } 
        fetchApps();
        setData(location.app);
        setColor(location.color);
        return () => mounted = false;
    }, [id, location.app, location.color])

    const commafy = ( num ) => {
        var str = num.toString().split('.');
        if (str[0].length >= 3) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 3) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }
    const handleClick = () =>{
        history.push('/')
    }

    return(
        <div>
            <NavBar/>
            <div className="app-title-stats">
                <ArrowBackIcon onClick={handleClick} className="arrow-back"/>
                {/* <img src={icon} alt="hi"/> */}
                <div className={color}></div>
                <div className="app-name">
                    <div><h2>{data?.name}</h2></div>
                    <div><p>{data?.publisherName}</p></div>
                </div>
            </div>
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Revenue</th>
                        <th>Ad Requests</th>
                        <th>Ad Responses</th>
                        <th>Impressions</th>
                        <th>Clicks</th>
                        <th>Render Rate</th>
                    </tr>
                </thead>
                <tbody>
                {
                    stats?.map((row, idx)=>(
                        <tr key={idx}>
                            <td>
                            {row.date.split("-")[0]}{"th "}
                            {row.date.split("-")[1] < 10
                                ? months[row.date.split("-")[1].split("")[1] - 1]
                                : months[row.date.split("-")[1] - 1]}{", "}
                            {row.date.split("-")[2]}

                            </td>
                            <td>${commafy(row.revenue)}</td>
                            <td>{commafy(row.adRequest)}</td>
                            <td>{commafy(row.adResponse)}</td>
                            <td>{commafy(row.impressions)}</td>
                            <td>{commafy(row.clicks)}</td>
                            <td>{((row.impressions/row.adResponse)* 100).toFixed(3)}%</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
            
        </div>
    )

}

export default AppStatsDisplay