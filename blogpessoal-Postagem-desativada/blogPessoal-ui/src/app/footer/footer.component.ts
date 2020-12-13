import { Component, OnInit } from '@angular/core';
import{faLinkedin} from '@fortawesome/free-brands-svg-icons'
import{faGithub} from '@fortawesome/free-brands-svg-icons'
import{faInstagram} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faLinkedin = faLinkedin
  faGithub = faGithub
  faInstagram = faInstagram

  constructor() { }

  ngOnInit(): void {
  }

}
