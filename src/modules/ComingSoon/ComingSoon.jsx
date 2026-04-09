import styles from "./Coming.module.scss";
import Container from "../../components/layout/Container/Container";
import BlikImg from '../../assets/images/comingsoon/blik.svg';
import C from '../../assets/images/comingsoon/c.svg';
import M from '../../assets/images/comingsoon/m.svg'

export default function ComingSoon() {
    return (
        <section className={`relative ${styles.comingsoon}`}>

            <Container className="reveal">
                <div className="flex flex-col text-[4.8vw] md:text-[4vw] pt-[.5rem] md:pt-[5rem] xl:pr-[7rem] xl:text-[3.4rem] xl:pt-[5rem]">
                    <div className="flex items-end">
                        {/* <img src={C} alt="" className='xl:mb-[10px] max-w-[10vw] mb-[5px]' /> */}
                        {/* <img src={BlikImg_2} alt="" className='mb-[.6rem]' /> */}
                        <span className="font-main relative uppercase leading-[1.3] md:leading-[1.1]">совсем скоро в нашей жизни</span>
                    </div>
                    <span className="ml-auto font-main uppercase leading-[1.3] md:leading-[1.1] pr-[7px]">произойдёт особенное</span>
                    <span className="ml-auto font-main uppercase leading-[1.3] md:leading-[1.1] pr-[7px]">событие —</span>
                </div>
                <div className="flex flex-col xl:w-[42vw] md:w-full xl:min-w-[750px] ml-auto mt-[10px] w-[65vw]  md:items-end">
                    <div className="flex xl:text-[3.4rem] text-[4.8vw] md:text-[4vw]">
                        {/* <img src={M} alt="" className='xl:mb-[10px] mb-[5px] max-w-[20vw]' /> */}
                        {/* <span className="font-second text-[20vw] xl:text-[17.3rem] leading-[.6] mr-[5px] md:mr-[10px] mb-[5px] text-main-yellow">М</span> */}
                        <span className="font-main title_gradient gradient-default relative uppercase">мы станем семьей</span>
                    </div>
                    <div className="font-main text-[3.5vw] md:text-[2.5vw] xl:text-[1.25rem] leading-[1.1] md:max-w-[100%] mt-[5px] md:mt-0  ml-auto md:ml-0 text-justify md:text-left">
                        Мы будем счастливы, если вы придете<br className="hidden md:block"></br> и&nbsp;разделите этот день вместе с&nbsp;нами</div>
                </div>
            </Container>

        </section>
    );
}
