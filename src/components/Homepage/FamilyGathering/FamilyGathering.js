import React, { useRef, useState, useEffect } from 'react';
import classes from './FamilyGathering.module.scss'
import Button from '../../../components/Button/Button'


const FamilyGathering = () => {

    const [active, setActive] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    })

    function handleSelect(num) {
        if (num === 1) {
            setActive({
                isActive1: true,
                isActive2: false,
                isActive3: false
            })
        } else if (num === 2) {
            setActive({
                isActive1: false,
                isActive2: true,
                isActive3: false
            })
        } else {
            setActive({
                isActive1: false,
                isActive2: false,
                isActive3: true
            })
        }
    }

    return (
        <div className={classes.FamilyGathering}>
            <div className={classes.gatheringImgContainer}>

                <div className={`${classes.gatheringImg} ${active.isActive1 && classes.active}`}></div>
                <div className={`${classes.specialImg} ${active.isActive2 && classes.active}`}></div>
                <div className={`${classes.socialImg} ${active.isActive3 && classes.active}`}></div>

                <div className={classes.blueBackground}></div>
                <div className={classes.pattern}></div>
            </div>

            <div className={classes.gatheringText}>
                <div className={classes.gatherings}>
                    <h3 onClick={() => { handleSelect(1) }} className={`${active.isActive1 && classes.active}`}>Family Gathering</h3>
                    <h3 onClick={() => { handleSelect(2) }} className={`${active.isActive2 && classes.active}`}>Special Events</h3>
                    <h3 onClick={() => { handleSelect(3) }} className={`${active.isActive3 && classes.active}`}>Social Events</h3>
                </div>

                <div className={classes.desctiptionContainer}>
                    <div className={`${classes.gatheringDesctiption} ${active.isActive1 && classes.active}`}>
                        <h2>Family Gathering</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your
                      loved ones. We’ll provide a memorable experience for all.</p>
                    </div>
                    <div className={`${classes.specialDescription} ${active.isActive2 && classes.active}`}>
                        <h2>special description</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your
                      loved ones. We’ll provide a memorable experience for all.</p>
                    </div>
                    <div className={`${classes.socialDescription} ${active.isActive3 && classes.active}`}>
                        <h2>social description</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your
                      loved ones. We’ll provide a memorable experience for all.</p>
                    </div>
                </div>

                <Button dark={false} text='book a table' />
            </div>

        </div>
    );
}

export default FamilyGathering;