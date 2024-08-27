import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Roldex Stark. All rights reserved.
      </small>

      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <div className="flex w-ful items-center justify-center text-xs gap-1">
        <p>Source Code: </p>{" "}
        <Link
          className="text-blue-600"
          href={"https://github.com/r0ld3x/portfolio-website"}
        >
          Github
        </Link>
      </div>
    </footer>
  );
}
