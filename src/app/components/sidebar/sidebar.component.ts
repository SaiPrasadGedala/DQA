import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'settings', class: '' },
    { path: '/user-profile', title: 'Configuration',  icon:'forum', class: '' },
    { path: '/table-list', title: 'Enhancement DQA',  icon:'computer', class: '' },
    { path: '/typography', title: 'Reports',  icon:'trending_up', class: '' },
    { path: '/icons', title: 'Additional Tasks',  icon:'build', class: '' },
    { path: '/maps', title: 'Quality Assurance',  icon:'thumb_up', class: '' },
    { path: '/notifications', title: 'TM Reports',  icon:'timeline', class: '' },
    { path: '/upgrade', title: 'Sampling Reports',  icon:'trending_up', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
      sub_menu: [],
    },
    {
      link_name: 'Configuration',
      link: null,
      icon: 'settings',
      sub_menu: [
        {
          link_name: 'TM Configuration',
          link: '/user-profile',
          icon: 'settings',
        },
        {
          link_name: 'Menter Mentee Assosiation',
          link: 'mentormenteesetup',
          icon: 'settings',
        },
        {
          link_name: 'Sampling Setup',
          link: '/php-n-mysql',
        },
        {
          link_name: 'Calibration Setup',
          link: '/php-n-mysql',
        },
        {
          link_name: 'Sampling Setup - CTC',
          link: '/php-n-mysql',
        },
        {
          link_name: 'Sampling Data Upload',
          link: '/php-n-mysql',
        },
        {
          link_name: 'TM Configuration Replica',
          link: '/php-n-mysql',
        },
      ],
    },
    {
      link_name: 'Forms',
      link: null,
      icon: 'forum',
      sub_menu: [
        {
          link_name: 'Audit Form',
          link: '/auditform',
          icon: 'settings',
        },
        {
          link_name: 'Feedback',
          link: '/posts/login-form',
        },
        {
          link_name: 'ERS',
          link: '/posts/card-design',
        },
        {
          link_name: 'CTC form',
          link: '/posts/card-design',
        },
        {
          link_name: 'Calibration',
          link: '/posts/card-design',
        },
        {
          link_name: 'TM Adjustment',
          link: '/posts/card-design',
        },
        {
          link_name: 'Unlock Transactions',
          link: '/posts/card-design',
        },
        {
          link_name: 'Feedback Acknowledgement',
          link: '/posts/card-design',
        },
        {
          link_name: 'ERS Feedback ',
          link: '/posts/card-design',
        },
      ],
    },
    {
      link_name: 'Enhancement DQA',
      link: '/analytics',
      icon: 'computer',
      sub_menu: [
        {
          link_name: 'Configure DQA',
          link: '/posts/web-design',
        },
        {
          link_name: 'DQA Audit Form',
          link: '/posts/login-form',
        },
        {
          link_name: 'Sampling Setup',
          link: '/posts/card-design',
        },
        {
          link_name: 'Forms DQA',
          link: '/posts/card-design',
        },
      ],
    },
    {
      link_name: 'Reports',
      link: '/chart',
      icon: 'trending_up',
      sub_menu: [
        {
          link_name: 'Monitoring & Feedback',
          link: '/posts/web-design',
        },
        {
          link_name: 'Transaction Monitoring Delation log',
          link: '/posts/login-form',
        },
        {
          link_name: 'Mentor Mentee',
          link: '/posts/card-design',
        },
        {
          link_name: 'Master setup',
          link: '/posts/card-design',
        },
        {
          link_name: 'Rejected Sample Report',
          link: '/posts/card-design',
        },
      ],
    },
    {
      link_name: 'Additional Tasks',
      link: null,
      icon: 'thumb_up',
      sub_menu: [
        {
          link_name: 'Customer Complaints',
          link: '/ui-face',
        },
        {
          link_name: 'Audit weiver',
          link: '/pigments',
        },
        {
          link_name: 'Audit weiver Approval',
          link: '/box-icons',
        },
      ],
    },
    {
      link_name: 'Quality Assurance',
      link: '/explore',
      icon: 'timeline',
      sub_menu: [
        {
          link_name: 'PAS',
          link: '/posts/web-design',
        },
        {
          link_name: 'Control Checks',
          link: '/posts/login-form',
        },
       
      ],
    },
    {
      link_name: 'TM Reports',
      link: '/history',
      icon: 'trending_up',
      sub_menu: [
        {
          link_name: 'Transaction Monitoring',
          link: '/posts/web-design',
        },
        {
          link_name: 'Transaction Monitoring New',
          link: '/posts/login-form',
        },
        {
          link_name: 'Compliance & Spirit',
          link: '/posts/card-design',
        },
        {
          link_name: 'Calibration Report',
          link: '/posts/card-design',
        },
        {
          link_name: 'CTC Score Card',
          link: '/posts/card-design',
        },
        {
          link_name: 'Quality Dashboard Adjustment',
          link: '/posts/card-design',
        },
        {
          link_name: 'Feedback Report',
          link: '/posts/card-design',
        },
      ],
    },
    {
      link_name: 'Sampling Reports',
      link: '/setting',
      icon: 'trending_up',
      sub_menu: [
        {
          link_name: 'Sampling Rejection',
          link: '/posts/web-design',
        },
        {
          link_name: 'Sampling Report',
          link: '/posts/login-form',
        },
        {
          link_name: 'Sampling Transaction Details',
          link: '/posts/card-design',
        },
        {
          link_name: 'Account History',
          link: '/posts/login-form',
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
}
