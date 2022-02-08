import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingBannerComponent } from './heading-banner/heading-banner.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CollapsibleSectionComponent } from './collapsible-section/collapsible-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingBannerComponent,
    ImageCarouselComponent,
    CollapsibleSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
