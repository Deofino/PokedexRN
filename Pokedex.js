import axios from 'axios';
const urlPokedex = 'https://pokeapi.co/api/v2';
class Pokedex {

    static getPokemons = async function(eggGroup='null'){
        try {
            let data = eggGroup=='null'?
            await axios.get(`${urlPokedex}/pokemon?limit=10`):
            await axios.get(`${urlPokedex}/egg-group/${eggGroup}`);
            return data.data.results?data.data.results:data.data;
        } catch (error) {
            return 'Error';
        }
    }

    static getDetail=async function(url) {
        try {
            let details = await axios.get(`${url}`);
            console.log(details);
        } catch (error) {
            console.log(error);
            return 'Error';
        }
    }
}

export default Pokedex;