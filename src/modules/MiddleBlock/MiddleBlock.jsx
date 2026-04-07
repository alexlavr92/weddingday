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
        <section className={`${styles.middleblock} relative py-[50px]`}>
            <picture>
                {/* <source media="(min-width: 1280)" srcset={BgImg} /> */}
                <img src={BgImg} alt="" className='absolute bottom-0 left-0 right-0 -z-[10]' />
            </picture>
            <div className={`${styles.location} relative`}>
                <img src={StarImg} alt="" className={`${styles.location_stars} absolute left-0 -top-[30%] w-[70%]`} />
                <div className={`${styles.location_bg} absolute h-full w-full -z-[1]`}>
                    <img src={LocationImg} alt="" className='-z-[1] relative h-full w-full object-cover object-center ' />
                </div>
                <Container className='pt-[6rem] pb-[17rem] flex h-full relative z-[1] items-start reveal'>
                    <Location className='max-w-[487px]' data={
                        {
                            date: "26 | 06 | 26",
                            address: 'Тортуга холл ( Воронежская улица, 35/1 , Ленинский район, Уфа)'
                        }} />
                    <Timeline className='' />
                </Container>
            </div>
            <div id="dresscode" className={`${styles.dresscode} relative `}>
                <img src={DressStars} alt="" className={`absolute -top-[20vw] left-0 w-[60%]`} />
                <Container className='relative -translate-y-[55px] reveal'>
                    <Dresscode />
                </Container>
            </div>
            <div className={`${styles.gifts} pt-[9.5rem] pb-[2.5rem]`}>
                <Container className='reveal'>
                    <div className={`${styles.gifts_wrapper} w-full px-[11rem]`}>
                        <div className="mx-auto title title_gradient gradient-default text-center uppercase text-[2.8rem] leading-[1.2]">Ваше присутствие на нашем празднике —<br></br>
                            уже самый ценный подарок для нас</div>
                        <div className={`${styles.gifts_items} flex flex-col text-[1.5rem] mt-[30px] leading-[1.2]`}>
                            <div className="w-[550px] rounded-[30px] border-b-2 border-third-yellow p-[40px]">Мы также будем благодарны, если <span className='text-third-yellow'>вместо цветов вы выберете небольшой знак внимания или поздравление в конверте —</span>  так он точно отправится вместе с нами в новую семейную историю</div>
                            <div className="w-[550px] rounded-[30px] border-t-2 border-third-yellow p-[40px] ml-auto relative">
                                <span className='text-third-yellow'>Наш праздник пройдёт в формате 18+</span> , так как программа и площадка не предусматривают развлечений для маленьких гостей. <span className='text-third-yellow'>Надеемся на ваше понимание</span> и будем счастливы провести этот вечер вместе со взрослыми друзьями и близкими
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}