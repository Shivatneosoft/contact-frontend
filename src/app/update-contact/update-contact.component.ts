import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  id!: number;
  contact: Contact = new Contact;

  constructor(private contactService:ContactService,
    private router:Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`]
    this.contactService.getContactById(this.id).subscribe(
      data=>{
        this.contact = data.data
      }
    );
  }

  

  goToContactList(){
    this.router.navigate([`/contact`])
  };

  onSubmit(){
    console.log(this.contact);
    this.contactService.updateContact(this.contact).subscribe(
      data=> {
        this.goToContactList()
      }
    )
  }

}
