import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-exporter',
  templateUrl: './exporter.page.html',
  styleUrls: ['./exporter.page.scss'],
})
export class ExporterPage implements OnInit {



  markdown = "Some **markdown**";

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    
  }

  public downloadPDF(){
    let doc = new jsPDF;
    let content = this.markdownService.compile(this.markdown);
    
    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    doc.fromHTML(content, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test5.pdf');
  };

}
