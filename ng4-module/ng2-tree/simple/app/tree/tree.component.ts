import { Component, Input,  ViewEncapsulation, ViewChild } from '@angular/core';
import { TreeModel, NodeEvent, Ng2TreeSettings } from 'ng2-tree';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
})
export class AppTreeComponent {
    @ViewChild('treeComponent') treeComponent;
    @Input() treeData:TreeModel = null;
    
    settings: Ng2TreeSettings = {
        rootIsVisible: false,
        showCheckboxes: true
    };

    public logEvent(e: NodeEvent): void {
        let node= this.treeComponent.getControllerByNodeId(e.node.id);
        node.check();
        console.log('checked');
        console.log(e);
    }

    getAllCheckedNode(node) {
        let result = [];
        node.forEach(c=>{
            if(c.settings.checked) {
                result.push(c.id);
            }
            if(c.children) {
                let _result = this.getAllCheckedNode(c.children);
                result.push(..._result);
            }
        })

        return result;
    }

    confirm() {
        let node= this.treeComponent.getControllerByNodeId(1);
        let _tree = node.toTreeModel();
        console.log(_tree);
        let result= []
        result = this.getAllCheckedNode(_tree.children);
        console.log(result);
    }

    add() {
      let node= this.treeComponent.getControllerByNodeId(1);
      node.addChild({
        id: 18,
        value: 'asdfasdf'
      });
    }
}

