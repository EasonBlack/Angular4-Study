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

    settings: Ng2TreeSettings = {
        rootIsVisible: false,
        showCheckboxes: true
    };

    public logEvent(e: NodeEvent): void {
        let node= this.treeComponent.getControllerByNodeId(e.node.id);
        node.select();
        console.log(e);
    }

    confirm() {
        let node= this.treeComponent.getControllerByNodeId(1);
        let a = node.toTreeModel();
        console.log(a);
        console.log(this.tree);
    }
}

