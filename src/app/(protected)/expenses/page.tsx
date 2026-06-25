
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowUpDown } from "lucide-react"

export default function page() {

  const data = [
    {
      id: 1,
      date: "20/01/2023",
      category: "Alimentação",
      description: "Compra do mês",
      amount: "R$250,00"
    },
    {
      id: 2,
      date: "20/01/2023",
      category: "Entretenimento",
      description: "Netflix",
      amount: "R$19,90"
    },
    {
      id: 3,
      date: "20/01/2023",
      category: "Entretenimento",
      description: "Netflix",
      amount: "R$19,90"
    },
    {
      id: 4,
      date: "20/01/2023",
      category: "Entretenimento",
      description: "Netflix",
      amount: "R$19,90"
    },
    {
      id: 5,
      date: "20/01/2023",
      category: "Entretenimento",
      description: "Netflix",
      amount: "R$19,90"
    },
  ]

  return (
    <div className="container mx-auto py-50 px-50">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Data</TableHead>
            <TableHead className='flex items-center gap-2'>Categoria <ArrowUpDown className="h-4 w-4" /></TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead className='flex items-center gap-2'>Valor <ArrowUpDown className="h-4 w-4" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className={`${index % 2 === 0 ? 'bg-muted' : ''}`}>{item.date}</TableCell>
              <TableCell className={`${index % 2 === 0 ? 'bg-muted' : ''}`}>{item.category}</TableCell>
              <TableCell className={`${index % 2 === 0 ? 'bg-muted' : ''}`}>{item.description}</TableCell>
              <TableCell className={`${index % 2 === 0 ? 'bg-muted' : ''}`}>{item.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium ">Total</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell className="font-medium">{data.reduce((acc, item) => acc + parseFloat(item.amount.replace('R$', '').replace(',', '.')), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
