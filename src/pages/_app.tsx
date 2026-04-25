import { DashboardLayout } from "@/layouts/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import StoreHydrator from "@/store/StoreHydration";
import { ThemeProvider } from "@/context/ThemeContext";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 1,
            gcTime: 1000 * 60 * 2,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Provider store={store}>
          <StoreHydrator />
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
          <Toaster position="top-right" />
        </Provider>
      </ThemeProvider>
      <ReactQueryDevtools /> {/* Only view on development mode */}
    </QueryClientProvider>
    // <ThemeProvider>
    //   <Provider store={store}>
    //     <StoreHydrator />
    //     <DashboardLayout>
    //       <Component {...pageProps} />
    //     </DashboardLayout>
    //     <Toaster position="top-right" />
    //   </Provider>
    // </ThemeProvider>
  );
}
