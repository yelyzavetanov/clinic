import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async (clinicName) => {
    const token = localStorage.getItem('token');
    // console.log(clinicName);
    const response = await axios.get(`/patients/${clinicName}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
});

export const addPatient = createAsyncThunk('patients/addPatient', async (newPatient, { dispatch }) => {
    const response = await axios.post('/patients', newPatient);
    dispatch(fetchPatients());
    return response.data;
});

export const editPatient = createAsyncThunk('patients/updatePatient', async ({ id, updatedData }, { dispatch }) => {
    const response = await axios.put(`/patients/${id}`, updatedData);
    dispatch(fetchPatients());
    return response.data;
});

export const deletePatient = createAsyncThunk('patients/deletePatient', async (id, { dispatch }) => {
    await axios.delete(`/patients/${id}`);
    dispatch(fetchPatients());
    return id;
});

const initialState = {
    loading: false,
    patients: [],
    error: ''
};

const patientSlice = createSlice({
    name: 'patient',
    initialState,
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
            .addCase(addPatient.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addPatient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editPatient.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(editPatient.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(editPatient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deletePatient.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(deletePatient.fulfilled, (state, action) => {
                state.loading = false;
                state.patients = state.patients.filter(patient => patient.id !== action.payload);
            })
            .addCase(deletePatient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default patientSlice.reducer;
