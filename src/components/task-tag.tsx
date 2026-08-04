
interface MainTagProps {
    text: string;
    color?: string;
}



export default function TaskTag({ text, color }: MainTagProps) {


    return (
        <div className={`bg-${color}-200 text-xs px-2 py-0.5  w-fit rounded-full font-medium`}>
            <span className={`text-${color}-700 font-semibold`}>{text}</span>
        </div>
    )
}
