import Image from "next/image";

const prof = [
  "/images/woman-2.png",
  "/images/man-1.png",
  "/images/man-2.png",
  "/images/woman-6.png",
];

export const ModalPremium = ({
  isOpenPrem,
  setIsOpenPrem,
}: {
  isOpenPrem: boolean;
  setIsOpenPrem: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isOpenPrem) return null;

  return (
    <div className="bg-black/40 fixed inset-0 z-50 grid place-items-center">
      <div className="bg-sky-100 dark:bg-gray-800 w-96 h-[40vh] lg:h-[80vh] 2xl:h-[55vh] py-2 rounded-4xl flex flex-col">
        <div className="grow flex flex-col justify-center items-center p-6 space-y-6">
          <Image
            src={"/images/sparkle.png"}
            alt="sparkle"
            width={500}
            height={500}
            className="w-1/4 2xl:w-1/3 h-auto"
          />
          <div className="text-center space-y-2">
            <h2 className="text-2xl text-gray-700 dark:text-gray-300">
              Greate find! You've unlocked a premium feature!
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Upgrade to enjoy all the extra features.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-500 w-full flex py-2 px-1 rounded-md">
            <div className="relative flex items-center w-28 h-10">
              {prof.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  width={100}
                  height={100}
                  alt="friends"
                  className="w-9 h-9 rounded-2xl absolute left-0"
                  style={{ left: `${index * 23}px` }} // jarak tumpang tindih
                />
              ))}
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                +5 Friend are already premium!
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enhance your experience now
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-4">
            <button
              disabled
              className="bg-sky-600 hover:bg-sky-700 text-slate-200 py-2 rounded-2xl cursor-not-allowed"
            >
              Upgrade
            </button>
            <button
              onClick={() => setIsOpenPrem(!isOpenPrem)}
              className="text-sky-600 hover:text-sky-700 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="bg-sky-600  h-1.5 w-1/2 mx-auto rounded-md"></div>
      </div>
    </div>
  );
};
