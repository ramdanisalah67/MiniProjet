import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  anime from 'animejs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private myroute:Router){}
  ngOnInit(): void {
    const list: NodeListOf<Element> = document.querySelectorAll('.list');

    function activeLink(this: HTMLElement) {
        list.forEach((item: Element) => item.classList.remove('active'));
        this.classList.add('active');
    }
    
    list.forEach((item: Element) => item.addEventListener('click', activeLink));
  }
   

navigatePages1(){
  let resp=0

  const pages: NodeListOf<Element>= document.querySelectorAll('.list') ;
  const size =pages.length
  
  let i=0
  for (let index = 0; index < pages.length; index++) {
    if(pages.item(index).classList.contains('active') && index !=pages.length-1){
     pages.item(index).classList.remove('active')
     pages.item(index+1).classList.add('active')
     console.log(index+1)
     this.go(index+1)
      break
    
  }
  else if(index ==pages.length-1){
    pages.item(index).classList.remove('active')
    pages.item(0).classList.add('active')

    this.go(0)
  }
 
}
}
  
//Previous 
navigatePages2(){
  let resp=0

  const pages: NodeListOf<Element>= document.querySelectorAll('.list') ;
  const size =pages.length
  
  let i=0
  for (let index = 0; index < pages.length; index++) {
    if(pages.item(index).classList.contains('active') && index !=0){
     pages.item(index).classList.remove('active')
     pages.item(index-1).classList.add('active')
     this.go(index-1)
      break
    
  }
  else if(pages.item(index).classList.contains('active') && index ==0){
    pages.item(index).classList.remove('active')
    pages.item(5).classList.add('active')
    this.go(5)
    break
   
  }
 
}
}
go(i:Number){
  
  if(i==1){ 
   this.editStyle('black')
    this.myroute.navigate(['services'])
}
  if(i==2)
  this.myroute.navigate(['about'])
  if(i==3)
  this.myroute.navigate(['photos'])
  if(i==4)
  this.myroute.navigate(['contact'])
  
  if(i==0){
       this.editStyle('#eeeeee')
       this.myroute.navigate(['par'])

}


  else 
    console.log("this page is not services "+i)
}
editStyle(color:string){
  const bf =  document.getElementById('bf') ;
  const af =  document.getElementById('af') ;
  const indi =  document.getElementById('indicator') ;

  const indBefore =  document.querySelector('indicator::before') ;

  if(bf!=null && af!=null && indi !=null){
    bf.style.boxShadow="1px -10px 0 0 "+color
    af.style.boxShadow="-1px -10px 0 0 "+color
    indi.style.border="6px solid "+color
  }
}


}
