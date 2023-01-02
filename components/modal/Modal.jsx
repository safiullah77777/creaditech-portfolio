import React, { FC, useState } from 'react';
import Button from '../button/Button';

const Modal = ({ data, showModal, setShowModal }) => {

	return (
		<>
			{showModal ? (
				<>
					<div className="fixed inset-0 z-[100940940] overflow-y-auto">
						<div
							className="fixed inset-0 h-full w-full bg-black/[0.7] "
							onClick={() => setShowModal(false)}
						></div>
						{/* <div className="flex h-[500px] z-[100000] bg-white rounded-[43px]  max-w-[863px] items-center px-4 py-8 ">
              <h2>salshajksahas</h2>
            </div> */}
						<div className="flex min-h-screen items-center px-4 py-8">
							<div className="relative mx-auto flex min-h-[50rem] w-[86rem] flex-col rounded-[43px] border-[5px] border-solid border-[#1E1E1E] bg-[#F2F2F2] p-[4rem] py-[6rem]    max-[600px]:w-[95%]  ">
								<button
									onClick={() => setShowModal(false)}
									className="absolute right-[2rem] top-[2rem]"
								>
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.5003 34.5832C15.2563 34.5855 13.0338 34.1451 10.9602 33.2874C8.88651 32.4297 7.00236 31.1714 5.41558 29.5846C3.8288 27.9978 2.57054 26.1137 1.71281 24.04C0.855093 21.9664 0.414753 19.7439 0.417001 17.4999V17.1582C0.485348 13.8089 1.53646 10.5535 3.4397 7.79658C5.34295 5.0397 8.01439 2.90291 11.122 1.65177C14.2297 0.400635 17.6365 0.0903271 20.919 0.759413C24.2015 1.4285 27.2151 3.04748 29.5851 5.41513C31.9763 7.80431 33.6049 10.8492 34.2649 14.1643C34.9249 17.4795 34.5866 20.9159 33.2927 24.0387C31.9989 27.1616 29.8078 29.8303 26.9966 31.7073C24.1854 33.5844 20.8806 34.5852 17.5003 34.5832V34.5832ZM17.5003 19.9086L21.9249 24.3332L24.3337 21.9245L19.9091 17.4999L24.3337 13.0753L21.9249 10.6665L17.5003 15.0911L13.0758 10.6665L10.667 13.0753L15.0916 17.4999L10.667 21.9245L13.0758 24.3332L17.5003 19.9103V19.9086Z"
											fill="#1E1E1E"
										/>
									</svg>
								</button>
								<div className="flex items-center justify-between max-[600px]:flex-col max-[600px]:gap-[1.3rem]">
									<p className="clash mr-[2rem] text-[3.5rem] font-600 leading-[80%] text-[#1E1E1E]">
										{data?.title}
									</p>
									<span className="flex-1 border-[1px] border-solid border-[#cccaca] max-[600px]:w-[148px]"></span>
									<p className="clash ml-[1rem] text-[2rem] font-600 leading-[80%] text-[#1E1E1E]">
										Job Description:
									</p>
								</div>
								<div className="mt-[2rem] flex gap-x-[3rem] max-[600px]:flex-col max-[600px]:gap-[2rem]">
									<div className="flex w-[45%] flex-col max-[600px]:w-full max-[600px]:flex-col">
										<p className="Montserrat text-[1.4rem] font-300 leading-[130%] text-[#5B5E71]">
											{data?.description}
										</p>

										<div className="mt-[3rem] flex max-w-[325px] cursor-pointer  flex-col rounded-[20px] border-[2px] border-solid border-[#1E1E1E] bg-[#F2F2F2] px-[2rem] py-[2rem] duration-300 ease-linear">
											<div className="flex items-center gap-[1rem]">
												<p className="clash text-[15px] font-500 text-[#1E1E1E]">
													Experience:{' '}
												</p>
												<p className="clash text-[15px] font-400 text-[#1E1E1E]/[0.5]">
													{data?.experience}
												</p>
											</div>

											<div className="flex items-center gap-[1rem]">
												<p className="clash text-[15px] font-500 text-[#1E1E1E]">
													Salary:{' '}
												</p>
												<p className="clash text-[15px] font-400 text-[#1E1E1E]/[0.5]">
													{data?.salary}
												</p>
											</div>

											<div className="flex items-center gap-[1rem]">
												<p className="clash text-[15px] font-500 text-[#1E1E1E]">
													Key Skills:{' '}
												</p>
												<p className="clash text-[15px] font-400 text-[#1E1E1E]/[0.5]">
													{data?.keySkills}
												</p>
											</div>


										</div>
									</div>
									<div className="flex-1 p-[1rem] pl-0 pt-0 ">
									<p className='text-[1.8rem] font-500 leading-[130%] text-[#000] mb-[1rem]'>{data?.line}</p>
										<ul className="flex flex-col pl-[2rem] gap-[.5rem]">
											{data?.responsibilities.map((point, index) => {
												if (index == data?.responsibilities?.length - 1) return;
												return (
													<li
														className="list-disc text-[1.5rem] font-300 leading-[130%] text-[#5B5E71]"
														key={index}
													>
														{point + ' .'}
													</li>
												);
											})}
										</ul>
									</div>
								</div>
								<div className="flex flex-col gap-y-[2rem]">
									<div className="mt-[4rem] flex items-center justify-between">
										<p className="clash mr-[3rem] text-[2rem] font-600 leading-[80%] text-[#1E1E1E] max-[600px]:mx-auto">
											Skills Required:
										</p>
										<span className="flex-1 border-[1px] border-solid border-[#cccaca] max-[600px]:hidden"></span>
									</div>
									<div className="flex items-center max-[600px]:flex-col">
										<div className="flex flex-wrap  gap-[2rem]  max-[600px]:gap-[1rem]  max-[400px]:justify-center  ">
											{data?.tags.map((item, index) => <span key={index} className="rounded-[9px]  bg-[#CECECE] px-[20px] py-[15px] text-[1.6rem] font-500 leading-[130%] text-[#1E1E1E] max-[600px]:h-[26px] max-[600px]:px-[10px] max-[600px]:py-[5px]">
												{item}
											</span>)}

										</div>
										{/* <Button
											classes="text-[#FFFFFF] max-[600px]:mt-[4rem] text-[1.8rem] font-500 leading-[80%] bg-[black] px-[3rem] py-[2rem] tracking-[0.02rem] border-[#5B5E71] ml-auto max-[600px]:mx-auto rounded-[11px]"
											title="Appy Now!"
										/> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default Modal;
