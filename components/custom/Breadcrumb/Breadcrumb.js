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
    style = "ml-4 font-light .service__mobile-breadcrumb";
  }

  return (
    <p className={style}>
      {breadcrumbs.map((crumb, idx) => {
        // removes "-" from the text and capitalize the first letter of the phrase
        let text = crumb.text.replace(/-/g, " ");
        // capitalize the first letter of every word
        text = text.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.slice(1); });
        //text = text.charAt(0).toUpperCase() + text.slice(1);
        if (idx === breadcrumbs.length - 1) {
          // the last crumb is not a link, just text representing the current page
          return <span key={idx}>{text}</span>
        } else {
          return (
            // the first crumb is a link to the home page and the rest are links until the current page
            <span key={idx} className="text-[#3B82F6]">
              <Link href={crumb.href} passHref>
                <a className="hover-underline-animation">{text}</a>
              </Link>
              {" > "}
            </span>
          )
        }
      }
      )}
    </p>
  );

}