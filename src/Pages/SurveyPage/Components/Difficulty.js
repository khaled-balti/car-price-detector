import React, {useState} from 'react'
import classes from './Dificulty.module.css'
import Stepper from './Stepper'
import Cube from '../../../images/cube1.png'
const Difficulty = ({step, setStep, infos, setInfos}) => {
  const [modeChecked, setModeChecked] = useState(1)
  return (
    <div className='d-flex flex-column align-items-center'>
      <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>What kind of questionnaire do you need ?</h4>
      <Stepper step={step} />
      <div className='container d-flex flex-column justify-content-between align-items-center mt-4 pb-2' style={{paddingLeft: '60px', paddingRight: '60px'}}>
        <div onClick={() => {setModeChecked(1); setInfos({...infos, difficulty: "basic"})}} className={`d-flex justify-content-evenly align-items-center ${classes.cont} mb-3`} style={{backgroundColor: modeChecked === 1 && '#E7E9FF'}}>
            <div className={`${classes.imgcont} d-flex justify-content-center bg-light align-items-center`}>
                <img src={Cube} alt='error' className={classes.cubeimg} />
            </div>
            <p className={`me-3 ${classes.text}`}>Basic: Basic car details for valuation</p>
            <input type='radio' name='mode' checked={modeChecked === 1} className={classes.radio} />
        </div>
        
        <div onClick={() => {setModeChecked(2); setInfos({...infos, difficulty: "medium"})}} className={`d-flex justify-content-evenly align-items-center ${classes.cont} mb-3`} style={{backgroundColor: modeChecked === 2 && '#E7E9FF'}}>
            <div className={`${classes.imgcont} d-flex justify-content-center bg-light align-items-center`}>
                <img src={Cube} alt='error' className={classes.cubeimg} />
            </div>
            <p className={`me-3 ${classes.text}`}>Medium: More details for accurate price</p>
            <input type='radio' name='mode' checked={modeChecked === 2} className={classes.radio} />
        </div>
        
        <div onClick={() => {setModeChecked(3); setInfos({...infos, difficulty: "advanced"})}} className={`d-flex justify-content-evenly align-items-center ${classes.cont} mb-3`} style={{backgroundColor: modeChecked === 3 && '#E7E9FF'}}>
            <div className={`${classes.imgcont} d-flex justify-content-center bg-light align-items-center`}>
                <img src={Cube} alt='error' className={classes.cubeimg} />
            </div>
            <p className={`me-3 ${classes.text}`}>Advanced: Advanced details for precision</p>
            <input type='radio' name='mode' checked={modeChecked === 3} className={classes.radio} />
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

export default Difficulty