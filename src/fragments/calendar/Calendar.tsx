import { DayPicker } from "react-day-picker";

export const Calendar = () => {
  return (
    <div className="flex flex-col bg-slate-50 p-4 space-y-2 rounded-sm  transition-all duration-300 ease-in-out">
      <h3 className="font-semibold text-gray-600 text-center text-lg border-b-2 border-gray-500 pb-2">
        Calendar
      </h3>
      <DayPicker
        animate
        mode="single"
        // navLayout="around"
        // fixedWeeks
        // showWeekNumber
        // selected={selected}
        // onSelect={setSelected}
        // footer={
        //   selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
        // }
        className="mx-auto grow  text-gray-600"
        classNames={{
          today: "text-sky-600",
          chevron: "fill-gray-600 hover:fill-gray-400",
          day: "text-sm",
        }}
      />
    </div>
  );
};
