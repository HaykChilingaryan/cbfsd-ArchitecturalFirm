import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client-service.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
   
  public clientObservable: Observable<any[]> = new Observable();
  clientForm: FormGroup = new FormGroup({});
  clientModel: Clients | undefined;
  updation: boolean = false;
  loader: boolean = false;

  public clients:any[] =[];

  constructor(private clientsService: ClientService,private modalService: NgbModal,
     private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientObservable = this.clientsService.getClients();
    this.clientsService.getClients().subscribe({
      next: (response) => {
         // console.log(response);
          this.clients = response;
      },
      error: (error) => {
          alert('There was an error in retrieving data from the server');
      }
    });
  }
  
  closeResult: string = '';
  openModal(modal: any, client: Clients | null = null) {
    
    this.initialiseModal(client);
    this.modalService.open(modal);
  }


  initialiseModal(clientObj: Clients | null) {
    if (clientObj == null) {
      this.updation = false;
      this.clientForm = this.fb.group({
        clientId: [],
        clientUsername: [null],
        clientName: [null],
        clientEmail: [null],
        clientCity: [null],
        clientNumber:[0]
      });
    } else {
      this.updation = true;
      this.clientForm = this.fb.group({
        clientId: [clientObj.clientId],
        clientUsername: [clientObj.clientUsername],
        clientName: [clientObj.clientName],
        clientEmail: [clientObj.clientEmail],
        clientCity: [clientObj.clientCity],
        clientNumber:[clientObj.clientNumber]
        
      });
    }
  }



  // view product details
  viewClientDetails(modal: any, clientObj: Clients) {
    this.clientModel = clientObj;
    this.modalService.open(modal, { size: 'lg' });
  }
  
  }

export interface Clients {
  clientId?: string;
  clientUsername?: string;
  clientName?: string;
  clientEmail?: string;
  clientCity?: string;
  clientNumber?: number
}