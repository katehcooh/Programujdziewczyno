'use strict';
document.addEventListener('DOMContentLoaded', function() {
//zadanie nr 1    
     var menuElement = document.querySelector('.for-dropdown');
     var dropdownList = document.querySelector('.for-dropdown .dropdown');
    
    menuElement.addEventListener('mouseover', function() {
        dropdownList.style.display = 'block';
    });
    
     menuElement.addEventListener('mouseout', function() {
        dropdownList.style.display = 'none';
    });
 //koniec zadania nr 1   
    
//zadanie nr 2
    var buttons = document.querySelectorAll('.btn.read-more');
       
    
       
        function showHide () {
        var textArea = this.previousElementSibling; 
        
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = 'none'
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }  
        };
    
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', showHide);
        }
//koniec zadania nr 2    
//zadanie nr 3
    
    var navbar = document.querySelector('nav.navbar');   
    
    window.addEventListener('scroll', function() {
        navbar.style.borderBottom = '1px solid #7f7f7f';
    });
    
//koniec zadania nr 3  
//zadanie nr 4
    
    var upButton = document.querySelector('.up-button');
    
    upButton.addEventListener('click', function() {
       window.scroll(0,0); 
    });
    
//koniec zadania nr 4
//zadanie nr 5
    
    var items = document.querySelectorAll('.org');
       
    var dots = document.querySelectorAll('.dot');
        
        dots[0].addEventListener('click', function() {
            for (var i=0; i<dots.length; i++) {
            dots[i].classList.remove('active');
            items[i].classList.remove('visible'); 
            }
            this.classList.add('active');
            items[0].classList.add('visible');
        });
        dots[1].addEventListener('click', function() {
            for (var i=0; i<dots.length; i++) {
            dots[i].classList.remove('active');
            items[i].classList.remove('visible'); 
            }
            this.classList.add('active');
            items[1].classList.add('visible');
        });
        dots[2].addEventListener('click', function() {
            for (var i=0; i<dots.length; i++) {
            dots[i].classList.remove('active');
            items[i].classList.remove('visible'); 
            }
            this.classList.add('active');
            items[2].classList.add('visible');
        });
    
//koniec zadania nr 5
});