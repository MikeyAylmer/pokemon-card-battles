import Pokedex from "./PokeDex";
import './PokeGame.css'

// Create array for default pokemon
const defaultPokemon = [
    { id: 6, name: "Charizard", type: "fire/flying", base_experience: 267 },
    { id: 113, name: "Chansey", type: "normal", base_experience: 395 },
    { id: 143, name: "Snorlax", type: "normal", base_experience: 189 },
    { id: 149, name: "Dragonite", type: "dragon", base_experience: 300 },
    { id: 26, name: "Raichu", type: "electric", base_experience: 243 },
    { id: 150, name: "Mewtwo", type: "psychic", base_experience: 340 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 196, name: "Espeon", type: "psychic", base_experience: 184 },
];

/** Return sum of experience in hand. */

function sumExperience(hand) {
    return hand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
}

/** Pokegame: shows two hands (pokedexes)
 *
 * Props:
 * - pokemon (list of pokemon to use; defaults to default list)
 **/

const Pokegame = ({ pokemon = defaultPokemon }) => {
    const hand1 = [];
    const hand2 = [...pokemon];

    // move random cards from hand2 until the hands have the same number of cards
    while (hand1.length < hand2.length) {
        const randIdx = Math.floor(Math.random() * hand2.length);
        const randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }

    const exp1 = sumExperience(hand1);
    const exp2 = sumExperience(hand2);

    return (
        <div>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
        </div>
    );
}


export default Pokegame;
