import React, {useState} from 'react'
import classes from './Offer.module.css'
import Heart from './Heart'
import Motor from './Motor'
import Drive from './Drive'
import Fuel from './Fuel'
const Offer = ({offer}) => {
    const [liked, setLiked] = useState(false)
  return (
    <div className={`container ${classes.offer} p-3`}>
        <div className='w-100 d-flex justify-content-between'>
            <p className={classes.name}>{offer.name}</p>
            <Heart liked={liked} setLiked={setLiked} />
        </div>
        <p className={classes.theme}>{offer.theme}</p>
        <img src={offer.image} className={`img-fluid ${classes.image} mb-4`} alt='error' />
        <div className='container-fluid d-flex justify-content-between mb-2'>
            <div className='d-flex'>
                <Fuel />
                <p className={`ms-1 ${classes.caract}`}>{offer.fuel}</p>
            </div>
            <div className='d-flex'>
                <Drive />
                <p className={`ms-1 ${classes.caract}`}>{offer.drive}</p>
            </div>
            <div className='d-flex'>
                <Motor />
                <p className={`ms-1 ${classes.caract}`}>{offer.motor} cv</p>
            </div>
        </div>
        <p className={`ms-3 ${classes.price}`}>{offer.price} TND</p>
    </div>
  )
}

export default Offer