import { CiCalendar } from "react-icons/ci";
import { format } from "date-fns";

interface DateCardProps {
  startDate: Date;
  endDate: Date;
}

const DateCard: React.FC<DateCardProps> = ({ startDate, endDate }) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 bg-primary-border">
        <CiCalendar className="text-neutral-100 w-5 h-5 mr-2" />
        <span className="text-neutral-100">
          {format(startDate, "d MMM yyyy")}
        </span>
      </div>
      <span className="mx-4 text-2xl">-</span>
      <div className=" flex items-center border border-gray-300 rounded-lg px-2 py-1 bg-primary-border">
        <CiCalendar className="text-neutral-100 w-5 h-5 mr-2" />
        <span className="text-neutral-100">
          {format(endDate, "d MMM yyyy")}
        </span>
      </div>
    </div>
  );
};

export default DateCard;
