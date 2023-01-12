import React from 'react';
import bgAbout from '../../Assets/Images/bgAbout.jpg';
// import bgAbout2 from '../../Assets/Images/bgAbout2.jpg';
import learnIcon from '../../Assets/Images/learnIcon.png';
import logoWhite from '../../Assets/Images/logo-white.png';
import marketIcon from '../../Assets/Images/marketIcon.png';
import profileIcon from '../../Assets/Images/profileIcon.png';
import tarsIcon from '../../Assets/Images/tarsIcon.png';
import youtubeIcon from '../../Assets/Images/youtubeIcon.png';

const About = () => {
	window.scrollTo({ top: 0, left: 0 });

	return (
		<>
			{/* About page Container */}
			<div className='about-page-container'>
				<div
					className='hero min-h-screen bg-cover bg-fixed'
					style={{
						backgroundImage: `url(${bgAbout})`
					}}
				>
					{/* <div className='hero-overlay bg-opacity-60'></div> */}
					<div className='hero-content text-center text-neutral-content'>
						<div className='max-w-4xl  flex items-center justify-center flex-col'>
							<div
								className='w-[16rem] md:w-[20rem] lg:w-[24rem] mx-auto flex items-center justify-center h-screen my-auto'
								data-aos='zoom-in'
								data-aos-duration='1000'
							>
								<img src={logoWhite} alt='' className=' ' />
							</div>
							<div className='flex flex-col  items-center justify-center mb-96'>
								{/* <img src={logoWhite} alt='' className='h-48' /> */}
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-couriernew '>TARS BINARY</span> is a
									technology company working on designing and developing various
									DoD Projects, military mission control technology, and several
									projects in the military grade. The Project{' '}
									<span className='font-bankgothic'>“TARS UNIVERSE”</span> is
									also a popular project of{' '}
									<span className='font-couriernew '>TARS BINARY</span>
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-bankgothic'>“TARS UNIVERSE”</span> is
									the Universe of Engineering & Technology. In this online
									platform, students can get almost anything related to
									engineering and technology. It is named{' '}
									<span className='font-bankgothic'>UNIVERSE</span> because of
									its insane architecture of resource management systems ever
									designed before. This platform is designed for anyone
									interested to learn to engineer, create projects and love
									science fiction.
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-bold'>
										Universe Learn, Universe Market & Universe Entertainment
									</span>{' '}
									is the smart resource hub that made this platform enormous and
									resourceful in many brilliant perspectives. The overall
									architecture of the Universe Application is designed to show
									how curious students deserve and expect but can not explain.
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl   my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-couriernew '>TARS BINARY</span> focuses
									on technological development in education sectors and the most
									effective education in this Industrial Age.
								</p>
							</div>
							<div className='flex flex-col items-center justify-center  mb-96'>
								<h1
									className='font-heading text-lg md:text-xl lg:text-3xl xl:text-5xl text-red-700 mb-24 my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									Defense Projects
								</h1>
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl  my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-couriernew'>TARS BINARY</span> designs
									and manufactures highly complex Software Defined Radio (SDR)
									systems for gathering, analyzing, and sharing signals
									intelligence and other complex needs of the Intelligence,
									Defense, and Security Communities. We work in cutting-edge
									software-defined radio technology, and our advanced SDR
									systems provide unmatched versatility and performance for
									mission-critical applications.
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									With over three years of experience in the industry, we have a
									deep understanding of the unique requirements of our technical
									partners. Our team of experts is dedicated to delivering the
									highest quality products and solutions to support the success
									of your operations. Our systems are designed to withstand the
									toughest environments and provide mission-essential
									capabilities in even the most challenging conditions.
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-couriernew'>TARS BINARY</span> is
									committed to staying at the forefront of technology and
									innovation. It is constantly pushing the boundaries of what is
									possible to provide you with the latest and most advanced
									solutions.
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									Choose <span className='font-bold'>GLADE IV</span> for your
									software-defined radio needs, and benefit from decades of
									expertise and dedication to excellence. Contact us today to
									learn more and discuss your specific requirements.
								</p>
							</div>
							<div className='flex flex-col items-center justify-center  mb-96'>
								<h1
									className='font-bankgothic text-lg md:text-xl lg:text-3xl xl:text-5xl mb-24  my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									TARS UNIVERSE
								</h1>
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl  my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-bankgothic'>TARS UNIVERSE</span> is the
									Universe of Engineering & Technology. In this online platform,
									students can get almost anything related to engineering and
									technology. It is named{' '}
									<span className='font-bankgothic'>UNIVERSE</span> because of
									its insane architecture of resource management system ever
									designed before. This platform is designed for anyone
									interested to learn to engineer, create projects and love
									science fiction.
								</p>
								<br />
								<br />
								<p
									className='font-paragraph text-sm md:text-base lg:text-2xl my-auto'
									data-aos='fade-up'
									data-aos-duration='2000'
								>
									<span className='font-bold'>
										Universe Learn, Universe Market & Universe Entertainment
									</span>{' '}
									is the smart resource hub that made this platform enormous and
									resourceful in many brilliant perspectives. The overall
									architecture of the Universe Application is designed for
									curious students & gives them what they deserve and expect but
									can not explain.
								</p>
								<br />
								<br />
							</div>
							<div className='hero-content text-neutral-content py-20'>
								<div className=' flex flex-col items-center justify-center text-start '>
									{/* Card Container */}
									<div className='max-w-2xl mx-auto space-y-10 '>
										<section
											className=' text-white'
											data-aos='fade-up'
											data-aos-delay='600'
											data-aos-duration='1000'
										>
											<div className=' flex items-center justify-center space-x-6 '>
												<div className='w-24'>
													<img
														className='w-full rounded-md object-contain'
														src={profileIcon}
														alt='text'
													/>
												</div>
												<div className='w-full'>
													<p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
														Create a single Profile.
													</p>
												</div>
											</div>
										</section>
										<section
											className=' text-white'
											data-aos='fade-up'
											data-aos-delay='700'
											data-aos-duration='1000'
										>
											<div className=' flex items-center justify-center space-x-6'>
												<div className='w-24'>
													<img
														className='w-full rounded-md object-contain'
														src={learnIcon}
														alt='text'
													/>
												</div>
												<div className='w-full'>
													<p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
														Explore Universe Learn to learn engineering by
														watching robust video contents.
													</p>
												</div>
											</div>
										</section>
										<section
											className=' text-white'
											data-aos='fade-up'
											data-aos-delay='800'
											data-aos-duration='1000'
										>
											<div className=' flex items-center justify-center space-x-6'>
												<div className='w-24'>
													<img
														className='w-full rounded-md object-contain'
														src={marketIcon}
														alt='text'
													/>
												</div>
												<div className='w-full'>
													<p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
														Explore Universe Market to upload your projects, see
														others projects and find an intelligent shop to
														purchase and sell necessary engineering pieces.
													</p>
												</div>
											</div>
										</section>
										<section
											className=' text-white'
											data-aos='fade-up'
											data-aos-delay='900'
											data-aos-duration='1000'
										>
											<div className=' flex items-center justify-center space-x-6'>
												<div className='w-24'>
													<img
														className='w-full rounded-md object-contain'
														src={youtubeIcon}
														alt='text'
													/>
												</div>
												<div className='w-full'>
													<p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
														Explore Universe Entertainment to explore your
														favorite films, technology series, documentaries &
														so many Universe Entertainment Originals video
														contents you love and have been waiting for so long.
													</p>
												</div>
											</div>
										</section>
										<section
											className=' text-white'
											data-aos='fade-up'
											data-aos-delay='950'
											data-aos-duration='1000'
										>
											<div className=' flex items-center justify-center space-x-6'>
												<div className='w-24'>
													<img
														className='h-36 rounded-md object-contain'
														src={tarsIcon}
														alt='text'
													/>
												</div>
												<div className='w-full'>
													<p className='text-white text-sm md:text-base lg:text-xl font-paragraph'>
														Connect Engineering Volunteers & be an engineering
														volunteer to know what matters most in your society
														in technological development aspects and view other
														people's activities.
													</p>
												</div>
											</div>
										</section>
										{/* <section>
										<div className='space-y-8 lg:divide-y lg:divide-gray-100'>
											<div className='pt-8 flex items-center justify-center  '>
												<div className='w-48 mb-4 sm:mb-0 sm:mr-4 '>
													<img
														className='w-full rounded-md h-16 lg:w-16 object-cover'
														src={profileIcon}
														alt='text'
													/>
												</div>
												<div className='text-white'>
													<p className=' text-xs'>Create a single Profile.</p>
												</div>
											</div>
										</div>
									</section>
									<section>
										<div className='space-y-8 lg:divide-y lg:divide-gray-100'>
											<div className='pt-8 flex items-center justify-center  '>
												<div className='w-48 mb-4 sm:mb-0 sm:mr-4 '>
													<img
														className='w-full rounded-md h-16 lg:w-16 object-cover'
														src={learnIcon}
														alt='text'
													/>
												</div>
												<div className='text-white'>
													<p className=' text-xs'>
														Explore Universe Learn to learn engineering by
														watching robust video contents.
													</p>
												</div>
											</div>
										</div>
									</section>
									<section>
										<div className='space-y-8 lg:divide-y lg:divide-gray-100'>
											<div className='pt-8 flex items-center justify-center  '>
												<div className='w-48 mb-4 sm:mb-0 sm:mr-4 '>
													<img
														className='w-full rounded-md h-16 lg:w-16 object-cover'
														src={marketIcon}
														alt='text'
													/>
												</div>
												<div className='text-white'>
													<p className=' text-xs'>
														Explore Universe Market to upload your projects, see
														others projects and find an intelligent shop to
														purchase and sell necessary  engineering pieces.
													</p>
												</div>
											</div>
										</div>
									</section>
									<section>
										<div className='space-y-8 lg:divide-y lg:divide-gray-100'>
											<div className='pt-8 flex items-center justify-center  '>
												<div className='w-48 mb-4 sm:mb-0 sm:mr-4 '>
													<img
														className='w-full rounded-md h-16 lg:w-16 object-cover'
														src={youtubeIcon}
														alt='text'
													/>
												</div>
												<div className='text-white'>
													<p className=' text-xs'>
														Explore Universe Entertainment to explore your
														favorite films, technology series, documentaries &
														so many Universe Entertainment Originals video
														contents you love and have been waiting for so long.
													</p>
												</div>
											</div>
										</div>
									</section>
									<section>
										<div className='space-y-8 lg:divide-y lg:divide-gray-100'>
											<div className='pt-8 flex items-center justify-center  '>
												<div className='w-48 mb-4 sm:mb-0 sm:mr-4 '>
													<img
														className='w-full rounded-md h-16 lg:w-16 object-cover'
														src={tarsIcon}
														alt='text'
													/>
												</div>
												<div className='text-white'>
													<p className=' text-xs'>
														Connect Engineering Volunteers & be an engineering
														volunteer to know what matters most in your society
														in technological devel- opment aspects and view
														other people's activities.
													</p>
												</div>
											</div>
										</div>
									</section> */}
									</div>
									{/* App Store Buttons */}
									<div className='max-w-4xl mt-16 '>
										<div
											className='w-full p-2 md:p-28 text-center shadow-md  space-y-12 '
											data-aos='fade-up'
											data-aos-delay='1000'
											data-aos-duration='2000'
										>
											<h5 className='mb-5 text-xs md:text-sm lg:text-lg font-bold text-white font-heading'>
												The universe of engineering & technology is now in your
												pocket.
											</h5>

											<div className='items-center justify-center space-y-4 flex flex-col md:flex-row sm:space-y-0 sm:space-x-4 mb-5'>
												<a
													href='https://www.apple.com/store'
													className=' w-auto  border  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '
												>
													<svg
														className='mr-3 w-7 h-7'
														aria-hidden='true'
														focusable='false'
														data-prefix='fab'
														data-icon='apple'
														role='img'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 384 512'
													>
														<path
															fill='currentColor'
															d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
														></path>
													</svg>
													<div className='text-left'>
														<div className='mb-1 text-xs'>Download on the</div>
														<div className='-mt-1 font-sans text-sm font-semibold'>
															App Store
														</div>
													</div>
												</a>
												<a
													href='https://play.google.com/store/apps'
													className='w-auto border focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 '
												>
													<svg
														className='mr-3 w-7 h-7'
														aria-hidden='true'
														focusable='false'
														data-prefix='fab'
														data-icon='google-play'
														role='img'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 512 512'
													>
														<path
															fill='currentColor'
															d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'
														></path>
													</svg>
													<div className='text-left'>
														<div className='mb-1 text-xs'>Get in on</div>
														<div className='-mt-1 font-sans text-sm font-semibold'>
															Google Play
														</div>
													</div>
												</a>
											</div>
											<p className='mb-5 text-white text-sm font-paragraph'>
												Download the{' '}
												<span className='font-bankgothic '>TARS UNIVERSE</span>{' '}
												app from your Google Play Store and Apple App Store &
												turn on the internet & enjoy your wise word now.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
