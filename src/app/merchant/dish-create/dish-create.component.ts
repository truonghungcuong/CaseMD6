/* tslint:disable:no-trailing-whitespace prefer-const */
import {Component, OnInit} from '@angular/core';
import {Dish} from '../../model/dish';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DishService} from '../../service/dish/dish.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Merchant} from '../../model/merchant';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {MerchantService} from '../../service/merchant/merchant.service';

declare var $: any;

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {
  dish: Dish = {};
  dishForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('')
  });

  allCategories: Category[] = [];

  categories: Category[] = [];
  merchant: Merchant = {};

  constructor(private dishService: DishService,
              private notificationService: NotificationService,
              private categoryService: CategoryService,
              private router: Router,
              private authService: AuthService,
              private merchantService: MerchantService) {
  }

  ngOnInit() {
    this.getMerchant();
    this.getAllCategories();
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

  // get image() {
  //   return this.dishForm.get('image')
  // }

  getMerchant() {
    this.merchantService.getCurrentUserMerchant().subscribe(merchantBE => {
      this.merchant = merchantBE;
      // console.log(this.merchant);
    });
    // console.log(this.merchant);
  }

  createDish() {
    if (this.dishForm.valid) {
      let newDish = new FormData();
      newDish.append('name', this.dishForm.value.name);
      newDish.append('price', this.dishForm.value.price);
      newDish.append('description', this.dishForm.value.description);
      for (var i = 0; i < this.categories.length; i++) {
        newDish.append('categories[]', '' + this.categories[i].id);
      }
      newDish.append('merchant', '' + this.merchant.id);

      // newDish.append('categories', this.dishForm.value.categories);
      // newDish.append('merchant', JSON.stringify(this.merchant));

      const imageFile = (document.getElementById('image') as HTMLInputElement).files;
      if (imageFile.length > 0) {
        newDish.append('image', imageFile[0]);
        console.log(newDish.get('image'));

      }
      this.dishService.createMerchantDish(newDish).subscribe(() => {
        this.notificationService.showMessage('success', 'Tạo món ăn thành công');
        this.router.navigateByUrl('/merchant');
      }, error => {
        this.notificationService.showMessage('error', error.error.message);
      });
    } else {
      this.notificationService.showMessage('error', 'Vui lòng kiểm tra lại thông tin nhập');
    }
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(categoriesFromBE => {
      this.allCategories = categoriesFromBE as Category [];
    });
  }

  toggleCategory(categoryId) {
    let isChecked = $(`#cb-category-${categoryId}`).is(':checked');
    if (isChecked) {
      this.categories.push({id: categoryId});
    } else {
      for (let i = 0; i < this.categories.length; i++) {
        // tslint:disable-next-line:triple-equals
        if (this.categories[i].id == categoryId) {
          this.categories.splice(i, 1);
        }
      }
    }
  }
}
