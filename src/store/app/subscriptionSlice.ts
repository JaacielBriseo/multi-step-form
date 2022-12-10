import { createSlice } from '@reduxjs/toolkit';
import { SubscriptionState } from '../../interfaces';

const initialState: SubscriptionState = {
	userInfo: {
		name: '',
		email: '',
		phone: '',
	},
	paymentType: 'monthly',
	subscriptionPlan: {
		plan: '',
		price: 0,
	},
	addons: [
		{
			addon: '',
			price: 0,
		},
	],
};

export const subscriptionSlice = createSlice({
	name: 'subscription',
	initialState,
	reducers: {
		setUserInfo: (state, action: { payload: SubscriptionState['userInfo'] }) => {
			state.userInfo = action.payload;
		},
		setPaymentType: (state, action: { payload: SubscriptionState['paymentType'] }) => {
			state.paymentType = action.payload;
		},
		setSubscriptionPlan: (state, action: { payload: SubscriptionState['subscriptionPlan'] }) => {
			state.subscriptionPlan = action.payload;
		},
		setAddon: (state, action: { payload: SubscriptionState['addons'] }) => {
			state.addons = action.payload;
		},
	},
});

export const { setUserInfo, setPaymentType, setSubscriptionPlan, setAddon } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
