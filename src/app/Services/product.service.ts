import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { product } from '../interfaces/product';
import { status } from '../interfaces/status';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private BaseUrl=environment.BaseUrl + '/api'; 
Add(data:product){
let formData=new FormData();
formData.append('productname',data.productname);
formData.append('ImageFile',data.ImageFile ?? "");
return this.http.post<status>(this.BaseUrl + '/Add',formData)
}
getall(){
  return this.http.get<product[]>(this.BaseUrl + '/getall');
}
  constructor(private http:HttpClient) { }
}
