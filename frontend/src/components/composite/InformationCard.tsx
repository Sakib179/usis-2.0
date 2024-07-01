import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface ItemType {
  [key: string]: any; // replace 'any' with the actual type of the items
}

interface InformationCardProps {
  data: ItemType[];
  title: string;
}

export default function InformationCard ({data, title}: InformationCardProps) {
  return (
    <>
    <Card x-chunk="dashboard-05-chunk-3" className="m-4">
      <CardHeader className="px-7">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {data.map((item, index) => {
                const key = Object.keys(item)[0];
                const value = item[key];
                return (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium py-2">{key}</div>
              </TableCell>
              <TableCell className="sm:table-cell">
                {value}
              </TableCell>
            </TableRow>)

            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>    
    </>
  )
} 