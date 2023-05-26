import { Component } from '@angular/core';
import { Hero } from '../heroes/hero';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search-component',
  templateUrl: './hero-search-component.component.html',
  styleUrls: ['./hero-search-component.component.css']
})
export class HeroSearchComponentComponent {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private HeroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.HeroService.searchHeroes(term)),
    );
  }
}
