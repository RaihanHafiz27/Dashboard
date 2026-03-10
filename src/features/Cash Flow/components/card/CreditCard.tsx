import Image from "next/image";
import CountUp from "react-countup";

export interface CreditCardProps {
  balance: number;
  card_holder: string;
  card_number: string;
  expiry_date: string;
  card_type?: string;
  bank_name?: string;
}

export const CreditCard = (props: CreditCardProps) => {
  const { balance, card_holder, card_number, expiry_date } = props;
  return (
    <div className="bg-gray-900 dark:bg-white p-6 rounded-2xl shadow-xl text-slate-200 dark:text-gray-700 relative overflow-hidden h-56 2xl:h-60 flex flex-col justify-between hover:scale-103 transition-all duration-300">
      <div className="flex justify-between items-center z-10">
        <div>
          <h5 className="text-gray-400 dark:text-gray-500 text-xs 2xl:text-sm uppercase">
            Balance
          </h5>
          <span className="flex items-center text-xl 2xl:text-2xl space-x-1">
            <p>$</p>
            <CountUp start={0} end={balance} duration={5} />
          </span>
        </div>
        <div className="w-9 h-9 2xl:w-10 2xl:h-10">
          <Image
            src={"/images/chip.png"}
            alt="chip"
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <p className="text-xs 2xl:text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
          Card Number
        </p>
        <p className="text-lg 2xl:text-xl font-mono tracking-widest">
          {card_number || "**** **** **** ****"}
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-xs uppercase">
            Card Holder
          </p>
          <p className="tracking-wider text-sm 2xl:text-base">{card_holder}</p>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-xs uppercase">
            Valid Thru
          </p>
          <p className="tracking-wider text-sm 2xl:text-base">{expiry_date}</p>
        </div>
      </div>
    </div>
  );
};
