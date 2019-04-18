export interface CommentModel {
    _id : string;
    text : string;
    username : string;
    userId : string;
    hotelId : string;
    likeUsers: string[];
}