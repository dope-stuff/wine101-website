export default function Consultant(){
    const guestNumbers = ['150', '200', '250', '300', '300++']
    return       <div className="w-full h-full flex-row flex items-center flex-wrap md:flex-nowrap justify-evenly gap-10 text-center bg-[#81CF8A] p-8 pb-12 mb-10 md:mb-4 relative">
    <div className="flex-col flex text-center text-[54px]">
      <div>1o1 wedding</div>
      <div>consultant</div>
    </div>
    <div className="flex flex-col items-center justify-center my-4">
      <div className="text-[30px] mb-4 uppercase">How many guests?</div>
      <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
        {guestNumbers.map((g, i) => (
          <div
            key={i}
            className="bg-white uppercase border border-black rounded-full py-1 px-10 text-[18px]"
          >
            {g}
          </div>
        ))}
      </div>
      <div className="text-[30px] mb-4 uppercase">venue style</div>
      <div className="flex-row flex gap-x-8 gap-y-4 max-w-[500px] flex-wrap justify-center">
        <div className="bg-white uppercase border border-black rounded-full py-1 px-10 text-[18px]">
          indoor
        </div>
        <div className="bg-white uppercase border border-black rounded-full py-1 px-10 text-[18px]">
          outdoor
        </div>
      </div>
      <button className="uppercase border border-black bg-primary px-4 py-1 text-white text-[48px] rounded-full absolute bottom-[-2.7rem]">
        consult
      </button>
    </div>
  </div>
}