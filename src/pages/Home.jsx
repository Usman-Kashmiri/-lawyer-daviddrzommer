import React from 'react'
import Header from '../components/common/Header'
import Banner from '../components/Home/Banner'
import FeaturedLawyer from '../components/Home/FeaturedLawyer'
import Milestones from '../components/Home/Milestones'
import Services from '../components/Home/Services'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Milestones />
            <Services />
            <FeaturedLawyer />
        </>
    )
}

export default Home
