import { DashboardLayout } from "@/layouts/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import StoreHydrator from "@/store/StoreHydration";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StoreHydrator />
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
      <Toaster position="top-right" />
    </Provider>
  );
}
