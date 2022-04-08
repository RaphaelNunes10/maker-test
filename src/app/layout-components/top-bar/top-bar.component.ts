import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  languages = [
    { flag: 'us', label: 'English', value: 0 },
    { flag: 'br', label: 'Portugês', value: 1 },
    { flag: 'es', label: 'Español', value: 2 },
  ];
  selectedLanguage = this.languages[0];

  constructor() {}

  ngOnInit(): void {}
}
