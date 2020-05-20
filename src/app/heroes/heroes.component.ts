import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { IStep } from '../IStep';
import { filewriter } from './filewriter';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  
  products: IStep[] = [];
  selectedLevel
  output:string
  constructor(private heroService: HeroService) {}
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  addStep(): void {
    this.products = this.products.concat([
      {
        stepType: this.selectedLevel,
        field: '',
        value: '',
        result: null,
      },
    ]);
  }
  save():void{
    this.output=JSON.stringify(this.products);

  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
