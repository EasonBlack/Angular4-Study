import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    options: GridsterConfig;
    dashboard: Array<GridsterItem>;

    static itemChange(item, itemComponent) {
        console.info('itemChanged', item, itemComponent);
    }

    static itemResize(item, itemComponent) {
        console.info('itemResized', item, itemComponent);
    }

    ngOnInit() {
        this.options = {
            itemChangeCallback: AppComponent.itemChange,
            itemResizeCallback: AppComponent.itemResize,
            maxCols: 10,
            maxRows: 10,
            draggable: {enabled: true}
        };

        this.dashboard = [
            { cols: 1, rows: 1, y: 0, x: 0, text: "aaaa", component: 'hello-world1' },
            { cols: 1, rows: 1, y: 0, x: 1, text: "bbbb", component: 'hello-world2'  },
            { cols: 1, rows: 1, y: 0, x: 2 , text: "cccc", component: 'hello-world3' },
            { cols: 1, rows: 1, y: 1, x: 2, text: "dddd", component: 'hello-world4'  }
        ];
    }

    changedOptions() {
        this.options.api.optionsChanged();
    }

    removeItem(item) {
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    addItem() {
        this.dashboard.push({});
    }

    confirm() {
        console.log(this.dashboard);
    }
}

