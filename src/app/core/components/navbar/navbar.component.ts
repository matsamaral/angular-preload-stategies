import { OnDemandPreloadService } from './../../strategies/on-demand-preload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  constructor(private preloadOnDemandService: OnDemandPreloadService) { }

  ngOnInit(): void {
  }

  public preloadBundle(routePath) {
    this.preloadOnDemandService.startPreload(routePath);
  }

}
