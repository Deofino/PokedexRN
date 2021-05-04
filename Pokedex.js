import axios from 'axios';
const urlPokedex = 'https://pokeapi.co/api/v2';
class Pokedex {

    static getPokemons = async function(eggGroup='null'){
        try {
            let data = eggGroup=='null'?
            await axios.get(`${urlPokedex}/pokemon?limit=1`):
            await axios.get(`${urlPokedex}/egg-group/${eggGroup}`);
            return data.data.results?data.data.results:data.data;
        } catch (error) {
            return 'Error';
        }
    }

    static getDetail=async function(url) {
        try {
            let details = await axios.get(url);
            return {
                id: details.data.id,
                name: details.data.name,
                type: details.data.types[0].type.name,
                weight: details.data.weight,
                height: details.data.height,
                image: details.data.sprites.other.dream_world.front_default,
            };
        } catch (error) {
            console.log(error);
            return 'Error';
        }
    }
}

export default Pokedex;