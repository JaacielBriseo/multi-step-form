import { createSlice } from '@reduxjs/toolkit';
import { SubscriptionState } from '../../interfaces';

const initialState: SubscriptionState = {
	step: 1,
	userInfo: null,
	paymentType: null,
	subscriptionPlan: null,
	confirmed: null,
};

export const subscriptionSlice = createSlice({
	name: 'subscription',
	initialState,
	reducers: {
		setStep: (state, action: { payload: number }) => {
			state.step = action.payload;
		},
		setUserInfo: (state, action: { payload: SubscriptionState['userInfo'] }) => {
			state.userInfo = action.payload;
		},
		setPaymentType: (state, action: { payload: SubscriptionState['paymentType'] }) => {
			state.paymentType = action.payload;
		},
		setSubscriptionPlan: (state, action: { payload: SubscriptionState['subscriptionPlan'] }) => {
			state.subscriptionPlan = action.payload;
		},
		setConfirmed: (state, action: { payload: SubscriptionState['confirmed'] }) => {
			state.confirmed = action.payload;
		},
	},
});

export const { setStep, setUserInfo, setPaymentType, setSubscriptionPlan, setConfirmed } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
