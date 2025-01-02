import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
 
})
export class ProductComponent implements OnInit {
  frm !:FormGroup;
constructor(private ProductServiuce:ProductService,private fb:FormBuilder){}



  ngOnInit(): void {
    this.frm=this.fb.group({
      'id':0,
      'productname':[''],
      'filename':['']
    })
  }
}
