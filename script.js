function updData() {
    document.getElementById('name-span').innerHTML = document.getElementById('name').value
    document.getElementById('group-span').innerHTML = document.getElementById('group').value
    document.getElementById('tel-span').innerHTML = document.getElementById('tel').value
    document.getElementById('fac-span').innerHTML = document.getElementById('fac').value
    document.getElementById('address-span').innerHTML = document.getElementById('address').value
    event.preventDefault()
}

const targetSquare = document.getElementById('13');
targetSquare.addEventListener('click', function () {
    
    targetSquare.style.backgroundColor = `${document.getElementById("c").value}`;    
});

targetSquare.addEventListener('dblclick', function () {

   const diagonal = document.querySelectorAll('.square:nth-child(7n + 1)');
   diagonal.forEach(e => {
    e.style.backgroundColor = `${document.getElementById("c").value}`;
   });
     
});
