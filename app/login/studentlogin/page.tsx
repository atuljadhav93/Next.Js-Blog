'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Student() {
  const router = useRouter();

  const CommonRouting = (nevigate: string) => {
    router.push(nevigate);
  };
  return (
    <>
      <div className="text-violet-400">Student Page</div>
      <button onClick={() => CommonRouting("/login")} className="text-violet-400">
        Back To Login Page
      </button>
    </>
  );
}
