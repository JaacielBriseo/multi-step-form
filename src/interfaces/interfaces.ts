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
export interface PlanOptionValues {
	plan: string;
	price: {
		monthly: number;
		yearly: number;
	};
	icon: string;
}
export interface SelectPlanValues {
	selectedOption: null;
	toggler: boolean;
}

export interface SetSelectedOptionProps {
	index: number;
	option: PlanOptionValues;
	values: SelectPlanValues;
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export interface PlanOptionProps {
	index: number;
	option: PlanOptionValues;
	selected: number | null;
	values: {
		selectedOption: null;
		toggler: boolean;
	};
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
	setSelectedOption: SetSelectedOption;
}

export type SetSelectedOption = (props: {
	index: number;
	option: PlanOptionValues;
	values: SelectPlanValues;
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}) => void;

export interface SwitchTogglerProps {
	setSelected: React.Dispatch<React.SetStateAction<number | null>>;
	values: SelectPlanValues;
}
export type HandleChangeAddons = (
	values: {
		addons: never[];
	},
	option: {
		addon: string;
		msg: string;
		price: {
			monthly: number;
			yearly: number;
		};
	},
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
) => void;

export interface AddonOptionProps {
	option: {
		addon: string;
		msg: string;
		price: {
			monthly: number;
			yearly: number;
		};
	};
	values: { addons: never[] };
	setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}

export interface SelectedAddonsProps {
	addon: string;
	paymentType: string;
	price: number;
}
export interface SelectedPlanProps {
	plan: string;
	paymentType: string;
	price: number;
}

export interface TotalPriceProps {
	paymentType: string;
	totalAddonsPrices: number;
	price: number;
}
export interface NavElementsProps {
	stepText: string;
	stepNumber: string;
	stepTitle: string;
	path: string;
}
