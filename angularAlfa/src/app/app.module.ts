import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { ProduktListComponent } from './produkt-list/produkt-list.component';
import { ProduktListItemComponent } from './produkt-list-item/produkt-list-item.component';
import { ProduktStoreService } from './shared/produkt-store.service';
import { ProduktDetailsComponent } from './produkt-details/produkt-details.component';
import { ProduktFormComponent } from './produkt-form/produkt-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeistungDetailsComponent } from './leistung-details/leistung-details.component';
import { LeistungListComponent } from './leistung-list/leistung-list.component';
import { LeistungListItemComponent } from './leistung-list-item/leistung-list-item.component';
import { LeistungFormComponent } from './leistung-form/leistung-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    UeberUnsComponent,
    ProduktListComponent,
    ProduktListItemComponent,
    ProduktDetailsComponent,
    ProduktFormComponent,
    SidebarComponent,
    LeistungDetailsComponent,
    LeistungListComponent,
    LeistungListItemComponent,
    LeistungFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProduktStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
