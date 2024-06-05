"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  const apple = () => {
    setName("atul");
  };
  const InnerComponent = () => {
    return <h1>Inner</h1>;
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{name}</h1>
      {/* <button onClick={()=> apple()}>Click</button>
      {InnerComponent()} */}
      <Link href="/login">Login</Link>
      <button onClick={()=>router.push("/login")}>Login Page</button>
    </main>
  );
}
