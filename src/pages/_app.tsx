import { DashboardLayout } from "@/layouts/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import StoreHydrator from "@/store/StoreHydration";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactElement, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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

  const getLayout =
    Component.getLayout ??
    ((page) => <DashboardLayout>{page}</DashboardLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Provider store={store}>
          <StoreHydrator />
          {getLayout(<Component {...pageProps} />)}
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        </Provider>
      </ThemeProvider>
      <ReactQueryDevtools /> {/* Only view on development mode */}
    </QueryClientProvider>
  );
}
