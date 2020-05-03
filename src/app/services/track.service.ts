import { Injectable } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface Track {
  name: any;
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
  zoom: number = 5;

  newName: string;
  newLat: any;
  newLong: any;
  removeTrack: any;

  tracks: Track[] = [
    {
      name: "Truck001",
      lat: -23.8779431,
      long: -49.8046873,
    },
    {
      name: "Truck002",
      lat: 51.50190411,
      long: -74.0059731,
    },
  ];
  constructor(public dialog: MatDialog) {}

  setCoord(track) {
    console.log(track);
    this.lat = track.lat;
    this.lng = track.long;
  }

  addTrack() {
    if (this.newName.trim() && this.newLat.trim() && this.newLong.trim()) {
      const newTrack: Track = {
        name: this.newName,
        lat: +this.newLat,
        long: +this.newLong,
      };

      console.log(newTrack);
      this.tracks.push(newTrack);
      this.newName = this.newLat = this.newLong = "";
    }
    console.log(this.tracks);
  }

  // deleteTrack() {
  //   this.tracks = this.tracks.filter((c) => c.name !== this.removeTrack);
  //   console.log(this.removeTrack);
  // }
}
