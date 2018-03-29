import { Injectable } from '@angular/core';

@Injectable()
export abstract class AnimalAbstractService {
  abstract getAnimal(): Array<String>;
}