import React from 'react';
// import administration from '../../Assets/Images/administration.png';
import document from '../../Assets/Images/document.jpg';

const Administration = () => {
	window.scrollTo({ top: 0, left: 0 });
	return (
		<>
			{/* Administration Container */}
			<div className='administration-container pt-2'>
				{/* Header Card */}
				<div className=''>
					<img
						src={document}
						alt=''
						className='w-full h-[15rem] md:h-[25rem] lg:h-[30rem]'
					/>
				</div>
				{/* <section
					className='relative  bg-cover bg-center bg-no-repeat '
					style={{
						backgroundImage: `url(${administration})`
					}}
				>
					<div className='relative   px-4 py-16 flex  items-center justify-center '>
						<div className='max-w-xl text-center sm:text-left'>
							<h1 className='text-3xl font-bold sm:text-5xl text-white font-heading'>
								Administration
							</h1>
						</div>
					</div>
				</section> */}
				{/* Text Card */}
				<div className='bg-gray-900 text-white py-12 px-8 lg:px-24'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl mb-3 font-heading'>
						Administration
					</h1>
					<p className='font-paragraph text-justify'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						vo- lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
						consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
						velit esse molestie consequat, vel illum dolore eu feugiat nulla
						facilisis at vero eros et ac- cumsan et iusto odio dignissim qui
						blandit praesent luptatum zzril delenit augue duis dolore te feugait
						nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
						elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
						magna aliquam erat vo- lutpat. Ut wisi enim ad minim veniam, quis
						nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
						ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
						adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
						dolore magna aliquam erat vo- lutpat. Ut wisi enim ad minim veniam,
						quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
						aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
						hendrerit in vulputate velit esse molestie consequat, vel illum
						dolore eu feugiat nulla facilisis at vero eros et ac- cumsan et
						iusto odio dignissim qui blandit praesent luptatum zzril delenit
						augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
						amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod
						tincidunt ut laoreet dolore magna aliquam erat vo-
					</p>
				</div>
				{/* <div className='px-5 py-5 lg:px-0 md:py-10 mx-auto w-full md:w-9/12 lg:w-8/12 '>
					<div className='bg-[#eceded] rounded-xl shadow-lg '>
						<p className='p-5 md:p-10 lg:p-16 text-justify'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
							excepturi temporibus quis non, praesentium enim recusandae ipsa
							quaerat magni incidunt distinctio ducimus omnis debitis aut
							quibusdam harum ad vitae eius laboriosam quia reprehenderit
							laudantium dolorum deserunt sunt. Minus itaque minima, veritatis
							enim aliquid incidunt rerum consequuntur dolorum deserunt facilis
							modi at nam quia? Sed officia voluptatum illo id maiores corporis
							sint optio pariatur, eius molestiae cum laboriosam cumque possimus
							aut rerum ut nostrum in nam voluptates tempore. Maxime recusandae
							ratione minima saepe omnis beatae asperiores dicta molestiae
							tempore quam mollitia provident facere adipisci amet, laborum
							consequatur ex expedita, excepturi similique, illo ipsum ducimus
							culpa. Beatae quae repudiandae officiis dignissimos! Vitae
							molestiae maiores neque iusto earum commodi quas, debitis, libero,
							qui magni amet labore tenetur dolores quidem? Aspernatur illo ipsa
							ratione consequuntur fuga placeat eos maxime nesciunt eligendi! Ab
							atque quia impedit? Inventore omnis deleniti, asperiores a
							adipisci, expedita corrupti repudiandae ea, quis animi itaque eum
							numquam. Earum accusantium sunt deserunt blanditiis similique hic
							aut harum, esse qui temporibus accusamus, exercitationem iusto
							cumque molestiae quae architecto tempora eveniet atque distinctio
							laborum maiores inventore dicta error at! Aliquid, magni dolor
							quibusdam odit est ipsam autem eum repellendus consectetur magnam
							error a perferendis, minima ipsa quaerat, possimus vitae labore!
							Quia magnam sed nemo velit vitae recusandae pariatur natus libero
							laudantium maiores facere aspernatur, cum mollitia quisquam?
							Beatae, laborum. Voluptatum, id assumenda! Perspiciatis aperiam
							molestiae blanditiis earum numquam tempora veniam voluptate
							cumque! Odit dicta aspernatur necessitatibus, esse est architecto
							placeat non nisi amet saepe consequuntur quo labore sint ratione
							sunt excepturi molestiae ipsum quidem eius ea nostrum adipisci
							ducimus impedit blanditiis. Delectus accusamus mollitia quam
							fugiat quaerat, ullam sunt ratione voluptates, fuga commodi est
							hic. Enim excepturi ex assumenda esse, facilis, obcaecati placeat
							rerum illum ducimus, laboriosam odit soluta praesentium. Culpa
							tempore labore itaque!
						</p>
					</div>
				</div> */}
				{/* <div className='bg-[#333333]'>
					<div className='w-11/12 md:w-8/12 mx-w-4xl mx-auto pb-5  '>
						<div className='bg-[#333333] py-10 '>
							{/* Director Image 
							<div className=' '>
								<div className=' lg:card-side  shadow-xl grid grid-cols-1 md:grid-cols-2  bg-white rounded-2xl  '>
									<figure className=''>
										<img
											src={director}
											alt='Album'
											className='object-cover rounded-xl'
										/>
									</figure>
									<div className='card-body flex items-start lg:items-start justify-center  text-start -ml-0 md:-ml-10'>
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
						</div>
						<div className='bg-[#333333] pb-10 '>
							{/* Director Image 
							<div className=' '>
								<div className=' lg:card-side  shadow-xl grid grid-cols-1 md:grid-cols-2  bg-white rounded-2xl  '>
									<figure className=''>
										<img
											src={director}
											alt='Album'
											className='object-cover rounded-xl'
										/>
									</figure>
									<div className='card-body flex items-start lg:items-start justify-center  text-start -ml-0 md:-ml-10'>
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
						</div>
					</div>
				</div> */}
			</div>
		</>
	);
};

export default Administration;
