import { daysHeader, generateCalendar } from "../utils";

export const Calendar = ({ numDays, startDay, title }) => {
  const weeks = generateCalendar(numDays, startDay);

  return (
    <div className="mb-8 p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="inline-block bg-white border rounded shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-7 bg-blue-100 border-b">
          {daysHeader.map((day) => (
            <div
              key={day}
              className="p-2 text-center font-medium text-gray-700 w-10"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar body */}
        <div>
          {weeks.map((week, weekIndex) => (
            <div
              key={weekIndex}
              className="grid grid-cols-7 border-b last:border-b-0"
            >
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="w-10 h-10 flex items-center justify-center text-sm border-r last:border-r-0 hover:bg-blue-50"
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
