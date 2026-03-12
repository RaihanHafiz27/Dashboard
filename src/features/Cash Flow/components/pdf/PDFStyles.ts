import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 50,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
  },
  // HEADER
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "2pt solid #f1f5f9",
    paddingBottom: 20,
    marginBottom: 20,
  },
  logoSection: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  logo: { width: 30, height: 30 },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#1e293b",
  },
  companyAddress: { fontSize: 9, color: "#64748b" },
  reportInfo: { alignItems: "flex-end" },
  reportTitle: { fontSize: 16, fontWeight: "bold", color: "#1e293b" },
  reportDate: { fontSize: 9, color: "#94a3b8", marginTop: 4 },

  // SUMMARY CARDS
  summaryContainer: {
    flexDirection: "row",
    backgroundColor: "#f8fafc",
    border: "1pt solid #e2e8f0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
  },
  summaryBox: { flex: 1, paddingHorizontal: 15 },
  summaryLabel: {
    fontSize: 8,
    color: "#64748b",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  summaryValue: { fontSize: 14, fontWeight: "bold", color: "#1e293b" },

  // TABLE
  table: { width: "100%" },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1e293b",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tableHeaderCell: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1pt solid #f1f5f9",
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  zebraRow: { backgroundColor: "#fdfdfd" },
  tableCell: {
    fontSize: 10,
    color: "#334155",
  },

  statusBadge: {
    fontSize: 8,
    backgroundColor: "#b9f8cf",
    color: "#065f46",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: "bold",
  },

  // FOOTER
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    color: "#94a3b8",
    fontSize: 9,
    paddingTop: 10,
  },
});
