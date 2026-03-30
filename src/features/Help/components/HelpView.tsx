import {
  faqItems,
  glossaryItems,
  troubleshootingItems,
} from "../constant/question";
import { QuestionSection } from "./question/QuestionSection";

export const HelpView = () => {
  return (
    <div className={`min-h-screen bg-slate-100 dark:bg-slate-900 `}>
      <div className="p-6 2xl:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1
            className={`text-4xl font-bold text-slate-700 dark:text-slate-200 mb-4 text-center`}
          >
            Help Center
          </h1>
          <p className={`text-center text-slate-600 dark:text-slate-400`}>
            Find answers to common questions and troubleshoot issues.
          </p>
        </div>

        {/* Most Question */}
        <div
          className={`my-6 p-4 rounded-lg border-l-4 border-red-500 bg-red-100 dark:bg-red-900/20 space-y-2`}
        >
          <h3 className="text-slate-700 dark:text-slate-200 font-semibold">
            💡 PDF Download Tip:
          </h3>
          <p className={`text-sm text-slate-600 dark:text-slate-400`}>
            If you cannot download PDF files, please check your popup blocker
            settings. PDF exports often open in new windows. Disable the popup
            blocker for this site in your browser settings.
          </p>
        </div>

        {/* Questions Sections */}
        <div className="space-y-8">
          <QuestionSection title="faq" items={faqItems} />
          <QuestionSection title="glossary" items={glossaryItems} />
          <QuestionSection
            title="troubleshooting"
            items={troubleshootingItems}
          />
        </div>

        {/* Footer Support */}
        <div
          className={`mt-8 rounded-lg p-6 border-l-4 border-sky-500 bg-sky-100 dark:bg-sky-900/20`}
        >
          <h3
            className={`text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2`}
          >
            Still need help?
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            If you cannot find the answer you're looking for, please contact our
            support team at support@dashboard.com or reach out to your
            administrator.
          </p>
        </div>
      </div>
    </div>
  );
};
