import { DashboardLayout } from "@/layouts/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { loadState, store } from "@/store/store";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setOrders } from "@/store/ordersSlice";

function StoreHydrator() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 1. Jalankan HANYA di client, setelah mount
    const persistedOrders = loadState();

    if (persistedOrders) {
      // 2. Jika ada data di localStorage,
      //    dispatch action 'setOrders' untuk mengisi store
      dispatch(setOrders(persistedOrders));
    }
    // 3. Jika tidak ada, store akan tetap menggunakan initialState-nya
  }, [dispatch]); // Jalankan sekali saat mount

  // Komponen ini tidak me-render apapun
  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashboardLayout>
      <Provider store={store}>
        <StoreHydrator />
        <Component {...pageProps} />
      </Provider>
    </DashboardLayout>
  );
}
