import React from "react";
import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  const handleLoadProject = (e) => {
    e.preventDefault;

    router.push("/clinets/max/projectA");
  };

  console.log(router.query);
  return (
    <div>
      <h1>SelectedClientProjectPage</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
};

export default SelectedClientProjectPage;
