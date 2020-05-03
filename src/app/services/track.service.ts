import { Injectable } from "@angular/core";

export interface Track {
  name: string;
  lat: number;
  long: number;
  // id?: number;
}

@Injectable({
  providedIn: "root",
})
export class trackService {
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  tracks: Track[] = [
    {
      name: "Truck001",
      lat: -23.8779431,
      long: -49.8046873,
    },
    {
      name: "NY",
      lat: 40.7143528,
      long: -74.0059731,
    },
  ];
  constructor() {}
}
