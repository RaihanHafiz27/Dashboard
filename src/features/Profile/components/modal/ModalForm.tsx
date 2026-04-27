import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalForm = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <div className="fixed min-h-screen inset-0  bg-black/50 z-[1000] grid place-items-center p-4 md:p-6 overflow-y-auto">
      <div className="w-full max-w-3xl flex flex-col bg-slate-100 p-4 rounded-xl shadow-2xl my-auto max-h-[90vh]">
        {/* Header: Dibuat tetap di atas (sticky-like) */}
        <div className="flex justify-between items-center shrink-0 p-4">
          <h2 className="font-bold text-xl text-slate-700 tracking-wide">
            Edit Profile
          </h2>
          <button
            onClick={onClose}
            className="hover:bg-slate-200 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Area*/}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar ">
          {children}
        </div>
        {/* Footer*/}
        <div className="shrink-0 flex justify-end gap-x-4 mt-4">
          <button
            onClick={onClose}
            className="border-2 border-gray-300 text-gray-500 text-sm px-6 py-2 rounded-lg hover:text-violet-700 hover:border-violet-600 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button className="bg-violet-600 text-slate-100 text-sm px-6 py-2 rounded-lg  hover:bg-violet-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
