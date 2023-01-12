import React from 'react';
import * as MDIcons from 'react-icons/md';
import { Link } from 'react-router-dom';
import entertainment from '../../Assets/Images/entertainment.jpg';
import entertainment1 from '../../Assets/Images/entertainment1.jpg';

const Entertainment = () => {
	return (
		<>
			{/* Entertainment Container */}
			<div className='entainment-container mt-1'>
				<div
					className=' min-h-screen bg-cover bg-center  bg-no-repeat w-full py-20 hidden md:block'
					style={{
						backgroundImage: `url(${entertainment})`
					}}
				>
					<div className='w-full h-screen text-center text-neutral-content  items-center justify-end  flex -mt-32'>
						<div className='w-full md:w-[24rem] lg:w-[35rem] xl:w-[42rem] pr-0 xl:pr-24'>
							<h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-bankgothic font-extrabold'>
								UNIVERSE ENTERTAINMENT
							</h1>
							<p className='mb-5 px-2 md:px-4 lg:px-12 xl:px-24  '>
								This is our production house. Here, we make our original
								Documentary, Science Fiction Movie, Science Fiction Short Drama,
								Educational Web Series, and much more exciting content.
							</p>
							<div className='flex items-center justify-center gap-4'>
								<div className='flex items-center justify-center'>
									<label
										htmlFor='my-modal-5'
										className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
									>
										Learn more
									</label>
									<span className='ml-1'>
										<MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
									</span>
								</div>
								<div className='flex items-center justify-center'>
									<Link
										to='/tars-universe'
										className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
									>
										Explore
									</Link>
									<span className='ml-1'>
										<MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className=' min-h-screen bg-cover bg-center  bg-no-repeat w-full py-20 block md:hidden'
					style={{
						backgroundImage: `url(${entertainment1})`
					}}
				>
					<div className='w-full h-screen text-center text-neutral-content  items-start justify-end  flex -mt-12'>
						<div className='w-full md:w-[24rem] lg:w-[35rem] xl:w-[42rem] pr-0 xl:pr-24'>
							<h1 className='mb-5 text-3xl md:text-4xl lg:text-5xl font-bankgothic font-extrabold px-2'>
								UNIVERSE ENTERTAINMENT
							</h1>
							<p className='mb-5 text-xs px-5 md:px-8 lg:px-12 xl:px-24  '>
								This is our production house. Here, we make our original
								Documentary, Science Fiction Movie, Science Fiction Short Drama,
								Educational Web Series, and much more exciting content.
							</p>
							<div className='flex items-center justify-center gap-4'>
								<div className='flex items-center justify-center'>
									<a
										href='/'
										className=' link-secondary text-blue-600  text-base lg:text-lg font-link font-bold'
									>
										Learn more
									</a>
									<span className='ml-1'>
										<MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
									</span>
								</div>
								<div className='flex items-center justify-center'>
									<a
										href='/'
										className=' link-secondary text-blue-600 text-base lg:text-lg font-link font-bold'
									>
										Learn more
									</a>
									<span className='ml-1'>
										<MDIcons.MdKeyboardArrowRight className='text-xs font-extralight text-blue-600' />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Modal Container */}

			<label htmlFor='my-modal-5'>
				<input type='checkbox' id='my-modal-5' className='modal-toggle' />
				<div className='modal'>
					<div className='modal-box w-full lg:w-6/12 max-w-5xl'>
						<h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center font-bankgothic'>
							TARS UNIVERSE
						</h3>
						<p className='p-6 text-justify font-paragraph'>
							<span className='font-bankgothic'>“TARS UNIVERSE”</span> is the
							Universe of Engineering & Technology. In this online platform,
							students can get almost anything related to engineering and
							technology. It is named UNIVERSE because of its insane
							architecture of resource management systems ever designed before.
							This platform is designed for anyone interested to learn to
							engineer, create projects and love science fiction. Universe
							Learn, Universe Market & Universe Entertainment is the smart
							resource hub that made this platform enormous and resourceful in
							many brilliant perspectives. The overall architecture of the
							Universe Application is designed for curious students & gives them
							what they deserve and expect but can not explain. Once you are
							connected to the universe, you explore the next generation's
							learning techniques, technology, and the future, and we believe
							life is short. We must be a little faster to sustain ourselves in
							this industrial age.
						</p>
						<div className='modal-action'>
							{/* <label htmlFor='my-modal-5' className='btn'>
							Yay!
						</label> */}
						</div>
					</div>
				</div>
			</label>
		</>
	);
};

export default Entertainment;
