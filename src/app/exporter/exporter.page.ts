import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.page.html',
  styleUrls: ['./exporter.page.scss'],
})
export class ExporterPage implements OnInit {

  @ViewChild('content') content: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public downloadPDF(){
    let doc = new jsPDF;

    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test2.pdf');
  }

}
