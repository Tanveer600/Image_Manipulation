import { Injectable } from '@angular/core';
import { environment } from '../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { product } from '../interfaces/product';
import { status } from '../interfaces/status';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
 private BaseUrl=environment.BaseUrl+'/api/products'; 
 get baseUrl(): string {
  return this.BaseUrl;
}
add(data:product){
let formData=new FormData();
formData.append('ProductName',data.ProductName);
formData.append('ImageFile',data.ImageFile ?? "");
return this.http.post<status>(this.BaseUrl,formData)
}
getall(){
  return this.http.get<product[]>(this.BaseUrl);
}
  constructor(private http:HttpClient) { }
}
