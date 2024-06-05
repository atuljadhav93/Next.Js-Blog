'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function StudentInfo() {
  const router = useRouter();
  const CommonRouting = (nevigate: string) => {
    router.push(nevigate);
  };
  return (
    <>
      <div>Student Info</div>
      <button onClick={() => CommonRouting("/about")}>Back To About</button>
    </>
  );
}
