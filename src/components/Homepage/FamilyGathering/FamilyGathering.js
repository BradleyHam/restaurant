import React from 'react';
import classes from './FamilyGathering.module.scss'
import Button from '../../../components/Button/Button'

const FamilyGathering = () => {
    return (
        <div className={classes.FamilyGathering} >
            <div className={classes.gatheringImg}></div>
            <div className={classes.gatherings}>
                <h3 className={classes.active}>Family Gathering</h3>
                <h3>Special Events</h3>
                <h3>Social Events</h3>
            </div>

            <h2>Family Gathering</h2>
            <p>We love catering for entire families. So please bring everyone along for a special meal with your
  loved ones. We’ll provide a memorable experience for all.</p>
            <Button dark={false} text='book a table' />
        </div>
    );
}

export default FamilyGathering;