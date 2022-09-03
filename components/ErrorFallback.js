import React from "react";

export default function ErrorFallback() {
  return (
    <div>
    <h2>Oops, there is an error!</h2>
    <div style="width:100%;height:0;padding-bottom:55%;position:relative;">
        <iframe src="https://giphy.com/embed/DUtVdGeIU8lmo" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <button
      type="button"
      onClick={() => this.setState({ hasError: false })}
    >
      Try (turning it on and off) again?
    </button>
    </div>
  );
}





