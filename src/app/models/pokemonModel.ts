export interface pokeModel {
    name: string;
    id: number;
    abilities: [{
        ability: {
            name: string;
            url: string;
        },
    }];
    types: [{
        type: {
            name: string;
            url: string;
        },
    }];
    sprites: {
        back_default: string;
        front_default: string;
        back_shiny: string;
        front_shiny: string;
    };
}   