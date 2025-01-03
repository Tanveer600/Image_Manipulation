import { Component, OnInit } from '@angular/core';
import { product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../Services/product.service';
import { environment } from '../../Environment/environment';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
})
export class DisplayComponent implements OnInit {
productsList !:product[];
imagebaeurl=environment.BaseUrl+'/Resources/';
constructor(private ProductService:ProductService){}
getProduct()
{
this.ProductService.getall().subscribe((res)=>{
this.productsList=res;
console.info("this.productsList",this.productsList);
});
}

ngOnInit(): void {
  this.getProduct();
}

}
