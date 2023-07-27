import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            /* eslint no-param-reassign: "error" */
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                /* eslint no-param-reassign: "error" */
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            /* eslint no-param-reassign: "error" */
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
