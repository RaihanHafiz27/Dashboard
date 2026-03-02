import { DayPicker } from "react-day-picker";

export const Calendar = () => {
  return (
    <div className="flex flex-col bg-slate-100 dark:bg-transparent p-4 space-y-2 border rounded-sm  transition-all duration-300 ease-in-out">
      <h3 className="font-semibold text-gray-600 text-center text-lg border-b-2 border-gray-300 pb-2">
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
        className=" mx-auto grow  text-gray-600"
        classNames={{
          today: "text-sky-600",
          chevron: "fill-gray-600 hover:fill-gray-400",
          day: "text-xs", // kecilkan angka tanggal
          // caption_label: "text-sm", // kecilkan judul bulan
          head_cell: "text-xs", // Mon Tue Wed...
        }}
      />
    </div>
  );
};
