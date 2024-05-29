import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('patients/fetchPatients', async () => {
    const response = await axios.get('http://localhost:5000/users');
    return response.data;
});

export const logIn = createAsyncThunk("users/logIn", async ({ username, password }) => {
    const response = await axios.post("http://localhost:5000/users/login", { username, password });
    return response.data;
});

export const signUp = createAsyncThunk('users/signUp', async (newUser) => {
    const response = await axios.post('http://localhost:5000/users/signup', newUser);
    return response.data;
});

export const editAccount = createAsyncThunk('users/editAccount', async ({ username, updatedData }) => {
    const response = await axios.put(`http://localhost:5000/users/${username}`, updatedData);
    return response.data;
});

export const deleteAccount = createAsyncThunk('users/deleteAccount', async (username) => {
    await axios.delete(`http://localhost:5000/users/${username}`);
    return username;
});

const initialState = {
    loading: false,
    account:  JSON.parse(localStorage.getItem("user")) || null,
    token:  localStorage.getItem("token") || null,
    error: null,
};

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            state.account = null;
            state.token = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.loading = false;
                const { token, user } = action.payload || {};

                if (token && user) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    state.account = user;
                    state.token = token;
                } else {
                    state.error = 'Invalid response data';
                }
            })
            .addCase(logIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                const { token, user } = action.payload || {};

                if (token && user) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    state.account = user;
                    state.token = token;
                } else {
                    state.error = 'Invalid response data';
                }
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { logOut } = usersSlice.actions;
export default usersSlice.reducer;
