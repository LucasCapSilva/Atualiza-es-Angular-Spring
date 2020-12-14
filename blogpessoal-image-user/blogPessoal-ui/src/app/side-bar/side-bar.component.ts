import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  nome:  String = 'Lucas Trevizan'
  image: String = environment.image;

  constructor() { }

  ngOnInit(){
    
  }


}
