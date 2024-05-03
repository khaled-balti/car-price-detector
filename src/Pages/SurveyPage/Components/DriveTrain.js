import React, {useState} from 'react'
import classes from './DriveTrain.module.css'
import Stepper from './Stepper'
const DriveTrain = ({setStep, step, infos, setInfos}) => {
    const [fuelChecked, setFuelChecked] = useState(1)
    const [geaboxChecked, setGeaboxChecked] = useState(1)
    return (
      <div className='d-flex flex-column align-items-center'>
        <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Drivetrain Components</h4>
        <Stepper step={step} />
        <div className='container d-flex flex-column justify-content-between align-items-center mt-4 pb-2' style={{paddingLeft: '60px', paddingRight: '60px'}}>
            <div className='container'>
                <p className={classes.text}>Fuel</p>
                <div className='row'>
                    <div className='col-6'>
                        <div onClick={() => {setFuelChecked(1); setInfos({...infos, energie: "essence"})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: fuelChecked === 1 && '#E7E9FF'}}>
                            <input type='radio' name='energie' checked={fuelChecked === 1} className={classes.radio} />
                            <p className={`me-3 ${classes.text}`}>Essence</p>
                        </div>
                    </div>
                    
                    <div className='col-6'>
                        <div onClick={() => {setFuelChecked(2); setInfos({...infos, energie: "diesel"})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: fuelChecked === 2 && '#E7E9FF'}}>
                            <input type='radio' name='energie' checked={fuelChecked === 2} className={classes.radio} />
                            <p className={`me-3 ${classes.text}`}>Diesel</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div onClick={() => {setFuelChecked(3); setInfos({...infos, energie: "gas"})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: fuelChecked === 3 && '#E7E9FF'}}>
                            <input type='radio' name='energie' checked={fuelChecked === 3} className={classes.radio} />
                            <p className={`me-3 ${classes.text}`}>Gas</p>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div onClick={() => {setFuelChecked(4); setInfos({...infos, energie: "hybrid"})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: fuelChecked === 4 && '#E7E9FF'}}>
                            <input type='radio' name='energie' checked={fuelChecked === 4} className={classes.radio} />
                            <p className={`me-3 ${classes.text}`}>Hybrid</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <p className={classes.text}>Geabox</p>
                <div className='row'>
                    <div className='col-6'>
                        <div onClick={() => {setGeaboxChecked(1); setInfos({...infos, boite: "automatic"})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: geaboxChecked === 1 && '#E7E9FF'}}>
                            <input type='radio' name='boite' checked={geaboxChecked === 1} className={classes.radio} />
                            <p className={`me-3 ${classes.text}`}>Automatic</p>
                        </div>
                    </div>
                    
                    <div className='col-6'>
                        <div onClick={() => {setGeaboxChecked(2); setInfos({...infos, boite: "manual"})}} className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`} style={{backgroundColor: geaboxChecked === 2 && '#E7E9FF'}}>
                            <input type='radio' name='boite' checked={geaboxChecked === 2} className={classes.radio} />
                            <p className={`me-3 ${classes.text}`}>Manual</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.line}></div>
        <div className='d-flex justify-content-between' style={{width: '85%'}}>
          <button className={classes.prev} onClick={() => setStep(prev => prev - 1)}>Previous</button>
          <button className={classes.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
        </div>
      </div>
    )
}

export default DriveTrain