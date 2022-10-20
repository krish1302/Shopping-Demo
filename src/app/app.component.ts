import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Test-app';
  cart_count: any
  products: any
  typed = ''
  
  count: any

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router){
    this.api.getProducts('https://fakestoreapi.com/products').subscribe(val => {
      this.products = val
    })
  }


  ngOnInit(): void {
    this.api.eventEmiter.subscribe(val =>{
      this.count = val
    })

  }

  goToProduct(){
    if(this.typed){
      this.router.navigate(['/product/'+this.typed])
    }
  }

 
}
