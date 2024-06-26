import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import CookiePolicy from "@components/CookiePolicy";

export default function cookiePolicy() {
  return (
    <ContainerBlock title="Cookie Policy" description="My cookie policy">
      <CookiePolicy/>
    </ContainerBlock>
  );
}
