import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success">
              <p>This website uses cookies to provide better user experience</p>
            </div>`,
  styles: ['div{ text-align: center; }', 'p{ font-size: 16px}']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}