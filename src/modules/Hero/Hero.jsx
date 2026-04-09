import styles from "./Hero.module.scss";
import Container from "../../components/layout/Container/Container";
import HeroImg from '../../assets/images/hero/hero.jpg';
import HeroImgTablet from '../../assets/images/hero/hero-tablet.jpg';
import HeroImgMobile from '../../assets/images/hero/hero-mobile.jpg';
import Stars from '../../assets/images/hero/hero-start.png'
import MapPin from '../../assets/images/hero/map-pin.svg'
import WeddingImg from '../../assets/images/hero/wedding.png'
import NameText from '../../assets/images/hero/name-text.svg'

export default function Hero() {
    return (
        <section className={`${styles.hero} h-screen md:min-h-[975px] relative flex flex-col`}>

            {/* Фоновое изображение */}
            <picture className="absolute inset-0 w-full h-full -z-10">
                {<source media="(min-width: 1280px)" srcSet={HeroImg} />}
                {<source media="(min-width: 768px) and (max-width: 1279px)" srcSet={HeroImgTablet} />}
                <img src={HeroImgMobile} alt="" className="w-full h-full object-cover object-center" />
            </picture>
            <Container className="h-full flex-1 flex flex-col items-center">
                {/* Центральный блок */}
                <div className="relative mt-[100px] md:mt-[176px] xl:mt-[7.4rem] w-full">
                    <h1 className="font-bold -tracking-[0.16em] text-center text-h1 font-third text-white hidden">
                        WEDDING DAY
                    </h1>
                    <img src={WeddingImg} className="w-full block" alt="" />
                    <img src={NameText} className="xl:w-[80%] -mb-[7vw] md:w-full md:-mb-[3rem]  absolute xl:-mb-[1.5rem]
                        left-1/2
                        -bottom-1/2
                        -translate-x-1/2" alt="" />
                    {/* <h2 className={`
                        font-second
                        text-[14.5vw]
                        md:text-[14vw]
                        xl:text-[10.1vw]
                        absolute
                        left-1/2
                        -bottom-1/2
                        -translate-x-1/2
                        xl:mb-[1rem]
                        md:-mb-[1.5rem]
                        text-nowrap
                        leading-[1.2]`}>
                        <span className={`${styles.title_outline} block`}>Владислав и Татьяна</span>
                        <span className={`${styles.title_gradient} absolute bottom-0 left-0 gradient-default`}>Владислав и Татьяна</span>
                    </h2> */}
                </div>
                <p className="mt-auto text-center mb-[25px] text-[1rem] md:text-[1.5rem] leading-[1.3]">
                    Мы будем счастливы разделить<br></br> этот день вместе с вами
                </p>
                {/* Локация */}
                <a href='https://yandex.com/maps/-/CPfkqX0b' target="_blank" className="mb-[4rem] md:mb-[5rem] md:w-full xl:w-auto text-center gradient-default z-[1] text-main-blue btn flex gap-[0px] md:gap-[10px] items-start md:items-center justify-center btnShine">
                    <img src={MapPin} alt="" className="w-[20px] md:w-[33px]" />
                    <span>Тортуга холл (Воронежская улица, 35/1, Ленинский район, Уфа)</span>
                </a>
            </Container>
            <img src={Stars} className={`${styles.star} absolute bottom-[1rem] right-0 w-[100%] md:-bottom-[5vw] xl:-bottom-[100px] md:right-0 xl:right-[-5vw] xl:w-[80%] md:w-full xl:max-w-[1450px]`} />
        </section>
    );
}
