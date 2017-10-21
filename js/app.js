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
    
});