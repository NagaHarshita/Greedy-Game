import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './AppCards.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const IconVal = (props) =>{
    return(
        <div className="name">
            <div><h3>{props.name}</h3></div>
            <div><p>{props.val}</p></div>
        </div>
    )
}


const SingleAppCard = (props) =>{

    const [data] = useState(props.app);
    const [color] = useState(props.color);
    const [stats] = useState(props.stats);
    console.log(stats)
    const history = useHistory();
    const handleClick = () =>{
        history.push({
            pathname: `/app/${data.id}`,
            app: { name: data.appName, publisherName: data.publisherName }, 
            color: color
        });
    }
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

    return(
        <div className="app-card">
            <div className="clickable">
                <div className="app-title">
                    <div className={color}></div>
                    <div className="app-name">
                        <div><h2>{data.appName}</h2></div>
                        <div><p>{data.publisherName}</p></div>
                    </div>
                </div>
                <div><ArrowForwardIcon onClick={handleClick} className="button"/></div>
            </div>
            <div className="app-stats">
                {/* <IconVal name="Revenue" val={stats?.reduce((a, b)=> a+b.revenue, 0)}/>
                <IconVal name="Ad Requests" val={stats?.reduce((a, b)=> a+b.adRequest, 0)}/>
                <IconVal name="Ad Response" val={stats?.reduce((a, b)=> a+b.adResponse, 0)}/>
                <IconVal name="Impressions" val={stats?.reduce((a, b)=> a+b.impressions, 0)}/> */}
                <IconVal name="Revenue" val="$325"/>
                <IconVal name="Ad Requests" val="10M"/>
                <IconVal name="Ad Response" val="10M"/>
                <IconVal name="Impressions" val="10M"/>
            </div>
            
        </div>
    )

}

export default SingleAppCard








