
// Extra Challenge
//display the number of registered pets in any part of the html
function updatesNumber() {
    let container = document.getElementById('petsNum');
    container.innerText = salon.pets.length;
}

// profit
function updateProfit() {
    let container = document.getElementById('totalProfit');
    
    container.innerText = "$" + salon.pets.reduce((a, n) => {
        return a + n.price;
    }, 0);
}

//oldest and ..
function updateAges() {
    const oldestContainer = document.getElementById("oldestList");
    const youngestContainer = document.getElementById("youngestList");
    let {max, min} = oldestYoungest();

    oldestContainer.innerText = max.map(p=>p.name).join(", ");
    youngestContainer.innerText = min.map(p=>p.name).join(", ");
}


function display() {
    
    // create the vars
    var pets = salon.pets;
    var text = "";
    var petsSection = document.getElementById("petSection");
    const dogIcon = '<i class="fas fa-dog"></i>';
    const catIcon = '<i class="fas fa-cat"></i>';
    const birdIcon = '<i class="fas fa-crow"></i>';
    
    function getIcon(type) {
        type = type.toUpperCase();
        switch (type) {
            case "DOG":
                return dogIcon;
            case "CAT":
                return catIcon;
            case "BIRD":
                return birdIcon;
            default:
                return "";
        }
    }

    // travel the pets array
    for (let i = 0; i < pets.length; i++) {
        // create the html text
        text += `<div class="pet">
                    <h2 class="text-center"> ${pets[i].name}</h2>
                    ${getIcon(pets[i].type)}
                    <p>Age: ${pets[i].age} </p> 
                    <p>Type: ${pets[i].type} </p> 
                    <p>Breed: ${pets[i].breed} </p> 
                    <p>Gender: ${pets[i].gender} </p> 
                    <p>Service: ${pets[i].service} </p> 
                    <p>Price: $${pets[i].price} </p> 
                    <p>Owner: ${pets[i].ownerName} </p> 
                    <p>Contact phone: ${pets[i].contactPhone} </p> 
                </div>`;
    }

    // display the pets on the html
    petsSection.innerHTML = text;

    updatesNumber();
    updateProfit();
    updateAges();
}

display();
