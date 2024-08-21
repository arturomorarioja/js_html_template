import { countries, locale } from './data.js';

document.querySelector('#cmbContinents').addEventListener('change', function(e) {
    const countriesSection = document.querySelector('#countries');
    countriesSection.innerHTML = '';

    if (this.selectedIndex > 0) {
        countries[this.options[this.selectedIndex].innerText].forEach((country) => {
            const newCountry = document.importNode(document.getElementById('country').content, true);        
            newCountry.querySelector('.name').innerText = country.name;
            newCountry.querySelector('.size').innerText = new Intl.NumberFormat(locale).format(country.size);
            newCountry.querySelector('.population').innerText = new Intl.NumberFormat(locale).format(country.population);
            
            countriesSection.appendChild(newCountry);
        });
    }
});