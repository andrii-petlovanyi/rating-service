import React, { useState } from "react";
import { Badge, Button, Htag, Ptag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag="h1">Hello, Andrii</Htag>
      <Button appearance="primary" arrow="right">Submit</Button>
      <Button appearance="ghost">Reset</Button>
      <Ptag size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis,
        nam nihil illo corrupti, quae provident ut, ullam illum inventore sapiente quas!
        Dolorum, odit accusamus vero ratione quisquam quidem blanditiis?</Ptag>

      <Ptag size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis,
        nam nihil illo corrupti, quae provident ut, ullam illum inventore sapiente quas!
        Dolorum, odit accusamus vero ratione quisquam quidem blanditiis?</Ptag>
      <Badge color="red" size="m">Red badge</Badge>
      <Badge color="green" size="m">Green badge</Badge>
      <Badge size="s">Ghost badge</Badge>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
