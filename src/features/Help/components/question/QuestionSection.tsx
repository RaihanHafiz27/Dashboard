import {
  AlertCircle,
  BookOpen,
  ChevronDown,
  Download,
  Eye,
  HelpCircle,
} from "lucide-react";
import { ReactNode, useState } from "react";

interface QuestionsSectionProps {
  title: IconType;
  items: QuestionItems[];
}

export interface QuestionItems {
  id: number;
  question: string;
  answer: string;
}

export type IconType = "faq" | "glossary" | "troubleshooting";

export const QuestionSection = (props: QuestionsSectionProps) => {
  const { items, title } = props;
  const [expanded, setExpanded] = useState<number | null>(null);

  const IconMap: Record<IconType, ReactNode> = {
    faq: <HelpCircle className="text-blue-500" size={28} />,
    glossary: <BookOpen className="text-emerald-500" size={28} />,
    troubleshooting: <AlertCircle className="text-red-500" size={28} />,
  };

  return (
    <div
      className={`rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700`}
    >
      <div className="flex items-center gap-3 mb-6">
        {IconMap[title]}
        <h2
          className={`text-2xl font-bold text-slate-700 dark:text-slate-200 ${title === "faq" ? "uppercase" : "capitalize"}`}
        >
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-md hover:scale-103 transition-all duration-300 `}
          >
            <button
              onClick={() => setExpanded(expanded === item.id ? null : item.id)}
              className={`w-full px-4 py-3 flex items-center justify-between cursor-pointer`}
            >
              <span
                className={`font-semibold text-slate-600 dark:text-slate-200 text-left `}
              >
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  expanded === item.id ? "rotate-180" : ""
                } text-slate-600 dark:text-slate-400`}
              />
            </button>
            {expanded === item.id && (
              <>
                {title === "troubleshooting" ? (
                  <div
                    className={`px-4 py-3 bg-slate-100 dark:bg-slate-700 border-t border-slate-200 dark:border-slate-700`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        {item.id === 1 || item.id === 2 ? (
                          <Eye
                            className="text-red-500 flex-shrink-0 mt-0.5"
                            size={18}
                          />
                        ) : (
                          <Download
                            className="text-blue-500 flex-shrink-0 mt-0.5"
                            size={18}
                          />
                        )}
                        <p className={"text-slate-600 dark:text-slate-400"}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`px-4 py-3 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700`}
                  >
                    <p className={`text-slate-600 dark:text-slate-400`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
