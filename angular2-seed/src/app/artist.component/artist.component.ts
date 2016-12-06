import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Artist } from './../api/artist.model';
import { Track } from './../api/track.model';
import { ArtistService } from './../Services/musicService';

@Component({
	selector: 'my-artist',
	templateUrl: 'artist.component.html',
	styleUrls: ['Artist.component.css']
})

export class ArtistComponent implements OnInit {
	@Input() artist: Artist;

	errorMessage: string;
	selectedTrack: Track;
	tracks: Track[];
	imgUrl: string;

	constructor( private artistService: ArtistService ) {}

	ngOnInit() {
		if (!this.artist) {
			this.artist = new Artist();
			
			this.getTracks();
		}
	 }

	 private getTracks() {
		this.artistService.getTracks()
		.subscribe(
        	tracks => this.tracks = tracks,
        	error =>  this.logError(error),
			() => {
				console.log("Get Tracks Completed")
				this.getImages();
			}
    	);
	 }

	logError(err){
		console.log("Oops, something went wrong when getting tracks: " + err);
	}

	 logTracks()
	 {
		 console.log("==========> Got Tracks From Beatles! The First Track is:", this.tracks[0].name);
		 console.log("==========> The Error is:", this.errorMessage);
	 }

	 //Get the image Url from the Json out in the track object
	 getImages(){
		 this.tracks.forEach(track => {
			let imageUrl = track.image[2]['#text'];
			track.albumImgUrl = imageUrl;
		 });
	 }
}
