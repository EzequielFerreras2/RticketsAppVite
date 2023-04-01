import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { phoneNumberChange } from '../../../helpers/phoneNumberChange';

const DirectoryFlotasTab = ({Flotas}) => {
    const columns = [
        { field: 'Nombre', headerName: 'Nombre', width: 300, },
        { field: 'Mobil', valueFormatter: ({value}) =>phoneNumberChange(value), headerName: 'Mobil', width: 130 },
        { field: 'Compania', headerName: 'Compañia', width: 250, },
        { field: 'Departamento', headerName: 'Departamento', width: 200, },
        { field: 'Puesto', headerName: 'Puesto', width: 300, },
        
    ];
    
return (
    <div style={{ height: 700, width: '100%' }}>
    <DataGrid
    rows={Flotas}
    getRowId={(row) => row.Mobil}
    columns={columns}
    pageSize={50}
    rowsPerPageOptions={[50]}
    checkboxSelection
    />
  </div>
)
}

export default DirectoryFlotasTab