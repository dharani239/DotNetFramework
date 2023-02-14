import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/Models/place';
import { PlaceService } from 'src/app/Services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit{
  places:Place[]=[];
  constructor(private service:PlaceService)
  {

  }
  ngOnInit(): void {
        this.service.getAllPlaces().subscribe((data:Place[])=>
        {
          this.places=data;
        })
  }
}
