
import React from "react";
import { Calendar } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="bg-blue-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
          <Calendar className="h-6 w-6" />
        </div>
        <div className="h-full w-0.5 bg-blue-200"></div>
      </div>
      <div className="pt-1 pb-8">
        <div className="text-blue-700 font-bold text-lg">{year}</div>
        <div className="font-semibold text-xl text-blue-900 mb-2">{title}</div>
        <div className="text-gray-700">{description}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
