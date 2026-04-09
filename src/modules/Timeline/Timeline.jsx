import styles from "./Timeline.module.scss";
import BgImg from '../../assets/images/timeline/img.png'

const events = [
    { time: "15:00", title: "Сбор гостей" },
    { time: "16:00", title: "Церемония" },
    { time: "17:00", title: "Банкет" },
    { time: "21:30", title: "Торт" },
    { time: "22:00", title: "Танцы" },
    { time: "23:00", title: "Завершение" },
];

export default function Timeline() {
    return (
        <div id="timeline" className={`${styles.timeline} relative`}>
            <div className={`${styles.title} absolute top-0 left-0 md:w-auto w-full text-center md:left-1/2 md:-translate-x-1/2 text-[1.2rem] md:text-[1.7rem] font-normal whitespace-nowrap`}>
                <span className="font-second text-[5rem] md:text-[6rem] leading-[0] mr-[5px] md:mr-0">Т</span>
                айминг дня</div>

            <div className={`${styles.timeline_list} mx-auto space-y-[20px] relative`}>
                {events.map((e) => (
                    <div key={e.time} className="flex gap-[20px] items-center text-[1.1rem] md:text-[1.5rem] text-main-white leading-[1]">
                        <span className="font-third tracking-[-0.05em] ">{e.time}</span>
                        <span className="">-</span>
                        <span className="">{e.title}</span>
                    </div>
                ))}
                <div className={`${styles.divider} gradient-default`}></div>
            </div>
            <img src={BgImg} className="md:absolute md:-bottom-[.5rem] md:-right-[2rem] mt-[20px] md:mt-0 mx-auto md:mx-0" alt="" />
        </div>
    );
}
