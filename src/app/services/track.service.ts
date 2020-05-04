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
}

@Injectable({
  providedIn: "root",
})
export class trackService {
  lat: number = -30.8779431;
  lng: number = -45.8046873;
  zoom: number = 5;

  newName: string;
  newLat: any;
  newLong: any;
  removeTrack: any;
  search = "";

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

  addTrack() {
    if (this.newName.trim() && this.newLat.trim() && this.newLong.trim()) {
      const newTrack: Track = {
        name: this.newName,
        lat: +this.newLat,
        long: +this.newLong,
      };

      this.tracks.push(newTrack);
      this.newName = this.newLat = this.newLong = "";
    }
  }

  setCoord(track) {
    this.lat = track.lat;
    this.lng = track.long;
  }

  deleteTrack(track) {
    this.tracks = this.tracks.filter((c) => c.name !== track.name);
  }
}
