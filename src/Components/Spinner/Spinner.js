import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Spinner = () => {
	return (
		<>
			{/* Spinner Container */}

			<div className='w-1/2 mx-auto h-screen my-auto flex items-center justify-center'>
				{/* <div className='fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center'>
					<div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900'></div>
				</div> */}
				<Triangle
					height='80'
					width='80'
					color='#A9A9A9'
					ariaLabel='triangle-loading'
					wrapperStyle={{}}
					wrapperClassName=' '
					visible={true}
				/>
			</div>
		</>
	);
};

export default Spinner;
