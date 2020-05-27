import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advert } from 'src/app/models/advert';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.css'],
  providers: [AgentService],
})
export class AdvertDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private agentService: AgentService,
    private router: Router
  ) {}

  advert: Advert;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getAdvertById(params['advertId']);
    });
  }

  getAdvertById(advertId) {
    this.agentService.getAdvertById(advertId).subscribe((data) => {
      this.advert = data;
    
    });
  }

}
