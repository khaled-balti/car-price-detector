import React, {useState} from 'react'
import classes from './Survey.module.css'
import Mode from './Components/Mode'
import SelectModeCar from '../../images/selectmode.png'
import Difficulty from './Components/Difficulty'
import CarInfos from './Components/CarInfos'
import DriveTrain from './Components/DriveTrain'
import HistoryInfos from './Components/HistoryInfos'
import CarCondition from '../../images/quizz.png'
import VehiculeCondition1 from './Components/VehiculeCondition1'
import VehiculeCondition2 from './Components/VehiculeCondition2'
import VehiculeCondition3 from './Components/VehiculeCondition3'
import VehiculeCondition4 from './Components/VehiculeCondition4'
import VehiculeCondition5 from './Components/VehiculeCondition5'
import VehiculeCondition6 from './Components/VehiculeCondition6'
import VehiculeCondition7 from './Components/VehiculeCondition7'
const Survey = () => {
  const [step, setStep] = useState(1)
  const [infos, setInfos] = useState({
    mode: "buyer",
    difficulty: "basic",
    brand: "",
    model: "",
    version: "",
    fuel: "essence",
    geabox: "essence",
    kilometers: "",
    registrationDate: "",
    manufacturingDate: "",
    generalCondition: "",
    ownersNumber: 0,
    isAccidented: false,
    exterior: "",
    interior: "",
    truck: "",
    oilConsumption: "",
    maintenance: "",
    frontTire: "",
    rearTire: "",
    spareWheel: "",
    lights: false,
    suspensions: false,
    brakes: false,
    motor: false,
    stearing: false,
    gearboxCond: false,
    ownership: "",
    usage: "",
    imported: false,
  })
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center mt-5' style={{backgroundColor: "#e9e9e9"}}>
      <div className='d-flex' style={{width: '1242px', height: '600px'}}>
        <div className={`w-50 bg-light ${classes.leftcont}`}>
          {step === 1 && <Mode setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 2 && <Difficulty setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 3 && <CarInfos setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 4 && <DriveTrain setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 5 && <HistoryInfos setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 6 && <VehiculeCondition1 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 7 && <VehiculeCondition2 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 8 && <VehiculeCondition3 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 9 && <VehiculeCondition4 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 10 && <VehiculeCondition5 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 11 && <VehiculeCondition6 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
          {step === 12 && <VehiculeCondition7 setStep={setStep} step={step} setInfos={setInfos} infos={infos} />}
        </div>
        <div className={`w-50 ${classes.rightcont}`}>
          <div className='position-relative'>
            {step === 1 && <h1 className={classes.bigTitle}>Begin filling out the survey to get an estimate of the car's price.</h1>}
            {step === 2 && <h1 className={classes.bigTitle}>To get started, please choose one of these quizzes.</h1>}
            {step === 3 && <h1 className={classes.bigTitle}>Identify precisely the vehicle you want to estimate.</h1>}
            {step === 4 && <h1 className={classes.bigTitle}>Provide the specifications for your drivetrain components.</h1>}
            {step === 5 && <h1 className={classes.bigTitle}>Specify the details of your vehicule's history information.</h1>}
            {(step >=6 && step <=12) && <h1 className={classes.bigTitle}>Indicate condition of the vehicle.</h1>}
            {step < 4 && <img className={classes.imagecar} src={SelectModeCar} alt='error' />}
            {step >= 4 && <img className={classes.imagecarcond} src={CarCondition} alt='error' />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Survey