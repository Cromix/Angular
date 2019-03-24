import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciService } from '../services/servici.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  constructor(private router:Router,
    private servici: ServiciService) { }

  ngOnInit() {
  }
  gotoDetail(obj){
    if(obj.id == 12){
      window.location.href="http://ams.ro/";
    }else{
      this.router.navigateByUrl('/specialitati/'+obj.id);
    }
    
  }
  getServices(){
    return this.servici.getAllServices();
  }

}
