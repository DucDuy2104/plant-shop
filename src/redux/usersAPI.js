import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helper/AxiosInstance";


export const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosInstance().post("/users/login", data);
            if (response.status) {
                console.log('response: ', response.user)
                return response.user;
            }
            else {
                return rejectWithValue(response.message);
            }
        } catch (error) {
            console.log('error: ', error.message);
            return rejectWithValue('Login failure')
        }
    }
)