import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    
})
export class AppComponent {
    showTest = true;
    showLoading = true;
    toggleTest() {
        this.showTest = !this.showTest;
    }
    toggleLoading() {
        this.showLoading = !this.showLoading;
    }
    closeLoading(b) {
        this.showLoading = b;
    }
}

