import React, { useEffect, useRef } from 'react';
import classes from './SectionTwo.module.scss'
import CircleLine from '../../CircleLine/CircleLine'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

const SectionTwo = () => {

    let imgOneRef = useRef(null);
    let imgTwoRef = useRef(null);

    const [ref, inView, entry] = useInView({
        threshold: .25
    })
    const [refTwo, InViewTwo, entryTwo] = useInView({
        threshold: .25
    })


    if (inView) {
        const imgOne = imgOneRef.current
        gsap.to(imgOne, { x: 0, opacity: 1, duration: 1 })
    }
    if (InViewTwo) {
        const imgTwo = imgTwoRef.current
        gsap.to(imgTwo, { x: 0, opacity: 1, duration: 1 })
    }



    return (
        <div className={classes.SectionTwo}>

            <div ref={ref} className={classes.contentOne}>
                <div ref={imgOneRef} className={classes.firstImage}></div>
                <div className={classes.textOne}>
                    <CircleLine />
                    <h2 > Enjoyable place for all the family</h2>
                    <p>  Our relaxed surroundings make dining with us a great experience for      everyone. We can even arrange
                         a tour of the farm before your meal.
                   </p>
                </div>
            </div>

            <div ref={refTwo} className={classes.contentTwo}>
                <div ref={imgTwoRef} className={classes.secondImage}></div>
                <div className={classes.textTwo}>
                    <CircleLine />
                    <h2 ref={refTwo}>  The most locally sourced food</h2>
                    <p>   All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
                          eating the freshest, most sustainable food.
                    </p>
                </div>
            </div>

        </div>

    );
}

export default SectionTwo;