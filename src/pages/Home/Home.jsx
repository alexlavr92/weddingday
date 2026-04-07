import Hero from "../../modules/Hero/Hero";
import Location from "../../modules/Location/Location";
import Timeline from "../../modules/Timeline/Timeline";
import Dresscode from "../../modules/Dresscode/Dresscode";
import Form from '../../modules/Form/Form';
import Contacts from "../../modules/Contacts/Contacts";
import ComingSoon from '../../modules/ComingSoon/ComingSoon'
import MiddleBlock from "../../modules/MiddleBlock/MiddleBlock";

import IntroVideo from "../../modules/IntroVideo/IntroVideo";
import introDesktop from "../../assets/videos/intro-desktop.mp4";
import introMobile from "../../assets/videos/intro-mobile.mp4";


export default function Home() {
    return (
        <IntroVideo
            desktopSrc={introDesktop}
            mobileSrc={introMobile}
        >
            <Hero />
            <ComingSoon />
            <MiddleBlock />
            <Form />
            <Contacts />
        </IntroVideo>
    );
}
