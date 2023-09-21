"use client";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkmode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(!darkmode);
    darkmode
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  };

  useEffect(() => {
    const isDarkModePreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkmode(isDarkModePreferred);
  }, []);

  useEffect(() => {
    darkmode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [darkmode]);

  return (
    <button onClick={handleClick}>{darkmode ? <BiSun /> : <BiMoon />}</button>
  );
}
