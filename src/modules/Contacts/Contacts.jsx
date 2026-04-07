import styles from "./Contacts.module.scss";
import Container from "../../components/layout/Container/Container";
import tgIcon from "../../assets/icons/tg.svg"; // замени на свой путь

export default function Contacts() {
    const contacts = [
        {
            phone: "+7 (917) 428 11 64",
            name: "АЛЕКСАНДРА ДИДЕНКО",
            tgLink: "sssasasd",
            role: "организатор",
        },
        {
            phone: "+7 (937) 854 02 04",
            tgLink: 'sss',
            name: "ЭЛИНА САКАЕВА",
            role: "организатор",
        },
    ];

    return (
        <section className={styles.contacts}>
            <Container>
                <div className={`${styles.inner} flex justify-between items-center reveal`}>
                    {contacts.map((c, i) => (
                        <div key={i} className={styles.card}>
                            <a href={`${c.tgLink}`} className={styles.icon}>
                                <img src={tgIcon} alt="" />
                            </a>
                            <a href={`tel:${c.phone.replace(/\D/g, "")}`} className={`${styles.phone} text-[3.125rem]`}>
                                {c.phone}
                            </a>

                            <p className={`${styles.name} mt-[25px] text-[1.6rem] leading[1.2]`}>{c.name}</p>
                            <p className={`${styles.role} mt-[5px] leading-[1.1]`}>{c.role}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}