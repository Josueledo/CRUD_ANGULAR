import { Component } from '@angular/core';
import { CostumerService } from '../../services/costumer.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-get-all-costomers',
  standalone: true,
  imports: [RouterLink,MatIconModule],
  templateUrl: './get-all-costomers.component.html',
  styleUrl: './get-all-costomers.component.scss'
})
export class GetAllCostomersComponent {
  customers: any=[]

  constructor(private customerService: CostumerService){}
  ngOnInit(){
    this.getAllCustomers()
  }

  getAllCustomers(){
    this.customerService.getAllCustomer().subscribe({
      next:(res)=>{
        console.log(res)
        this.customers = res
      }
    })
  }
  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe((res)=>{
      console.log(res)
      this.getAllCustomers()
    })
  }
}
