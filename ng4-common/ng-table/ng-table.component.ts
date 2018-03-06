import {Component, Input} from '@angular/core';


@Component({
    selector: 'my-table',
    templateUrl: './ng-table.component.html',
    styleUrls: ['./ng-table.component.scss']
    
})
export class TableComponent {
    @Input() cols: Array<any> = [];
    @Input() rows: Array<any> = [];
}
