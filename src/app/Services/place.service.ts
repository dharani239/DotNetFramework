import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../Models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  url:string="http://localhost:55954/api/Places";
  constructor(private proxy:HttpClient) 
  { 
      
  }
  public getAllPlaces():Observable<Place[]>
  {
   return this.proxy.get<Place[]>(this.url);
  } 
}
