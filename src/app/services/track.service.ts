import { Injectable } from "@angular/core";

export interface Track {
  name: any;
  lat: number;
  long: number;
  id: any;
}

function generateTrackId() {
  return Math.floor(Math.random() * 99999);
}

@Injectable({
  providedIn: "root",
})
export class trackService {
  lat: number = 40.7143528;
  lng: number = -74.0059731;
  zoom: number = 6;

  newName: string;
  newLat: any;
  newLong: any;

  removedTrackId: number;
  removedTrackName: string;

  searchValue = "";

  tracks: Track[] = [
    {
      name: "Truck001",
      lat: 51.49848455,
      long: -0.11260986,
      id: 1,
    },
    {
      name: "Truck002",
      lat: 48.83579746,
      long: 2.35931396,
      id: 2,
    },
    {
      name: "Truck003",
      lat: 52.50284766,
      long: 13.39782715,
      id: 3,
    },
  ];

  constructor() {}

  addTrack() {
    if (this.newName.trim() && this.newLat.trim() && this.newLong.trim()) {
      const newTrack: Track = {
        name: this.newName,
        lat: +this.newLat,
        long: +this.newLong,
        id: generateTrackId(),
      };

      this.tracks.push(newTrack);
      this.newName = this.newLat = this.newLong = "";
    }
  }

  getCoords(track) {
    this.lat = track.lat;
    this.lng = track.long;
  }

  getRemovedTrackId(removedTrack) {
    this.removedTrackId = removedTrack.id;
    this.removedTrackName = removedTrack.name;
  }
  removeTrack() {
    this.tracks = this.tracks.filter(
      (track) => track.id !== this.removedTrackId
    );
  }
}
