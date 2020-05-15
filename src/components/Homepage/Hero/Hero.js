import React from 'react';
import classes from './Hero.module.scss'
import Button from '../../Button/Button'
import heroImg from '../../../images/homepage/hero-bg-mobile@2x.jpg'

const Hero = () => {
    return (
        <div className={classes.Hero}>
            <div className={classes.content}>
                <div className={classes.logo}>dine</div>
                <div>
                    <h1>Excuisite dining since 1989</h1>
                    <p>  Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
                    the comfort of our farmhouse.
                </p>

                    <Button text='book a table' dark> </Button>
                </div>
                <div></div>
            </div>

        </div>
    );
}

export default Hero;