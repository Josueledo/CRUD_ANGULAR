import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CostumerService } from '../../services/costumer.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-costomer',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './update-costomer.component.html',
  styleUrl: './update-costomer.component.scss'
})
export class UpdateCostomerComponent {

  id:number = this.activatedRoute.snapshot.params["id"]
  constructor(private activatedRoute: ActivatedRoute, private service:CostumerService, private fb: FormBuilder,private router: Router){}

  ngOnInit(){
    this.getCustomerById()
  }
  updateForm = this.fb.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });


  getCustomerById(){
    this.service.getCustomerById(this.id).subscribe({

      next: (res) =>{
        console.log(res)
        this.updateForm.patchValue(res)
        },error: (err)=> console.log(err)
    }
  )
  }
  updateCustomer(){
    this.service.updateCustomer(this.id,this.updateForm.value).subscribe((res)=>{
      console.log(res)
      if(res.id != null){
        this.router.navigateByUrl("")
      }
    })
  }
}
