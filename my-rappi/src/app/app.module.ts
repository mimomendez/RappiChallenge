import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { MainSeekerComponent } from './components/main-seeker/main-seeker.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FilterSeekerComponent } from './components/filter-seeker/filter-seeker.component';
import { AppServices } from './components/app-services.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainCarouselComponent,
    MainSeekerComponent,
    ShoppingCartComponent,
    FilterSeekerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    RouterModule.forRoot([]),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
