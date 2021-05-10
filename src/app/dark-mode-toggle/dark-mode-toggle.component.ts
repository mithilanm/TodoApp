import { Component } from "@angular/core";
import { DarkModeService } from "angular-dark-mode";
import { Observable } from "rxjs";

@Component({
    selector: 'app-dark-mode-toggle',
    template: `
    <label class="switch">
        <input type="checkbox" [checked]="darkMode$ | async" (change)="onToggle()"/>
        <span class="slider round"></span>
    </label>
    `,
    styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggle {
    darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
     
    constructor(private darkModeService: DarkModeService){}

    onToggle(): void {
        this.darkModeService.toggle();
    }
}