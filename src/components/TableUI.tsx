import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

function combineArrays(arrLabels: Array<string>, arrValues1: Array<number>, arrValues2: Array<number>) {
   return arrLabels.map((label, index) => ({
      id: index,
      label: label,
      value1: arrValues1[index],
      value2: arrValues2[index]
   }));
}

const arrValues1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const arrValues2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const arrLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

interface TableUIProps {
   title?: string;
   label0?: string;
   label1?: string;
   label2?: string;
   arrValues1: number[];
   arrValues2: number[];
   arrLabels: string[];
}

export default function TableUI(props: TableUIProps) {

   const rows = combineArrays(props.arrLabels, props.arrValues1, props.arrValues2);

   const columns: GridColDef[] = [
      {
         field: 'label',
         headerName: props.label0,
         width: 150,
      },
      {
         field: 'value1',
         headerName: props.label1,
         width: 150,
      },
      {
         field: 'value2',
         headerName: props.label2,
         width: 300,
      },
   ];

   return (
      <Box sx={{ height: 350, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}