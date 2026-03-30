import { QuestionItems } from "../components/question/QuestionSection";

export const faqItems: QuestionItems[] = [
  {
    id: 1,
    question: "How do I navigate through the dashboard?",
    answer:
      "Use the sidebar menu on the left to navigate to different sections. Each menu item represents a major feature of the dashboard. You can collapse/expand the sidebar by clicking the sidebar menu icon.",
  },
  {
    id: 2,
    question: "How can I export my data?",
    answer:
      "Most data tables and reports have an export button at the top right. Click on it to download the data in PDF or CSV format. Make sure your popup blocker is disabled for PDF downloads to work properly.",
  },
  {
    id: 3,
    question: "How do I change the theme?",
    answer:
      "Look for the theme toggle in the top navigation bar or settings. You can switch between light and dark modes. Your preference will be saved automatically.",
  },
  {
    id: 4,
    question: "Can I create custom reports?",
    answer:
      "Yes! Navigate to the Dashboard section and use the filter options to customize the data displayed. You can select date ranges, product categories, and other parameters.",
  },
  {
    id: 5,
    question: "How often is the data updated?",
    answer:
      "The dashboard data is updated in real-time. All metrics and reports reflect the latest information from system.",
  },
  {
    id: 6,
    question: "How do I manage users?",
    answer:
      "Go to the Users section in the sidebar to manage user accounts. You can add, edit, or remove users, and assign them different permission levels.",
  },
];

export const glossaryItems: QuestionItems[] = [
  {
    id: 1,
    question: "Dashboard",
    answer:
      "The main overview page that displays key metrics, charts, and recent activities for your business.",
  },
  {
    id: 2,
    question: "Cash Flow",
    answer:
      "A section showing the movement of money in and out of your business, helping you understand your financial health.",
  },
  {
    id: 3,
    question: "Product",
    answer:
      "Items or services that your business sells. Includes order and stock management.",
  },
  {
    id: 4,
    question: "Order",
    answer:
      "A customer purchase request that includes one or more products with specific quantities and prices.",
  },
  {
    id: 5,
    question: "Stock",
    answer:
      "The inventory of products available for sale. Tracks quantities of each product in storage.",
  },
];

export const troubleshootingItems: QuestionItems[] = [
  {
    id: 1,
    question: "I cannot download PDF files",
    answer:
      "Check your browser's popup blocker settings. PDF downloads often open in new windows/tabs. Disable the popup blocker for this site and try again. In Chrome: Settings → Privacy and security → Site settings → Pop-ups and redirects. In Firefox: Open browser console (F12), check for blocked popups.",
  },
  {
    id: 2,
    question: "Data is not showing correctly on charts",
    answer:
      "Try refreshing the page (F5 or Ctrl+R). Clear your browser cache or try opening the dashboard in an incognito/private window. If the issue persists, check your internet connection and try again.",
  },
  {
    id: 3,
    question: "The page loads slowly",
    answer:
      "Check your internet connection speed. Close other browser tabs to free up memory. Disable browser extensions that might slow down the page. Try accessing from a different browser.",
  },
  {
    id: 4,
    question: "Filters are not working",
    answer:
      "Make sure all required filter fields are filled correctly. Reset filters using the Reset button and try again. Refresh the page if filters continue not to work.",
  },
  {
    id: 5,
    question: "I forgot my login credentials",
    answer:
      "Click the 'Forgot Password' link on the login page. Follow the email instructions to reset your password. If you don't receive the email, check your spam folder. Contact your administrator if you need further assistance.",
  },
  {
    id: 6,
    question: "Numbers in the dashboard don't match my records",
    answer:
      "Ensure the correct date range is selected. Some calculations may exclude certain data types or pending transactions. Check the Glossary for answers. Contact your system administrator if discrepancies persist.",
  },
];
