import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAtuhStore } from '../../store/auth/useAuthStore';
import DevPage from '../../helpers/DevPage';
import { useDirectoryStore } from '../../store/directory/useDirectoryStore';
import DirectoryPhonesTab from './Tables/DirectoryPhonesTab';
import DirectoryFlotasTab from './Tables/DirectoryFlotasTab';
import DirectoryEmailTab from './Tables/DirectoryEmailTab';

function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
{value === index && (
        <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
        </Box>
)}
    </div>
);
}

TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.number.isRequired,
value: PropTypes.number.isRequired,
};

function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function BasicTabs() {
const [value, setValue] = React.useState(0);
const {Emails,Flotas,Phones,onGetEmails,onGetFlotas,onGetPhones}= useDirectoryStore();
const {user}= useAtuhStore();
const handleChange = (event, newValue) => {
    setValue(newValue);
};

React.useEffect(() => {
    onGetEmails();
    onGetFlotas();
    onGetPhones();
}, [])


return (
    <div>
        <br/>
        <br/>
        <Typography variant='h3'>
            Directorio
        </Typography>
        <br/>
        {
            user.rol==="User"
            ?
            <Typography variant='h1' sx={{color:"black"}}>
                Pagina En Desarollo...
                <DevPage/>
            </Typography>
            :
            <Box sx={{ width: '100%' }}>    
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Extenciones" {...a11yProps(0)} />
                        <Tab label="Flotas" {...a11yProps(1)} />
                        <Tab label="Correos" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <DirectoryPhonesTab Phones={Phones}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DirectoryFlotasTab Flotas={Flotas} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DirectoryEmailTab Emails={Emails}/>
                </TabPanel>
            </Box>

        }
        
    </div>
    
);
}