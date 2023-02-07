import React, { useState } from "react";
import { Badge, Button, Htag, Ptag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { IMenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
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

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}