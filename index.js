const form = document.querySelector('form');
// this usecase will give you empty value
// const waight = parseInt(document.querySelector('#waight').value);

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const waight = parseInt(document.querySelector('#waight').value); // yadi mai isko eventlistner ke barhar me rakhta to page load hote he empty value aate !
    const height = parseInt(document.querySelector('#height').value); // yadi mai isko eventlistner ke barhar me rakhta to page load hote he empty value aate !
    const result = document.querySelector('#result');

    if (waight === '' || waight < 0 || isNaN(waight)) { // isNAN() is new mordern name
        result.innerHTML = `plz enter valid height ${waight}`;
    } else if (height === '' || height < 0 || isNaN(height)) {   // agar ye if , else if -- false ho to else work karega
        result.innerHTML = `plz enter valid height ${height}`;
    } else {
        const bmi = (waight / ((height * height) / 10000)).toFixed(2); //toFixed will return next 2 desimal values
        result.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6){
            result.innerHTML = `<span> your are in under waight :${bmi}</span>`;
        } 
        if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span>your weight is normal ${bmi}</span>`
        }
        if(bmi > 24.9){ 
            result.innerHTML = `you are OverWeight ${bmi}`
        }
    };

})