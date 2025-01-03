import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { product } from '../../interfaces/product';
import { status } from '../../interfaces/status';
import { error } from 'console';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './product.component.html',
 
})
export class ProductComponent implements OnInit {
  frm !:FormGroup;
 // product:product={id:0,productname:'',productimageurl:''};
 ImageFile?:File;
  status !:status;
constructor(private ProductServiuce:ProductService,private fb:FormBuilder){}

get f(){
  return this.frm.controls;
}
onpost(){
  debugger;
  this.status={StatusCode:0,Message:"please wait"};
const frmData:product=Object.assign(this.frm.value);
frmData.ImageFile=this.ImageFile;
this.ProductServiuce.add(frmData).subscribe({
  next: (res) => {
      this.status = res;
  },
  error: (err) => {
      console.error('API Error:', err);
      debugger;
      this.status = { StatusCode: 0, Message: "Error on server side" };
  }
});

}

OnChange(event:any){
this.ImageFile=event.target.files[0];

}
  ngOnInit(): void {
    this.frm=this.fb.group({
      'id':[0],
      'ProductName':['',Validators.required],
      'filename':['']
    })
  };
 
}
