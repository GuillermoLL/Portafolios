//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { HomeComponent } from './home.component';
import { InitComponent } from './init/init.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    InitComponent,
    AboutMeComponent,
    ProyectsComponent,
    KnowledgeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
