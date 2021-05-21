import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bank';
  incomeValue: any = 10000;
  expenseValue: any = 1000;
  lonAmount: any = 1000;
  EMIvalue: any = 100;
  scroll: boolean = false;
  constructor() { }
  ngOnInit() {
    let that = this

    window.onscroll = function () { myFunction() };

    function myFunction() {

      console.log(window.pageYOffset)
      if(window.pageYOffset>0){
        that.scroll = true
      }else{
        that.scroll = false

      }
    }
  }
  myFunction() {
    console.log("SCROLL IS CALLED")
  }
}
