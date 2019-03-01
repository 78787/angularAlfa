import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduktListComponent } from './produkt-list/produkt-list.component';
import { ProduktDetailsComponent } from './produkt-details/produkt-details.component';
import { ProduktFormComponent } from './produkt-form/produkt-form.component';
import { LeistungListComponent } from './leistung-list/leistung-list.component';
import { LeistungDetailsComponent } from './leistung-details/leistung-details.component';
import { LeistungFormComponent } from './leistung-form/leistung-form.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'produkte',
    component: ProduktListComponent
  },
  {
    path: 'produkte/:id',
    component: ProduktDetailsComponent
  },
  {
    path: 'produkte-form',
    component: ProduktFormComponent
  },
  {
    path: 'produkte-form/:id',
    component: ProduktFormComponent
  },
  {
    path: 'leistungen',
    component: LeistungListComponent
  },
  {
    path: 'leistungen/:id',
    component: LeistungDetailsComponent
  },
  {
    path: 'leistungen-form',
    component: LeistungFormComponent
  },
  {
    path: 'leistungen-form/:id',
    component: LeistungFormComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'ueber-uns',
    component: UeberUnsComponent
  },
  {
    path: 'news',
    component: SidebarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


