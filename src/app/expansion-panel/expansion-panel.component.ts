import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accordions = [
    {
      title: 'Borrower Information', 
      subAccordion: [{
        title: 'Personal Information',
        firstName: 'Richard',
        lastName: 'Alexander',
      },
      {
        title: 'Employment & Income',
        firstName: 'Richard',
        lastName: 'Alexander',
      }]
    },
    {
      title: 'Loan & Property', 
      subAccordion: [{
        title: 'Section One', 
        firstName: 'Richard',
        lastName: 'Alexander',
      }]
    }
  ]


  loanDashboardNav = [
    {
      icon: 'bars', 
      label: 'My Applications',
    },
    {
      icon: 'bars', 
      label: 'My Profile',
    },
    {
      icon: 'bars', 
      label: 'Loan Calculator',
    },
    {
      icon: 'bars', 
      label: 'Custom Rate Table',
    },
    {
      icon: 'bars', 
      label: 'Resource Center',
    }
  ]


}
