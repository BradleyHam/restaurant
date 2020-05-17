import React from 'react'
import classes from './BookingHero.module.scss'
import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'


const BookingHero = () => {
    return (
        <div className={classes.BookingHero}>
            <Link to='/'> <h2>dine</h2> </Link>

            <h1>Reservations</h1>
            <p> We can’t wait to host you. If you have any special requirements please feel free to
            call on the phone number below. We’ll be happy to accommodate you.
            </p>

        </div>
    );
}

export default BookingHero;