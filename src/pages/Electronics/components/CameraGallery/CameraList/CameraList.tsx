import { SideArrowLeft, SideArrowRight } from "../../../../../assets/icons";
import { CameraData } from "../../../../../utils/DummyData/DummyData";
import { CameraCard } from "./CameraCard/CameraCard";

export const CameraList = () => {
  return (
    <div className="flex justify-between items-center md:p-[50px] xl:p-[90px] ">
      <SideArrowLeft />
      <div className="flex justify-center gap-1">
        {CameraData.map((card, index) => (
          <CameraCard key={index} {...card} />
        ))}
      </div>
      <SideArrowRight />
    </div>
  );
};
