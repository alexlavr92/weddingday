import { useEffect, useRef, useState } from "react";

export default function IntroVideo({
    desktopSrc,
    introWebmSrc,
    children
}) {
    const videoRef = useRef(null);
    const [isFinished, setIsFinished] = useState(false);
    // const [src, setSrc] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const src = desktopSrc


    // Выбор видео по разрешению
    // useEffect(() => {
    //     const width = window.innerWidth;
    //     setSrc(width < 768 ? mobileSrc : desktopSrc);
    // }, []);

    // Автозапуск + iOS fix
    useEffect(() => {
        if (!src || !videoRef.current) return;

        const video = videoRef.current;

        const playVideo = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // iOS блокирует autoplay → можно показать кнопку Play
                });
            }
        };

        playVideo();

        const handleEnd = () => {
            setFadeOut(true);
            setTimeout(() => {
                setIsFinished(true);
                setTimeout(() => setContentVisible(true), 50); // даём 1 тик рендеру
            }, 700);
        };

        video.addEventListener("ended", handleEnd);

        return () => video.removeEventListener("ended", handleEnd);
    }, [src]);

    // Блокировка скролла
    useEffect(() => {
        if (!isFinished) {
            document.body.style.position = "fixed";
            document.body.style.top = "0";
            document.body.style.left = "0";
            document.body.style.right = "0";
        } else {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
        }

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
        };
    }, [isFinished]);


    const skipIntro = () => {
        setFadeOut(true);
        setTimeout(() => setIsFinished(true), 700);
    };

    return (
        <>
            {/* Intro overlay */}
            {!isFinished && (
                <div
                    className={`fixed inset-0 bg-black flex items-center justify-center z-[999] transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                        }`}
                >
                    {src && (
                        <video
                            ref={videoRef}
                            src={src}
                            className="w-full h-full object-cover object-center"
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                        >
                            <source src={introWebmSrc} type="video/webm" />
                            <source src={src} type="video/mp4" />
                        </video>
                    )}

                    {/* Fade-to-black слой */}
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-700 ${fadeOut ? "opacity-100" : "opacity-0"
                            }`}
                    />

                    {/* Skip intro */}
                    {/* <button
                    onClick={skipIntro}
                    className="absolute bottom-10 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl border border-white/30 hover:bg-white/30 transition"
                >
                    Skip intro
                </button> */}
                </div>
            )}

            {/* Контент */}
            {isFinished && (
                <div
                    className={`
            transition-opacity duration-[1200ms]
            ${contentVisible ? "opacity-100" : "opacity-0"}
        `}
                >
                    {children}
                </div>
            )}



        </>
    );
}
