import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-checkbox-populate',
  templateUrl: './checkbox-populate.component.html',
  styleUrls: ['./checkbox-populate.component.css']
})
export class CheckboxPopulateComponent implements OnInit {

  PartyRoles = [
    {
      Id: 1,
      Name: 'Vendor',
      checked: false
    },
    {
      Id: 2,
      Name: 'Client',
      checked: false
    },
    {
      Id: 3,
      Name: 'Consigner',
      checked: false
    }
  ];

  SelectedList = [];
  checked = false;

  constructor() {
    for (let i = 0; i < this.PartyRoles.length; i++) {
      if (this.PartyRoles[i].checked) {
        this.SelectedList.push(this.PartyRoles[i]);
      }
    }
  }

  ngOnInit() {
  }

  editPartyRolesSubmit() {

    // Access each item like this in PartyRoles
    this.PartyRoles.forEach(role => {
      alert('Id: ' + role.Id + ', Name: ' + role.Name + ', Checked: ' + role.checked);
    });

  }

  /*  update(checked) {
     const element = <HTMLInputElement>document.getElementById(checked.replace(''));
     element.checked = true;
   } */

  update() {
    // tslint:disable-next-line:no-shadowed-variable
    const element = <HTMLInputElement>document.getElementById('chkID');
    element.checked = true;
  }
}

