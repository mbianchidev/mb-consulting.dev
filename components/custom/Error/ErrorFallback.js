import React, {useState, useEffect} from "react";
import Image from 'next/image';

export default function ErrorFallback() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted ? 
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1>Oops, there is an error!</h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div style="width:100%;height:0;padding-bottom:55%;position:relative;">
          <Image src="/images/gifs/hello-it.gif" alt="'Hello IT, have you tried turning in on and off again?' GIF from the IT Crowd series" width="480" height="270" />
        </div>
        <button
          type="button"
          onClick={() => this.setState({ hasError: false })}
        >
          Try (turning it on and off) again?
        </button>
      </div>
    </section>
    : null
  );
}





