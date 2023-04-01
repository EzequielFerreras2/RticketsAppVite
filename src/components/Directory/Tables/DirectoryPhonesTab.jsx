import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const DirectoryPhonesTab = ({Phones}) => {
    const columns = [
        { field: 'Ext', headerName: 'Extencion', width: 130 },
        { field: 'Nombre', headerName: 'Nombre', width: 200, },
    ];
    
return (
    <div style={{ height: 700, width: '100%' }}>
    <DataGrid
    rows={Phones}
    getRowId={(row) => row.ID}
    columns={columns}
    pageSize={50}
    rowsPerPageOptions={[50]}
    checkboxSelection
    />
  </div>
)
}

export default DirectoryPhonesTab