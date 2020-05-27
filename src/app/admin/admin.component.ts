import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Agent } from '../models/agent';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgentAddComponent } from './agent-add/agent-add.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService],
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService, private dialog: MatDialog) {}

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id',
    'username',
    'companyName',
    'password',
    'actions',
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  agents: Agent[];

  ngOnInit() {
    this.adminService.getAgents().subscribe((data) => {
      this.agents = data;
      this.listData = new MatTableDataSource(this.agents);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;

      this.listData.filterPredicate = (data, filter) => {
        return this.displayedColumns.some((ele) => {
          return (
            ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1
          );
        });
      };
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  deleteAgent(agent:Agent) {
    if(confirm(agent.username+" kullanıcısını silmek istediğinize emin misiniz?" ))    
    this.adminService.deleteAgent(agent.id);
    window.alert(agent.username+"kullanıcısı silinmiştir.")
  }

  onCreate() {    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AgentAddComponent)
  }


}
