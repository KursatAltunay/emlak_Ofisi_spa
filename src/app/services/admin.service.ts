import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Agent } from '../models/agent';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient, private router:Router) {}
  path = 'https://localhost:44393/api/admin';

  getAgents(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.path);
  }

  addAgent(agent) {
    this.httpClient.post(this.path + '/agentAdd', agent).subscribe();
    this.router.navigate(["/admin"])
  }

  deleteAgent(id: number) {
    this.httpClient.delete(this.path + '/agentDelete/' + id).subscribe();
    this.router.navigate(["/admin"])
  }
}
