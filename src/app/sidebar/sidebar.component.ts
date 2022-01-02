import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: any;
  conversations = [
    {
      name: 'Marshall',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'Anny',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'Prer',
      time: '10:00 pm',
      message: 'Hey Amit! Whats up',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'Goffy',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'John',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'Enddy',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: false,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'Marshall',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
    {
      name: 'Anny',
      time: '9:00 am',
      message: 'Hey Amit! Whats up',
      messageRead: true,
      messages: [
        { id: 1, body: 'Hello world!', time: '4:00 am', me: true },
        { id: 2, body: 'How are you?', time: '4:00 am', me: false },
        { id: 3, body: 'I am fine thanks', time: '4:00 am', me: true },
        { id: 4, body: 'Glad to hear that', time: '4:00 am', me: false },
      ],
    },
  ];
  get filteredConversations() {
    return this.conversations.filter((conversations) => {
      return (
        conversations.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversations.message
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }
  constructor() {}
  ngOnInit(): void {}
}
