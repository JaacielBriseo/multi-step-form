import { ErrorMessage, useField } from 'formik';

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email';
	placeholder: string;
	[x: string]: any;
}
export const MyInput = ({ label, ...props }: Props) => {
	const [field] = useField(props);
	return (
		<div className='flex flex-col m-1 mb-2 space-y-1'>
			<div className='flex justify-between md:flex-col'>
				<label htmlFor={props.id || props.name}>{label}</label>
				<ErrorMessage
					name={props.name}
					component='span'
					className={`text-sm ${props.errors && 'text-StrawberryRed'}`}
				/>
			</div>
			<input
				className={`w-full border-2 h-11 rounded-lg md:w-8/12 ${props.errors && 'border-StrawberryRed'} `}
				{...field}
				{...props}
			/>
		</div>
	);
};
