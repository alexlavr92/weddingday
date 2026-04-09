import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function MobileMenuPortal({ open, onClose, navItems, phones, onNavClick }) {
    const [visible, setVisible] = useState(false);

    // Включаем анимацию после появления компонента
    useEffect(() => {
        if (open) {
            setTimeout(() => setVisible(true), 10);
        } else {
            setVisible(false);
        }
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div
            className={`
                fixed inset-0 z-[999]
                bg-main-blue
                flex flex-col items-center justify-center
                gap-[30px] text-white text-2xl 
                overflow-auto p-8 text-center
                transition-all duration-300 ease-out

                ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
            `}
        >
            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                className="
                absolute 
                width-[30px] height-[30px]
                leading-[30px] text-center
                top-[30px] right-[20px]
                text-white 
                text-3xl"
            >
                ✕
            </button>

            {navItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className="tracking-wider uppercase text-[1rem] font-semibold"
                >
                    {item.label}
                </button>
            ))}

            <div className="flex flex-col gap-[5px] mt-[30px] text-[1rem]">
                {phones.map(p => (
                    <a key={p.raw} href={`tel:${p.raw}`}>
                        {p.formatted}
                    </a>
                ))}
            </div>
        </div>,
        document.body
    );
}

export default MobileMenuPortal;
