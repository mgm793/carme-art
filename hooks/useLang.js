import { useState, useEffect } from "react";

export function useLang(){
  const [actualLang, setActualLang] = useState("en-US"); 
  useEffect(() => {
    const lang = window.navigator.language;
    if(lang && lang === "ca") setActualLang("ca");
  }, [])
  
  return { actualLang };
}