import React, { Fragment } from 'react'
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <Fragment>
    <div className='container-fluid px-5 pt-5' style={{ marginTop: '100px'}}>
        <div className='row'>
            <div className='col-12 col-md-6'>
                <h4 className={classes.title} style={{marginBottom: '30px'}}>Optional</h4>
                <p className={classes.description}>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className='col-12 col-md-6'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between' style={{height: '244px'}}>
                        <p className={classes.menu}>About</p>
                        <p className={classes.menuitem}>How it works</p>
                        <p className={classes.menuitem}>Featured</p>
                        <p className={classes.menuitem}>Partnership</p>
                        <p className={classes.menuitem}>Business Relation</p>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between' style={{height: '244px'}}>
                        <p className={classes.menu}>Community</p>
                        <p className={classes.menuitem}>Events</p>
                        <p className={classes.menuitem}>Blog</p>
                        <p className={classes.menuitem}>Podcast</p>
                        <p className={classes.menuitem}>Invite a friend</p>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-between' style={{height: '244px'}}>
                        <p className={classes.menu}>Socials</p>
                        <p className={classes.menuitem}>Discord</p>
                        <p className={classes.menuitem}>Instagram</p>
                        <p className={classes.menuitem}>Twitter</p>
                        <p className={classes.menuitem}>Facebook</p>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{backgroundColor: '#666262'}} className='mx-0 mx-md-5' />
        <div className='pt-5 px-0 px-md-5 d-flex justify-content-between'>
            <p className={`${classes.copyright}`} style={{width: '60%'}}>©2022 MORENT. All rights reserved</p>
            <div className='d-flex' style={{width: '40%'}}>
                <p className={`${classes.copyright}`}>Privacy & Policy</p>
                <p className={`${classes.copyright}`}>Terms & Condition</p>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default Footer