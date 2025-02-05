import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class NavbarComponentComponent implements OnInit {

<<<<<<< HEAD
  constructor(private meta: Meta) { 
    
    this.meta.addTag({name:'description', content:'gNEX Solutions'});
    this.meta.addTag({name: 'author', content: 'gNEX Solutions'}); 
    this.meta.addTag({name: 'keywords', content: 'IT Solutions, Innovation, Design, Develop'});
    this.meta.addTag({property: 'og:title', content: "gNEX Solutions"}); 
    this.meta.addTag({property: 'og:type', content: "website"});  
  }
=======
  constructor(private router: Router) { }
>>>>>>> 099b7bfc4be8a79369c51a1fc7cfce630b833ca6

  public openNav(){
   var wid = document.getElementById("mySidenav").style.width;
    if( wid != "250px"){
      document.getElementById("mySidenav").style.width = "250px";
      $(".menu-trigger-icon-1").css("transform", "translateY(6px) rotate(135deg)");
      $(".menu-trigger-icon-2").css("transform", "translateY(-6px) rotate(-135deg)");
      $(".menu-trigger-icon-3").css("transform", "scale(0)");
    }
    else{
      this.closeNav() ;
      $(".menu-trigger-icon-1").css("transform", "translateY(0px) rotate(0deg)");
      $(".menu-trigger-icon-2").css("transform", "translateY(0px) rotate(0deg)");
      $(".menu-trigger-icon-3").css("transform", "unset");
    }
  }

  
  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  public ngOnInit() {
    $(document).ready(function() {
      $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(500);
      });
      // end slide toggle

      $(window).resize(function() {
        if (  $(window).width() > 500 )
        {
          $('nav ul').removeAttr('style');
         } else {

         }

      });   // end resize

      var menu_trigger = document.getElementById("menu-trigger");

      window.onscroll = function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop>12){
          menu_trigger.style.top = "-12px ";
        }
        else{
          menu_trigger.style.top = "17px ";
        }
      };
  
    });   // end ready


  }

  public navBarFunc(clickedButton:any){
      var elements = document.getElementsByClassName('nav-container')[0].children[0].children;
      for(var i=0;i<elements.length;i++){
          var ele =  elements[i];
          ele.firstElementChild.style.background= "unset";
      }

      var button = document.getElementById(clickedButton);
      button.style.background= "rgb(34,133,87)";
  }

}
