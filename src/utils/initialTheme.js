import { setInitialTheme } from "./theme";
import React, { useEffect } from "react";

export const initialTheme = () => {
  useEffect(() => {
    setInitialTheme(); // Tema kayıtlımı kontrol eder ve ayarlar
  }, []);
};
