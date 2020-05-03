import { Pipe, PipeTransform } from "@angular/core";
import { Track } from "../services/track.service";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(tracks: Track[], search: string = ""): Track[] {
    if (!search.trim()) {
      return tracks;
    }
    return tracks.filter((track) => {
      return track.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
