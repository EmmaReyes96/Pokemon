import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  modelType: any[];
  select: string;
  search: string;

  @Output() typeSelect: EventEmitter<string> = new EventEmitter();
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  constructor(private service: PokemonService) { 
    this.modelType = this.service.modelType;
  }

  ngOnInit(): void {
  }

  selectedPokemon(name){
    this.typeSelect.emit(name)
  }

  searchPokemon(text){
    this.searchValue.emit(text)
  }

}
