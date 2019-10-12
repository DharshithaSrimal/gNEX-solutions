import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { SolutionsComponentComponent } from './solutions-component/solutions-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutusComponentComponent } from './aboutus-component/aboutus-component.component';
import { PricingComponentComponent } from './pricing-component/pricing-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent, data: {animation: 'FilterPage'}},
  {path: 'portfolio', component: PortfolioComponentComponent},
  {path: 'solutions', component: SolutionsComponentComponent, data: {animation: 'isLeft'}},
  {path: 'aboutus', component: AboutusComponentComponent, data: {animation: 'isRight'}},
  {path: 'pricing', component: PricingComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
