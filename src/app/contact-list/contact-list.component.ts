import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 
  contacts:Contact[]=[];

  constructor(public contactService: ContactService,
    private router:Router){}

  ngOnInit(): any {
      this.contactService.getContactList().subscribe(data=>{
        this.contacts = data.data;
      })
  }

  updateButton(id:number){
    this.router.navigate([`update-contact`,id])
  }

  deleteButton(id:number){
    this.contactService.deleteContact(id).subscribe(
      data=>{console.log(data.data);});
    this.contactService.getContactList().subscribe(data=>{
      this.contacts = data.data;
    })
  }

}
