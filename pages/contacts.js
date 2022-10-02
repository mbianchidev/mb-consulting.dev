import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Contacts from "@components/Contacts";
import { Alert } from "@components/custom/Alert/Alert";

export default function contacts() {
  return (
    <ContainerBlock title="Contacts - Matteo Bianchi">
      <Alert/>
      <Contacts/>
    </ContainerBlock>
  );
}
