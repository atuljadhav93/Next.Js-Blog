"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push("/login/" + page);
  };
  return (
    <>
      <div className="gap-3 text-violet-400">
        <p>Navbar</p>
        <Link href="/">Home</Link>
        <button onClick={() => navigate("studentlogin")}>
          Student Login
        </button>
        <br />
        <button onClick={() => navigate("teacherlogin")}>
          Teacher Login
        </button>
      </div>
    </>
  );
}
