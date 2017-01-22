import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSurveyComponent} from '../components/project-survey/project-survey.component';
import { Step1Component} from '../components/project-survey/step1/step1.component';

const routes: Routes = [
    {
        path: 'completeSurvey/:token',
        component: ProjectSurveyComponent,
        children: [
            { 
                path: 'step1', 
                component: Step1Component 
            }
        ]
    },
    {
    	path: 'completeSurvey',
        component: ProjectSurveyComponent,
    },
    {
        path: '',
        redirectTo: 'completeSurvey',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingRoutingModule { }

export const routing = RouterModule.forRoot(routes);
