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
                { id: 4, name: 'dddd', children: [
                    {id: 12, name: 'dfdfd'},
                    {id: 13, name: 'bbbas'},
                    {id: 14, name: 'dfdfd'}
                ]},
            ],
        },
        {
            id: 2, name: 'BBBBB', children: [
                { id: 22, name: 'b1' },
                { id: 23, name: 'b2' },
                { id: 24, name: 'b3' },
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

