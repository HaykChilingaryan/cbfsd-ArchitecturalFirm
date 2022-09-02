import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private HttpClient: HttpClient) { }

  getClients() {
    return this.HttpClient.get<any[]>('../../assets/json/meetings.json');
  }

}
