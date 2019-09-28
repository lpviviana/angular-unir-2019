export interface Place{
    _id:string;
    name:string;
    address:string;
    city:string;
    zipCode:number;
    image:string;
    _ownerId:string;
    location:GeoPoint;
    _createdAt:string;
    _v:number
}
export interface GeoPoint{
    coodinates:number[];
    type:'Point';
}