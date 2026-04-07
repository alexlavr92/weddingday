import styles from "./Footer.module.scss";
import footerImg from '../../../assets/images/footer/img.jpg'
import Container from "../Container/Container";

export default function Footer() {
    return (
        <footer className="py-[30px] pb-0 text-center relative">
            <div className={`${styles.img_wrapper} absolute -z-[1] bottom-0 left-0 right-0 h-[67vw]`}>
                <img src={footerImg} alt="" className="object-cover object-center h-full w-full" />
            </div>
            <Container>
                <div className="font-third text-[16vw] relative">
                    <span>26 | 06 | 26</span>
                    <div className={`${styles.bottom_text} font-second text-[6.2rem] absolute left-1/2 bottom-[4rem] -translate-x-1/2  text-nowrap leading-[1.2]`}>
                        <span className={`${styles.title_outline} block`}>Мы будем с нетерпением ждать вас</span>
                        <span className={`${styles.title_gradient} absolute bottom-0 left-0 gradient-default title_gradient`}>Мы будем с нетерпением ждать вас</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
