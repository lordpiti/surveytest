import { Component, OnInit } from '@angular/core';
import { SurveyService} from './../../../services/survey.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ProjectFollowedSurvey} from './../../../interfaces/project-followed-survey';
import { ProjectFollowedData} from './../../../interfaces/project-followed-data';
import { NgForm } from '@angular/forms';

declare var toastr: any;

@Component({
  selector: 'project-survey-step1',
  templateUrl: './step1.component.html'
})
export class Step1Component implements OnInit {

public SupportOtherWay: Array<string>;
    public ProjectMeansText: string;

    public hiddenFilledImpactArea: any;

    public SurveyData: ProjectFollowedSurvey;
    public CurrentProjectFollowedData : ProjectFollowedData;

    public LastStepCompleted: number;
    public displayErrors : boolean;


 

    constructor(private _surveyService:SurveyService, private router:Router, ) {
    	this.LastStepCompleted = 0;
    };

    ngOnInit() {
		this.CurrentProjectFollowedData = this._surveyService.currentProjectFollowedData;

    	this.SurveyData = { 
    		ImpactList: this._surveyService.getImpactList(), 
    		FeelsLike: "1", 
    		FeelsMorePower: "1", 
    		MeetNewPeople: false,
    		NumberNewFriends : 0, 
    		NumberNewPeople : 0,
    		MadeNewFriends: false, 
    		VisitProject:false,
    		TimesVisited: 1,
    		SupportOtherWay:this._surveyService.getSupportWays(), 
    		ProjectMeansText:"", 
    		ProjectId: this.CurrentProjectFollowedData.ProjectId, 
    		ProjectName: this.CurrentProjectFollowedData.ProjectName,
    		UserId: this.CurrentProjectFollowedData.UserId, 
    		UserName: this.CurrentProjectFollowedData.UserName,
    		PledgeAmount: this.CurrentProjectFollowedData.PledgeAmount
    	};
    	this.displayErrors = false;
    	this._surveyService.setColourValue("bg-purple2","BackgroundColour");
    	
    }

    goToStep(step: number, form: NgForm)
    {
    	//console.log(this.CurrentProjectFollowedData);
    	if (form == null || form.valid) {
    	    this.LastStepCompleted = step;

    	    if (step==3){
    	    	this._surveyService.setColourValue("bg-yellow","BackgroundColour");
    	    }
    	    if (step==6){
    	    	this._surveyService.setColourValue("bg-gray-lighter","BackgroundColour");
    	    	this._surveyService.setColourValue("bg-purple2","RightPanelColour");
    	    }


	    	if (step>5)
	    	{
	    		this.displayErrors = false;
				var stringToPost = JSON.stringify(this.SurveyData);
				//stringToPost = stringToPost.replace(/"/g,"'");
				var dataToPost = { Data: stringToPost, Token: this._surveyService.getToken()};
	    		this._surveyService.completeSurvey(stringToPost).subscribe(
		            (data: any) => {
		  	            	console.log(data);
		            }, 
		            (err: any) => {
		            	console.log('error');
		                // toastr.options = { "timeOut": "3000" };
		                // toastr['error']('A problem has occurred. Please try again or contact support@spacehive.com for support.', 'Error');
		            }
		        );
	    	}
    	}
    	else {
    		this.displayErrors = true;
	    }
    }


    checkedImpactAreas(form: NgForm) {
        form.controls["hiddenFilledImpactArea"].markAsTouched();
    };

}
