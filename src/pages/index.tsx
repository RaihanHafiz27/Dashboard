// pages/index.tsx
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/signin",
      permanent: false,
    },
  };
};

export default function Home() {
  return null;
}
