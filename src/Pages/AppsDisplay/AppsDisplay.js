import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import AppCards from '../../Components/AppCards/AppCards'
import asset1 from '../../assets/asset1.svg'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import './AppsDisplay.css'

const AppsDisplay = () =>{
    return(
            <div className="main-grid">
                <div className="sidebar">
                    <NavBar/>
                    <div className="image">
                        <img src={asset1} alt="hi"/>
                    </div>
                    <div className="optimisation">
                        <h2>Revenue Optimisation</h2>
                        <div className="optimisation-grid">
                            <div>
                                <img src={icon1} alt="hi"/>
                                <h3>Fill Rate</h3>
                            </div>
                            <div>
                                <img src={icon2} alt="hi"/>
                                <h3>Improve CTR</h3>
                            </div>
                            <div>
                                <img src={icon3} alt="hi"/>
                                <h3>Refresh Rate</h3>
                            </div>
                            <div>
                                <img src={icon4} alt="hi"/>
                                <h3>Quick Integration</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <AppCards/>
            </div>
            
       
    )

}

export default AppsDisplay