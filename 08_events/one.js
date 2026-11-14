document.getElementById('box').addEventListener('click', function(e){
    alert('Image clicked!');
    console.log(e.target);   
    let removeIt = e.target.parentNode;
    removeIt.remove()
})  
console.log('Event listener added to box');



