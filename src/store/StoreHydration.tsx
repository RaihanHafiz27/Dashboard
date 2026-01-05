"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "@/store/ordersSlice";
import { RootState } from "@/store/store";

export default function StoreHydrator() {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.data);

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

    // Tandai bahwa load pertama sudah selesai
    isFirstRender.current = false;
  }, [dispatch]);

  // --- 2. SAVE ORDERS (Setiap ada perubahan data orders) ---
  useEffect(() => {
    if (isFirstRender.current) return; // Jangan save saat baru loading awal

    const serialized = JSON.stringify(orders);
    localStorage.setItem("admin-order-storage", serialized);
  }, [orders]);

  return null; // Komponen ini tidak menampilkan UI apa-apa
}
