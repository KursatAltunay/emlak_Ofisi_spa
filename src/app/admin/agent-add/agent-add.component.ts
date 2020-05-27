import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Agent } from 'src/app/models/agent';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-add',
  templateUrl: './agent-add.component.html',
  styleUrls: ['./agent-add.component.css'],
  providers: [AdminService],
})
export class AgentAddComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgentAddComponent>
  ) {}

  agent: Agent;
  agentAddForm: FormGroup;

  createAgentForm() {
    this.agentAddForm = this.formBuilder.group({
      username: ['', Validators.required],
      companyName: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createAgentForm();
  }

  addAgent() {
    if (this.agentAddForm.valid) {
      this.agent = Object.assign({}, this.agentAddForm.value);
      this.adminService.addAgent(this.agent);
      this.dialogRef.close();
      window.alert(this.agent.username+" kullanıcısı eklenmiştir.")
    }
  }
}
