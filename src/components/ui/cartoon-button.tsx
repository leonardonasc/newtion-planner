interface CartoonButtonProps {
    label: string;
    color?: string;
    hasHighlight?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export function CartoonButton({
    label,
    color = "bg-orange-400",
    hasHighlight = true,
    disabled = false,
    onClick,
}: CartoonButtonProps) {
    const handleClick = () => {
        if (disabled) return;
        onClick?.();
    };

    return (
        <div
            className={`inline-block ${disabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            <button
                disabled={disabled}
                onClick={handleClick}
                className={`
                    relative h-12 px-6 rounded-full font-bold border-2 border-gray-700 transition-all duration-150 ${color} text-offwhite-50 shadow-[0_4px_0_0_#364153] hover:translate-y-[4px] hover:shadow-none active:translate-y-[4px] active:shadow-none`}
            >
                <span className="relative z-10 whitespace-nowrap">{label}</span>

                {hasHighlight && !disabled && (
                    <div className="absolute top-1/2 left-[-100%] h-24 w-16 -translate-y-1/2 rotate-12 bg-white/50 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
                )}
            </button>
        </div>
    );
}