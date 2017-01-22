/// model of hive brand view model
export interface ProjectFollowedSurvey {
    ImpactList: Array<string>;
    FeelsLike: string;
    FeelsMorePower: string;
    MeetNewPeople: boolean;
    NumberNewPeople: number;
    MadeNewFriends: boolean;
    NumberNewFriends: number;
    VisitProject: boolean;
    TimesVisited: number;
    SupportOtherWay: Array<string>;
    ProjectMeansText: string;
    ProjectId: number;
    ProjectName: string,
    UserId: string;
    UserName: string;
    PledgeAmount: number;
}