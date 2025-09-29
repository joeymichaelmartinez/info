import { useEffect, useState } from "react";

import { bootText } from "../../../data/bootText";

export function BootScreen() {
  const [scrollingBootText, setScrollingBootText] = useState(''); 

  useEffect(() => {
    setScrollingBootText(bootText);
  }, []);

  return (
    <>
      <div>{scrollingBootText}</div>
    </>

  )
}