import Image from "next/image";
import Link from "next/link";

const custom404 = () => {
  return (
    <div className="w-full h-[70vh] grid place-items-center">
      <div className="text-center">
        <Image
          src={"/images/error.svg"}
          width={500}
          height={500}
          alt="not-found"
          className="w-full h-full 2xl:w-96 2xl:h-96"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-semibold text-gray-700 capitalize text-xl">
              page not found
            </p>
            <p className="text-gray-500 capitalize text-sm">
              look like you&apos;re lost
            </p>
          </div>
          <Link
            href={"/dashboard"}
            className=" bg-blue-500 hover:bg-blue-700 px-4 py-1.5 rounded-sm text-slate-200"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default custom404;
