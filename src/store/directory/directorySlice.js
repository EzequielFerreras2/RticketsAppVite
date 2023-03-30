import { createSlice } from '@reduxjs/toolkit';

export const directorySlice = createSlice({
name: 'directory',
initialState: {

    Emails:{},
    Phones:{},
    Flotas:{}


},
reducers: {
    getEmails: (state, {payload} ) => {
        state.Emails=payload;
    },
    getPhones: (state, {payload} ) => {
        state.Phones=payload;
    },
    getFlotas: (state, {payload} ) => {
        state.Flotas=payload;
    },
}
});

// Action creators are generated for each case reducer function
export const { getEmails, getFlotas,getPhones } = directorySlice.actions;