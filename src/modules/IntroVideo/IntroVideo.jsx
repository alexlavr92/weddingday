import { useEffect, useRef, useState } from "react";

export default function IntroVideo({ children }) {
    const videoRef = useRef(null);

    const [videoZoom, setVideoZoom] = useState(false);
    const [videoBlur, setVideoBlur] = useState(false);
    const [videoFade, setVideoFade] = useState(false);

    const [contentVisible, setContentVisible] = useState(false);
    const [introDone, setIntroDone] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const playPromise = video.play();
        if (playPromise) playPromise.catch(() => { });

        const handleEnd = () => {
            // 1) Видео увеличивается
            setVideoZoom(true);

            // 2) Лёгкое размытие
            setTimeout(() => setVideoBlur(true), 150);

            // 3) Контент начинает проявляться СКВОЗЬ видео
            setTimeout(() => setContentVisible(true), 300);

            // 4) Видео начинает исчезать
            setTimeout(() => setVideoFade(true), 450);

            // 5) Полное скрытие видео
            setTimeout(() => setIntroDone(true), 1000);
        };

        video.addEventListener("ended", handleEnd);
        return () => video.removeEventListener("ended", handleEnd);
    }, []);

    // 🔒 Scroll lock
    useEffect(() => {
        if (!introDone) {
            // фиксируем страницу
            document.body.style.position = "fixed";
            document.body.style.top = "0";
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.overflow = "hidden";
        } else {
            // возвращаем нормальный скролл
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflow = "";
        }
    }, [introDone]);

    return (
        <>
            {/* Контент — рендерится сразу, но сначала невидим */}
            <div
                className={`
                    transition-all duration-[900ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${contentVisible ? "opacity-100 blur-0" : "opacity-0 blur-[8px]"}
                `}
            >
                {children}
            </div>

            {/* Видео поверх контента, но смешивается с ним */}
            {!introDone && (
                <div
                    className="fixed inset-0 z-[999] pointer-events-none overflow-hidden"
                    style={{
                        mixBlendMode: "lighten", // ← эффект проявления контента сквозь видео
                    }}
                >
                    <div
                        className={`
                            w-full h-full
                            transition-transform duration-[1200ms]
                            ease-in
                            ${videoZoom ? "scale-[12]" : "scale-100"}
                        `}
                        style={{
                            filter: videoZoom ? "blur(1px)" : "none", // motion blur
                        }}
                    >
                        <video
                            ref={videoRef}
                            className={`
                                w-full h-full object-cover object-center
                                transition-all duration-[900ms]
                                ${videoBlur ? "blur-[12px]" : "blur-0"}
                                ${videoFade ? "opacity-0" : "opacity-100"}
                            `}
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            poster="/poster.jpg"
                        >
                            <source src="/videos/intro-optimized.mp4" type="video/mp4" />
                            <source src="/videos/intro-desktop-optimized.webm" type="video/webm" />
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}
