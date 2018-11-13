import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  // userName = '';
  phrase = 'please work';
  numbers = [];
  printedNumber;
  clicks = 1;
  display = 'block';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


// Can just use this as an expression in HTML
  // noUserName() {
    // if (this.userName.length > 0) {
      // return false;
    // }
    // return true;
  // }

  onButtonClick () {
    this.numbers.push(this.clicks++);
    this.printedNumber = this.numbers.shift();
    if (this.phrase === 'please work') {
      return this.phrase = '';
    } else if (this.phrase === '') {
      return this.phrase = 'please work';
    }
  }

  isGreaterThanFive () {
    if (this.printedNumber >= 5) {
      return 'blue';
    }
  }

  isGreaterThanFive2 () {
    if (this.printedNumber >= 5) {
      return 'white-font';
    }

  }
}
