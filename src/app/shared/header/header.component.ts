import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    return document.body.scrollTop > 20
    || document.documentElement.scrollTop > 20
  }

}
