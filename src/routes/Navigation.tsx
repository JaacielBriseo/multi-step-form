import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { Addons, SelectPlan, Summary, UserInfoForm, ThankYouCard } from '../pages';
import { NavElements } from '../components';

export const Navigation = () => {
	return (
		<>
			<BrowserRouter>
				<div className='bg-mobSide bg-no-repeat bg-cover h-40 font-Ubuntu md:flex md:bg-none md:px-5 md:h-screen md:py-5'>
					<nav className='md:w-1/3 md:bg-deskSide md:bg-contain md:p-10 md:bg-no-repeat md:flex md:items-center'>
						<ul className='navigationUl'>
							<NavElements path='/' stepNumber='1' stepText='Step 1 ' stepTitle='your info' />
							<NavElements path='selectPlan' stepNumber='2' stepText='Step 2 ' stepTitle='select plan' />
							<NavElements path='addons' stepNumber='3' stepText='Step 3 ' stepTitle='add-ons' />
							<NavElements path='summary' stepNumber='4' stepText='Step 4 ' stepTitle='summary' />
						</ul>
					</nav>
					<div className='md:w-11/12'>
						<Routes>
							<Route path='/' element={<UserInfoForm />} />
							<Route path='selectPlan' element={<SelectPlan />} />
							<Route path='addons' element={<Addons />} />
							<Route path='summary' element={<Summary />} />
							<Route path='thanks' element={<ThankYouCard />} />
							<Route path='/*' element={<Navigate to='/' replace />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
};
