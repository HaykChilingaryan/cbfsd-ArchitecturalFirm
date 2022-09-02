import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openModal(modal: any) {
    this.modalService.open(modal);
  }
  
}

