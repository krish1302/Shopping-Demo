import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.getProducts('electronics')
  }

  categories: any
  selected_category: any
  products: any


  ngOnInit(): void {
    this.api.getCategories('https://fakestoreapi.com/products/categories').subscribe(val => {
      this.categories = val
    })

    
  }

  getProducts(category : any){
    this.selected_category = category
    var url = 'https://fakestoreapi.com/products/category/'+category
    this.api.getProducts(url).subscribe(val => {
      this.products = val
    })
    
  }

  

}
