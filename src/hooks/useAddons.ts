import { addonsOptions } from '../constants/addonsOptions';
import { useAppSelector } from '../store';

export const useAddons = () => {
	const { paymentType } = useAppSelector((state) => state.subscription);
    
	return {
        addonsOptions,
        paymentType
    };
};
