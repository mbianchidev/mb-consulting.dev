import { useMemo } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrumb({ router, style }) {
  if (!router) {
    router = useRouter();
  }
  const breadcrumbs = useMemo(function generateBreadcrumbs() {
    const asPathWithoutQuery = router.asPath.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return { href, text: subpath };
    })

    return [{ href: "/", text: "Home" }, ...crumblist];
  }, [router.asPath]);

  if (!style) {
    style = "px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400";
  }

  return (
    <nav className={style} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, idx) => {
          // removes "-" from the text and capitalize the first letter of the phrase
          let text = crumb.text.replace(/-/g, " ");
          // capitalize the first letter of every word
          text = text.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.slice(1); });
          // Exeption for Service(s) page
          text === "Service" ? text = "Services" : text = text;
          if (idx === breadcrumbs.length - 1) {
            // the last crumb is not a link, just text representing the current page
            return (
              <li key={idx} className="flex items-center">
                <span className="text-slate-900 dark:text-white font-semibold">{text}</span>
              </li>
            )
          } else {
            return (
              // the first crumb is a link to the home page and the rest are links until the current page
              <li key={idx} className="flex items-center">
                <Link href={crumb.href} passHref className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                  {text}
                </Link>
                <svg className="w-4 h-4 mx-2 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
            )
          }
        }
        )}
      </ol>
    </nav>
  );

}