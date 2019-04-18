import { KmdModel } from './kmd';

export interface HotelModel {
    _id: string;
    name: string;
    description: string;
    voteUsers: string[];
    city: string;
    _kmd: KmdModel;
    raiting: number;
    hotelUrl: string;
    imageUrl: string;
}
