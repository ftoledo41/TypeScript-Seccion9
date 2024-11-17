(() => {
  const fullName = (firstName: string, LastMame?: string): string => {
    return `${firstName} ${LastMame}`;
  };

  const name = fullName("Tony");
  console.log({ name });

})();
