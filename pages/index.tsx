import React from "react";
import { Htag } from "../components";
import { Button } from "../components/Button/Button";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello, Andrii</Htag>
      <Button appearance="primary" arrow="right">Text</Button>
      <Button appearance="ghost">Text</Button>

    </>
  );
}
