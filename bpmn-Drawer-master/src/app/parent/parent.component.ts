import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { HttpClient } from '@angular/common/http';
import BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  constructor(private http: HttpClient) { }
  compUrl = './assets/create.xml';

  importError?: Error;

  handleImported(event: Event) {

  }

}




