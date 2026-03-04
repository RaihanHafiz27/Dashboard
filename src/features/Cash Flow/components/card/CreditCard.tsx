import Image from "next/image";

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
    // bg-gray-900 dark:bg-gradient-to-r dark:from-indigo-700 dark:to-sky-700
    // bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-700 dark:bg-none dark:bg-gray-700
    <div className="bg-gray-900 dark:bg-white p-6 rounded-2xl shadow-xl text-slate-200 dark:text-gray-700 relative overflow-hidden h-56 flex flex-col justify-between hover:scale-103 transition-all duration-300">
      <div className="flex justify-between items-center z-10">
        <div>
          <h5 className="text-gray-400 dark:text-gray-500 text-xs uppercase">
            Balance
          </h5>
          <p className="text-xl">$ {balance.toLocaleString("en-US")}</p>
        </div>
        <div className="w-10 h-10">
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
        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
          Card Number
        </p>
        <p className="text-lg font-mono tracking-widest">
          {card_number || "**** **** **** ****"}
        </p>
      </div>
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-xs uppercase">
            Card Holder
          </p>
          <p className="tracking-wider">{card_holder}</p>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-xs uppercase">
            Valid Thru
          </p>
          <p>{expiry_date}</p>
        </div>
      </div>
    </div>
  );
};
