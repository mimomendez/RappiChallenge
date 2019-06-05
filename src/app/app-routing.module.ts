import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSeekerComponent } from './components/main-seeker/main-seeker.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FilterSeekerComponent } from './components/filter-seeker/filter-seeker.component';

const routes: Routes = [
  { path: '',   redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: MainCarouselComponent},
  { path: 'app/seeker', component: MainSeekerComponent },
  { path: 'app/filters-seeker/:id', component: FilterSeekerComponent},
  { path: 'app/filters-seeker/:id/:text', component: FilterSeekerComponent},
  { path: 'app/cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [MainSeekerComponent, FilterSeekerComponent,
   MainCarouselComponent, ShoppingCartComponent];
