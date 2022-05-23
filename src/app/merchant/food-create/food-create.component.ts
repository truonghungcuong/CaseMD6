/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';
import {DishService} from '../../service/dish/dish.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css']
})
export class FoodCreateComponent implements OnInit {
  dishForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  selectedImages: any;
  categoryList: Category[] = [];

  constructor(private dishService: DishService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  get nameControl() {
    return this.dishForm.get('name');
  }

  get priceControl() {
    return this.dishForm.get('price');
  }

  get descriptionControl() {
    return this.dishForm.get('description');
  }

  ngOnInit() {
  }

  createDish() {
    if (this.dishForm.valid) {
      this.dishService.createMerchantDish(this.dishForm.value).subscribe(() => {
        this.notificationService.showMessage('success', 'Tạo món ăn thành công');
      }, error => {
        this.notificationService.showMessage('error', error.error.message);
      });
    } else {
      this.notificationService.showMessage('error', 'Vui lòng kiểm tra lại thông tin');
    }
  }
}
