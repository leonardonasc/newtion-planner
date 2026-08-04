

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-start font-work-sans">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-muted-foreground font-normal">{subtitle}</p>
    </div>
  )
}
