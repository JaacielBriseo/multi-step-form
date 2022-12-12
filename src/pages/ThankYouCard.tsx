import { ThankYou } from '../assets';
export const ThankYouCard = () => {
	return (
		<div className='formLayout h-96 flex items-center md:w-2/4'>
			<div className='w-11/12 mx-auto space-y-4 md:space-y-8'>
				<img src={ThankYou} alt='thanksCard' className='mx-auto w-14 md:w-24' />
				<h1 className='text-2xl font-bold text-center md:text-5xl'>Thank You!</h1>
				<p className='text-center text-CoolGray text-sm md:text-xl'>
					Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
					please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};
