import React from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white" style={{fontFamily: 'var(--font-heading)'}}>
              Matteo Bianchi
            </h3>
            <p className="text-sm text-slate-400">
              Cloud Native & Platform Consultant
            </p>
            <p className="text-sm text-slate-400">
              &copy; 2021-{new Date().getFullYear()} All Rights Reserved
            </p>
            <p className="text-xs text-slate-500">
              Version {process.env.NEXT_PUBLIC_VERSION}
            </p>
          </div>

          {/* Legal & Business Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white" style={{fontFamily: 'var(--font-heading)'}}>
              Legal
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-primary-400 transition-colors" style={{fontFamily: 'var(--font-family)'}}>
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-sm text-slate-400 hover:text-primary-400 transition-colors" style={{fontFamily: 'var(--font-family)'}}>
                Cookie Policy
              </Link>
            </div>
            <div className="pt-2 space-y-1">
              <p className="text-xs text-slate-500" style={{fontFamily: 'var(--font-mono)'}}>
                KVK: {userData.nl_kvk}
              </p>
              <p className="text-xs text-slate-500" style={{fontFamily: 'var(--font-mono)'}}>
                VAT: {userData.nl_vat}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white" style={{fontFamily: 'var(--font-heading)'}}>
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <Link
                title="GitHub profile"
                href={userData.socialLinks.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link
                title="LinkedIn profile"
                href={userData.socialLinks.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-center text-sm text-slate-400">
            Built with{" "}
            <span className="text-red-500 animate-pulse">❤️</span>
            {" "}using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
