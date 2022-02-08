import { Component } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  test = [
    1,
    2,
    3
  ]

  imageUrls = [
    "https://picsum.photos/id/1041/800/450",
    "https://picsum.photos/id/1043/800/450",
    "https://picsum.photos/id/1044/800/450",
    "https://picsum.photos/id/1045/800/450",
    "https://picsum.photos/id/1049/800/450",
    "https://picsum.photos/id/1052/800/450"
  ]
  imageThumbs = [
    "https://picsum.photos/id/1041/150/150",
    "https://picsum.photos/id/1043/150/150",
    "https://picsum.photos/id/1044/150/150",
    "https://picsum.photos/id/1045/150/150",
    "https://picsum.photos/id/1049/150/150",
    "https://picsum.photos/id/1052/150/150"
  ]

}
