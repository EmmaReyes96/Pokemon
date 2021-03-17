import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pokeModel } from '../models/pokemonModel'
import { listModel } from '../models/pokeListModel'
import { typeModel } from '../models/typeModel'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    public baseUrl: string = 'https://pokeapi.co/api/v2/';

    public modelType = [
        {
            name: 'bug',
            url: '../../assets/bug.svg'
        },
        {
            name: 'dark',
            url: '../../assets/dark.svg'
        },
        {
            name: 'dragon',
            url: '../../assets/dragon.svg'
        },
        {
            name: 'electric',
            url: '../../assets/electric.svg'
        },
        {
            name: 'fairy',
            url: '../../assets/fairy.svg'
        },
        {
            name: 'fighting',
            url: '../../assets/fighting.svg'
        },
        {
            name: 'fire',
            url: '../../assets/fire.svg'
        },
        {
            name: 'flying',
            url: '../../assets/flying.svg'
        },
        {
            name: 'ghost',
            url: '../../assets/ghost.svg'
        },
        {
            name: 'grass',
            url: '../../assets/grass.svg'
        },
        {
            name: 'ground',
            url: '../../assets/ground.svg'
        },
        {
            name: 'ice',
            url: '../../assets/ice.svg'
        },
        {
            name: 'initial',
            url: '../../assets/initial.svg'
        },
        {
            name: 'normal',
            url: '../../assets/normal.svg'
        },
        {
            name: 'poison',
            url: '../../assets/poison.svg'
        },
        {
            name: 'psychic',
            url: '../../assets/psychic.svg'
        },
        {
            name: 'rock',
            url: '../../assets/rock.svg'
        },
        {
            name: 'steel',
            url: '../../assets/steel.svg'
        },
        {
            name: 'water',
            url: '../../assets/water.svg'
        }
    ];

    constructor( private _http: HttpClient) { }

    PokeList(){
        const url: string = `${ this.baseUrl }pokemon?limit=1118&offset=0`;
        return this._http.get<listModel>(url);    
    }

    PokeSelection(name: string){
        const url: string = `${ this.baseUrl }pokemon/${ name }`;
        return this._http.get<pokeModel>(url);
    }

    PokeType(name: string){
      const url: string = `${ this.baseUrl }type/${ name }`;
      return this._http.get<typeModel>(url);
    }

  

}
