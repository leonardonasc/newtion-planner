
interface MainTagProps {
    text: string;
}

export default function TaskTag({ text }: MainTagProps) {


    return (
        <div className={`text-xs w-fit rounded-full font-medium`}>
            <span className={`text-blue-500 font-semibold`}>{text}</span>
        </div>
    )
}
