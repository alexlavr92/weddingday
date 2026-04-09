import styles from "./Footer.module.scss";
import footerImg from '../../../assets/images/footer/img.jpg'
import Container from "../Container/Container";
import textImg from '../../../assets/images/footer/text.svg'
import textFooter from '../../../assets/images/footer/text-footer.svg'
import textFooterTablet from '../../../assets/images/footer/text-footer-tablet.svg'
import textFooterMobile from '../../../assets/images/footer/text-footer-mobile.svg'

export default function Footer() {
    return (
        <footer className="pt-[190px] pb-[120px] md:py-[100px] md:pb-[140px] xl:py-[70px] text-center relative">
            <div className={`${styles.img_wrapper} absolute -z-[1] bottom-0 left-0 right-0 h-[220vw] md:h-[150vw] xl:h-[67vw]`}>
                <img src={footerImg} alt="" className="object-cover object-center h-full w-full" />
            </div>
            <Container>
                <div className="font-third text-[16vw] relative">
                    <img src={textImg} alt="" className="w-full object-cover" />
                    <picture className="absolute xl:-bottom-[20px] md:top-[70%] top-[60%] left-1/2 -translate-x-1/2 w-full max-w-[320px] md:max-w-[688px] xl:max-w-none xl:w-[60%]">
                        <source media="(min-width: 1280px)" srcSet={textFooter} />
                        <source media="(min-width: 768px)" srcSet={textFooterTablet} />
                        <img src={textFooterMobile} alt="" className="block w-full" />
                    </picture>
                </div>
            </Container>
        </footer>
    );
}
