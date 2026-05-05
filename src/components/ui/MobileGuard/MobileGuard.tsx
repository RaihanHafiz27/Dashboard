import Image from "next/image";

export const MobileGuard = () => {
  return (
    <div className=" lg:hidden fixed inset-0 z-[9999] bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
      <div className="relative mb-6">
        <Image
          src={"/images/phone.png"}
          width={500}
          height={500}
          alt="ban"
          className="w-40 h-auto"
        />{" "}
        <Image
          src={"/images/ban.png"}
          width={500}
          height={500}
          alt="ban"
          className="absolute right-4 inset-y-1/2 w-16 h-auto animate-bounce"
        />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">
        Desktop Experience Only
      </h2>
      <p className="text-slate-400 max-w-sm leading-relaxed">
        This dashboard is designed for wide screens to ensure data accuracy and
        ease of navigation. Please access it via a tablet, laptop or PC.
      </p>
      <div className="mt-8 px-4 py-2 bg-slate-800 rounded-full text-xs text-slate-200 border border-slate-500">
        Minimum width: 1024px
      </div>
    </div>
  );
};
