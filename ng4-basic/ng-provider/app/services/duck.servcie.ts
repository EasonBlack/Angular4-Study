
import { Injectable } from '@angular/core';
import {AnimalAbstractService} from './animal.abstract.service'

@Injectable()
export class DuckService extends AnimalAbstractService{

  animals = [
    "aaaa","bbbb"
  ]

  getAnimal() {
    return this.animals;
  }
}