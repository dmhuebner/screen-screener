import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchService } from '@shared/services/search.service';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './features/search/search.module';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      NotFoundComponent,
      SearchPageComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      CoreModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      SearchModule
  ],
  providers: [
      SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
