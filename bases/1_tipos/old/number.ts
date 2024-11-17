(() => {
  let avengers: number = 80;

  console.log(avengers);

  const villians:number = 20;

  if (avengers > villians) {
    console.log("Estamos en problemas")
  }
  else {
    console.log("Nos salvamos")
  }

  avengers = 123;
  console.log({ avengers });

  avengers = Number("44");

  console.log({ avengers });

  avengers = Number("55A");
  console.log({ avengers });

})()