require('./style.css');
import $ from 'jquery';


const box = document.getElementsByClassName('postComponent');
const containers = document.getElementById('board');
for(const container of containers) {
    container.addEventListener('dragover', dragover);
    container.addEventListener('dragenter', dragenter);
    container.addEventListener('drop', drop);
}




//$('#root').html('<p>Hello webpack!!</p>');
/*
const root = document.querySelector('#root');
root.innerHTML = '<p>Hello webpack!!</p>';
*/