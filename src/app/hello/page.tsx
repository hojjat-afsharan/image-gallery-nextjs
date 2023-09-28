const HelloPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   throw Error("fff");
  return <div>Hello world!</div>;
};

export default HelloPage;
