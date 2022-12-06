export interface SubscriptionState {
	step: number;
	userInfo: {
		name: string;
		email: string;
		phone: string;
	} | null;
	paymentType: 'monthly' | 'yearly' | null;
	paymentMethod: 'card' | 'paypal' | 'other' | null;
	confirmed: boolean | null;
}