import React from 'react';
import classes from './SectionTwo.module.scss'
import CircleLine from '../../CircleLine/CircleLine'

const SectionTwo = () => {
    return (
        <div className={classes.SectionTwo}>

            <div className={classes.contentOne}>
                <div className={classes.firstImage}></div>
                <div className={classes.textOne}>
                    <CircleLine />
                    <h2> Enjoyable place for all the family</h2>
                    <p>  Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
                    a tour of the farm before your meal.
                 </p>
                </div>
            </div>

            <div className={classes.contentTwo}>
                <div className={classes.secondImage}></div>
                <div className={classes.textTwo}>
                    <CircleLine />
                    <h2> The most locally sourced food</h2>
                    <p>   All our ingredients come directly from our farm or local fishery. So you can be sure that you’re
      eating the freshest, most sustainable food.
            </p>
                </div>
            </div>

        </div>

    );
}

export default SectionTwo;