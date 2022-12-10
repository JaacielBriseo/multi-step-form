import { setUserInfo } from '../store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from '../interfaces';
import * as Yup from 'yup';

export const useUserInfo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const validationObject = Yup.object({
		name: Yup.string().min(2, 'Must be a valid name').required('This field is required'),
		email: Yup.string().email('Invalid email address').required('This field is required'),
		phone: Yup.string()
			.matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number')
			.required('This field is required'),
	});
	
	const initValues: UserInfo = {
		email: '',
		name: '',
		phone: '',
	};

	const nextStep = (values: UserInfo) => {
		dispatch(setUserInfo(values));
		navigate('/selectPlan');
	};

	return {
		validationObject,
		initValues,
		nextStep,
	};
};
