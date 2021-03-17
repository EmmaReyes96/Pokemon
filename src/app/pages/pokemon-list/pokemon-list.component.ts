import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { NgxSpinnerService } from "ngx-spinner";

import { listModel } from '../../models/pokeListModel';
import { typeModel } from 'src/app/models/typeModel';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  public pokeList: listModel;
  public pokeType: typeModel;
  public arrayShared: [any];
  public filterArray = '';

  constructor(private service: PokemonService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   this.spinner.show();
   this.pokemonAll();
  }
  
  pokemonAll(){
    this.spinner.show();
    this.arrayShared = [''];
    if(this.pokeList){
      this.arrayShared = this.pokeList.results;
      this.spinner.hide();
    }else{
      this.service.PokeList().subscribe( data =>{ 
        this.pokeList = data;
        this.arrayShared = data.results
        this.spinner.hide();
      })
    }
  }

  pokemonType(event){
    this.spinner.show();
    if(event == undefined){
      this.pokemonAll();
    }else{
      this.arrayShared = [''];
      this.service.PokeType(event).subscribe(data => {
        this.pokeType = data;
        this.arrayShared = data.pokemon
        this.spinner.hide();
      })
    }
  }

  SearchPokemon(event){
    this.filterArray = event
  }

}
