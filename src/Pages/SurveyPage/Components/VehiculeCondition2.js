import React from 'react'
import classes from './VehiculeCondition2.module.css'
import Stepper from './Stepper'
const VehiculeCondition2 = ({setStep, step, infos, setInfos}) => {
    const handlerExteriorChange = (e) => {
        setInfos({...infos, exterior: e.target.value})
    }
    const handlerInteriorChange = (e) => {
        setInfos({...infos, interior: e.target.value})
    }
    const handlerTruckChange = (e) => {
        setInfos({...infos, truck: e.target.value})
    }
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Conditions</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Exterior of the vehicule</p>
                    <select className={classes.select} onChange={handlerExteriorChange} >
                        <option value="" disabled selected hidden>Exterior of the vehicule</option>
                        <option value="good">Good</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Vehicule interior</p>
                        <select className={classes.select} onChange={handlerInteriorChange}>
                            <option value="" disabled selected hidden>Vehicule interior</option>
                            <option value="good">Good</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                    <p className={classes.text}>Vehicule truck</p>
                        <select className={classes.select} onChange={handlerTruckChange}>
                            <option value="" disabled selected hidden>Vehicule truck</option>
                            <option value="good">Good</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
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

export default VehiculeCondition2