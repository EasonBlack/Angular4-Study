import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TreeModel, NodeEvent, Ng2TreeSettings } from 'ng2-tree';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        "../../../../node_modules/ng2-tree/styles.css"
    ],
    encapsulation: ViewEncapsulation.None

})
export class AppComponent {
    @ViewChild('treeComponent') treeComponent;

    tree: TreeModel = {
        id: 1,
        value: 'Programming languages by programming paradigm',
        settings: {
            cssClasses: {
              leaf: 'fa'
            }
        },
        children: [
            {
                id: 2,
                value: 'Object-oriented programming',
                desc: "aaaaaa",
                children: [
                    {
                        id: 3,
                        value: 'Java',
                        desc: "jjjj",
                    },
                    {
                        id: 4,
                        value: 'C++',
                        desc: "ddddd",
                    },
                    {
                        id: 5,
                        value: 'C#',
                        desc: "ccccc",
                    }
                ]
            },
            {
                id: 6,
                value: 'Prototype-based programming',
                desc: "123123123",
                children: [
                    { id: 7, value: 'JavaScript' ,desc: "123123", }, 
                    { id: 8, value: 'CoffeeScript', desc: "dfdfdfd", }, 
                    { id: 9, value: 'Lua', desc: "bbbbbb", }]
            }
        ]
    };

   

   
}

