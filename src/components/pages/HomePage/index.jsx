import React from "react";
import HeroSection from "./HeroSection";
import WhoWeAre from "./Who-we-are";
import WhatWeDo from "./What-we-do";
import Quote from "./Quote";
import JoinCommunity from "./Join-Community";
import LatestBlog from "./LatestBlog";
import Parners from "./Parners";

const index = () => {
    return (
        <>
            <HeroSection />
            <WhoWeAre />
            <Quote />
            <WhatWeDo />
            <JoinCommunity />
            <LatestBlog />
            <Parners />
        </>
    );
};

export default index;