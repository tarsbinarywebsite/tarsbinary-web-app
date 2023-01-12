import React from 'react';
import cyber from '../../Assets/Images/cyber.jpg';
import military1 from '../../Assets/Images/military1.png';
import surveillance1 from '../../Assets/Images/surveillance1.png';

const DefenseProject = () => {
	window.scrollTo({ top: 0, left: 0 });
	return (
		<>
			{/* Defense Projects Container */}
			<div className='defense-project-container bg-black pt-[3.6rem]  text-gray-200'>
				<div className='max-w-4xl mx-auto'>
					{' '}
					<div className='pt-16 w-11/12 md:w-10/12 lg:w-full mx-auto pb-5  border border-gray-300 rounded-xl p-5 md:p-10 '>
						{/* Header Container */}
						<div className=''>
							<div className='mb-5 lg:mb-10 flex justify-center'>
								<div className='p-px bg-gradient-to-r  from-[#ff0000]  to-[#550002] rounded-md'>
									<h1 className='rounded-md bg-black px-3 lg:px-5 py-2 lg:py-3 font-heading text-lg lg:text-3xl'>
										Defense Projects
									</h1>
								</div>
							</div>

							<div className=''>
								<p className='text-xs md:text-sm lg:text-base text-center md:text-justify'>
									<span className='font-couriernew '>TARS BINARY</span> designs
									and manufactures highly complex Software Defined Radio (SDR)
									systems for gathering, analyzing, and sharing signals
									intelligence and other complex needs of the Intelligence,
									Defense, and Security Communities. We work in cutting-edge
									software-defined radio technology, and our advanced SDR
									systems provide unmatched versatility and performance for
									mission-critical applications.
									<br />
									<br />
									With over three years of experience in the industry, we have a
									deep understanding of the unique requirements of our technical
									partners. Our team of experts is dedicated to delivering the
									highest quality products and solutions to support the success
									of your operations. Our systems are designed to withstand the
									toughest environments and provide mission-essential
									capabilities in even the most challenging conditions. TARS
									BINARY is committed to staying at the forefront of technology
									and innovation. It is constantly pushing the boundaries of
									what is possible to provide you with the latest and most
									advanced solutions.
									<br />
									<br />
									Choose GLADE IV for your software-defined radio needs, and
									benefit from decades of expertise and dedication to
									excellence. Contact us today to learn more and discuss your
									specific requirements.
								</p>
							</div>
						</div>
						{/* Card Container */}
						<div className=''>
							<div className='space-y-8 '>
								<div className='pt-8 flex flex-col'>
									<div className='grid grid-cols-12'>
										<div className='col-span-12 md:col-span-3 mb-0 md:mb-4 mr-4'>
											<img
												className='w-[10rem] mx-auto rounded-md object-contain'
												src={military1}
												alt='text'
											/>
										</div>
										<div className='col-span-12 md:col-span-9'>
											<div className='text-lg font-medium leading-6'>
												<h1 className='text-xl  text-gray-300 lg:text-2xl font-heading'>
													Glade IV (Military Grade Mission Operator Technology)
												</h1>
											</div>
											<div className='flex'>
												<hr className='mt-3 h-[0.1rem] bg-gradient-to-r   from-[#ff0000]   to-black border-0 w-full md:w-3/6 lg:w-11/12 '></hr>
											</div>
											<p className='mt-2 text-xs md:text-sm lg:text-base font-paragraph '>
												Glade 4 is an RC military rover designed to spy on an
												enemy or study a selected area thoroughly. This rover
												can be controlled remotely from a mobile control station
												(set in the designated area) and can explore the area in
												detail. This technology can monitor the site and the
												enemy forces while remaining undetected and unharmed.{' '}
												<span className='text-red-700'>[PDF]</span>
											</p>
										</div>
									</div>
									<div className='pt-8 flex flex-col md:flex-row'>
										<div className='grid grid-cols-12'>
											<div className='col-span-12 md:col-span-3 mb-0 md:mb-4 mr-4'>
												<img
													className='w-[10rem] mx-auto  rounded-md object-contain'
													src={surveillance1}
													alt='text'
												/>
											</div>
											<div className='col-span-12 md:col-span-9'>
												<div className='text-lg font-medium leading-6'>
													<h1 className='text-xl  text-gray-300 lg:text-2xl font-heading'>
														Surveillance Technology for Law Enforcement
													</h1>
												</div>
												<div className='flex'>
													<hr className='mt-3 h-[0.1rem] bg-gradient-to-r   from-[#ff0000]   to-black border-0 w-full md:w-3/6 lg:w-11/12 '></hr>
												</div>
												<p className='mt-2 text-xs md:text-sm lg:text-base font-paragraph '>
													TARS develops best-in-class technology to help
													government agencies detect and prevent a wide range of
													local and global threats. Our products help government
													intelligence and law-enforcement agencies use
													technology to meet encryption challenges to prevent
													and investigate terror and crime.{' '}
													<span className='text-red-700'>[PDF]</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Cyber Security Card */}
				<div className='cyber-security-card mt-10 rounded-lg'>
					<section
						className='relative bg-cover bg-no-repeat rounded-xl'
						style={{ backgroundImage: `url(${cyber})` }}
					>
						<div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-32'>
							<div className='max-w-xl text-center sm:text-left'>
								<h1 className='text-3xl font-bold sm:text-5xl font-heading'>
									Cyber Security
								</h1>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default DefenseProject;
