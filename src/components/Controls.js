import { useState } from "react";
import { dayNames } from "../utils";

export const Controls = ({ onTitleSend, onNumDaysSend, onStartDaySend }) => {
  const [numDays, setNumDays] = useState(31);
  const [startDay, setStartDay] = useState(0);
  const [customTitle, setCustomTitle] = useState("");
  const sendTitle = (e) => {
    e.preventDefault();
    setCustomTitle(e.target.value);
    onTitleSend(e.target.value);
  };
  const sendNumDays = (e) => {
    const days = parseInt(e.target.value) || 1;
    e.preventDefault();
    setNumDays(days);
    onNumDaysSend(days);
  };
  const sendStartDay = (e) => {
    const day = parseInt(e.target.value);
    e.preventDefault();
    setStartDay(day);
    onStartDaySend(day);
  };

  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Create Custom Calendar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Month Title
          </label>
          <input
            type="text"
            value={customTitle}
            onChange={sendTitle}
            placeholder="Custom Month"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Days (1 - 31)
          </label>
          <input
            type="text"
            value={numDays}
            onChange={sendNumDays}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Day
          </label>
          <select
            value={startDay}
            onChange={sendStartDay}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {dayNames.map((day, index) => (
              <option key={index} value={index}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
