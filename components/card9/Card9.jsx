
const Card9 = ({ data, setShowModal, onPress ,index}) => {
  return (
    <div
      onClick={() => { setShowModal(true); onPress(index) }}
      className="flex relative w-[45rem] pb-[4rem] min-h-[26rem] max-[450px]:min-w-[303px]  max-[400px]:w-[303px]  max-[500px]:max-w-[333px] cursor-pointer  flex-col rounded-[2rem] border-[2px] border-solid border-[#1E1E1E] bg-[#F2F2F2] px-[3rem] py-[2rem] duration-300 ease-linear hover:shadow-cardShadow"
    >
      <p className="clash text-[35px] max-[500px]:text-[2.8rem] font-500 leading-[100%] text-[#1E1E1E]">
        {data?.title}
      </p>
      <h4 className="clash mb-[3rem] text-[2rem] max-[500px]:text-[2.2rem] font-400 leading-[100%] text-[#303030]/[0.5]">
        {data?.job}
      </h4>
      <div className="flex items-center gap-2">
        <p className="clash text-[2rem] max-[500px]:text-[2.2rem] font-500 text-[#1E1E1E]">
          Experience:{" "}
        </p>
        <p className="clash text-[2rem] max-[500px]:text-[2.2rem] font-400 text-[#1E1E1E]/[0.5]">
          {data?.experience}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="clash text-[2rem] max-[500px]:text-[2.2rem] font-500 text-[#1E1E1E]">Salary: </p>
        <p className="clash text-[2rem] max-[500px]:text-[2.2rem] font-400 text-[#1E1E1E]/[0.5]">
          {data?.salary}
        </p>
      </div>
      <div className="flex items-start  gap-2">
        <p className="clash min-w-[10rem] text-[2rem] max-[500px]:text-[2.2rem] font-500 text-[#1E1E1E]">
          Key Skills:{" "}
        </p>
        <p className="clash mt-[.6rem] leading-[100%] text-[2rem] max-[500px]:text-[2.2rem] font-400 text-[#1E1E1E]/[0.5]">
          {data?.keySkills}
        </p>
      </div>

      <p className="mt-[2rem] absolute bottom-[1rem] left-[3rem] cursor-pointer text-[1.4rem] max-[500px]:text-[1.8rem] font-400 text-[#0377BC]">
        See complete Job description &#8594;
      </p>
    </div>
  );
};

export default Card9;
