import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClinicsList = createAsyncThunk('clinic/fetchClinicsList', async () => {
    const response = await axios.get('/api/clinic');
    return response.data;
});

export const fetchClinic = createAsyncThunk('clinic/fetchClinic', async (clinicName) => {
    const response = await axios.get(`/api/clinic/${clinicName}`, clinicName);
    return response.data;
});

export const register = createAsyncThunk('clinic/register', async (newClinic) => {
    const response = await axios.post('/api/clinic/register', newClinic);
    return response.data;
});

export const editClinic = createAsyncThunk('clinic/editClinic', async ({ clinicName, updatedData }) => {
    const response = await axios.put(`/api/clinic/${clinicName}`, updatedData);
    console.log(clinicName, updatedData);
    return response.data;
});


const initialState = {
    loading: false,
    clinicsList: [],
    clinic: null,
    error: null,
    message: null
};

const clinicSlice = createSlice({
    name: 'clinic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClinicsList.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = null;
            })
            .addCase(fetchClinicsList.fulfilled, (state, action) => {
                state.loading = false;
                state.message = null;
                state.clinicsList = action.payload;
            })
            .addCase(fetchClinicsList.rejected, (state, action) => {
                state.loading = false;
                state.message = null;
                state.error = action.error.message;
            })
            .addCase(fetchClinic.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.error = null;
            })
            .addCase(fetchClinic.fulfilled, (state, action) => {
                state.loading = false;
                state.message = null;
                state.clinic = action.payload;
            })
            .addCase(fetchClinic.rejected, (state, action) => {
                state.loading = false;
                state.message = null;
                state.error = action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.message = "Your clinic registered successfully! Now you can create users fro your clinic.";
                state.errorMessage = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.message = null;
                state.error = action.error.message;
            })
            .addCase(editClinic.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.error = null;
            })
            .addCase(editClinic.fulfilled, (state, action) => {
                state.loading = false;
                state.message = null;
                state.clinic = action.payload;
            })
            .addCase(editClinic.rejected, (state, action) => {
                state.loading = false;
                state.message = null;
                state.error = action.error.message;
            })
    }
});

export default clinicSlice.reducer;
