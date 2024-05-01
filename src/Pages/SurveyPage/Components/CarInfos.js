import React, { useState, useEffect } from 'react';
import classes from './CarInfos.module.css';
import Stepper from './Stepper';

const CarInfos = ({ setStep, step, infos, setInfos }) => {
    const [brand, setBrand] = useState(null);
    const [car, setCar] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedVersion, setSelectedVersion] = useState(null);

    const handleBrandChange = (event) => {
        const selectedBrand = event.target.value;
        setBrand(selectedBrand);
        setInfos({...infos, brand: selectedBrand})
        setCar(cars.find(car => car.brandname === event.target.value))
        setSelectedModel(null);
    };

    const handleModelChange = (event) => {
        const selectedModel = event.target.value;
        setSelectedModel(selectedModel);
        setInfos({...infos, model: selectedModel})
        setSelectedVersion(null);
    };

    const handleVersionChange = (event) => {
        const selectedVersion = event.target.value;
        setInfos({...infos, version: selectedVersion})
        setSelectedVersion(selectedVersion);
    };

    const cars = [
        {
            brandname: "bmw",
            models: [
                {
                    modelname: "model1b",
                    versions: ["version1bm1", "version2bm1", "version3bm1", "version4bm1"]
                },
                {
                    modelname: "model2b",
                    versions: ["version1bm2", "version2bm2", "version3bm2", "version4bm2"]
                },
                {
                    modelname: "model3b",
                    versions: ["version1bm3", "version2bm3", "version3bm3", "version4bm3"]
                },
            ]
        },
        {
            brandname: "mercedes",
            models: [
                {
                    modelname: "model1m",
                    versions: ["version1mm1", "version2mm1", "version3mm1", "version4mm1"]
                },
                {
                    modelname: "model2m",
                    versions: ["version1mm2", "version2mm2", "version3mm2", "version4mm2"]
                },
                {
                    modelname: "model3m",
                    versions: ["version1mm3", "version2mm3", "version3mm3", "version4mm3"]
                },
            ]
        },
        {
            brandname: "peugeot",
            models: [
                {
                    modelname: "model1p",
                    versions: ["version1pm1", "version2pm1", "version3pm1", "version4pm1"]
                },
                {
                    modelname: "model2p",
                    versions: ["version1pm1", "version2pm1", "version3pm1", "version4pm1"]
                },
                {
                    modelname: "model3p",
                    versions: ["version1pm1", "version2pm1", "version3pm1", "version4pm1"]
                },
            ]
        },
    ];

    return (
        <div className='d-flex flex-column align-items-center'>
            <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>Vehicle Specifications</h4>
            <Stepper step={step} />
            <div className='container-fluid px-5'>
                <div className='mb-3'>
                    <p className={classes.text}>Brand</p>
                    <select className={classes.select} onChange={handleBrandChange}>
                        <option value="" disabled selected={!brand} hidden>Select the brand</option>
                        {cars.map((car, index) => (
                            <option key={index} value={car.brandname}>{car.brandname}</option>
                        ))}
                    </select>
                </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Model</p>
                        <select className={classes.select} onChange={handleModelChange}>
                            <option value="" disabled selected={!selectedModel || !brand} hidden>Select the model</option>
                            {car && car.models.map((model, index) => (
                                <option key={index} value={model.modelname}>{model.modelname}</option>
                            ))}
                        </select>
                    </div>
                    <div className='mb-3'>
                        <p className={classes.text}>Version</p>
                        <select className={classes.select} onChange={handleVersionChange}>
                            <option value="" disabled selected={!selectedVersion || !selectedModel || !brand} hidden>Select the version</option>
                            {selectedModel && car.models.find(model => model.modelname === selectedModel).versions.map((version, index) => (
                                <option key={index} value={version}>{version}</option>
                            ))}
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
