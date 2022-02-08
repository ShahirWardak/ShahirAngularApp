import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsible-section',
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss']
})
export class CollapsibleSectionComponent {

  openingTimes = [
    {location: "Car park", times: "Dawn - dusk"},
    {location: "Nature reserve", times: "Dawn - dusk"},
    {location: "Toilets", times: "9am - 5pm"},
    {location: "Visitor centre", times: "9am - 5pm"},
    {location: "Shop", times: "10am - 4pm"},
    {location: "Cafe", times: "10am - 4pm"},
    {location: "Hide", times: "Dawn - dusk"}
  ]

}
