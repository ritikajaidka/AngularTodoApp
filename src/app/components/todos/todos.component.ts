import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: any = [];

  inputTodo: string = '';
  submitted = false;
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.crudService.getTodos().subscribe((res) => {
      console.log(res);
      this.todos = res;
    });
  }

  toggleDone(id: any) {
    this.todos.map((todoarray: any, _id: any) => {
      const databaseid = todoarray._id;

      if (id == databaseid) todoarray.completed = !todoarray.completed;
    });
  }
  deleteTodo(id: any) {
    console.log(id);
    this.crudService.deleteTodo(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }
  addTodo(): any {
    const data = {
      name: this.inputTodo,
      completed: true,
    };
    this.crudService.addTodo(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.ngOnInit();
        this.inputTodo= "";
      },
      (error) => {
        console.log(Error);
      }
    );
  }
}

/*
          {

            let data= {
              name:todoarray.name,
              completed: !todoarray.completed
            }

            this.crudService.updateToogle(databaseid, data)
            .subscribe(
              response=>{
                console.log(response);
              }
            )*/

/*
  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i)=>i!==id);
  }*/

/*addTodo (): any{
    this.todos.push({
      content: this.inputTodo,
      completed: true
    });
    this.inputTodo= "";
  }


 toggleDone (id:any){
   this.todos.map((v:any,i:any)=>{
     if(i==id) v.completed = !v.completed;
     return v;
   })
  }

  */
