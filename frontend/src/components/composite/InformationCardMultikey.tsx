import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow, TableHeader, TableHead } from "@/components/ui/table";

interface ItemType {
  [key: string]: string; // replace 'string' with the actual type of the items if different
}

interface InformationCardProps {
  data: ItemType[];
  title: string;
}

export default function InformationCard ({data, title}: InformationCardProps) {
  // Determine the headers from the keys of the first item
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <Card x-chunk="dashboard-05-chunk-3" className="m-4">
      <CardHeader className="px-7">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header, index) => (
                <TableHead key={index} className="hidden sm:table-cell">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {headers.map((header, idx) => (

                  <TableCell key={idx}>
                    <div className="font-medium py-2">{item[header]}</div>
                  </TableCell>
                  
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>    
  )
} 