import { useEffect } from "react";

export default function useScrollReveal(options = {}) {
    useEffect(() => {
        const revealClass = "reveal";
        const visibleClass = "reveal-visible";

        const elements = new Set();

        // IntersectionObserver — анимация появления
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(visibleClass);
                        io.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                ...options
            }
        );

        // Функция для подключения новых элементов
        const observeNewElements = (root = document) => {
            root.querySelectorAll(`.${revealClass}`).forEach((el) => {
                if (!elements.has(el)) {
                    elements.add(el);
                    io.observe(el);
                }
            });
        };

        // MutationObserver — следит за появлением новых reveal-элементов
        const mo = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        // Если сам узел — reveal
                        if (node.classList?.contains(revealClass)) {
                            observeNewElements(node);
                        }
                        // Если внутри есть reveal
                        observeNewElements(node);
                    }
                });
            });
        });

        // Запускаем наблюдение за всем документом
        mo.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Подключаем reveal-элементы, которые уже есть
        observeNewElements();

        return () => {
            io.disconnect();
            mo.disconnect();
        };
    }, []);
}
