import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingRoutingModule, routing } from './app-routing/app-routing-routing.module';
import { SurveyService} from './services/survey.service';
import { ProjectSurveyComponent } from './components/project-survey/project-survey.component';
import { Step1Component } from './components/project-survey/step1/step1.component';
import { BootstrapSwitchDirective } from './directives/bootstrap-switch.directive';
import { MediaElementPlayerDirective } from './directives/media-element-player.directive';
import { DisplayValidationErrors } from './directives/validation-errors.directive';
import { Ng2FilterPipe } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectSurveyComponent,
    Step1Component,
    BootstrapSwitchDirective,
    MediaElementPlayerDirective,
    DisplayValidationErrors, Ng2FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
