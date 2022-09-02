import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting-service.service';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
   
  public meetingObservable: Observable<any[]> = new Observable();
  meetingForm: FormGroup = new FormGroup({});
  meetingModel: Meetings | undefined;
  updation: boolean = false;
  loader: boolean = false;

  public meetings:any[] =[];

  constructor(private meetingService: MeetingService,private modalService: NgbModal,
     private fb: FormBuilder) { }

  ngOnInit(): void {
    this.meetingObservable = this.meetingService.getClients();
    this.meetingService.getClients().subscribe({
      next: (response) => {
         // console.log(response);
          this.meetings = response;
      },
      error: (error) => {
          alert('There was an error in retrieving data from the server');
      }
    });
  }
  
  closeResult: string = '';
  openModal(modal: any, meeting: Meetings | null = null) {
    
    this.initialiseModal(meeting);
    this.modalService.open(modal);
  }


  initialiseModal(meetingObj: Meetings | null) {
    if (meetingObj == null) {
      this.updation = false;
      this.meetingForm = this.fb.group({
        meetingId: [],
        meetingTitle: [null],
        meetingNumberOfPeople: [0],
        meetingRoom: [null],
        meetingDate: [null]
       
      });
    } else {
      this.updation = true;
      this.meetingForm = this.fb.group({
        meetingId: [meetingObj.meetingId],
        meetingTitle: [meetingObj.meetingTitle],
        meetingNumberOfPeople: [meetingObj.meetingNumberOfPeople],
        meetingRoom: [meetingObj.meetingRoom],
        meetingDate: [meetingObj.meetingDate]
        
      });
    }
  }



  // view product details
  viewClientDetails(modal: any, meetingObj: Meetings) {
    this.meetingModel = meetingObj;
    this.modalService.open(modal, { size: 'lg' });
  }
  
  }

export interface Meetings {
  meetingId: string,
  meetingTitle: string,
  meetingNumberOfPeople: number,
  meetingRoom: string,
  meetingDate: Date
}
