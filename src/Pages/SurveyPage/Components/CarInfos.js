import React, { useState, useEffect } from 'react';
import classes from './CarInfos.module.css';
import Stepper from './Stepper';

const CarInfos = ({ setStep, step , infos, setInfos, data}) => {
    const [brand, setBrand] = useState(null);
    const [car, setCar] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedVersion, setSelectedVersion] = useState(null);

    const handleBrandChange = (event) => {
        const selectedBrand = event.target.value;
        setBrand(selectedBrand);
        setInfos({...infos, marque: selectedBrand})
        setCar(data.find(car => car.marque === event.target.value))
        setSelectedModel(null)
    };

    const handleModelChange = (event) => {
        const selectedModel = event.target.value;
        setSelectedModel(selectedModel);
        setInfos({...infos, modele: selectedModel})
        setSelectedVersion(null);
    };

    const handleVersionChange = (event) => {
        const selectedVersion = event.target.value;
        setSelectedVersion(selectedVersion);
    };


    return (
        <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Specifications</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Brand</p>
                    <select  className={classes.select} onChange={handleBrandChange}>
                        <option value="" disabled selected={!brand} hidden>Select the brand</option>
                        {data && data.map((car, index) => (
                            <option key={index} value={car.marque}>{car.marque}</option>
                        ))}
                    </select>
                </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Model</p>
                        <select className={classes.select} onChange={handleModelChange}>
                            <option value="" disabled selected={!selectedModel || !brand} hidden>Select the model</option>
                            {car && car.modele.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Version</p>
                        <select className={classes.select} onChange={handleVersionChange}>
                            <option value="" disabled selected={!selectedVersion || !selectedModel || !brand} hidden>Select the version</option>
                            <option value="v1">v1</option>
                            <option value="v2">v1</option>
                            <option value="v3">v1</option>
                            
                        </select>
                    </div>
            </div>
            <div className={classes.line}></div>
            <div className='d-flex justify-content-between' style={{ width: '85%' }}>
                <button className={classes.prev} onClick={() => setStep(prev => prev - 1)}>Previous</button>
                <button className={classes.next} onClick={() => setStep(prev => prev + 1)}>Next</button>
            </div>
        </div>
    );
};

export default CarInfos;
