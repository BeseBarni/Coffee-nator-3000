import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomePageComponent } from './home-page/home-page.component';
import { CoffeePreferencePageComponent } from './coffee-preference-page/coffee-preference-page.component';
import { WinnerModalComponent } from './winner-modal/winner-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  , HomePageComponent,
  CoffeePreferencePageComponent, WinnerModalComponent, InfoPageComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatSliderModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full',data: {state:'home'} },
      { path: 'preference', component: CoffeePreferencePageComponent, pathMatch: 'full', data:{state:'about'}},
      { path: 'info', component: InfoPageComponent, pathMatch: 'full', data:{state:'about'}},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
