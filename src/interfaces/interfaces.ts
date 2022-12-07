export interface SubscriptionState {
	step: number;
	userInfo: {
		name: string;
		email: string;
		phone: string;
	} | null;
	paymentType: string | null;
	subscriptionPlan: string | null;
	addons: string | string[];
}
