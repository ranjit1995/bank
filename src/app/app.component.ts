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
      var navbar: any = document.getElementsByClassName("mb-20");
      var sticky = navbar.offsetTop;

      // Get the offset position of the navbar
      console.log(window.pageYOffset >= sticky)
      console.log(sticky)
      that.scroll = true
    }
  }

}
