import { Component, OnInit } from '@angular/core';
import {routeTransitionAnimations} from './route-animations'
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    routeTransitionAnimations
  ]
})
export class AppComponent implements OnInit {

  constructor(){}
  title = 'template2';
  user="user"
  visibilityguest="d-block"
  ngOnInit(): void {
    this.f()
  }






f(){
  const menuToggle: HTMLElement | null = document.querySelector('.menuToggle');
const sidebar: HTMLElement | null = document.querySelector('.sidebar');

if (menuToggle && sidebar) {
  menuToggle.onclick = function () {
      menuToggle.classList.toggle('active');
      sidebar.classList.toggle('active');
  };
}

const Menulist: NodeListOf<Element> = document.querySelectorAll('.Menulist li');

function activeLink(this: Element) {
  Menulist.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

Menulist.forEach((item) => {
  item.addEventListener('click', activeLink);
});
}



}