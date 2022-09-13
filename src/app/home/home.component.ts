import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics = [{ id: 0, title: '', user_id: 0 }, { id: 1, title: 'redes', user_id: 2 },
  { id: 2, title: 'computacion', user_id: 3 }];
  newTopic = { id: 0, title: '', user_id: 0 };
  pages=[{url:'',label:'',active:false}]

  constructor(private rest: ApiRestService) { }

  ngOnInit(): void {
    this.readTopics();
  }

  readTopics(url:string ='') {
    this.rest.getTopics(url).subscribe(
      respuesta => {
        this.topics = respuesta.data;
        this.pages = respuesta.links;
      }
    );
  }

  createTopic() {
    this.rest.postTopics(this.newTopic).subscribe(
      res => {
        this.readTopics();
      }
    );
  }
}
