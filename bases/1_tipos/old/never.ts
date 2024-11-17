(() => { 

  // never usualmente termina en un error en el navegador

  const error = (message:string): never => {

    throw new Error(message);
    
  }

  // o

    const error2 = (message: string): (never | number) => {
      if (false)
        throw new Error(message);
      
      return 1;
    };

  error("Auxilio!");


})()