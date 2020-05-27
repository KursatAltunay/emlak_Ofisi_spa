import { Component, OnInit } from '@angular/core';
import { Advert } from 'src/app/models/advert';
import { NgForm } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-advert-update',
  templateUrl: './advert-update.component.html',
  styleUrls: ['./advert-update.component.css'],
})
export class AdvertUpdateComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private agentService: AgentService,
    private router: Router
  ) {}

  advert: Advert;

  // advertTypes: string[] = ['Satılık', 'Kiralık', 'Satılık & Kiralık'];
  // heatingTypes: string[] = [
  //   'Kombi',
  //   'Soba',
  //   'Merkezi Sistem',
  //   'Zeminden Isıtma',
  // ];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getAdvertById(params['advertId']);
    });
  }

  updateAdvert(form: NgForm) {
    this.agentService.updateAdvert(this.advert);    
    this.router.navigate(['/agent']);
  }

  getAdvertById(advertId) {
    this.agentService.getAdvertById(advertId).subscribe((data) => {
      this.advert = data;
      
    });
  }
}
