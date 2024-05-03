import React, {useState} from 'react'
import classes from './VehiculeCodition1.module.css'
import Stepper from './Stepper'
const VehiculeCondition1 = ({setStep, step, infos, setInfos}) => {
    const [accident, setAccident] = useState(1)
    const handleGeneralCondition = (e) => {
        setInfos({...infos, generalCondition: e.target.value})
    }
    const handleOwnersNumber = (e) => {
        setInfos({...infos, ownersNumber: e.target.value})
    }
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Condition</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Car's general condition</p>
                    <select className={classes.select}>
                        <option value="" disabled selected hidden>Car's general condition</option>
                        <option value="good">Good</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <p className={classes.text}>Number of owners</p>
                    <select className={classes.select}>
                        <option value="" disabled selected hidden>Number of owners</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className='container px-0'>
                    <p className={classes.text}>Has the car ever been involved in a serious accident?</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div onClick={() => {setAccident(1)}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: accident === 1 && '#E7E9FF'}}>
                                <input type='radio' name='accidented' checked={accident === 1} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>No</p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div onClick={() => {setAccident(2)}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: accident === 2 && '#E7E9FF'}}>
                                <input type='radio' name='accidented' checked={accident === 2} className={classes.radio} />
                                <p className={`me-3 ${classes.text}`}>Yes</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className={classes.line}></div>
            <div className='d-flex justify-content-between' style={{ width: '85%' }}>
                <button className={classes.prev} onClick={() => setStep(prev => prev - 1)}>Previous</button>
                <button className={classes.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
            </div>
        </div>
  )
}

export default VehiculeCondition1