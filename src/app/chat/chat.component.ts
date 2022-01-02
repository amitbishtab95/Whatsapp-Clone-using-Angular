import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() convo: any;
  constructor() {}
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {}
  submitMessage(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';
    if (value.length < 1) return false;
    this.convo.message = value;
    this.convo.messages.unshift({
      id: 1,
      body: value,
      time: '4:00 am',
      me: true,
    });
    return true;
  }
}
