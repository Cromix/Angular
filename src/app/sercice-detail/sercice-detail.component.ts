import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ServiciService } from '../services/servici.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sercice-detail',
  templateUrl: './sercice-detail.component.html',
  styleUrls: ['./sercice-detail.component.css']
})
export class SerciceDetailComponent implements OnInit {
  
  constructor(
    private router: ActivatedRoute,
    private service: ServiciService) { }
  private id = this.router.snapshot.paramMap.get('id');
  private specName = this.service.findNameById(this.id);

  ngOnInit() {
  }
  getSpec(){
    return this.specName;
  }
}
