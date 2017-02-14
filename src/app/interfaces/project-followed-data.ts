import { MediaItem } from './media-item';


export interface ProjectFollowedData {


    ProjectId : number;

    UserId : string;

    TimeAgo: string;

    UserName: string;

    ProjectName: string;

    ProjectUrl: string;

    PledgeAmount: number;

    LastPledgeDate: Date;

    DateFounded: Date;

    ProjectPicture: MediaItem;

    UserPicture:MediaItem;

    ProjectVideo:MediaItem;

    ProjectCreatorPicture:MediaItem;

    IsComplete: boolean;

    IsDeliveryReportPublished: boolean;

}