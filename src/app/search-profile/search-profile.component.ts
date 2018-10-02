import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchProfileService } from '../services/search-profile.service';
import { Config } from 'protractor';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent {
  title = 'OperationTrackRecord';

  username: string;
  profiles;
  avatar;



  constructor(private service: SearchProfileService) { }

  public showSearchProfile(){
    
      this.service.searchProfile(this.username).subscribe(data => {
          console.log(data);
          this.profiles = data;
          console.log(this.username);
      })
  }

}