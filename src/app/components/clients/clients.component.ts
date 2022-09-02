import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientsService: ClientService,private modalService: NgbModal) { }

  ngOnInit(): void { }

  
}
