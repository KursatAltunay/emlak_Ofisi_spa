import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { Advert } from 'src/app/models/advert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advert-add',
  templateUrl: './advert-add.component.html',
  styleUrls: ['./advert-add.component.css'],
  providers: [AgentService],
})
export class AdvertAddComponent implements OnInit {
  constructor(private agentService: AgentService, private router: Router) {}

  model: Advert = new Advert();

  // advertTypes: string[] = ['Satılık', 'Kiralık', 'Satılık & Kiralık'];
  // heatingTypes: string[] = [
  //   'Kombi',
  //   'Soba',
  //   'Merkezi Sistem',
  //   'Zeminden Isıtma',
  // ];

  ngOnInit() {}

  addAdvert(form: NgForm) {
    this.model.agentId = 1; //burası auth ile düzenlenecek
    this.agentService.addAdvert(this.model);
    this.router.navigate(["/agent"])
  }
}
