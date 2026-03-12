import { usePDF } from "@react-pdf/renderer";
import { Printer } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Transactions } from "../../types/Cashflow.type";
import { CashFlowPdf } from "./CashFlowPdf";

export const CashFlowReportAction = ({ data }: { data: Transactions[] }) => {
  const [shouldPrint, setShouldPrint] = useState(false);

  const [instance] = usePDF({
    document: <CashFlowPdf data={data} />,
  });

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    if (instance.url && iframeRef.current) {
      setShouldPrint(true);
      iframeRef.current.src = instance.url;
    }
  };

  useEffect(() => {
    if (!shouldPrint) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const onIframeLoad = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setShouldPrint(false);
    };

    iframe.addEventListener("load", onIframeLoad);
    return () => iframe.removeEventListener("load", onIframeLoad);
  }, [instance.url, shouldPrint]);

  return (
    <>
      <iframe ref={iframeRef} className="hidden" />

      <button
        onClick={handlePrint}
        disabled={instance.loading}
        className="bg-gray-200/50 dark:bg-slate-200 p-2 text-slate-200 border border-gray-300 rounded-md group hover:scale-110 transition-transform duration-200 cursor-pointer"
      >
        <Printer
          size={20}
          fill="#364153"
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </button>
    </>
  );
};
