import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}
  isEmpty(text: string) {
    if (text === '' || text === undefined) return true;
    return false;
  }
  isShort(text: string) {
    if (text.length < 8) return true;
    return false;
  }
  isLetters(text: string) {
    const reg = /[a-zA-Zа-яА-Я]+/g;
    const rez = text.match(reg);
    return rez ? rez.length > 0 : false;
  }
  isNumbers(text: string) {
    const reg = /[0-9]+/g;
    const rez = text.match(reg);
    return rez ? rez.length > 0 : false;
  }
  isSymbols(text: string) {
    const reg = /[^0-9a-zA-Zа-яА-Я]+/g;
    const rez = text.match(reg);
    return rez ? rez.length > 0 : false;
  }
}
