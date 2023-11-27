function defineBtn(){
    let inputJs = document.getElementById('input').value;
    let result = document.getElementById('result');
    let diceImages = document.getElementById('images');
    let values = [];
    let images = [];
    

    for(let i = 0; i < inputJs; i++){
    
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="diceimg/${value}.png">`);

        
    }
    result.textContent = `dice rolled: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('')
}