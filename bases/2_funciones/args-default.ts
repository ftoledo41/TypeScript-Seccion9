
// upper: boolean = false
(() => {
  const fullName = (firstName: string, LastMame?: string, upper: boolean = false): string => {
    if (upper)
      return `${firstName} ${LastMame || "--------"}`.toUpperCase();
    else
      return `${firstName} ${LastMame || "--------"}`;
  };

  const name = fullName("Tony");
  console.log({ name });

})();
