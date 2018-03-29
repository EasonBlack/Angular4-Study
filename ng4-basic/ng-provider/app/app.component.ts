import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import  {AnimalAbstractService} from './services/animal.abstract.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit{
    users = [];
    animals =[]
    constructor(
        private userservice: UserService,
        private animalAbstractService : AnimalAbstractService
    ) {
    }

    ngOnInit() {
        this.users = this.userservice.getUser();
        this.animals = this.animalAbstractService.getAnimal();
    }

}

