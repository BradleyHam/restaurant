import React, { useRef } from 'react';
import classes from './FamilyGathering.module.scss'
import Button from '../../../components/Button/Button'
import { gsap } from "gsap"

const FamilyGathering = () => {
    let familyGathering = useRef(null)
    let specialEvents = useRef(null)
    let socialEvents = useRef(null)

    let familyGatheringImg = useRef(null)
    let specialEventsImg = useRef(null)
    let socialEventsImg = useRef(null)

    let familyGatheringText = useRef(null)
    let specialEventsText = useRef(null)
    let socialEventsText = useRef(null)

    function handleSelect(type) {
        if (type.classList.contains('active')) {
            return;
        }
        [familyGathering, specialEvents, socialEvents].forEach(ref => ref.classList.remove(`${classes.active}`))
        type.classList.add(`${classes.active}`);

        function animateImages(type) {

            gsap.to([familyGatheringImg, specialEventsImg, socialEventsImg], { opacity: 0 });
            gsap.to(type, { opacity: 1 });
        }

        function animateText(type) {
            let tl = gsap.timeline({ defualts: { duration: 1, ease: 'back' } });
            tl.to([familyGatheringText, specialEventsText, socialEventsText], { opacity: 0, x: 100 });
            tl.to(type, { opacity: 1, x: 0, stagger: 0.6 });
        }

        if (type === familyGathering) {
            animateImages(familyGatheringImg)
            animateText(familyGatheringText);
        }
        if (type === specialEvents) {
            animateImages(specialEventsImg)
            animateText(specialEventsText);
        }
        if (type === socialEvents) {
            animateImages(socialEventsImg)
            animateText(socialEventsText);
        }
    }


    return (
        <div className={classes.FamilyGathering} >

            <div className={classes.gatheringImgContainer}>

                <div ref={el => (familyGatheringImg = el)} className={`${classes.gatheringImg} ${classes.active}`}></div>
                <div ref={el => (specialEventsImg = el)} className={classes.specialImg}></div>
                <div ref={el => (socialEventsImg = el)} className={classes.socialImg}></div>

                <div className={classes.blueBackground}></div>
                <div className={classes.pattern}></div>
            </div>

            <div className={classes.gatheringText}>
                <div className={classes.gatherings}>
                    <h3 className={classes.active} ref={el => (familyGathering = el)} onClick={() => { handleSelect(familyGathering) }}>Family Gathering</h3>
                    <h3 ref={el => (specialEvents = el)} onClick={() => { handleSelect(specialEvents) }}>Special Events</h3>
                    <h3 ref={el => (socialEvents = el)} onClick={() => { handleSelect(socialEvents) }}>Social Events</h3>
                </div>

                <div className={classes.desctiptionContainer}>
                    <div ref={el => (familyGatheringText = el)} className={`${classes.gatheringDesctiption}${classes.active}`}>
                        <h2>Family Gathering</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your
                      loved ones. We’ll provide a memorable experience for all.</p>
                    </div>
                    <div ref={el => (specialEventsText = el)} className={classes.specialDescription}>
                        <h2>special description</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your
                      loved ones. We’ll provide a memorable experience for all.</p>
                    </div>
                    <div ref={el => (socialEventsText = el)} className={classes.socialDescription}>
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