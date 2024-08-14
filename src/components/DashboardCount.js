import React, { useEffect, useState } from "react";

const DashboardCount = () => {
  count[(count, setCount)] = useState(0);
  useEffect(() => {
    setCount(100);
  }, []);
  return (
    <>
      <h3>Total Users {count}</h3>
    </>
  );
};

export default DashboardCount;
