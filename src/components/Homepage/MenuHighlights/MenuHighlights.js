import React from 'react';
import classes from './MenuHighlights.module.scss'
import CircleLine from '../../CircleLine/CircleLine'

const MenuHighlights = () => {
    return (
        <div className={classes.MenuHighlights}>
            <div className={classes.contentOne}>
                <CircleLine />
                <h2> A few highlights from our menu</h2>
                <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
  Our menu is revamped every season.</p>
            </div>
            <div className={classes.contentTwo}>
                <div className={`${classes.contentImg} ${classes.contentImgFirst}`}></div>
                <h2>  Seared Salmon Fillet</h2>
                <p>
                    Our locally sourced salmon served with a refreshing buckwheat summer salad.
                </p>
            </div>
            <div className={classes.contentThree}>
                <div className={`${classes.contentImg} ${classes.contentImgSecond}`}></div>
                <h2>  Rosemary Filet Mignon</h2>
                <p>
                    Our prime beef served to your taste with a delicious choice of seasonal sides.
                </p>
            </div>
            <div className={classes.contentFour}>
                <div className={`${classes.contentImg} ${classes.contentImgThird}`}></div>
                <h2> Summer Fruit Chocolate Mousse</h2>
                <p>
                    Creamy mousse combined with summer fruits and dark chocolate shavings.

                </p>
            </div>
        </div>
    );
}

export default MenuHighlights;