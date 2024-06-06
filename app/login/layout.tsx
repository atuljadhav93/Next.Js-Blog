import Link from "next/link";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <div>Login Navbar</div> */}
      <ul className="flex gap-3 text-violet-400">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/login">Login Main</Link>
        </li>
        <li>
          <Link href="/login/studentlogin">Student Login </Link>
        </li>
        <li>
          <Link href="/login/teacherlogin">Teacher Login </Link>
        </li>
      </ul>
      {children}
    </>
  );
}
