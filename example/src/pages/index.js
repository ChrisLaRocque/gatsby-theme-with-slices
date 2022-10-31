import React from "react"
import {Slice} from "gatsby"

export default function Home() {
  return <>
        <Slice alias="header">{`Header text`}</Slice>
    <div>Homepage in a user's site</div>
  </>
}
