import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface Options {
    id: number;
}

export const usePokemon = ({ id }: Options) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPokemonById = async (id: number) => {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
        setIsLoading(false);
    }

    useEffect(() => {

        fetchPokemonById(id);

    }, [fetchPokemonById, id]);

    return {
        pokemon,
        isLoading,
    };
}
