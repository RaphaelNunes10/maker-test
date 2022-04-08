import { Component, OnInit } from '@angular/core';

interface Language {
  flag: string;
  value: string;
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  selectedLanguage: Language = { flag: '', value: '' };
  languages: Language[] = [
    { flag: 'us', value: 'English' },
    { flag: 'br', value: 'Portugês' },
    { flag: 'es', value: 'Español' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
