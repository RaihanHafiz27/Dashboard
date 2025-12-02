// components/StoreHydrator.tsx
"use client"; // Wajib untuk Next.js App Router (jika pakai Pages router, ini aman)

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "@/store/ordersSlice";
import { setDarkMode } from "@/store/themeSlice"; // Asumsi kamu sudah buat action ini
import { RootState } from "@/store/store";

export default function StoreHydrator() {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.data);
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  // Ref untuk menandakan apakah ini load pertama kali
  const isFirstRender = useRef(true);

  // --- 1. LOAD DATA DARI LOCALSTORAGE (Hanya Sekali saat Mount) ---
  useEffect(() => {
    // A. Load Orders
    const savedOrders = localStorage.getItem("admin-order-storage");
    if (savedOrders) {
      try {
        dispatch(setOrders(JSON.parse(savedOrders)));
      } catch (e) {
        console.error("Gagal load orders", e);
      }
    }

    // B. Load Theme (Dark Mode)
    const savedTheme = localStorage.getItem("admin-theme-mode");
    if (savedTheme === "dark") {
      dispatch(setDarkMode(true));
      document.documentElement.classList.add("dark");
    } else {
      dispatch(setDarkMode(false));
      document.documentElement.classList.remove("dark");
    }

    // Tandai bahwa load pertama sudah selesai
    isFirstRender.current = false;
  }, [dispatch]);

  // --- 2. SAVE ORDERS (Setiap ada perubahan data orders) ---
  useEffect(() => {
    if (isFirstRender.current) return; // Jangan save saat baru loading awal

    const serialized = JSON.stringify(orders);
    localStorage.setItem("admin-order-storage", serialized);
  }, [orders]);

  // --- 3. SAVE THEME (Setiap user ganti theme) ---
  useEffect(() => {
    if (isFirstRender.current) return;

    // Simpan ke storage
    localStorage.setItem("admin-theme-mode", isDarkMode ? "dark" : "light");

    // Ubah class HTML (untuk Tailwind)
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return null; // Komponen ini tidak menampilkan UI apa-apa
}
