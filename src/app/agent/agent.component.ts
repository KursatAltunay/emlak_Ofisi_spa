import { Component, OnInit, ViewChild } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Advert } from '../models/advert';
import { provideRoutes, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
  providers: [AgentService],
})
export class AgentComponent implements OnInit {
  constructor(private agentService: AgentService, private router: Router) {}

  adverts: Advert[];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'title',
    'price',
    'location',
    'advertType',
    'heating',
    'numberOfRooms',
    'totalFloor',
    'placeFloor',
    'isInHousingEstate',
    'isFurnished',
    'isInUse',
    'actions',
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.agentService.getAdverts().subscribe((data) => {
      this.adverts = data;

      this.listData = new MatTableDataSource(this.adverts);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
     
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  deleteAdvert(advert: Advert) {
    if (confirm(advert.title + ' ilanını silmek istediğinize emin misiniz?'))
      this.agentService.deleteAdvert(advert.id);
    this.router.navigate(['/agent']);
  }

  view(advert: Advert) {
    this.router.navigate(['/advertDetail/' + advert.id]);
  }
  edit(advert: Advert) {
    this.router.navigate(['/advertUpdate/' + advert.id]);
  }

  add() {
    this.router.navigate(['/advertAdd']);
  }
}
