import React, {useState, useEffect} from "react";
import Image from 'next/image';
import Link from "next/link";

export default function ErrorFallback() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted ? 
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">Error</h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container mx-auto pt-20">
          <Image src="/images/gifs/hello-it.gif" alt="'Hello IT, have you tried turning in on and off again?' GIF from the IT Crowd series" width="480" height="270" />
          <Link href="/" passHref>
            <button
              type="submit"
              className="dark:bg-mb_tertiary bg-mb_quaternary rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
              Try (turning it on and off) again?
            </button>
          </Link>
        </div>
      </div>
    </section>
    : null
  );
}





