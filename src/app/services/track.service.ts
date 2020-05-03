import { Injectable } from "@angular/core";

export interface Track {
  name: any;
  lat: any;
  long: any;
  // id?: number;
}

@Injectable({
  providedIn: "root",
})
export class trackService {
  lat: any = -23.8779431;
  lng: any = -49.8046873;
  zoom: number = 15;

  newName: string;
  newLat: any;
  newLong: any;

  tracks: Track[] = [
    {
      name: "Truck001",
      lat: -23.8779431,
      long: -49.8046873,
    },
    {
      name: "Truck002",
      lat: 40.7143528,
      long: -74.0059731,
    },
  ];
  constructor() {}

  addTrack() {
    if (this.newName.trim() && this.newLat && this.newLong) {
      const newTrack: Track = {
        name: this.newName,
        lat: +this.newLat,
        long: +this.newLong,
      };

      console.log(newTrack);
      this.tracks.unshift(newTrack);
      this.newName = this.newLat = this.newLong = "";
    }
    console.log(this.tracks);
  }
}
