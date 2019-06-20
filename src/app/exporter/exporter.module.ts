import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ExporterPage } from './exporter.page';

const routes: Routes = [
  {
    path: '',
    component: ExporterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MarkdownModule.forRoot({ loader: HttpClientModule }),
  ],
  declarations: [ExporterPage]
})
export class ExporterPageModule {}
