import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  toggleScroll:boolean = false;

  constructor() { }
}
