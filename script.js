// change bars
function changeBar(x) {
    x.classList.toggle("fa-times");
}

// nav show and hide
function navDisplay() {
    var nav = document.querySelector('.nav');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
    else {
        nav.style.display = "block";
    }
}




// animated text
var span, textArr, textIndex, textToShow, textToShowLen, letterIndex, textTimer, letterTimer, textDelay, letterDelay, emptyTimer;

textArr = [
    "The world is quiet here.",
    'The wardrobes of literature',
    'When in doubt go to the library',
    'Hospital of Mind',
    'Todey a reader, Tomorrow a leader'
]

span = document.getElementsByTagName("span")[0];
textIndex = 0;
textDelay = 2300;
letterDelay = 50;

function showText() {
    textToShow = textArr[textIndex];
    textToShowLen = textToShow.length;
    letterIndex = 0;

    letterTimer = setInterval(function () {
        span.textContent += textToShow[letterIndex];
        // console.log(textToShow[letterIndex]);
        letterIndex++;
        if (letterIndex > textToShowLen - 1) {
            clearInterval(letterTimer);
            textTimer = setTimeout(nextText, textDelay)
        }
    }, letterDelay)

}

function nextText() {
    clearTimeout(textTimer);
    textIndex++;
    if (textIndex > textArr.length - 1) {
        textIndex = 0;
    }
    emptySpan();

}

function emptySpan() {
    emptyTimer = setInterval(removeLetter, letterDelay / 2)
}


function removeLetter() {
    if (span.textContent.length != 0) {
        popedSpan = Array.prototype.slice.call(span.textContent).slice(0, span.textContent.length - 1).join('');
        span.textContent = popedSpan;
    } else {
        clearInterval(emptyTimer);
        showText();
    }
}

emptySpan();


// navbar bg changing on scrolling
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('onscrolling', window.scrollY > 0);
});


// home image changing
let image = document.getElementById('homeImg');
let images = ['images/home1.jpeg', 'images/home2.jpeg', 'images/home3.jpeg', 'images/home4.jpeg', 'images/home5.jpeg', 'images/home6.jpeg', 'images/home7.jpeg'];
setInterval(function () {
    let random = Math.floor(Math.random() * 7);
    image.src = images[random];
}, 3000);


// about section sliding
let slide = document.querySelectorAll('.slide');
let index = 0;

function next() {
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}

function prev() {

    slide[index].classList.remove('active');
    index = (index - 1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}



// team slide
var teamSpan = document.getElementsByClassName('span');
var teamDiv = document.getElementsByClassName('team');
var len = 0;

teamSpan[1].onclick = () => {
    len++;
    for (var i of teamDiv) {
        if (len == 1) {
            i.style.left = '-370px';
        }
        if (len == 2) {
            i.style.left = '-740px';
        }
        if (len == 3) {
            i.style.left = '-1110px';
        }
        if (len == 4) {
            i.style.left = '-1480px';
        }
        if (len == 5) {
            i.style.left = '-1850px';
        }
        if (len == 6) {
            i.style.left = '-2220px';
        }
        if (len == 7) {
            i.style.left = '-2560px';
        }
        if (len > 7) {
            // i.style.left='-790px';
            len = 7;
        }

    }
}

teamSpan[0].onclick = () => {
    len--;
    for (var i of teamDiv) {
        if (len == 0) {
            i.style.left = '0px';
        }
        if (len == 1) {
            i.style.left = '-370px';
        }
        if (len == 2) {
            i.style.left = '-740px';
        }
        if (len == 3) {
            i.style.left = '-1110px';
        }
        if (len == 4) {
            i.style.left = '-1480px';
        }
        if (len == 5) {
            i.style.left = '-1850px';
        }
        if (len == 6) {
            i.style.left = '-2220px';
        }
        if (len == 7) {
            i.style.left = '-2540px';
        }
        if (len < 0) {
            // i.style.left='-790px';
            len = 0;
        }

    }
}



// review section
let review = document.querySelectorAll('.review-info');
let n = 0;
function sright() {
    // console.log('eeha');
    review[n].classList.remove('active');
    n = (n + 1) % review.length;
    review[n].classList.add('active');
}

function sleft() {
    // console.log('taaha');
    review[n].classList.remove('active');
    n = (n - 1 + review.length) % review.length;
    review[n].classList.add('active');
}


// accordion part
const faqs= document.querySelectorAll('.faq');
faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    })
})





// book section

const books=[
    // science fiction
    {
        id:1,
        title: 'Dune',
        author: 'Frank Herbert',
        type: 'science',
        year: 1965,
        img: 'images/book1.jfif',
    },
    {
        id:2,
        title: '1984',
        author: 'George Orwell',
        type: 'science',
        year: 1965,
        img: 'images/book2.jpg',
    },
    {
        id:3,
        title: 'The Martian',
        author: 'Andy Weir',
        type: 'science',
        year: 1965,
        img: 'images/book3.jfif',
    },
    {
        id:4,
        title: 'Hithchhikers Guide ',
        author: 'Douglas Adamas',
        type: 'science',
        year: 1965,
        img: 'images/book4.jfif',
    },
    {
        id:5,
        title: 'Order of Time',
        author: 'Carlo Rovelli',
        type: 'science',
        year: 1965,
        img: 'images/book5.jfif',
    },

    // astronomy
    {
        id:6,
        title: 'COSMOS',
        author: 'Neil Degrasse Tyson',
        type: 'astronomy',
        year: 1965,
        img: 'images/book6.jfif',
    },
    {
        id:7,
        title: 'Astrophysics for People in Hurry',
        author: 'Neil Degrasse Tyson',
        type: 'astronomy',
        year: 1965,
        img: 'images/book7.jfif',
    },
    {
        id:8,
        title: 'The Secret Lives of Planet',
        author: 'Paul Murdium',
        type: 'astronomy',
        year: 1965,
        img: 'images/book8.jfif',
    },
    {
        id:9,
        title: 'Vision of Human Future in Space',
        author: 'Carl Sagan',
        type: 'astronomy',
        year: 1965,
        img: 'images/book9.jfif',
    },
    {
        id:10,
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        type: 'astronomy',
        year: 1965,
        img: 'images/book10.jfif',
    },

    // novels
    {
        id:11,
        title: 'Beloved',
        author: 'Vintage Morrison',
        type: 'novels',
        year: 1965,
        img: 'images/book11.jfif',
    },
    {
        id:12,
        title: 'The Grapes of Wrath',
        author: 'Jhon Stenbeck',
        type: 'novels',
        year: 1965,
        img: 'images/book12.jfif',
    },
    {
        id:13,
        title: 'One Hundred Year of Solitude',
        author: 'Gabriel Garcia',
        type: 'novels',
        year: 1965,
        img: 'images/book13.jfif',
    },
    {
        id:15,
        title: 'Invisible Man',
        author: 'Ralph Ellison',
        type: 'novels',
        year: 1965,
        img: 'images/book14.jfif',
    },
    {
        id:16,
        title: 'Little Women',
        author: 'Louisa M. Alcott',
        type: 'novels',
        year: 1965,
        img: 'images/book15.jpg',
    },
    {
        id:17,
        title: 'Anne Frank',
        author: 'Diary',
        type: 'biographies',
        year: 1965,
        img: 'images/book16.jfif',
    },
    {
        id:18,
        title: 'Malcolm X',
        author: 'Alex Haley',
        type: 'biographies',
        year: 1965,
        img: 'images/book17.jfif',
    },
    {
        id:19,
        title: 'Long Walk to Freedom',
        author: 'Nelson Mendela',
        type: 'biographies',
        year: 1965,
        img: 'images/book18.jfif',
    },
    {
        id:20,
        title: 'The story of My Life',
        author: 'Helen Keller',
        type: 'biographies',
        year: 1965,
        img: 'images/book19.jfif',
    },
    {
        id:21,
        title: 'Milk and Honey',
        author: 'Rupi Kaur',
        type: 'poetry',
        year: 1965,
        img: 'images/book21.jfif',
    },
    {
        id:22,
        title: 'Citizen',
        author: 'Claudia Rankine',
        type: 'poetry',
        year: 1965,
        img: 'images/book22.jfif',
    },
    {
        id:23,
        title: 'Dont Call Us Dead',
        type: 'poetry',
        author: 'Danez Smith',
        year: 1965,
        img: 'images/book23.jfif',
    },
    {
        id:24,
        title: 'Pillow Thoughts',
        author: 'Coutney Peppernell',
        type: 'poetry',
        year: 1965,
        img: 'images/book24.png',
    }
];


const btnBox= document.querySelector('.btn-box')
const booksBox= document.querySelector('.books-box');
window.addEventListener('DOMContentLoaded', function(){
    displayButtons();
    displayBooks(books);
});



function displayButtons(){
    const bookType= books.reduce(function(values, obj){
        if(!values.includes(obj.type)){
            values.push(obj.type);
        }
        return values;
    },
    ['all']
    );


    const typeBtn=bookType.map(function(type){
        return `<button class="type-btn" type="button" data-id=${type}>${type}</button>`;
    }).join('');

    btnBox.innerHTML= typeBtn;

    const filterBtn= btnBox.querySelectorAll('.type-btn');
    filterBtn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const type= e.currentTarget.dataset.id;
            const booklist= books.filter(function(list){
                if(list.type===type){
                    return list;
                }
            });

            if(type==='all'){
                displayBooks(books);
            }
            else{
                displayBooks(booklist);
            }
        })
    })
};

function displayBooks(bookLists){
    let showBook= bookLists.map(function(book){
        return `<div class="book">
        <img src=${book.img} class="photo" alt=${book.title}>
        <div class="book-info">
            <h1>${book.title}</h1>
            <h2>${book.author}</h2>
            <p>Year : <span>${book.year}</span></p>
            <div class="icons">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>`
    });
    showBook= showBook.join('');
    booksBox.innerHTML=showBook;
}


