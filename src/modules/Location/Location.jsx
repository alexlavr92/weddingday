import styles from "./Location.module.scss";
import LocPin from '../../assets/images/location/map-pin.svg'

export default function Location({ data = {}, className = '' }) {
    return (
        <div id="location" className={`${styles.location_wrapper} max-w-[350px] flex flex-col md:items-stretch items-center gap-[10px] ${className}`}>
            <div className="font-third text-[3.125rem] md:text-[6.25rem] tracking-tighter">{data.date}</div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:gap-[20px]">
                <img src={LocPin} alt="" />
                <span className="text-[1rem] md:text-[1.5rem] leading-[1.2] -tracking-[0.01em] text-center md:text-left">{data.address}</span>
            </div>
            <a href="https://yandex.com/maps/-/CPfkqX0b" target="_blank" className="md:w-[487px] max-w-[290px] md:max-w-none w-full mt-[10px] md:mt-[20px] btn gradient-default btnShine">Открыть на карте</a>
        </div>
    );
}

