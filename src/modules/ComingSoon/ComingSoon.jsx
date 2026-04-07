import styles from "./Coming.module.scss";
import Container from "../../components/layout/Container/Container";
import BlikImg from '../../assets/images/comingsoon/blik.svg';
import BlikImg_2 from '../../assets/images/comingsoon/blik2.svg';
import M from '../../assets/images/comingsoon/m.svg'

export default function ComingSoon() {
    return (
        <section className={`relative ${styles.comingsoon}`}>

            <Container className="reveal">
                <div className="flex flex-col pr-[7rem] text-[2.91rem] pt-[5rem]">
                    <div className="flex items-end">
                        {/* <img src={BlikImg_2} alt="" className='mb-[.6rem]' /> */}
                        <span className="font-second text-[17.3rem] leading-[.4] mr-[10px] mb-[5px] relative">
                            <img src={BlikImg} alt="" className="absolute -right-[65%] bottom-[70%]" />
                            С</span><span className="font-main relative uppercase leading-[1.1]"> овсем скоро в нашей жизни</span>
                    </div>
                    <span className="ml-auto font-main uppercase leading-[1.1] pr-[7px]">произойдёт особенное</span>
                    <span className="ml-auto font-main uppercase leading-[1.1] pr-[7px]">событие —</span>
                </div>
                <div className="flex flex-col w-[39vw] min-w-[750px] ml-auto mt-[10px]  items-end">
                    <div className="items-end justify-end text-[2.91rem]">
                        {/* <img src={M} alt="" className='mb-[1rem]' /> */}
                        <span className="font-second text-[17.3rem] leading-[.6] mr-[10px] mb-[5px] text-main-yellow">М</span>
                        <span className="font-main title_gradient gradient-default relative uppercase">ы станем семьей</span>
                    </div>
                    <div className="font-main text-[1.25rem] leading-[1.1]">Мы будем счастливы, если вы прийдете<br></br> и разделите этот день вместе с нами</div>
                </div>
            </Container>

        </section>
    );
}
