import React from 'react'
import classes from './VehiculeCondition4.module.css'
import Stepper from './Stepper'
const VehiculeCondition4 = ({setStep, step, infos, setInfos}) => {
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Specifications</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Front tire condition</p>
                    <select className={classes.select}>
                        <option value="" disabled selected hidden>Front tire condition</option>
                        <option value="good">Good</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Condition of rear tires</p>
                        <select className={classes.select}>
                            <option value="" disabled selected hidden>Condition of rear tires</option>
                            <option value="good">Good</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Spare wheel</p>
                        <select className={classes.select}>
                            <option value="" disabled selected hidden>Spare wheel</option>
                            <option value="good">Good</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
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

export default VehiculeCondition4