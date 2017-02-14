import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ProjectFollowedSurveyColours } from '../interfaces/project-followed-survey-colours';
import { ProjectFollowedData } from '../interfaces/project-followed-data';

@Injectable()
export class SurveyService {

	private _requestOptions: RequestOptions;
	private _apiUrl: string;
	private _impactList:Array<any>;
	private _supportWays:Array<any>;

	private _lastStepCompleted: number;
	private _token: string;

    private colours : ProjectFollowedSurveyColours = { BackgroundColour:"", RightPanelColour:"bg-white" };
    public colourSubject: Subject<ProjectFollowedSurveyColours> = new Subject<ProjectFollowedSurveyColours>();

    public currentProjectFollowedData : ProjectFollowedData = null;
    public currentProjectFollowedDataSubject: Subject<ProjectFollowedData> = new Subject<ProjectFollowedData>();

	constructor(public http: Http) {
		let myHeaders: Headers = new Headers();
        myHeaders.append('Accept', 'q=0.8;application/json;q=0.9'); //This was needed for firefox, because apparently it doesn't add the "Accept application/json" header automatically
        myHeaders.set('Content-Type', 'application/json');
        // myHeaders.set('authenticationToken', this.Token);
        this._requestOptions = new RequestOptions({
            headers: myHeaders
        });
        this._apiUrl = "https://spacehivedevapi.azurewebsites.net";
        this._lastStepCompleted = 0;
        this._impactList = [
    	 { Id: 1, Name: "makes the area safer", Selected: false },
    	 { Id: 2, Name: "makes the area greener", Selected: false },
    	 { Id: 3, Name: "brings people together", Selected: false },
    	 { Id: 4, Name: "provides more things to do", Selected: false },
    	 { Id: 5, Name: "helps my business", Selected: false },
    	 { Id: 6, Name: "helps the local economy", Selected: false },
    	 { Id: 7, Name: "makes the area more attractive", Selected: false },
         { Id: 8, Name: "boost the value of my property", Selected: false },
    	 { Id: 9, Name: "makes the area more fun", Selected: false },
    	 { Id: 10, Name: "adds character to the area", Selected: false },
    	 { Id: 11, Name: "makes the area more family friendly", Selected: false },
    	 ];
    	this._supportWays = [
    	 { Id: 1, Name: "I provided advice", Selected: false },
    	 { Id: 2, Name: "I gave stuff in-kind", Selected: false },
    	 { Id: 3, Name: "I volunteered", Selected: false }];

	}


	completeSurvey(data:any) {

        var url = this._apiUrl+"/api/projects/FinishSurvey";

        var dataToPost = { Data: data, Token: this._token};
        return this.http.post(url, dataToPost, this._requestOptions)
            .map((res: Response) => res.json());
    }

    getProjectFollowedData(token: string) {
    	this._token = token;
        var url = this._apiUrl+"/api/projects/FollowedSurveyData/"+token;


        return this.http.get(url, this._requestOptions)
            .map((res: Response) => res.json());
    }

    getToken():string {
    	return this._token;
    }

    PreviousStepsCompleted(step:number): boolean {
    	if (step>1){
			return this._lastStepCompleted == step-1;
    	}
    	else
    		return true;
    }

    SetLastStepCompleted(step: number){
    	this._lastStepCompleted = step;
    }

    getImpactList():Array<any>{
    	 return this._impactList;
    }

    getSupportWays():Array<any>{
    	 return this._supportWays;
    }


    setColours(colours: ProjectFollowedSurveyColours): void {
        this.colours = colours;
        this.colourSubject.next(this.colours);
    }

    setColourValue(item: any, propName: string): void {
        this.colours[propName] = item;
        this.colourSubject.next(this.colours);
    }

    getColour(): Observable<ProjectFollowedSurveyColours> {
        return this.colourSubject.asObservable();
    }

    setProjectFollowerData(projectFollowedData: ProjectFollowedData): void {
        this.currentProjectFollowedData = projectFollowedData;
        this.currentProjectFollowedDataSubject.next(this.currentProjectFollowedData);
    }

    getProjectFollowerData(): Observable<ProjectFollowedData> {
        return this.currentProjectFollowedDataSubject.asObservable();
    }

}
