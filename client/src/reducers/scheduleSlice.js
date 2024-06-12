import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (doctorUsername) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`http://localhost:5000/schedule/${doctorUsername}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
});

export const addReception = createAsyncThunk('schedule/addReception', async (newReception, { dispatch }) => {
    const response = await axios.post('http://localhost:5000/schedule', newReception);
    return response.data;
});

export const markReception = createAsyncThunk('schedule/markReception', async ({ id, updatedData }, { dispatch }) => {
    const response = await axios.put(`http://localhost:5000/schedule/${id}`, updatedData);
    return response.data;
});

const initialState = {
    currentDate: new Date(),
    loading: false,
    currentDoctorUsername: null,
    schedule: [],
    error: ''
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setCurrentDoctorUsername: (state, action) => {
            state.currentDoctorUsername = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchedule.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchSchedule.fulfilled, (state, action) => {
                state.loading = false;
                state.schedule = action.payload;
            })
            .addCase(fetchSchedule.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addReception.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(addReception.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addReception.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(markReception.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(markReception.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(markReception.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});


export const { setCurrentDoctorUsername } = scheduleSlice.actions;
export default scheduleSlice.reducer;
