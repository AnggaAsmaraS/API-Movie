
const app = document.querySelector('.app');
const box_Office = document.querySelector('#boxOffice')

let contentPopularMovies = document.querySelector('.content-popular-movies')

//unutk film yang populer
function popularMovies() {
    fetch('https://imdb-api.com/en/API/MostPopularMovies/k_h64k84t3')
    .then(response => response.json())
    .then(function(response) {

        let data = response.items;
        
        for(let i = 0; i < 5; i++) {
            let divImg = document.createElement('div');
            divImg.className = "image"
            let span = document.createElement('span')

            let img = document.createElement('img');
            img.src = data[i].image

            span.innerHTML = data[i].title;

            divImg.appendChild(img)
            divImg.appendChild(span)
            contentPopularMovies.appendChild(divImg)
        }
    })
}
popularMovies()

//untuk film box office
function boxOffice() {

    fetch('https://imdb-api.com/en/API/BoxOffice/k_h64k84t3')
    .then(response => response.json())
    .then(function(response) {
        let data = response.items;

        for(let i = 0; i < 5; i++) {
            let divImg = document.createElement('div');
            divImg.className = "image"
            let span = document.createElement('span')

            let img = document.createElement('img');
            img.src = data[i].image

            span.innerHTML = data[i].title;

            divImg.appendChild(img)
            divImg.appendChild(span)
            box_Office.appendChild(divImg)
        }
    })
}
boxOffice()

// untuk film coming soon
const trailersContent = document.querySelector('.trailers-content')
function comingSoon() {
    fetch('https://imdb-api.com/en/API/InTheaters/k_h64k84t3')
    .then(response => response.json())
    .then(function(response) {
        console.log(response)

        let data = response.items

        for (let i = 0; i < 10; i++) {
           
            let div = document.createElement('div')
            div.className = 'image'

            let img = document.createElement('img')
            img.src = data[i].image

            let spanTitle = document.createElement('span')
            spanTitle.innerHTML = data[i].title

            let spanRilis = document.createElement('span')
            spanRilis.innerHTML = data[i].releaseState
            
            div.appendChild(img)
            div.appendChild(spanTitle)
            div.appendChild(spanRilis)
            trailersContent.appendChild(div)
            
        }
    })
}
comingSoon()


let search = document.querySelector('#search');
let btn = document.querySelector('.btn-search');
let article = document.querySelector('.article');
const abc = document.querySelector('.trailers-content');
const deletePopularMovies = document.querySelector('.popular-movies')
const deleteBxOffice = document.querySelector('#box-office')
const container = document.querySelector('.container')


btn.addEventListener('click', btnSearch);
// search.addEventListener('keyup', searchMovie);


//untuk tombol pencarian
function btnSearch() {  
    let active = false
    let divSearch = document.createElement('div');
    divSearch.className = "search"
    fetch(`https://imdb-api.com/en/API/SearchTitle/k_h64k84t3/${search.value}`)
    .then(response => response.json())
    .then(function(data) {

        if(data.results == null) {
         active = false
        }else {
           active = true
            deletePopularMovies.remove()
            deleteBxOffice.remove()

          data.results.forEach((item) => {

            let div = document.createElement('div')
            div.className = "imageList"

            let img = document.createElement('img')
            img.src = item.image
            img.width = "180px"
            img.height = "100px"

            let span = document.createElement('span')
            span.innerHTML = item.title + item.description

            div.appendChild(img)
            div.appendChild(span)
            divSearch.appendChild(div)

          });

          container.appendChild(divSearch)
           
        }

    })
}

// function searchMovie(e) {
//     let srch = e.target.value.toLowerCase();

//     const img = document.querySelectorAll('#movies .image')
//     img.forEach((item) => {


//         const itemText = item.lastElementChild.textContent.toLowerCase();

//             if(itemText.indexOf(srch) !== -1) {
//                 item.style.display = "block"
//             }else {
//                 item.style.display = "none"
//             }
//     });
    
// }


const svg = document.querySelector('.svg');
const url = 'https://www.instagram.com/anggaasmara.s/';
svg.addEventListener('click', (e) => {
    window.open('https://www.instagram.com/anggaasmara.s/')
})