import { Component } from '@angular/core';
import { ERouter } from '../../enum/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  links = [
    {
      id: 1233,
      name: 'Home',
      router: ERouter.home
    },
    {
      id: 1233,
      name: 'Wedding Film',
      router: ERouter.home
    },
    {
      id: 1233,
      name: 'Short Videos',
      router: ERouter.home
    },

  ]



}
