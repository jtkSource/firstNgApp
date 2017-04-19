import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

people = []
  constructor() { }

  ngOnInit() {
    this.people = [
      {
        name: 'Jubin Kuriakose',
        status: 'Currently Coding',
        website: {
          url:'http://ostechstack.blogspot.sg/',
          name:'Jubin Kuriakose'
        },
        twitter:{
          url:'https://twitter.com/jubin_kuriakose',
          name:'@jubin_kuriakose'
        }
      },
      {
        name: 'Feba James',
        status: 'Currently Sleeping',
        website:{
          url:'https://www.facebook.com/public/Feba-James',
          name:'Feba James'
        }
      }
    ]
  }

}
