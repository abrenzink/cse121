/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

let andy = {
    name: 'Andrea',
    photo: 'images/andrea.png',
    favoriteFoods: ['doritos', 'coxinha', 'chocolate'],
    hobbies: ['drawing', 'listening to music', 'sleeping'],
};

andy.placesLived = [
    { place: 'Manaus, AM',
    length: '8 years'},
    { place: 'São Paulo, SP',
    length: '3 yeas and a half'},
    { place: 'Curitiba, PR',
    length: '18 years'},
]


/* OUTPUT */

document.querySelector('#name').innerHTML = andy.name;

andy.favoriteFoods.forEach((food) => {
    let favFood = document.createElement('li');
    favFood.innerHTML = food;
    document.querySelector('#favorite-foods').appendChild(favFood);
});

andy.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;

    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobbyElem);
});

andy.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
});


document.querySelector('#photo').setAttribute('src', andy.photo);

