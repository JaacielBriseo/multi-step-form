export interface SubscriptionState {
	userInfo: {
		name: string;
		email: string;
		phone: string;
	} ;
	paymentType: string ;
	subscriptionPlan:  {
		plan: string;
		price: number;
	};
	addons: Addon[];
}

export interface Addon {
	addon: string | null;
	price: number | null;
}
