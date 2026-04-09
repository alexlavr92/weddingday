import Hero from "../../modules/Hero/Hero";
import Location from "../../modules/Location/Location";
import Timeline from "../../modules/Timeline/Timeline";
import Dresscode from "../../modules/Dresscode/Dresscode";
import Form from '../../modules/Form/Form';
import Contacts from "../../modules/Contacts/Contacts";
import ComingSoon from '../../modules/ComingSoon/ComingSoon'
import MiddleBlock from "../../modules/MiddleBlock/MiddleBlock";




export default function Home() {
    return (
        <>
            <Hero />
            <ComingSoon />
            <MiddleBlock />
            <Form />
            <Contacts />
        </>
    );
}
