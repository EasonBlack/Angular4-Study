import {Component, Input} from '@angular/core';


@Component({
    selector: 'my-table-example',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
    
})
export class TableComponent {
    @Input() cols: Array<any>;
    @Input() rows: Array<any>;
}

