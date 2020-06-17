import React from 'react';
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <h4 className={`logo ${classes.logo}`}>Dine</h4>

            <div className={classes.details}>
                <p>Marthwaite, Sedbergh</p>
                <p>Cumbria</p>
                <p>+00 44 123 4567</p>
            </div>

            <div className={classes.times}>
                <p>  Open Times</p>
                <p>  Mon - Fri: 09:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
            </div>
        </div>
    );
}

export default Footer;