(() => {
  const fullName = (firstName: string, LastMame: string | boolean): string => {
    return `${firstName} ${LastMame}`;
  };

  const name = fullName("Tony", "Stark");
  console.log({ name });

  const name2 = fullName("Tony", false);
  console.log({ name });
})();
