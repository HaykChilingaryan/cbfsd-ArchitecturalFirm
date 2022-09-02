import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private HttpClient: HttpClient) { }

  getClients() {
    return this.HttpClient.get<any[]>('../../assets/json/clients.json');
  }

}
