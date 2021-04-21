import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SingleAppCard from './SingleAppCard'
import SettingsIcon from '@material-ui/icons/Settings';
import './AppCards.css'
import { AppsSharp } from '@material-ui/icons';


const AppCards = () =>{
    const [Apps, setApps] = useState([]);
    const [stats, setStats] = useState();
    const colors = ['orange', 'green', 'violet']

    useEffect(()=>{
    //   let mounted = true;
      const fetchApps = async() =>{
        const {data} = await axios.get("https://api.npoint.io/adf6676a313fa01f787d");
        setApps(data);
      } 

      const fectchAllStats = async() =>{
        const {data} = await axios.get("https://api.npoint.io/baf8dba5974d29aa094b");
        setStats(data);
      }
      fetchApps();
      fectchAllStats();
    //   return () => mounted = false;
    }, [])

    return(
        <>
        
            <div className="apps">
                <div className="apps-heading">
                    <h3>Apps</h3>
                    <h3><SettingsIcon/></h3>
                </div>
                <div className="cards-list">
                    {
                        Apps?.map((App, idx) => (
                            <SingleAppCard key={App.id} app={App} stats={ stats && stats[App.id]} color={colors[idx%3]}/>
                        ))
                    }
                </div>
            </div>

        
        </>
        
    )



}

export default AppCards