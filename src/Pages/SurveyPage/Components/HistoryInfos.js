import React from 'react'
import classes from './HistoryInfos.module.css'
import Stepper from './Stepper'
const HistoryInfos = ({setStep, step, infos, setInfos}) => {
  return (
    <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicule History Informations</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Kilometers driven</p>
                    <input type='text' name='drivendistance' placeholder='Write the kilometeres' className={classes.input} onChange={(e) => setInfos({...infos, kilometers: e.target.value})} />
                </div>
                <div className='mb-3'>
                    <p className={classes.text}>Registration date</p>
                    <input type='date' name='registrationdate' className={classes.input} onChange={(e) => setInfos({...infos, registrationDate: e.target.value})} />
                </div>
                <div className='mb-3'>
                    <p className={classes.text}>Year of manufacture</p>
                    <input type='date' name='manufacturingdate' className={classes.input} onChange={(e) => setInfos({...infos, manufacturingDate: e.target.value})} />
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

export default HistoryInfos