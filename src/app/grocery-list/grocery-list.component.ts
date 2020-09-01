import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class GroceryListComponent implements OnInit {

  task: string;
  tasks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.tasks.push({name: this.task});
    console.log(this.task);
    this.task = '';
  }
  

  

}
