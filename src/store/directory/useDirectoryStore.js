import {useSelector,useDispatch} from 'react-redux'
import Swal from 'sweetalert2';
import  rticketsApp from '../../api/RticketsAppApi'
import { getEmails,getFlotas,getPhones } from './directorySlice';

export const useDirectoryStore =()=> {

const { Emails,Phones,Flotas } =  useSelector( state => state.directory );
const dispatch = useDispatch();

const onGetEmails =async() =>{
    try {
            const {data} = await rticketsApp.get('/directory/emails');
            const {Emails} = data;
            dispatch(getEmails(Emails));
    } 
    catch ({response})
    {
        const{data} = response;
        if(data.ok === false)
        {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `${data.msg}.!!!`,
            })
        };
    }
};

const onGetPhones =async() =>{
    try {
            const {data} = await rticketsApp.get('/directory/phones');
            const {Phones} = data;
            dispatch(getPhones(Phones));
    } 
    catch ({response})
    {
        const{data} = response;
        if(data.ok === false)
        {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `${data.msg}.!!!`,
            })
        };
    }
};

const onGetFlotas =async() =>{
    try {
            const {data} = await rticketsApp.get('/directory/flotas');
            const {Flotas} = data;
            dispatch(getFlotas(Flotas));
    } 
    catch ({response})
    {
        const{data} = response;
        if(data.ok === false)
        {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `${data.msg}.!!!`,
            })
        };
    }
};



return{
    //Propieties
    Emails,
    Phones,
    Flotas,
    //Methos
    onGetEmails,
    onGetPhones,
    onGetFlotas
    
};
}