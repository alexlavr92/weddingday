import styles from "./Dresscode.module.scss";
import Dresscode1 from '../../assets/images/dresscode/dresscode1.png';
import Dresscode2 from '../../assets/images/dresscode/dresscode2.png';
import d from '../../assets/images/dresscode/d.svg'


export default function Dresscode({ data = {}, className = '' }) {
    return (
        <div className={`${styles.dresscode_wrapper}  ${className}`}>
            <div className={`w-[43vw] min-w-[826px] ml-auto`}>
                <div className="title text-right flex items-end justify-end">
                    {/* <img src={d} alt="" className="mb-[20px]" /> */}
                    <span className="font-second text-main-yellow text-[17.3rem] leading-[.4] mb-[15px]">Д</span>
                    <div className="relative text-[2.91rem] uppercase">
                        <span className="gradient-default title_gradient">ресс-код</span> <span>total black</span></div>
                </div>
                <div className="subtitle max-w-[360px] ml-auto mt-[20px] text-[1.25rem] leading-[1.1] text-justify">Нам очень хочется создать по-настоящему стильную и атмосферную свадьбу, поэтому мы выбрали единый дресс-код — total black</div>
            </div>
            <div className="flex items-start pt-[30px]">
                <div className="flex w-[40vw] min-w-[750px] gap-x-[6.6rem] gap-y-[36px] xl:order-1 ml-auto justify-end flex-wrap items-start">
                    <div className="flex-1 justify-end space-y-[20px] text-[1.25rem] leading-[1.1] text-justify">
                        <p>Чёрный цвет, элегантность и&nbsp;классика — именно так мы видим этот вечер.</p>
                        <p>Будем очень благодарны, если вы поддержите нашу идею и&nbsp;придёте в полностью чёрных образах.</p>
                        <p>Это поможет создать красивую атмосферу и потрясающие фотографии, которые останутся с&nbsp;нами на всю жизнь ✨</p>
                    </div>
                    <div className="flex flex-col gap-[22px] max-w-[360px]">
                        <div className="overflow-hidden rounded-[20px] border-4 border-black w-full">
                            <img src={Dresscode2} alt="" className="w-full" />
                        </div>
                        <div className="text-[1.25rem] leading-[1.1] text-justify">Для дам: вечерние или коктейльные платья, костюмы, чёрные аксессуары</div>

                    </div>
                </div>
                <div className="flex flex-col gap-[22px] max-w-[360px]">
                    <div className="overflow-hidden rounded-[20px] border-4 border-black w-full">
                        <img src={Dresscode1} alt="" className="w-full" />
                    </div>
                    <div className="text-[1.25rem] leading-[1.1]">Для джентльменов: костюм, смокинг, рубашка, классическая обувь</div>
                </div>
            </div>
            <div className="flex flex-col w-[40vw] min-w-[750px] ml-auto mt-[36px] uppercase text-[1.5rem] leading-[1.3]">
                <div className="">
                    <span className="font-second text-[9.4rem] leading-[.4] mr-[10px]">E</span><span className="">сли вы сомневаетесь в образе — </span>
                </div>
                <span className="mx-auto pr-[2rem]">можно прислать его нам,</span>
                <span className="ml-auto">мы с радостью подскажем</span>
            </div>
        </div>
    );
}