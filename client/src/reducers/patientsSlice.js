import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
    const response = await axios.get('http://localhost:5000/patients');
    return response.data;
});
export const addPatient =
    createAsyncThunk('patients/addPatient', async (newPatient) => {
    const response = await axios.post('http://localhost:5000/patients', newPatient);
    return response.data;
});

const patientSlice = createSlice({
    name: 'patient',
    initialState: {
        loading: false,
        patients: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatients.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchPatients.fulfilled, (state, action) => {
                state.loading = false;
                state.patients = action.payload;
            })
            .addCase(fetchPatients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addPatient.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(addPatient.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(addPatient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default patientSlice.reducer;
