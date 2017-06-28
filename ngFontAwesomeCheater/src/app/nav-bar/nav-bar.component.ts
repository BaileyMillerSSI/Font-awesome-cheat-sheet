import { Component, OnInit} from '@angular/core';
import { trigger, animate, transition, style} from "@angular/animations";
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ width: '0px'}),
          animate('1s', style({ width: '200px' }))
        ]),
        transition(':leave', [
          style({ width: '200px' }),
          animate('1s', style({ width: '0px' }))
        ])
      ]
    )
  ]
})
export class NavBarComponent implements OnInit {

  navbarCollapsed: boolean;
  searchCollapsed: boolean;

  constructor(router: Router)
  {
    router.events.subscribe((event: any) =>
    {
      if (event instanceof NavigationStart)
      { 
        this.CloseNav();
      }  
    });
  }

  DetermineSearchFunction()
  { 
    if (this.searchCollapsed)
    {
      //Search is not on the screen that means show it
      this.searchCollapsed = false;
    } else if (!this.searchCollapsed && 1 == 1)
    { 

    }  
  }


  ToggleNav()
  { 
    if (this.navbarCollapsed)
    {
      this.OpenNav();
    } else
    { 
      this.CloseNav();
    }
  }

  OpenNav()
  { 
    this.navbarCollapsed = false;
  }

  CloseNav()
  { 
    this.navbarCollapsed = true;
  }

  ngOnInit()
  {
    this.navbarCollapsed = true;
    this.searchCollapsed= true;
  }

}
