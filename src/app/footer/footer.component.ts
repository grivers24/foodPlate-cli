import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  versionNumber: number = 1.00;
  icon: string = 'app/assets/images/icons/icons-57.png';
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = true;
 }
