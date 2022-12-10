export interface SubscriptionState {
	userInfo: UserInfo;
	paymentType: string;
	subscriptionPlan: {
		plan: string;
		price: number;
	};
	addons: Addon[];
}

export interface Addon {
	addon: string;
	price: number;
}

export interface UserInfo {
	name: string;
	email: string;
	phone: string;
}

export interface HeaderProps {
	title: string;
	text: string;
}
export interface PlanOption {
	plan: string;
	price: {
		monthly: number;
		yearly: number;
	};
	icon: string;
}