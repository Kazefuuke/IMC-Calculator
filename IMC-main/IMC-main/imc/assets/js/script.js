const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;

    const height = document.getElementById('height').value;


    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');

    let descripition = '';

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        descripition = 'Cuidado! você está abaixo do peso!' 
        value.classList.add('attention')
    }
    else if(bmi >= 18.5 && bmi <= 25){
        descripition = 'Você está no peso ideal.' 
        value.classList.remove('attention')
        value.classList.add('normal')
    }
    else if(bmi > 25 && bmi <= 30){
        descripition = 'Cuidado! Você está com sobrepeso!' 
        value.classList.add('attention')
    }
    else if(bmi > 30 && bmi <= 35){
        descripition = 'Cuidado! Você está com obesidade moderada!' 
        value.classList.add('attention')
    }
    else if(bmi > 35 && bmi <= 40){
        descripition = 'Cuidado! Você está com obesidade morbida!' 
        value.classList.add('attention')
    }
    else{
         descripition = 'Cuidado! Você está com obesidade morbida!' 
         value.classList.add('attention')
    }
    

    value.textContent = bmi.replace('.', ',');
    document.getElementById('descripition').textContent = descripition;

})