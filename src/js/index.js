var button = document.getElementById('button');
var menu = document.getElementById('menu');

button.addEventListener('click', function() {
    
    if (menu.style.display === 'none') {   
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});