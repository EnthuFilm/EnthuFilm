const movieData = {
    movie1: {
      title: "Maharaja",
      year: "2024",
      genre: "Action",
      synopsis: "A barber seeks vengeance after his home is burglarized, cryptically telling police his \"lakshmi\" has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive \"lakshmi\" unfolds.",
      director: "Nithilan Saminathan",
      starring: "Vijay Sethupathi, Anurag Kashyap, Mamta Mohandas, Sachana Namidass",
      watch: "Netflix",
      poster: "images/Maharaja.png"
    },
    movie2: {
      title: "Monster",
      year: "2023",
      genre: "Drama",
      synopsis: "When her young son Minato starts to behave strangely, his mother feels that there is something wrong. Discovering that a teacher is responsible, she storms into the school demanding to know what's going on. But as the story unfolds through the eyes of mother, teacher and child, the truth gradually emerges.",
      director: "Hirokazu Koreeda",
      starring: "Sakura Andô , Eita Nagayama, Soya Kurokawa",
      watch: "Apple TV, MUBI, Prime Video",
      poster: "images/Monster.png"
    },
    movie3: {
      title: "PK",
      year: "2014",
      genre: "Comedy",
      synopsis: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religious views on people.",
      director: "Rajkumar Hirani",
      starring: "Amir Khan, Anushka Sharma, Sanjay Dutt",
      watch: "Netflix",
      poster: "images/PK.jpg"
    },
    movie4: {
      title: "You Are the Apple of My Eye",
      year: "2011",
      genre: "Drama Romance",
      synopsis: "A coming-of-age story featuring a group of Taiwanese teenage friends and their experiences as they all fall in love with the same girl: Shen Jiayi, the star student of the school. A story about the complexities and bittersweetness of high-school life set against the backdrop of Taiwanese culture and traditions.",
      director: "Giddens Ko",
      starring: "Kai Ko, Michelle Chen, Shao-Wen Hao",
      watch: "Disney Hotstar",
      poster: "images/You Are the Apple of My Eye.jpg"
    },
    movie5: {
      title: "The Favourite",
      year: "2018",
      genre: "Drama Comedy",
      synopsis: "Queen Anne, a frail monarch, rules England with the help of her close friend Lady Sarah. When a new servant, Abigail, arrives, she quickly gains the Queen's favor and uses her position to manipulate both the Queen and Lady Sarah, ultimately seeking power and influence.",
      director: "Yorgos Lanthimos",
      starring: "Olivia Colman, Emma Stone, Rachel Weisz",
      watch: "Disney Hotstar, Apple TV",
      poster: "images/The Favourite.png"
    },
    movie6: {
      title: "The Pursuit of Happyness",
      year: "2006",
      genre: "Drama Biography",
      synopsis: "Christopher Gardner invests in bone density scanners but they don't sell well. His wife leaves, he loses his apartment, and lives on the streets with his son. He takes an unpaid internship as a stockbroker while still trying to sell the scanners. He needs to excel in training and sell devices to survive.",
      director: "Gabriele Muccino",
      starring: "Will Smith, Thandiwe Newton, Jaden Smith",
      watch: "Netflix, Apple TV, Prime Video",
      poster: "images/The Pursuit of Happyness.png"
    },
    movie7: {
      title: "Nobody",
      year: "2021",
      genre: "Action",
      synopsis: "Hutch, an ordinary man, is pushed to his limits when thieves break into his home. This ignites a hidden rage, forcing him to confront his past and become a dangerous fighter to protect his family.",
      director: "Ilya Naishuller",
      starring: "Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen",
      watch: "Netflix, Apple TV, Prime Video",
      poster: "images/Nobody.png"
    },
    movie8: {
      title: "The Equalizer",
      year: "2014",
      genre: "Action",
      synopsis: "Robert McCall is a former special service commando who faked his own death in hopes of living out a quiet life. Instead, he comes out of his self-imposed retirement to save a young girl, and finds his desire for justice reawakened after coming face-to-face with members of a brutal Russian gang. McCall becomes the go-to man when the helpless require the kind of vengeance they would never find without his skills.",
      director: "Antoine Fuqua",
      starring: "Denzel Washington, Marton Csokas, Chloë Grace Moretz",
      watch: "Netflix, Apple TV, Catchplay, Vidio",
      poster: "images/The Equalizer.png"
    },
    movie9: {
      title: "Oldboy",
      year: "2003",
      genre: "Action",
      synopsis: "Oh Dae-Su is kidnapped and imprisoned for 15 years. After his release, he seeks revenge on his mysterious captors, but discovers a shocking truth about his past.",
      director: "Park Chan-wook",
      starring: "Choi Min-sik, Yoo Ji-tae, Kang Hye-jeong",
      watch: "Netflix, Apple TV, Klikfilm",
      poster: "images/Oldboy.png"
    },
    movie10: {
      title: "Senna",
      year: "2010",
      genre: "Sport",
      synopsis: "Ayrton Senna becomes a three-time Formula One racing champion and Brazil's national hero before his untimely death at age 34.",
      director: "Asif Kapadia",
      starring: "Alain Prost, Sir Frank Williams, Viviane Senna",
      watch: "Netflix",
      poster: "images/Senna.png"
    },
    movie11: {
      title: "Bob Dylan : Dont Look Back",
      year: "1967",
      genre: "Music",
      synopsis: "The documentary follows Bob Dylan's 1965 UK tour, offering an intimate look at the young musician as he transitions from folk music to rock 'n' roll.",
      director: "D.A. Pennebaker",
      starring: "Bob Dylan, Albert Grossman, Alan Price",
      watch: "Amazon Video, Apple TV",
      poster: "images/Bob Dylan Dont Look Back.jpg"
    },
    movie12: {
      title: "Fire of Love",
      year: "2022",
      genre: "Biography",
      synopsis: "Katia and Maurice Krafft, a couple of French volcanologists, dedicated their lives to studying volcanoes. Their passion for volcanoes led them to capture stunning footage and make significant contributions to volcanology. Tragically, they lost their lives in a volcanic eruption, leaving behind a legacy of their love for volcanoes and their groundbreaking research.",
      director: "Sara Dosa",
      starring: "Miranda July, Katia Kraftt, Maurice Kraftt",
      watch: "Disney Hotstar",
      poster: "images/Fire of Love.jpg"
    },
    movie13: {
      title: "Baraka",
      year: "1992",
      genre: "Documentary",
      synopsis: "The film offers a non-linear exploration of the world, showcasing diverse landscapes, cultures, and historical events. It delves into both the beauty and the darkness of human existence, highlighting the interconnectedness of all things.",
      director: "Ron Fricke",
      starring: "Ron Fricke, Mark Magidson, Genevieve Nicholas",
      watch: "Peacock, Tubi",
      poster: "images/Baraka.jpg"
    },
    movie14: {
      title: "Paradise Lost: The Child Murders at Robin Hood",
      year: "1996",
      genre: "Crime",
      synopsis: "Genta, Arial, Zafran, Riani, and Ian felt \"tired\" of their friendship and decided to separate, not communicating with each other for three months. For three months they meet again and celebrate their meeting with a journey full of dreams and challenges. A journey of the heart to fly the red and white saka on the highest peak of Java on August 17th.",
      director: "Bruce Sinofsky, Joe Berlinger",
      starring: "Bruce Sinofsky, Joe Berlinger, Jason Baldwin",
      watch: "HBO GO",
      poster: "images/Paradise Lost The Child Murders at Robin Hood.jpg"
    },
    movie15: {
      title: "Paris is Burning",
      year: "1991",
      genre: "Documentary",
      synopsis: "This documentary focuses on drag queens living in New York City and their \"house\" culture, which provides a sense of community and support for the flamboyant and often socially shunned performers. Groups from each house compete in elaborate balls that take cues from the world of fashion. Also touching on issues of racism and poverty, the film features interviews with a number of renowned drag queens, including Willi Ninja, Pepper LaBeija and Dorian Corey.",
      director: "Jennie Livingston",
      starring: "Dorian Corey, Willi Ninja, Sandy Ninja",
      watch: "MUBI",
      poster: "images/Paris is Burning.png"
    },
    movie16: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie17: {
      title: "5 cm",
      year: "2012",
      genre: "Adventure Drama",
      synopsis: "Genta, Arial, Zafran, Riani, and Ian felt \"tired\" of their friendship and decided to separate, not communicating with each other for three months. For three months they meet again and celebrate their meeting with a journey full of dreams and challenges. A journey of the heart to fly the red and white saka on the highest peak of Java on August 17th.",
      director: "Rizal Mantovani",
      starring: "Herjunot Ali,  Raline Shah, Fedi Nuril",
      watch: "Netflix, Vidio",
      poster: "images/5 cm.png"
    },
    movie18: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie19: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie20: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie21: {
      title: "Pirates of the Caribbean : Dead Man's Chest",
      year: "2006",
      genre: "Adventure",
      synopsis: "Captain Jack Sparrow faces a deadly debt to the ghostly Davy Jones. To survive, he must team up with Will Turner and Elizabeth Swann, who are facing their own perilous situation. Together, they embark on a dangerous quest to find the heart of Davy Jones, all while dodging the clutches of the ruthless Lord Cutler Beckett.",
      director: "Gore Verbinski",
      starring: "Johnny Depp, Orlando Bloom, Keira Knightley",
      watch: "Disney Hotstar, Apple TV, Prime Video",
      poster: "images/Pirates of the Caribbean Dead Man's Chest.jpg"
    },
    movie22: {
      title: "Anonymously Yours",
      year: "2021",
      genre: "Drama Comedy",
      synopsis: "After an accidental text message turns into a digital friendship, Vale and Alex start crushing on each other without realizing they've met in real life.",
      director: "Maria Torres",
      starring: " Annie Cabello, Harold Azuara, Estefi Merelles",
      watch: "Netflix",
      poster: "images/Anonymously Yours.jpg"
    },
    movie23: {
      title: "A Walk to Remember",
      year: "2002",
      genre: "Drama Romance",
      synopsis: "Landon, a popular student, is forced to join after-school activities with Jamie, a religious girl. They develop a relationship and learn about love and life's challenges.",
      director: "Adam Shankman",
      starring: "Mandy Moore, Shane West, Peter Coyote",
      watch: "Apple TV, Prime Video, HULU",
      poster: "images/A Walk To Remember.png"
    },
    movie24: {
      title: "Flipped",
      year: "2010",
      genre: "Drama Comedy",
      synopsis: "Bryce and Juli meet in elementary school. As they grow older, their feelings for each other become more complex. While Juli has always loved Bryce, Bryce struggles with his feelings. After a series of misunderstandings and a heartbreaking loss, they begin to reevaluate their relationship.",
      director: "Rob Reiner",
      starring: "Madeline Carroll, Callan McAuliffe, Rebecca De Mornay",
      watch: "Netflix Apple TV, HULU",
      poster: "images/Flipped.png"
    },
    movie25: {
      title: "The Game",
      year: "1997",
      genre: "Thriller Psychology",
      synopsis: "Nicholas, a wealthy but lonely banker, receives a mysterious gift from his estranged brother. This gift leads him into a bizarre world of surveillance, manipulation, and chaos, forcing him to confront his past and question his own reality.",
      director: "David Fincher",
      starring: "Michael Douglas, Deborah Kara Unger, Sean Penn",
      watch: "Netflix",
      poster: "images/The Game.png"
    },
    movie26: {
      title: "Fight Club",
      year: "1999",
      genre: "Psychological Drama",
      synopsis: "A nameless first-person narrator attends support groups in an attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla, another fake attendee of support groups, his life seems to become a little more bearable. However, when he associates himself with Tyler he is dragged into an underground fight club and soap-making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power.",
      director: "David Fincher",
      starring: "Brad Pitt, Edward Norton, Meat Loaf",
      watch: "Disney Hotstar, Apple TV, Hulu",
      poster: "images/Fight Club.jpg"
    },
    movie27: {
      title: "The Girl with the Dragon Tatto",
      year: "2011",
      genre: "Mystery",
      synopsis: "Mikael Blomkvist, a disgraced journalist, is hired to investigate the disappearance of a wealthy industrialist's niece. To help him, he teams up with Lisbeth Salander, a brilliant but troubled hacker. Together, they delve into a dark mystery involving past crimes and a powerful family with secrets to hide.",
      director: "David Fincher",
      starring: "Daniel Craig, Rooney Mara, Christopher Plummer",
      watch: "Netflix, Disney Hotstar, Apple TV",
      poster: "images/The Girl with the Dragon Tatto.jpg"
    },
    movie28: {
      title: "Overdrive",
      year: "2017",
      genre: "Action",
      synopsis: "Two brothers, skilled car thieves, are hired to steal a valuable Bugatti in the south of France. However, they are caught and forced to work for a local crime boss. Their new task: steal an even more valuable Ferrari from the boss's rival.",
      director: "Antonio Negret",
      starring: "HScott Eastwood, Freddie Thorp, Ana de Armas",
      watch: "Netflix, Vidio",
      poster: "images/Overdrive.jpg"
    },
    movie29: {
      title: "About Time",
      year: "2013",
      genre: "Romantic Comedy",
      synopsis: "Tim Lake discovers he can travel through time and uses his ability to improve his life, including finding love with Mary. However, he learns that time travel has limitations and can't shield him from life's inevitable challenges.",
      director: "Richard Curtis",
      starring: "Domhnall Gleeson, Rachel McAdams, Margot Robbie",
      watch: "Netflix, Apple TV, Prime Video",
      poster: "images/About Time.jpg"
    },
    movie30: {
      title: "Edward Scissorhands",
      year: "1990",
      genre: "Dark Fantasy",
      synopsis: "In a castle high on top of a hill lives an inventor's greatest creation - Edward, a near-complete person. The creator died before he could finish Edward's hands; instead, he is left with metal scissors for hands. Since then, he has lived alone, until a kind lady called Peg discovers him and welcomes him into her home. At first, everyone welcomes him into the community, but soon things begin to take a change for the worse.",
      director: "Tim Burton",
      starring: "Johnny Depp, Winona Ryder, Dianne Wiest",
      watch: "Disney Hotstar, Hulu, Prime Video",
      poster: "images/Edward Scissorhands.jpg"
    },
    movie31: {
      title: "Summer of Soul",
      year: "2021",
      genre: "Music",
      synopsis: "Documentary about the legendary 1969 Harlem Cultural Festival which celebrated African-American music and culture and promoted Black pride and unity.",
      director: "Ahmir \"Questlove\" Thompson",
      starring: "Dorinda Drake, Barbara Bland-Acosta, B.B King",
      watch: "Disney Hotstar",
      poster: "images/Summer of Soul (…Or, When the Revolution Could Not Be Televised).jpg"
    },
    movie32: {
      title: "The Look of Silence",
      year: "2014",
      genre: "Documentary",
      synopsis: "An optician confronts the men who killed the brother that he never knew during the 1960s Indonesian genocide.",
      director: "Joshua Oppenheimer",
      starring: "Adi Rukun, M.Y. Basrun, Volker Hanisch",
      watch: "Apple TV, Amazon Video, Tubi",
      poster: "images/The Look of Silence.png"
    },
    movie33: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie34: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie35: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie36: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie37: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie38: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie39: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie40: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie41: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Alvin Andhika.jpg"
    },
    movie42: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Alvin Andhika.jpg"
    },
    movie43: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Alvin Andhika.jpg"
    },
    movie44: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Alvin Andhika.jpg"
    },
    movie45: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Alvin Andhika.jpg"
    },
    movie46: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie47: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie48: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie49: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
    movie50: {
      title: "Movie...",
      year: "xxxx",
      genre: "Genre...",
      synopsis: "Sypnosis...",
      director: "Director...",
      starring: "Starring...",
      watch: "Watch...",
      poster: "images/Danadyaksa Naufal.jpg"
    },
};
  
function showPopup(movieId) {
    const movie = movieData[movieId];
    if (movie) {
      document.querySelector('.popup-poster').src = movie.poster;
      document.querySelector('.popup-movie-title h2').textContent = movie.title;
      document.querySelector('.popup-movie-title p').textContent = `${movie.year} | ${movie.genre}`;
      document.querySelector('.popup-text').innerHTML = `
        <p><strong>Synopsis:</strong><br /> ${movie.synopsis}</p>
        <p><strong>Director:</strong><br /> ${movie.director}</p>
        <p><strong>Starring:</strong><br /> ${movie.starring}</p>
        <p><strong>Where to Watch:</strong><br /> ${movie.watch}</p>
      `;
      togglePopup();
    }
}
  
function togglePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.classList.toggle('hidden');
}
  
document.getElementById('popupOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
      togglePopup();
    }
});