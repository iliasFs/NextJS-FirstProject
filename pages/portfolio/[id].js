import { useRouter } from "next/router";

const portfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  //send a request to a server
  //fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>Portfolio test page</h1>
    </div>
  );
};

export default portfolioProjectPage;
