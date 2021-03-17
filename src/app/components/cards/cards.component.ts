import { Component, Input, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';
import { pokeModel } from '../../models/pokemonModel'

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() name: string = '';
  public pokemon: pokeModel;
  public img: string;
  public types: [any];

  constructor(private service: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.name != ''){
      this.pokeInfo();
    }
  }

  async pokeInfo(){
    await this.service.PokeSelection(this.name)
      .subscribe( data => { 
        this.pokemon = data;
        this.img = data['sprites'].front_default;
        this.types = data['types']
      });
  }

  openDialog(pokemon) {
    this.dialog.open(
      DialogComponent, {
        width: '500px',
        height: '400px',
        autoFocus: false,
        data: { pokemon }
    });
  }  

}
