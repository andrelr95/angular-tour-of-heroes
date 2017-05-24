import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/observable/catch';
import 'rxjs/add/observable/debounceTime';
import 'rxjs/add/observable/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearch implements OnInit{
    heroes:Observable<Hero[]>;
    private searchTerms = new Subject<string>();    
    
    constructor(
        private heroSearchService:HeroSearchService, 
        private router:Router) { }

    search(term:string):void{
        this.searchTerms.next(term);
    }

    ngOnInit(): void{
        //code onInit
    }
}