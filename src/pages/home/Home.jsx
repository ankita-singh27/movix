import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import Upcoming from "./upcoming/Upcoming";
import TopRated from "./topRated/TopRated";



const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Upcoming />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
