const Horas =  document.getElementById('Horas');
const Minutos =  document.getElementById('Minutos');
const Segundos =  document.getElementById('Segundos');

const Rélogio = setInterval(function time() {
    let dateToday = new Date();
    let Hrs = dateToday.getHours();
    let Min = dateToday.getMinutes();
    let Sec = dateToday.getSeconds();

    if (Hrs < 10) Hrs ='0' + Hrs;

    if (Min < 10) Min ='0' + Min;
    
    if (Sec < 10) Sec = '0' + Sec;

    Horas.textContent = Hrs;
    Minutos.textContent = Min;
    Segundos.textContent = Sec;
    
})