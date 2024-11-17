(() => {
  type Avengers = {
    name: string;
    weapon: string;
  };

  const ironman: Avengers = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  const captainAmerica: Avengers = {
    name: "Capitán América",
    weapon: "Escudo",
  };

  const thor: Avengers = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avengers[] = [ironman, thor, captainAmerica];

  for (const avenger of avengers) {
    console.log(avenger);
    console.log(avenger.name)
    console.log(avenger.weapon);
  }
})();
