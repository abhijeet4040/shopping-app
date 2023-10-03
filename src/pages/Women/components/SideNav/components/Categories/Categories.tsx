import {
  
  DownArrow,
} from "../../../../../../assets/icons";



export const Categories = () => {
  

  

  return (
    <div className="flex flex-col w-[263px] gap-5 p-5">
      
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-[14px] font-bold">BRAND</p>
          <DownArrow />
        </div>
        <div>
          <input
            className="text-[#9D9D9D] max-w-[-webkit-fill-available] border-2 p-2 outline-none rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="h-[2px] bg-[#D9D9D9]"></div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
        <p className="text-[14px] font-bold">MODEL</p>
        <DownArrow/>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex text-sm text-[#555555] justify-between">
            <p>Short</p>
            <p>60</p>
          </div>
          <div className="flex text-sm text-[#555555] justify-between">
            <p>Mid-Length</p>
            <p>10</p>
          </div>
          <div className="flex text-sm text-[#555555] justify-between">
            <p>Sweater</p>
            <p>56</p>
          </div>
          <div className="flex text-sm text-[#555555] justify-between">
            <p>Party Dresses</p>
            <p>80</p>
          </div>
          <div className="flex text-sm text-[#555555] justify-between">
            <p>Regular fit</p>
            <p>100</p>
          </div>
          <div className="h-[2px] bg-[#D9D9D9]"></div>
        </div>
        
      </div>
    </div>
  );
};
