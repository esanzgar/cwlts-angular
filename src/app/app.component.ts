import { Component } from '@angular/core';
import {
    WorkflowFactory,
    WorkflowModel,
} from 'cwlts/models';
import {
    Workflow
} from 'cwlts/mappings/v1.0/Workflow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private _cwlModel: WorkflowModel | null = null;

  public readCWL(){
      this._cwlModel = WorkflowFactory.from({} as Workflow);
  }
}
