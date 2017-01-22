import { Component } from '@angular/core';
import { SurveyService} from './services/survey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      public Visible: boolean;
    public BackgroundColourClass: string = "bg-gray-lighter" ;

    constructor(private surveyService: SurveyService) {
    	this.Visible = false;

    };

    ngOnInit(){

    	var subscription = this.surveyService.colourSubject.subscribe(item => {
            this.BackgroundColourClass = item.BackgroundColour;
        });
    }
}
