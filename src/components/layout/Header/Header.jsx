import { useEffect, useState, useRef } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";

const scrollToWithOffset = (id, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    let offsetPosition

    offsetPosition = elementPosition - (offset * 2)


    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
};


const navItems = [
    { id: "location", label: "Место проведения" },
    { id: "dresscode", label: "Дресс-код" },
    { id: "timeline", label: "Тайминг" },
];

const phones = [
    { raw: "+79823544987", formatted: "+7 (917) 428 11 64" },
    { raw: "+79823544988", formatted: "+7 (937) 854 02 04" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            setScrolled(window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header ref={headerRef} className={`${styles.header} ${scrolled ? `${styles.scrolled} bg-main-blue/20` : ""} w-full py-[50px] transition-all`}>
            <Container>
                <div className={`flex justify-between items-center relative`}>
                    <nav className="flex gap-[30px] items-center">
                        {navItems.map(item => (
                            <a
                                key={item.id}
                                onClick={() => scrollToWithOffset(item.id, headerRef.current?.offsetHeight || 0)}
                                className="cursor-pointer uppercase text-[1rem] font-normal"
                            >
                                {item.label}
                            </a>

                        ))}
                    </nav>
                    <div className="absolute left-1/2 -translate-x-1/2 -tracking-wider font-third text-[3.1rem] font-normal">
                        26 | 06 | 26
                    </div>
                    <div className="flex items-center gap-[30px]">
                        {phones.map(p => (
                            <a
                                className="font-normal text-[1.25rem]"
                                key={p.raw} href={`tel:${p.raw}`}>
                                {p.formatted}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </header>
    );
}
