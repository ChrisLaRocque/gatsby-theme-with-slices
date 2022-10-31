import React from "react";
import { Slice } from "gatsby";
import "../reset.css";
export default function Home() {
  return (
    <>
      <Slice alias="gatsby-theme-with-slices-header">{`I'm from the theme`}</Slice>
      <div style={{ padding: "2rem" }}>I'm the content from the website.</div>
    </>
  );
}
