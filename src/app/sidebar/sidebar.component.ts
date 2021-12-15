import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  conversations = [
    {
      name: 'Marshall',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
    },
    {
      name: 'Anny',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
    },
    {
      name: 'Prer',
      time: '10:00 pm',
      message: 'Hey Amit! Whats up',
      messageRead: true,
    },
    {
      name: 'Goffy',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
    },
    {
      name: 'John',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
    },
    {
      name: 'Enddy',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
    },
    {
      name: 'Marshall',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: true,
    },
    {
      name: 'Anny',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
