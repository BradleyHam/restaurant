import React from 'react';
import Hero from './Hero/Hero'
import SectionTwo from './SectionTwo/SectionTwo'
import MenuHighlights from './MenuHighlights/MenuHighlights'
import FamilyGathering from './FamilyGathering/FamilyGathering'
import MakeReservation from '../MakeReservation/MakeReservation'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <SectionTwo />
            <MenuHighlights />
            <FamilyGathering />
            <MakeReservation />
        </div>
    );
}

export default Homepage;