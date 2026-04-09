import styles from "./Contacts.module.scss";
import Container from "../../components/layout/Container/Container";
import tgIcon from "../../assets/icons/tg.svg"; // замени на свой путь

export default function Contacts() {
    const contacts = [
        {
            phone: "+7 (917) 428 11 64",
            name: "АЛЕКСАНДРА ДИДЕНКО",
            tgLink: "https://t.me/Aleksandra_Didenkoo",
            role: "организатор",
        },
        {
            phone: "+7 (937) 854 02 04",
            tgLink: 'https://t.me/Elina_Sakaeva',
            name: "ЭЛИНА САКАЕВА",
            role: "организатор",
        },
    ];

    return (
        <section className={styles.contacts}>
            <Container>
                <div className={`${styles.inner} flex flex-col xl:flex-row gap-[10px] md:gap-[50px] xl:gap-0 justify-between items-center reveal`}>
                    {contacts.map((c, i) => (
                        <div key={i} className={styles.card}>
                            <a href={`${c.tgLink}`} target="_blank" className={styles.icon}>
                                <img src={tgIcon} alt="" />
                            </a>
                            <a href={`tel:${c.phone.replace(/\D/g, "")}`} className={`${styles.phone} text-[1.5rem] md:text-[2.5rem] xl:text-[3rem]`}>
                                {c.phone}
                            </a>

                            <p className={`${styles.name} mt-[15px] md:mt-[25px] text-[1.25rem] md:text-[1.6rem] leading-[1.2]`}>{c.name}</p>
                            <p className={`${styles.role} text-[1.1rem] md:text-[1.3rem] xl:text-[1rem] mt-[5px] leading-[1.1]`}>{c.role}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}