import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_PROXY_URL = "https://cors-anywhere.herokuapp.com/";

@Injectable()
export class SearchProfileService {
  constructor(private http: HttpClient) { }

  searchProfile(username: string){
      return this.http.get(API_PROXY_URL + "https://r6stats.com/api/player-search/" + username + "/pc");
  }
}