interface GreetingsProps {
    name: string | undefined;
}

export default function Greetings({ name }: GreetingsProps) {

    const time = new Date().getHours();
    let greeting = '';
    const nameFormatted = name?.split(" ")[0];

    if (time < 12) {
        greeting = 'Bom dia';
    } else if (time < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    return (
        <div className="flex flex-col gap-1">
            <span>
                {greeting}, {nameFormatted}!
            </span>
            <span>
                <span className="text-muted-foreground">Aqui está sua visão geral de hoje.</span>
            </span>
        </div>
    )
}
