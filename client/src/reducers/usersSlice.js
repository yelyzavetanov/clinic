import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (clinicName) => {
    const response = await axios.get(`/users/${clinicName}`);
    // console.log("action creator");
    return response.data;
});

export const logIn = createAsyncThunk("users/logIn", async ({ username, password }) => {
    const response = await axios.post("/users/login", { username, password });
    return response.data;
});

export const signUp = createAsyncThunk('users/signUp', async (newUser) => {
    const response = await axios.post('/users/signup', newUser);
    return response.data;
});

export const editAccount = createAsyncThunk('users/editAccount', async ({ username, updatedData }) => {
    const response = await axios.put(`/users/${username}`, updatedData);
    return response.data;
});

export const deleteAccount = createAsyncThunk('users/deleteAccount', async (username) => {
    await axios.delete(`/users/${username}`);
    return username;
});

const initialState = {
    loading: false,
    account: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    doctorsUsersList: [],
    error: null,
    message: null,
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
                state.message = null;
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
                state.message = null;
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                const { token, user } = action.payload || {};

                if (token && user) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));
                    state.account = user;
                    state.message = "New user created successfully!";
                    state.token = token;
                } else {
                    state.message = null;
                    state.error = 'Invalid response data';
                }
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.message = null;
                state.error = action.error.message;
            })
            .addCase(editAccount.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.error = null;
            })
            .addCase(editAccount.fulfilled, (state, action) => {
                state.loading = false;
                state.message = null;
                state.account = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
                state.error = null;
            })
            .addCase(editAccount.rejected, (state, action) => {
                state.message = null;
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.message = null;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.doctorsUsersList = action.payload;
                state.message = null;
                state.error = null;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.message = null;
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const { logOut } = usersSlice.actions;
export default usersSlice.reducer;
