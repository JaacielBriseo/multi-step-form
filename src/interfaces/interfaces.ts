export interface SubscriptionState {
	step: number;
	userInfo: {
		name: string;
		email: string;
		phone: string;
	} | null;
	paymentType: 'monthly' | 'yearly' | null;
	subscriptionPlan: 'arcade' | 'advanced' | 'pro' | null;
	confirmed: boolean | null;
}
