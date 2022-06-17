const ratings = document.getElementsByClassName('ratings');
const count = 0;let i;

let active_states = document.getElementsByClassName('active-states')[0]
let thank_you_div = document.getElementsByClassName('thank-you')[0]
let number = document.getElementById('number')
let rating;
let submit_button = document.getElementsByClassName('btn')[0]

let previous_rating;
let current_rating;

const selectedRating = (param) => {
    rating = param.innerHTML
    submit_button.removeAttribute('disabled')

    previous_rating = current_rating
    current_rating = rating

    console.log(previous_rating,current_rating)
    
    for(i of ratings){

        if(previous_rating!=undefined && previous_rating==current_rating){
            i.style = 'background-color: hsl(217, 12%, 23%);'
        }

        else{
            if(i==param){
                i.style = 'background-color:hsl(217, 12%, 63%);'
            }
            else{
                i.style = 'background-color: hsl(217, 12%, 23%);'
            }
        }
    }
}

for(i of ratings){
    i.setAttribute('onmousemove','hoverEffect(this)')
    i.setAttribute('onmouseleave','unHoverEffect(this)')
}


const hoverEffect = (rating_div) => {
    if(rating_div.innerHTML!=rating){
        rating_div.style = 'background-color: hsl(25, 97%, 53%);'
    }
}

const unHoverEffect = (rating_div) => {
    if(rating_div.innerHTML!=rating){
        rating_div.style = 'background-color:hsl(217, 12%, 23%);'
    }
}


const submitRating = () => {
    active_states.style = 'display:none;'
    number.innerHTML = rating
    thank_you_div.style = 'display:block;'
}