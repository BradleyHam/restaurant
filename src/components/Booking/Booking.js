import React from 'react'
import BookingHero from './BookingHero/BookingHero'
import Form from './Form/Form'
import classes from './Booking.module.scss'

const Booking = () => {
    return (
        <div className={classes.Booking}>
            <BookingHero />
            <Form />
        </div>
    );
}

export default Booking;