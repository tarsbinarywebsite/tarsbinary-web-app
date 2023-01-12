import React from 'react';
import director from '../../Assets/Images/director.jpg';

const DirectorNote = () => {
	window.scrollTo({ top: 0, left: 0 });
	return (
		<>
			{/* Director Note Container */}
			<div className='about-page-container mx-auto bg-zinc-800 pt-10'>
				<div className='pt-16 w-11/12 md:w-8/12 mx-w-4xl mx-auto pb-5 '>
					{/* Director Image */}
					<div className=' '>
						<div className=' lg:card-side  shadow-xl grid grid-cols-1 md:grid-cols-2  bg-white rounded-2xl  '>
							<figure className=''>
								<img
									src={director}
									alt='Album'
									className='object-cover rounded-xl'
								/>
							</figure>
							<div className='card-body flex items-center lg:items-start justify-center  text-center md:text-start -ml-0 md:-ml-10'>
								<div className=' flex flex-col '>
									<h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4'>
										Shafiq Bari
									</h2>
									<p className='text-lg md:text-base lg:text-xl xl:text-2xl font-light -mt-4'>
										Director & System Architect
									</p>
									<p className='text-xl md:text-2xl lg:text-2xl font-light font-couriernew -mt-1'>
										TARS BINARY
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className=''>
						<div className='bg-gray-50 my-8 rounded-2xl'>
							<div className='shadow-xl'>
								<div className='card-body col-span-10'>
									<p className=' text-xs md:text-base font-paragraph text-center md:text-left'>
										Technology is the future. Internet technology has become a
										giant container of time, and analog systems are converting
										themselves for being digital systems. It’s not only internet
										technology, it is our society, culture, education, life, and
										things that matter to us. This vast technology has to be
										maintained by suitable authorities. We technologists,
										entrepreneurs, engineers, volunteers, influencers, students,
										and everyone has to take the responsibility of maintaining
										the container. Whatever we create, upload, and explore does
										matter to this internet. Let’s be excellent digital creators
										& save the virtual media.
									</p>
								</div>
							</div>
						</div>
						<div className='bg-gray-50 my-8 rounded-2xl'>
							<div className='shadow-xl'>
								<div className='card-body col-span-10'>
									<p className=' text-xs md:text-base font-paragraph break-word text-center md:text-left'>
										Shafiq Bari is a technologist and system architect at{' '}
										<span className='font-couriernew'>TARS BINARY</span>. He is
										the founding director of{' '}
										<span className='font-couriernew'>TARS BINARY</span>. He is
										a motivator of high school students, a TARS ENGINEERING
										SCHOOL teacher, and the author of{' '}
										<span className='font-bold'>
											"The Rise of the World's Most Powerful Engineering
											Universe."
										</span>
										He has been working on designing software and cyber security
										system architecture for DoD Projects with various military
										mission control technologies. He has served as the national
										security support in the private field for the nation and
										democracy. Shafiq's work has sparked several institutions
										and fields and won some reputations with the highest honors.
										Shafiq is also a producer and writer of the film{' '}
										<span className='font-bold'>"The Dark Entity"</span>.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DirectorNote;
