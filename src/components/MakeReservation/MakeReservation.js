import React from 'react';
import classes from './MakeReservation.module.scss'
import Button from '../../components/Button/Button'

const MakeReservation = () => {
    return (
        <div className={classes.MakeReservation}>
            <h2>Ready to make a reservation</h2>
            <Button dark text='book a table' />
        </div>
    );
}

export default MakeReservation;