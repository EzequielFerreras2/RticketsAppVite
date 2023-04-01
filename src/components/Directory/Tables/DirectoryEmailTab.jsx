import React from 'react'
import { DataGrid } from '@mui/x-data-grid';


const DirectoryEmailTab = ({Emails}) => {
    const columns = [
        { field: 'Emails',headerName: 'Correos', width: 300 },
        { field: 'Nombre', headerName: 'Nombre', width: 300, },
        { field: 'Puesto', headerName: 'Puesto', width: 300, },
        { field: 'Departamento', headerName: 'Departamento', width: 200, },
        { field: 'Compania', headerName: 'Compañia', width: 350, },
    ];
    
return (
    <div style={{ height: 700, width: '100%' }}>
    <DataGrid
    rows={Emails}
    getRowId={(row) => row.Emails}
    columns={columns}
    pageSize={50}
    rowsPerPageOptions={[50]}
    
    />
  </div>
)
}

export default DirectoryEmailTab