import React from "react";
import userData from "@constants/data";
import SocialElement from "@custom/Social/SocialElement";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-heading)'}}>
              Matteo Bianchi
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              DevOps & SRE Consultant
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; 2021-{new Date().getFullYear()} All Rights Reserved
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Version {process.env.NEXT_PUBLIC_VERSION}
            </p>
          </div>

          {/* Legal & Business Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-heading)'}}>
              Legal
            </h3>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="pt-2 space-y-1">
              <p className="text-xs text-slate-500 dark:text-slate-500" style={{fontFamily: 'var(--font-mono)'}}>
                KVK: {userData.nl_kvk}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500" style={{fontFamily: 'var(--font-mono)'}}>
                VAT: {userData.nl_vat}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white" style={{fontFamily: 'var(--font-heading)'}}>
              Connect
            </h3>
            <SocialElement github="true" linkedin="true" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Built with{" "}
            <span className="text-red-500 animate-pulse">❤️</span>
            {" "}using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
