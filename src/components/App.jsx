import React, { useState } from "react";

import CardboxTop from "../components/CardboxTop";
import CardboxBottom from "../components/CardboxBottom";

export default function App() {
  const [tempInfo, setTempInfo] = useState("");
  return (
    <div>
      <CardboxTop setTempInfo={setTempInfo} />
      <CardboxBottom tempInfo={tempInfo} />
    </div>
  );
}
