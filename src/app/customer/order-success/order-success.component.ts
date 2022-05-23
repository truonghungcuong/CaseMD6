import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  orderId: number;

  constructor(
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.orderId = +paramMap.get('orderId');
      console.log(this.orderId);
    });
  }

  ngOnInit() {
  }

  goToTrackOrder(){
    this.router.navigateByUrl(`/track-order/${this.orderId}`);
  }
}
