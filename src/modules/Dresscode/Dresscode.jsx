import styles from "./Dresscode.module.scss";
import Dresscode1 from '../../assets/images/dresscode/dresscode1.png';
import Dresscode2 from '../../assets/images/dresscode/dresscode2.png';
import d from '../../assets/images/dresscode/d.svg'
import e from '../../assets/images/dresscode/e.svg'


export default function Dresscode({ data = {}, className = '' }) {
    return (
        <div className={`${styles.dresscode_wrapper}  ${className}`}>
            <div className={`w-[100%] xl:w-[62vw] xl:min-w-[826px] ml-auto`}>
                <div className="title text-right flex items-end justify-center md:justify-start xl:justify-end xl:-mr-[2.7rem]">
                    <img src={d} alt="" className="xl:mb-[20px] max-w-[18vw] mb-[10px]" />
                    <div className="relative text-[5.5vw] md:text-[4vw] xl: xl:text-[2.91rem] uppercase right-[3vw] xl:right-[2.7rem]">
                        <span className="gradient-default title_gradient">ресс-код</span> <span>total black</span></div>
                </div>
                <div className="subtitle max-w-[195px] md:max-w-[300px] xl:max-w-[360px] md:ml-auto mt-[20px] text-[1rem] xl:text-[1.25rem] leading-[1.3] md:leading-[1.1] text-justify">Нам очень хочется создать по-настоящему стильную и атмосферную свадьбу, поэтому мы выбрали единый дресс-код — total black</div>
            </div>
            <div className="flex flex-col xl:flex-row items-start pt-[30px]">
                <div className="flex xl:w-[40vw] xl:min-w-[750px] gap-x-[6.6rem] gap-y-[36px] xl:order-1 xl:ml-auto xl:justify-end justify-between w-full flex-wrap items-start">
                    <div className="flex-1 max-w-[195px] ml-auto md:ml-0 md:max-w-[250px] xl:max-w-none justify-end space-y-[20px] text-[1rem] xl:text-[1.25rem] leading-[1.3] md:leading-[1.1] text-justify">
                        <p>Чёрный цвет, элегантность и&nbsp;классика — именно так мы видим этот вечер.</p>
                        <p>Будем очень благодарны, если вы поддержите нашу идею и&nbsp;придёте в полностью чёрных образах.</p>
                        <p>Это поможет создать красивую атмосферу и потрясающие фотографии, которые останутся с&nbsp;нами на всю жизнь ✨</p>
                    </div>
                    <div className="flex flex-col gap-[22px] max-w-[290px] md:max-w-[300px] xl:max-w-[360px] mx-auto md:mx-0 items-center">
                        <div className="overflow-hidden rounded-[20px] border-4 border-black w-full">
                            <img src={Dresscode2} alt="" className="w-full" />
                        </div>
                        <div className="text-[1rem] xl:text-[1.25rem] leading-[1.3] md:leading-[1.1] text-justify">Для дам: вечерние или коктейльные платья, костюмы, чёрные аксессуары</div>

                    </div>
                </div>
                <div className="flex mt-[40px] flex-col md:-mt-[40px] xl:mt-0 gap-[22px] max-w-[290px] mx-auto md:mx-0 md:max-w-[300px] xl:max-w-[360px]">
                    <div className="overflow-hidden rounded-[20px] border-4 border-black w-full">
                        <img src={Dresscode1} alt="" className="w-full" />
                    </div>
                    <div className="text-[1rem] xl:text-[1.25rem] leading-[1.3] md:leading-[1.1]">Для джентльменов: костюм, смокинг, рубашка, классическая обувь</div>
                </div>
            </div>
            <div className="flex text-center md:text-left flex-col items-center md:items-start w-full xl:w-[40vw] md:max-w-[90%] xl:max-w-none xl:min-w-[750px] xl:ml-auto mt-[50px] md:mt-[40px] xl:mt-[36px] uppercase text-[1.2rem] md:text-[1.3rem] xl:text-[1.5rem] leading-[1.3]">
                <div className=" flex items-start md:items-end xl:-mr-[1.5rem] relative max-w-[345px] md:max-w-none pl-[8vw] md:pl-0">
                    <img src={e} alt="" className="
                    xl:mb-[5px]
                    max-w-[8vw]
                    md:max-w-[6vw]
                    mb-[5px]
                    absolute
                    left-[15px]
                    md:left-auto
                    -top-[2.5vw]
                    md:top-auto
                    md:relative" />
                    <span className="xl:right-[1.5rem] right-[1.2vw] relative">сли вы сомневаетесь в образе — </span>
                </div>
                <span className="md:mx-auto md:pr-[2rem]">можно прислать его нам,</span>
                <span className="md:ml-auto">мы с радостью подскажем</span>
            </div>
        </div>
    );
}