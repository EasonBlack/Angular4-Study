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
    
                children: [
                    {
                        id: 3,
                        value: 'Java',
            
                    },
                    {
                        id: 4,
                        value: 'C++',
            
                    },
                    {
                        id: 5,
                        value: 'C#',
                    }
                ]
            },
            {
                id: 6,
                value: 'Prototype-based programming',
                children: [
                    { id: 7, value: 'JavaScript' }, 
                    { id: 8, value: 'CoffeeScript' }, 
                    { id: 9, value: 'Lua' }]
            }
        ]
    };

   

   
}

