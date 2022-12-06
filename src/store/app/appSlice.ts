import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
	counter: number;
}

// Define the initial state using that type
const initialState: CounterState = {
	counter: 0,
};
export const appSlice = createSlice({
	name: 'app',
	initialState: {
		initialState,
	},
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;
