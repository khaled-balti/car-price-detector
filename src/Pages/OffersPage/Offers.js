import React, { useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import classes from './Offers.module.css'
import BrandFilter from './Components/BrandFilter'
import OtherFilters from './Components/OtherFilters'
import Offer from './Components/Offer'
import { useOutletContext } from 'react-router'
const Offers = () => {
  const [cars] = useOutletContext()
  return (
    <div className='container-fluid p-0 ' style={{marginTop: '100px'}}>
      <div className='row'>
        <div className='col-3'>
          <Sidebar />
        </div>
        <div className={`col-9 pt-3 px-4`}>
          <div className='p-0'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-6'>
                  <div className='col-12'>
                    <BrandFilter/>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-12'>
                    <OtherFilters/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid mt-3'>
          {cars.length > 0 && <div className='row'>
            {cars.map(offer => <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
              <div className='col-12'>
                <Offer offer={offer} />
              </div>
            </div>)}
          </div>}
          {cars.length === 0 && <div className='bg-light d-flex justify-content-center align-items-center fs-3 fw-bold pt-3' style={{borderRadius: '10px', height: '100px'}}>
            <p>No Offers Found</p>
          </div>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Offers