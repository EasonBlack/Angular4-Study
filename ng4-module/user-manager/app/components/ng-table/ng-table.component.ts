import {Component, Input} from '@angular/core';


@Component({
    selector: 'my-table',
    templateUrl: './ng-table.component.html',
    styleUrls: ['./ng-table.component.scss']
    
})
export class TableComponent {
    @Input() cols: Array<any> = [];
    @Input() rows: Array<any> = [];
    @Input() isEdit: boolean;
    @Input('selected')
    set rowSelectedHandle(selected: Array<any>) {
        this.rowSelected = selected;
        this.updateRow();
    }
   


    rowSelected:Array<any> = []

    updateRow() {
        this.rows.map(row=>{
            if(this.rowSelected.indexOf(row.id)>=0){
                row.checked = true;
            } else {
                row.checked = false;
            }
        })
    }
}
