import React from 'react'
import Separator from '../../Common/Separator'
import { WorkData } from '../../Data/Work_Data'
import "./Work.css"
function Works() {
    const Data = WorkData;
    return (
        <div className='work'>
            <Separator/>
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {Data.map((item)=>{
                    return(
                        <div className="work-card">
                            <img src={require("../../../assets/Home/internshala.png")} alt="No intenet" className='work-logo' />
                            <div className="work-info">
                                <label className='company-name'>
                                    {item.company}
                                </label>
                                <div className='work-dates'>
                                    <label>{item.dateJoining}</label>~<label>{item.dateEnd}</label>
                                </div>
                                <div className='work-desc'>
                                    <p>{item.work}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Separator/>
        </div>
    )
}

export default Works
