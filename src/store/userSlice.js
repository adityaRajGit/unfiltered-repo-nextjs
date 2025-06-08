import { TOKEN } from "@/utils/enum"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const backend = process.env.NEXT_PUBLIC_BACKEND_URL


const signup = createAsyncThunk("user/signup", async (data) => {
    try {
        const response = await axios.post(`${backend}/auth/signup`, data)
        return response.data
    } catch (error) {
        if (error.response) {
            throw error.response.data.data.message
        }
        throw error.message || "An unexpected error occurred"
    }
})

const login = createAsyncThunk("user/login", async (data) => {
    try {
        const response = await axios.post(`${backend}/auth/login`, data)
        return response.data
    } catch (error) {
        if (error.response) {
            throw error.response.data.data.message
        }
        throw error.message || "An unexpected error occurred"
    }
})

const initialState = {
    user: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.data.user
                localStorage.setItem(TOKEN, JSON.stringify(action.payload.data.token));
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.error = action.error || "An error occurred";
            })
            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload.data.user
                localStorage.setItem(TOKEN, JSON.stringify(action.payload.data.token));
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error || "An error occurred";
            })
    }
})

export { signup, login }
export default userSlice.reducer