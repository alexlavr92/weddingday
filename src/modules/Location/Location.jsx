import styles from "./Location.module.scss";
import LocPin from '../../assets/images/location/map-pin.svg'

export default function Location({ data = {}, className = '' }) {
    return (
        <div id="location" className={`${styles.location_wrapper} flex flex-col gap-[10px] ${className}`}>
            <div className="font-third text-[6.25rem] tracking-tighter">{data.date}</div>
            <div className="flex gap-[20px] items-start">
                <img src={LocPin} alt="" />
                <span className="text-[1.5rem] leading-[1.2] -tracking-[0.01em]">{data.address}</span>
            </div>
            <a href="https://yandex.com/maps/-/CPfkqX0b" target="_blank" className="w-[487px] mt-[20px] btn gradient-default btnShine">Открыть на карте</a>
        </div>
    );
}

