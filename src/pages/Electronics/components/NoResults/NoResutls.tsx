import { WarningIcon } from "../../../../assets/icons";
import { NoResultImg } from "../../../../assets/images";

export const NoResults = () => {
  return (
    <div className="p-5  ">
      <div className="flex flex-col gap-3 md:flex-row justify-center">
        <img src={NoResultImg} alt="#" />
        <div className="flex flex-col rounded-md border-2 border-[#D9D9D9] gap-3 p-5 self-center">
          <p className="text-base font-semibold">No results were found for searching " Blue Sony Camera ".</p>
          <div className="flex">
            <WarningIcon />
            <p>
              We recommend you to search different clear key words to get the
              best result.
            </p>
          </div>
          <div className="flex">
            <WarningIcon/>
            <p>You can see the most related purchased products bellow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
