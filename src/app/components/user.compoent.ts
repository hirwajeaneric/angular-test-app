import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-user',
    template: `
        <h1>{{ occupation }}</h1>
    `
})
export class UserComponent {
    @Input() occupation = '';
}