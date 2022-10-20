import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any

  selected_id: any

  count: any

  constructor(private api: ApiService) {
    
    this.count = localStorage.getItem('count')

    this.api.getProducts('https://fakestoreapi.com/products').subscribe(val => {
      this.products = val
    })

    this.updateCart()

  }

  ngOnInit(): void {
    this.api.eventEmiter.subscribe(val => {
      this.count = val
    })
  }

  removeFromCart(id:any){
    localStorage.removeItem('item'+(id+1))
    var num = Number(localStorage.getItem('count'))
    localStorage.setItem('count', String(num-1))
    this.api.getCount()
    this.updateCart()
  }

  updateCart(){
    this.selected_id = []
    for(var i=1; i<=100; i++){
      this.selected_id.push(localStorage.getItem('item'+i))
    }
  }

}
