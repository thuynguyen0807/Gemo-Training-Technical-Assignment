"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Button from "@/components/ThemeSelection";

export default function Home() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await axios.get("http://localhost:8080/getData");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-4 right-8"></div>
      <div>{data}</div>
    </main>
  );
}
