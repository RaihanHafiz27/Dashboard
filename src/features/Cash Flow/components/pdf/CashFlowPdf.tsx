import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import { Transactions } from "../../types/Cashflow.type";
import { formattedDate } from "../../utils/formattedDate";
import { styles } from "./PDFStyles";

export const CashFlowPdf = ({ data }: { data: Transactions[] }) => {
  return (
    <Document title="Cash Flow">
      <Page size={"A4"} style={styles.page}>
        {/* HEADER */}
        <View style={styles.header} fixed>
          <View>
            <View style={styles.logoSection}>
              <Image src={"/images/logo-pdf.png"} style={styles.logo} />
              <Text style={styles.companyName}>Xyz</Text>
            </View>
            <Text style={styles.companyAddress}>
              Bekasi, West Java, Indonesia
            </Text>
          </View>
          <View style={styles.reportInfo}>
            <Text style={styles.reportTitle}>CASH FLOW REPORT</Text>
            <Text style={styles.reportDate}>Generated: 21/12/12</Text>
          </View>
        </View>

        {/* SUMMARY CARDS */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Total Transactions</Text>
            <Text style={styles.summaryValue}>25</Text>
          </View>
          <View
            style={[styles.summaryBox, { borderLeft: "1pt solid #e2e8f0" }]}
          >
            <Text style={styles.summaryLabel}>Report Status</Text>
            <Text style={[styles.summaryValue, { color: "#10b981" }]}>
              Verified
            </Text>
          </View>
        </View>

        {/* TABLE SECTION*/}
        <View style={styles.table}>
          {/* TABLE HEADER */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, { width: "25%" }]}>
              TRANSACTION ID
            </Text>
            <Text style={[styles.tableHeaderCell, { width: "15%" }]}>TYPE</Text>
            <Text style={[styles.tableHeaderCell, { width: "25%" }]}>DATE</Text>
            <Text style={[styles.tableHeaderCell, { width: "20%" }]}>
              AMOUNT
            </Text>
            <Text style={[styles.tableHeaderCell, { width: "15%" }]}>
              STATUS
            </Text>
          </View>
          {/* TABLE BODY */}
          {data.map((item, index) => (
            <View
              key={index}
              style={[styles.tableRow, index % 2 === 0 ? {} : styles.zebraRow]}
            >
              <Text
                style={[styles.tableCell, { width: "25%", color: "#64748b" }]}
              >
                #{item.transaction_id}
              </Text>
              <Text
                style={[
                  styles.tableCell,
                  {
                    width: "15%",
                    fontWeight: "bold",
                  },
                ]}
              >
                {index % 3 === 0 ? "INCOME" : "EXPENSE"}
              </Text>
              <Text style={[styles.tableCell, { width: "25%" }]}>
                {formattedDate(item.date)}
              </Text>
              <Text
                style={[
                  styles.tableCell,
                  {
                    width: "20%",
                    fontWeight: "bold",
                    color: index % 3 === 0 ? "#059669" : "#dc2626",
                  },
                ]}
              >
                {index % 3 === 0 ? "+" : "-"}$
                {item.amount.toLocaleString("en-US")}
              </Text>
              <View style={[styles.tableCell]}>
                <Text style={styles.statusBadge}>SUCCESS</Text>
              </View>
            </View>
          ))}
        </View>

        {/* FOOTER */}
        <Text
          style={styles.footer}
          fixed
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages} — XYZ Official Report`
          }
        />
      </Page>
    </Document>
  );
};
