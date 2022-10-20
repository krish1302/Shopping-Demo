import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: any
  products!: any
  id: any
  rate = 3
  max =5


  constructor(private api: ApiService, private route: ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get('id') || ''
    console.log(this.id)
    if(parseInt(this.id) == null){
      console.log('i am here')
      
    }
    else{
      this.api.getProduct('https://fakestoreapi.com/products/'+this.id).subscribe(val => {
        this.product = val
      })
    }

    this.api.getProducts('https://fakestoreapi.com/products').subscribe(val => {
      this.products = val
    })
  }

  ngOnInit(): void {

  }

  addToCart(id: any){
    if(!localStorage.getItem('count')){
      localStorage.setItem('count', '0')
    }
    var count = Number(localStorage.getItem('count')) + 1
    localStorage.setItem('count', String(count))
    localStorage.setItem('item'+count, id)
    this.api.getCount()
  }

}
