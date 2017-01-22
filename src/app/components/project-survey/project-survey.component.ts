import { Component, ViewContainerRef, OnInit} from "@angular/core";
import { ActivatedRoute} from '@angular/router';
import { SurveyService} from './../../services/survey.service';

@Component({
    selector: "project-survey",
    templateUrl: './project-survey.component.html'
})
export class ProjectSurveyComponent implements OnInit {

public Visible: boolean;
    public ProjectFollowedData: any;
    public Test:string;
    public IsMain: boolean;

    showFader : boolean = true;
    public BackgroundRightPanelClass = "bg-white";


    constructor(route: ActivatedRoute, private surveyService: SurveyService) {
    	this.Visible = false;
    	this.Test = route.snapshot.params['token'];
        this.IsMain = true;
    };

    ngOnInit() {

        this.surveyService.colourSubject.subscribe(item => {
            this.BackgroundRightPanelClass = item.RightPanelColour;;
        });

    	this.surveyService.getProjectFollowedData(this.Test).subscribe(
            (data: any) => {
                this.ProjectFollowedData = data;
                this.surveyService.setProjectFollowerData(data);
            	document.title = "Backers survey for "+data.ProjectName;
            },
            (err: any) => {
            	console.log('error');
                // toastr.options = { "timeOut": "3000" };
                // toastr['error']('A problem has occurred. Please try again or contact support@spacehive.com for support.', 'Error');
            }
        );
    };

    Test1(){
        this.IsMain = false;
    }

}
