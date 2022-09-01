(() => {

    // función para obtener información de una película por Id
    function getMovieById(id: string) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllActorsByMovieId(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({ id });
    }

    // Crear una película
    interface Movie {
        cast:       string[]
        description:string,
        rating:     number,
        title:      string,
    }
    //PARAMETROS 1 o 3
    function createMovie({title, description, rating, cast}:Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    interface Actor{
        fullName:string,
        birthDate: Date
    }
    function createActor({fullName, birthDate}:Actor): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }




})();
