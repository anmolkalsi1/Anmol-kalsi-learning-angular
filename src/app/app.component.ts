import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./models/User";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  userList: User[] = //any[] would have worked as well
    [{id: 1, first_name: "Anmol", last_name: "kalsi", age: 20, work: "Programmer", country: "India"},
      {id: 4, first_name: "manik", last_name: "kumar", age: 17, work: "part timer", country: "Sri-lanka"},
      {id: 5, first_name: "sabiya", last_name: "zehra", age: 23, work: "part timer", country: "china"},
      {id: 2, first_name: "anju", last_name: "bala", age: 49, work: "house-wife", country: "sweden"},
      {id: 3, first_name: "saroj", last_name: "raj", age: 32, work: "full-timer", country: "italy"},
      {id: 6, first_name: "sunny", last_name: "dhiman", age: 39, work: "marketer", country: "germany"},
    ]

}
