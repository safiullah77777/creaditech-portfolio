import React from 'react';
import Button from '../button/Button';

const PriceCard = () => {
	return (
		<div className=" card-price flex w-[424px]  rounded-[10px] border-[2px] border-solid ">
			<div className="flex w-full flex-col items-center justify-center  px-[5rem] py-[3rem]">
				<h2 className="text-[16px] max-[500px]:text-[12px] font-300 leading-[100%] text-[#000000] ">
					WORDMARK / LETTERMARK
				</h2>
				<h2 className="text-[16px] font-[300] text-[#000000] ">
					LOGO DESIGN ONLY
				</h2>

				<h2 className="clash py-[1rem] text-center text-[35px] font-[500] leading-[80%] text-[#000000] ">
					Silver Package
				</h2>
				<h2 className="clash pb-[2rem] text-center text-[35px] font-[500] leading-[80%] text-[#C6CED3]  ">
					US$99
				</h2>

				<ul className="w-full ">
					<li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
						1 Logo design
					</li>
					<li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
						3 Redesigned Concepts
					</li>
					<li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
						1 Day turnaround time
					</li>
					<li className=" border-[rgb(198, 206, 211)] w-full border-t-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
						You own all design rights
					</li>
					<li className="border-[rgb(198, 206, 211)] mb-[3rem] w-full border-y-[1px] border-solid py-[1rem] text-center text-[16px] font-300 text-[#000000] ">
						Files supplied in all format
					</li>
				</ul>
				<Button title="Order Now" classes="" />
			</div>
		</div>
	);
};

export default PriceCard;
