import { useEffect, useState, useRef } from "react";
import styles from "./Header.module.scss";
import Container from "../Container/Container";
import MobileMenuPortal from "./MobileMenuPortal/MobileMenuPortal";

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
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const headerRef = useRef(null);
    const tabletSize = 768;


    const handleNavClick = (id) => {
        setMenuOpen(false);

        // ждём завершения анимации меню
        setTimeout(() => {
            scrollToWithOffset(id, headerRef.current?.offsetHeight || 0);
        }, 10); // столько же, сколько duration-300 в Tailwind
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= tabletSize) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        if (menuOpen) {
            const y = window.scrollY;
            setScrollY(y);

            // Отключаем smooth scroll
            document.documentElement.classList.add("no-smooth-scroll");

            document.body.style.position = "fixed";
            document.body.style.top = `-${y}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.width = "100%";
        } else {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";

            // Мгновенно возвращаем позицию
            window.scrollTo(0, scrollY);

            // Возвращаем smooth scroll обратно
            document.documentElement.classList.remove("no-smooth-scroll");
        }
    }, [menuOpen]);


    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current?.offsetHeight || 0;
            setScrolled(window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header ref={headerRef} className={`${styles.header} ${scrolled ? `${styles.scrolled} bg-main-blue/20` : ""} w-full 
        py-[15px]
        md:py-[20px]
        xl:py-[50px]
        transition-all`}>
                <Container>
                    <div className={`
                    flex
                    justify-between
                    items-start
                    md:items-center
                    relative
                    flex-col
                    md:flex-row
                    md:flex-wrap
                    xl:flex-nowrap
                    `}>
                        <nav className="
                    flex
                    hidden
                    md:flex
                    gap-[30px]
                    items-center
                    md:order-1
                    md:w-full
                    xl:w-auto
                    xl:-order-1
                    ">
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
                        <div className="
                    md:-order-1
                    xl:absolute
                    xl:left-1/2
                    xl:-translate-x-1/2
                    -tracking-wider
                    font-third
                    text-[30px]
                    md:text-[3.1rem]
                    font-normal">
                            26 | 06 | 26
                        </div>
                        <div className="flex items-center gap-[30px]">
                            {phones.map(p => (
                                <a
                                    className="font-normal text-[4vw] md:text-[1.25rem]"
                                    key={p.raw} href={`tel:${p.raw}`}>
                                    {p.formatted}
                                </a>
                            ))}
                        </div>
                        {/* MOBILE BURGER (до 768px) */}
                        <button
                            className="md:hidden text-white text-3xl z-50 absolute leading-[30px] top-[10px] right-0 w-[30px] h-[30px] text-center"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>

                    </div>
                </Container>

            </header>
            <MobileMenuPortal
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                navItems={navItems}
                phones={phones}
                onNavClick={handleNavClick}
            />
        </>
    );
}
