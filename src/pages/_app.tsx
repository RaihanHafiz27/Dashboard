import { DashboardLayout } from "@/layouts/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { loadState, store } from "@/store/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setOrders } from "@/store/ordersSlice";
import { useAppSelector } from "@/store/hooks";

function StoreHydrator() {
  const dispatch = useDispatch();
  const isDarkMode = useAppSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDarkMode]);

  useEffect(() => {
    const persistedOrders = loadState();

    if (persistedOrders) {
      dispatch(setOrders(persistedOrders));
    }
  }, [dispatch]);

  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StoreHydrator />
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </Provider>
  );
}
