import { PDFViewer } from "@react-pdf/renderer";
import { CashFlowPdf } from "./CashFlowPdf";
import { Transactions } from "../../types/Cashflow.type";

const PdfPreview = ({ data }: { data: Transactions[] }) => {
  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <CashFlowPdf data={data} />
    </PDFViewer>
  );
};

export default PdfPreview;
