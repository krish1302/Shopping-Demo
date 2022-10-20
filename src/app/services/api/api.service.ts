import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  eventEmiter =  new EventEmitter()
  routeEmitter = new EventEmitter()
  
  route = true

  constructor(private httpClient: HttpClient) { }

  getCategories(url: any){
    return this.httpClient.get(url, {responseType: 'json'})
  }

  getProducts(url: any){
    return this.httpClient.get(url, {responseType: 'json'})
  }

  getProduct(url: any){
    return this.httpClient.get(url, {responseType:'json'})
  }

  getCount(){
    this.eventEmiter.emit(Number(localStorage.getItem('count')))
  }

  routeChange(){
    this.route = !this.route
    this.eventEmiter.emit(this.route)
  }
}
