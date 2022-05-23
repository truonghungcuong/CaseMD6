import {Component, OnInit} from '@angular/core';
import {Shipper} from '../../../model/shipper';
import {ShipperService} from '../../../service/shipper/shipper.service';
import {Merchant} from '../../../model/merchant';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {
  shippers: Shipper[] = [];

  constructor(private shipperService: ShipperService) {
  }

  ngOnInit() {
    this.getAllShipper();
  }

  toggleShipper(shipper: Shipper) {
    shipper.active = !shipper.active;
    this.shipperService.updateActiveShipper(shipper.id, shipper).subscribe(() => {
      this.getAllShipper();
    });
  }

  getAllShipper() {
    this.shipperService.getAll().subscribe((shippersFromBE) => {
      this.shippers = shippersFromBE;
      console.log(this.shippers);
    });
  }
}
