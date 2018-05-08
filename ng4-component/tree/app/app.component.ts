import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class AppComponent {
    itemSelected: any = {};
    tree = [
        {
            id: 1, name: 'aaaa', children: [
                { id: 2, name: 'bbb' },
                { id: 3, name: 'ccc' },
                { id: 4, name: 'dddd' },
            ]
        }
    ]
    settings :any = {
        hasCheckbox : true
    }

    selectItemHandle(item) {
        console.log(item);
        this.itemSelected = item;
    }

    cofirm() {
        console.log(this.tree);
    }
}

