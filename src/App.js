import "./styles.css";
import { useState } from "react";
import { Calendar } from "./components/Calendar";
import { Controls } from "./components/Controls";

export default function App() {
  const [title, setTitle] = useState("Custom Month");
  const [startDay, setStartDay] = useState(0);
  const [numDays, setNumDays] = useState(31);

  const handleTitleData = (data) => setTitle(data);
  const handleNumDaysData = (data) => setNumDays(data);
  const handleStartDayData = (data) => setStartDay(data);

  return (
    <div className="App max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Calendar Generator
      </h1>
      <Controls
        onTitleSend={handleTitleData}
        onNumDaysSend={handleNumDaysData}
        onStartDaySend={handleStartDayData}
      />
      <Calendar numDays={numDays} startDay={startDay} title={title} />
    </div>
  );
}
