'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function AboutUs() {
   const router = useRouter();
   const CommonRouting = (nevigate: string) => {
     router.push(nevigate);
   };
  return (
   <>
      <div>About Us</div>
      <button onClick={()=>CommonRouting("/login")}>Back To Login Page</button>
   </>
  )
}
