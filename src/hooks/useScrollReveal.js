import { useEffect } from "react";

export default function useScrollReveal(options = {}) {
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                ...options
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
