import { Component } from '@angular/core';
import { WorkflowFactory } from 'cwlts/models';
import * as OneStepWF from 'cwlts/tests/apps/one-step-wf';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor() {
        const wf = WorkflowFactory.from(OneStepWF.default);
    }
}
