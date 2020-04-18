import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  
  purchase = [
    {
      title: 'Pre-Qualify',
      content: `<b>Start your home buying journey</b> and recieve a certificate before talking to a real estate agent.`
    },
    {
      title: 'Pre-Approval',
      content: `<b>Get a better idea of your monthly payment,</b> and interest rate for the home you have in mind.`
    },
    {
      title: 'Full Applicaion',
      content: `<b>You’ve found a home</b> and are ready to get a personallzed mortgage solution.`
    }
  ]

  refinance = [
    {
      title: 'Rate & Term',
      content: `Replace your exisiting morrgage with a new one. Benefits include <b>lowering your rate, reducing your payment</b> of <b>changing you term length</b>.`
    },
    {
      title: 'Cash Out',
      content: `Leverage your investment can get cash from your home equity to do things like <b>renovate your home, pay for tuition</b> or <b>consolidate debt</b>.`
    }
  ]

  equity = [
    {
      title: 'Title',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      title: 'Title',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ]

  value = [
    {
      icon: 'keyboard-light',
      title: '100% Online',
      content: `Lorem ipsum dolor sit amet, consecte adipisci elit. sed do eiusmod tempor incidi dunt ut labore.`
    },
    {
      icon: 'sitemap-light',
      title: 'Guided Experience',
      content: `Lorem ipsum dolor sit amet, consecte adipisci elit. sed do eiusmod tempor incidi dunt ut labore.`
    },
    {
      icon: 'books-light',
      title: 'Education',
      content: `Lorem ipsum dolor sit amet, consecte adipisci elit. sed do eiusmod tempor incidi dunt ut labore.`
    },
    {
      icon: 'comments-alt-light',
      title: 'Expert Advice',
      content: `Lorem ipsum dolor sit amet, consecte adipisci elit. sed do eiusmod tempor incidi dunt ut labore.`
    }
  ]
  
  
  benefits = [
    {
      icon: 'calculator-light',
      title: 'Home Loan Calulator',
      content: `Learn what you can afford – no credit pull required.`
    },
    {
      icon: 'percent-light',
      title: 'Custom Rate Table',
      content: `Compare rates customized to your home financing need.`
    },
    {
      icon: 'tools-light',
      title: 'Resource Center',
      content: `Learn everything you need to know about buying a home.`
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
