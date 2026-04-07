import styles from "./Hero.module.scss";
import Container from "../../components/layout/Container/Container";
import HeroImg from '../../assets/images/hero/hero.jpg';
import Stars from '../../assets/images/hero/hero-start.png'
import MapPin from '../../assets/images/hero/map-pin.svg'
import WeddingImg from '../../assets/images/hero/wedding.png'

export default function Hero() {
    return (
        <section className={`${styles.hero} h-screen min-h-[975px] relative flex flex-col`}>

            {/* Фоновое изображение */}
            <img
                src={HeroImg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover -z-10 object-center"
            />
            <Container className="h-full flex-1 flex flex-col items-center">
                {/* Центральный блок */}
                <div className="relative mt-[7.4rem] w-full">
                    <h1 className="font-bold -tracking-[0.16em] text-center text-h1 font-third text-white hidden">
                        WEDDING DAY
                    </h1>
                    <img src={WeddingImg} className="w-full block" alt="" />
                    <h2 className={`font-second text-[10.1vw] absolute left-1/2 -bottom-1/2 -translate-x-1/2 mb-[1rem] text-nowrap leading-[1.2]`}>
                        <span className={`${styles.title_outline} block`}>Владислав и Татьяна</span>
                        <span className={`${styles.title_gradient} absolute bottom-0 left-0 gradient-default`}>Владислав и Татьяна</span>
                    </h2>
                </div>
                <p className="mt-auto text-center mb-[25px] text-[1.5rem] leading-[1.3]">
                    Мы будем счастливы разделить<br></br> этот день вместе с вами
                </p>
                {/* Локация */}
                <a href='https://yandex.com/maps/-/CPfkqX0b' target="_blank" className="mb-[5rem] text-center gradient-default z-[1] text-main-blue btn flex gap-[10px] items-center btnShine">
                    <img src={MapPin} alt="" />
                    <span>Тортуга холл (Воронежская улица, 35/1, Ленинский район, Уфа)</span>
                </a>
            </Container>
            <img src={Stars} className={`${styles.star} absolute bottom-[-100px] right-[-5vw] w-[80%] max-w-[1450px]`} />
        </section>
    );
}
