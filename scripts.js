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
      poster: "images/Old boy.jpg"
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
      title: "Janji Joni",
      year: "2005",
      genre: "Drama Comedy",
      synopsis: "A film delivery man promises a beautiful young woman to deliver a film reel on time to a movie theater. But the the whole city seems to conspire against him.",
      director: "Joko Anwar",
      starring: "Nicholas Saputra, Mariana Renata, Rachel Maryam Sayidina",
      watch: "Netflix, Vidio.com",
      poster: "images/Janji Joni.jpg"
    },
    movie17: {
      title: "5 cm",
      year: "2012",
      genre: "Adventure Drama",
      synopsis: "Genta, Arial, Zafran, Riani, and Ian felt \"tired\" of their friendship and decided to separate, not communicating with each other for three months. For three months they meet again and celebrate their meeting with a journey full of dreams and challenges. A journey of the heart to fly the red and white saka on the highest peak of Java on August 17th.",
      director: "Rizal Mantovani",
      starring: "Herjunot Ali,  Raline Shah, Fedi Nuril",
      watch: "Netflix, Vidio.com",
      poster: "images/5 cm.png"
    },
    movie18: {
      title: "3 hari untuk selamanya",
      year: "2007",
      genre: "Drama Comedy",
      synopsis: "Ambar and her cousin Yusuf get drunk, miss a flight, and decide to drive to the family wedding they are in danger of missing. They encounter bizarre people along the way while avoiding the sexual tension growing between them.",
      director: "Riri Riza",
      starring: "Inong Ayu, Bowie Budianto, Chichi Kadijono",
      watch: "Netflix, Vidio.com",
      poster: "images/3 Hari Untuk Selamanya.jpg"
    },
    movie19: {
      title: "Eiffel I'm in Love",
      year: "2003",
      genre: "Romance Comedy",
      synopsis: "A teenage girl who led a perfect life. Her life completely changes when her parents good friend and his son came from France to stay with them.",
      director: "Nasri Cheppy",
      starring: "Shandy AuliaSamuel RizalVena Annisa",
      watch: "Netflix, Vidio.com",
      poster: "images/Eiffel_I'm_in_Love.jpg"
    },
    movie20: {
      title: "Movie...",
      year: "2005",
      genre: "Romance Comedy",
      synopsis: "A rich teenager who wants to study abroad meets an attractive student who can offer valuable opinions - and maybe more.",
      director: "Sunil Soraya",
      starring: "Shandy Aulia, Samuel Rizal, Dimas Beck",
      watch: "Netflix, Vidio.com",
      poster: "images/Apa Artinya Cinta.jpg"
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
      title: "David Bryne's American Utopia",
      year: "2020",
      genre: "Drama Musical",
      synopsis: "Spike Lee documents the former Talking Heads frontman's brilliant, timely 2019 Broadway show, based on his recent album and tour of the same name.",
      director: "Spike Lee",
      starring: "David Byrne, Jacqueline Acevedo, Gustavo Di Dalva",
      watch: "HBO",
      poster: "images/American Utopia.jpg"
    },
    movie34: {
      title: "Black is... Ain't Black",
      year: "1994",
      genre: "Documentary",
      synopsis: "A film about black experiences with a backdrop of Creole cooking.",
      director: "Marlon Riggs",
      starring: "Angela Davis, Essex Hemphill, bell hooks",
      watch: "YouTube",
      poster: "images/black isnt black.jpg"
    },
    movie35: {
      title: "Man with a Movie Camera",
      year: "1929",
      genre: "Documentary",
      synopsis: "A man travels around a city with a camera slung over his shoulder, documenting urban life with dazzling invention.",
      director: "Dziga Vertov",
      starring: "Mikhail Kaufman, Elizaveta Svilova",
      watch: "YouTube",
      poster: "images/The man with the camera.jpeg"
    },
    movie36: {
      title: "Jomblo",
      year: "2006",
      genre: "Romantic Comedy",
      synopsis: "Four college best friends with their funny lifestyle about college. Met a girl who taught them about love and betrayals, and their life would never be the same again.",
      director: "Hanung Bramantyo",
      starring: "Dennis Adhiswara, Rianti Cartwright, Rizky Hanggono",
      watch: "Netflix",
      poster: "images/Jomblo.jpg"
    },
    movie37: {
      title: "Lovely Man",
      year: "2011",
      genre: "Drama",
      synopsis: "Cahaya (Raihaanun) travels to Jakarta, Indonesia, to search for her father and discovers that he is a prostitute for men.",
      director: "Teddy Soeriaatmadja",
      starring: "Donny Damara, Rauhaanun, Yaya Unru",
      watch: "Netflix",
      poster: "images/Lovely Man.jpg"
    },
    movie38: {
      title: "Selamat Pagi, Malam",
      year: "2014",
      genre: "Drama",
      synopsis: "A tender, melancholic night is experienced through the eyes of three women as they struggle to find themselves in this ever-changing jungle of Jakarta.",
      director: "Lucky Kuswandi",
      starring: "Adinia Wirasti, Ina Panggabean, Dayu Wijanto",
      watch: "Vidio.com",
      poster: "images/Selamat_Pagi_Malam_Poster.jpg"
    },
    movie39: {
      title: "Mengejar Matahari",
      year: "2004",
      genre: "Drama",
      synopsis: "Ardi, Damar, Apin, and Nino have been friends since childhood, even though they have very different family backgrounds. They live in an apartment complex. They have a common habit, namely Chasing the Sun which they do every afternoon, by running towards the setting sun. When they chase the sun, they seem to forget about the problems they are facing and feel free",
      director: "Rudi Soedjarwo",
      starring: "Winky Wiryawan, Fedi Nuril, Fauzi Baadiila, Udjo Project Pop",
      watch: "Netflix",
      poster: "images/Mengejar_Matahari.jpg"
    },
    movie40: {
      title: "The Photograph",
      year: "2007",
      genre: "Drama",
      synopsis: "Sita is a karaoke bar hostess and a prostitute. When she is beaten up by a group of drunken men, she is saved by Johan. Johan is an old Chinese-Indonesian who is traveling as a photographer. Then Sita offers herself as Johan's servant without being paid. Sita doesn't know that their relationship will change their lives.",
      director: "Nan Triveni Achnas ",
      starring: "Lim Kay Tong, Shanty, Indy Barends",
      watch: "Netflix",
      poster: "images/The_photograph.jpg "
    },
    movie41: {
      title: "Fallen Angels",
      year: "1995",
      genre: "Romance",
      synopsis: "An assassin, his boss, an entrepreneur and two women cross paths in Hong Kong as their professional and love lives collide and influence each other, mostly without their knowledge.",
      director: "Wong Kar-wai",
      starring: "Leon Lai, Charlie Yeung",
      watch: "MUBI, Amazon Video",
      poster: "images/Fallen Angels.jpeg"
    },
    movie42: {
      title: "Stranger Things 4",
      year: "2022",
      genre: "Drama",
      synopsis: "Set in March 1986, eight months after the Battle of Starcourt, this season follows multiple storylines. In Hawkins, a series of mysterious murders are linked to a powerful entity from the Upside Down, later called Vecna. Eleven struggles to regain her powers with the help of Dr. Brenner and Dr. Owens, while her friends search for her. Meanwhile, Joyce and Murray attempt to rescue Hopper from a Soviet prison, where they face dangerous creatures. The separate arcs converge in an intense finale, setting the stage for the series next chapter​.",
      director: "Various",
      starring: "Millie Bobby Brown (Eleven), Finn Wolfhard (Mike), Winona Ryder (Joyce), David Harbour (Hopper), Gaten Matarazzo (Dustin), Caleb McLaughlin (Lucas), Sadie Sink (Max), Natalia Dyer (Nancy), Charlie Heaton (Jonathan), Joe Keery (Steve), and Maya Hawke (Robin). Jamie Campbell Bower joins as Vecna",
      watch: "Netflix",
      poster: "images/Stranger Things 4.jpeg"
    },
    movie43: {
      title: "The Fast And The Furious - Tokyo Drift",
      year: "2006",
      genre: "Action",
      synopsis: "After getting into trouble with the law in the United States, Sean Boswell is sent to live with his father in Tokyo to avoid jail time. In this new environment, Sean discovers the underground world of drift racing, led by the Drift King (Takashi). With the help of his mentor Han, Sean learns the art of drifting and gains the skills to compete against Takashi, culminating in a high-stakes race down a dangerous mountain pass..",
      director: "Justin Lin",
      starring: "Lucas Black as Sean Boswell,Sung Kang as Han Lue,Bow Wow (Shad Moss) as Twinkie,Nathalie Kelley as Neela,Brian Tee as Takashi",
      watch: "Amazon Prime Video, Apple TV, and Vudu",
      poster: "images/The Fast And The Furious - Tokyo Drift.jpeg"
    },
    movie44: {
      title: "The Fast Saga",
      year: "2021",
      genre: "Action",
      synopsis: "In F9: The Fast Saga, Dominic Toretto (Vin Diesel) faces his most personal challenge yet when his estranged brother Jakob (John Cena) teams up with the dangerous cyberterrorist Cipher (Charlize Theron). Jakob seeks revenge, leading to explosive confrontations and high-octane stunts. Dom must reunite his crew to protect his family and stop a global threat tied to a device called Project Aries..",
      director: "Justin Lin",
      starring: "Vin Diesel, Michelle Rodriguez, John Cena, Jordana Brewster, Tyrese Gibson, Ludacris, Charlize Theron, Helen Mirren.",
      watch: "Amazon Prime Video",
      poster: "images/The Fast Saga.jpeg"
    },
    movie45: {
      title: "The Lincoln Lawyer",
      year: "2011",
      genre: "Crime Drama",
      synopsis: "Mickey Haller is a charismatic and street-smart criminal defense attorney who runs his practice out of the backseat of his Lincoln Town Car. When he lands a high-profile case defending a wealthy playboy accused of assault, Mickey sees it as a golden opportunity. However, as he digs deeper into the case, he uncovers dark secrets and dangerous twists that put his life and moral compass at risk..",
      director: "Brad Furman",
      starring: "Matthew McConaughey as Mickey Haller,Ryan Phillippe as Louis Roulet,Marisa Tomei as Maggie McPherson,William H. Macy as Frank Levin",
      watch: "Netflix",
      poster: "images/The Lincoln Lawyer.jpeg"
    },
    movie46: {
      title: "Get Out",
      year: "2017",
      genre: "Horror Thriller",
      synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      director: "Jordan Peele",
      starring: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
      watch: "Apple TV, Netflix",
      poster: "images/Get Out.jpg"
    },
    movie47: {
      title: "Limitless",
      year: "2011",
      genre: "Action",
      synopsis: "A mysterious pill that enables the user to access 100% of his brain's abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers.",
      director: "Neil Burger",
      starring: "Bradley Cooper, Anna Friel, Abbie Cornish",
      watch: "Netflix",
      poster: "images/Limitless.jpg"
    },
    movie48: {
      title: "The Invisible Guest",
      year: "2016",
      genre: "Thriller",
      synopsis: "A young businessman wakes up in a hotel room locked from the inside with the dead body of his lover next to him. He hires a prestigious lawyer, and over one night they work together to clarify what happened in a frenetic race against time.",
      director: "Oriol Paulo",
      starring: "Mario Casas, Ana Wagener, Jose Coronado",
      watch: "Netflix",
      poster: "images/Invisible Guest.jpg"
    },
    movie49: {
      title: "Baby Driver",
      year: "2017",
      genre: "Action",
      synopsis: "Talented getaway driver Baby relies on the beat of his personal soundtrack to be the best in the game. After meeting the woman of his dreams, he sees a chance to ditch his shady lifestyle and make a clean break. Coerced into working for a crime boss, Baby must face the music as a doomed heist threatens his life, love and freedom.",
      director: "Edgar Wright",
      starring: "Ansel ElgortJon, BernthalJon Hamm",
      watch: "Apple TV, CatchPlay, Vidio.com",
      poster: "images/Baby Driver.jpeg"
    },
    movie50: {
      title: "10 Things I Hate About You",
      year: "1999",
      genre: "Romantic Comedy",
      synopsis: "A high-school boy, Cameron, cannot date Bianca until her anti-social older sister, Kat, has a boyfriend. So, Cameron pays a mysterious boy, Patrick, to charm Kat.",
      director: "Gil Junger",
      starring: "Heath LedgerJulia StilesJoseph Gordon-Levitt",
      watch: "KlikFilm",
      poster: "images/10 Things I Hate About You.jpg"
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
