import styles from './MiddleBlock.module.scss';
import Location from '../Location/Location';
import Timeline from '../Timeline/Timeline';
import Dresscode from '../Dresscode/Dresscode';
import BgImg from '../../assets/images/middleblock/bg.png'
import LocationImg from '../../assets/images/middleblock/location-bg.png';
import Container from "../../components/layout/Container/Container";
import StarImg from '../../assets/images/middleblock/stars.png'
import DressStars from '../../assets/images/dresscode/img.png'


export default function MiddleBlock() {

    return (
        <section className={`${styles.middleblock} relative py-[90px] md:py-[70px] xl:py-[50px]`}>
            <picture className='absolute bottom-[10%] xl:bottom-0 left-0 right-0 -z-[10] h-[62%] md:h-[66%] xl:h-[70%]'>
                {/* <source media="(min-width: 1280)" srcset={BgImg} /> */}
                <img src={BgImg} alt="" className='absolute bottom-[10%] h-[90%] xl:bottom-0 left-0 w-full xl:h-full object-cover object-bottom' />
            </picture>
            <div className={`${styles.location} relative`}>
                <img src={StarImg} alt="" className={`${styles.location_stars} absolute left-0 md:-top-[15%] xl:-top-[30%] w-[70%] -top-[30vw]`} />
                <div className={`${styles.location_bg} absolute h-full w-full -z-[1]`}>
                    <img src={LocationImg} alt="" className='-z-[1] relative h-[53%] md:h-full w-full object-cover object-center ' />
                </div>
                <Container className='md:pt-[7rem] xl:pt-[6rem] xl:pb-[17rem] flex flex-col xl:flex-row items-center h-full relative z-[1] xl:items-start reveal'>
                    <Location className='md:max-w-[487px]' data={
                        {
                            date: "26 | 06 | 26",
                            address: 'Тортуга холл ( Воронежская улица, 35/1 , Ленинский район, Уфа)'
                        }} />
                    <Timeline className='' />
                </Container>
            </div>
            <div id="dresscode" className={`${styles.dresscode} relative pt-[50vw] md:pt-0`}>
                <img src={DressStars} alt="" className={`absolute -top-[5vw] md:-top-[44vw] xl:-top-[20vw] left-0 w-[100%] xl:w-[60%]`} />
                <Container className='relative xl:-translate-y-[55px] reveal'>
                    <Dresscode />
                </Container>
            </div>
            <div className={`${styles.gifts} pt-[88px] md:pt-[94px] xl:pt-[9.5rem] xl:pb-[2.5rem]`}>
                <Container className='reveal'>
                    <div className={`${styles.gifts_wrapper} w-full xl:max-w-[1250px] mx-auto`}>
                        <div className="mx-auto title title_gradient gradient-default text-center uppercase text-[1.5rem] md:text-[1.8rem] xl:text-[2.9rem] leading-[1.1]">Ваше присутствие на нашем празднике<br className="md:hidden"></br> —<br></br>
                            уже самый ценный подарок для нас</div>
                        <div className={`${styles.gifts_items} flex flex-col xl:mx-auto xl:gap-0 gap-[10px] text-[1rem] md:text-[1.3rem] leading-[1.3] xl:text-[1.5rem] mt-[20px] md:mt-[30px] xl:leading-[1.2]`}>
                            <div className="xl:w-[550px] w-full md:max-w-[688px] md:mx-auto xl:max-w-none xl:mx-0 rounded-[30px] border-b-2 border-third-yellow xl:p-[40px] px-[10px] py-[20px] md:px-[100px] md:py-[40px]">Мы также будем благодарны, если <span className='text-third-yellow'>вместо цветов вы выберете небольшой знак внимания или поздравление в конверте —</span>  так он точно отправится вместе с нами в новую семейную историю</div>
                            <div className="xl:w-[550px] w-full md:max-w-[688px] md:mx-auto xl:max-w-none xl:mx-0 rounded-[30px] border-t-2 border-third-yellow xl:p-[40px] px-[10px] py-[20px] md:px-[100px] md:py-[40px] 
                            xl:ml-auto relative">
                                <span className='text-third-yellow'>Наш праздник пройдёт в формате 18+</span> , так как программа и площадка не предусматривают развлечений для маленьких гостей. <span className='text-third-yellow'>Надеемся на ваше понимание</span> и будем счастливы провести этот вечер вместе со взрослыми друзьями и близкими
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}