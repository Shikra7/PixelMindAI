import React, { useState } from "react";
import { BarsLoader } from "react-loaders-kit";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  const loaderProps = {
    loading,
    size: 35,
    duration: 1,
    colors: ["#f9fafe", "#6469ff"],
  };

  return <BarsLoader {...loaderProps} />;
};

export default Loader;
