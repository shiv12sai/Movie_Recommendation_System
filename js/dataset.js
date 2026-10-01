//Movies details with poster & description
const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    poster: "images/posters/inception.jpg",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    poster: "images/posters/dark-knight.jpg",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "images/posters/interstellar.jpg",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse."
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 8.7,
    poster: "images/posters/matrix.jpg",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
    poster: "images/posters/pulp-fiction.jpg",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
  },
  {
    title: "Fight Club",
    genre: "Drama",
    rating: 8.8,
    poster: "images/posters/fight-club.jpg",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    poster: "images/posters/forrest-gump.jpg",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75."
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    poster: "images/posters/shawshank-redemption.jpg",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title: "The Godfather",
    genre: "Crime",
    rating: 9.2,
    poster: "images/posters/godfather.jpg",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    rating: 7.8,
    poster: "images/posters/avatar.jpg",
    description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
  },
  {
    title: "Titanic",
    genre: "Romance",
    rating: 7.9,
    poster: "images/posters/titanic.jpg",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  },
  {
    title: "Gladiator",
    genre: "Action",
    rating: 8.5,
    poster: "images/posters/gladiator.jpg",
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    title: "The Avengers",
    genre: "Action",
    rating: 8.0,
    poster: "images/posters/avengers.jpg",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  {
    title: "Jurassic Park",
    genre: "Adventure",
    rating: 8.1,
    poster: "images/posters/jurassic-park.jpg",
    description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
  },
  {
    title: "The Lion King",
    genre: "Animation",
    rating: 8.5,
    poster: "images/posters/lion-king.jpg",
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    title: "Star Wars",
    genre: "Sci-Fi",
    rating: 8.6,
    poster: "images/posters/star-wars.jpg",
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station."
  },
  {
    title: "The Silence of the Lambs",
    genre: "Thriller",
    rating: 8.6,
    poster: "images/posters/silence-lambs.jpg",
    description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer."
  },
  {
    title: "Saving Private Ryan",
    genre: "War",
    rating: 8.6,
    poster: "images/posters/saving-private-ryan.jpg",
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
  },
  {
    title: "Schindler's List",
    genre: "Drama",
    rating: 9.0,
    poster: "images/posters/schindler-list.jpg",
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    rating: 8.9,
    poster: "images/posters/lotr.jpg",
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    rating: 7.6,
    poster: "images/posters/harry-potter.jpg",
    description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
  },
  {
    title: "Spider-Man",
    genre: "Action",
    rating: 7.4,
    poster: "images/posters/spider-man.jpg",
    description: "After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy."
  },
  {
    title: "Iron Man",
    genre: "Action",
    rating: 7.9,
    poster: "images/posters/iron-man.jpg",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
  },
  {
    title: "Black Panther",
    genre: "Action",
    rating: 7.3,
    poster: "images/posters/black-panther.jpg",
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past."
  },
  {
    title: "Toy Story",
    genre: "Animation",
    rating: 8.3,
    poster: "images/posters/toy-story.jpg",
    description: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom."
  },
  {
    title: "Finding Nemo",
    genre: "Animation",
    rating: 8.2,
    poster: "images/posters/finding-nemo.jpg",
    description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
  },
  {
    title: "The Incredibles",
    genre: "Animation",
    rating: 8.0,
    poster: "images/posters/incredibles.jpg",
    description: "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world."
  },
  {
    title: "Frozen",
    genre: "Animation",
    rating: 7.4,
    poster: "images/posters/frozen.jpg",
    description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man to break the spell."
  },
  {
    title: "The Terminator",
    genre: "Sci-Fi",
    rating: 8.1,
    poster: "images/posters/terminator.jpg",
    description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman."
  },
  {
    title: "Aliens",
    genre: "Sci-Fi",
    rating: 8.4,
    poster: "images/posters/aliens.jpg",
    description: "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators."
  },
  {
    title: "Blade Runner",
    genre: "Sci-Fi",
    rating: 8.1,
    poster: "images/posters/blade-runner.jpg",
    description: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator."
  },
  {
    title: "The Prestige",
    genre: "Mystery",
    rating: 8.5,
    poster: "images/posters/prestige.jpg",
    description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
  },
  {
    title: "Memento",
    genre: "Mystery",
    rating: 8.4,
    poster: "images/posters/memento.jpg",
    description: "A man with short-term memory loss attempts to track down his wife's murderer using notes and tattoos to remember crucial information."
  },
  {
    title: "The Sixth Sense",
    genre: "Thriller",
    rating: 8.2,
    poster: "images/posters/sixth-sense.jpg",
    description: "A boy who communicates with spirits seeks the help of a disheartened child psychologist to understand his supernatural gift and help the restless souls around him."
  },
  {
    title: "Se7en",
    genre: "Thriller",
    rating: 8.6,
    poster: "images/posters/se7en.jpg",
    description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives in a grim and rainy city."
  },
  {
    title: "The Departed",
    genre: "Crime",
    rating: 8.5,
    poster: "images/posters/departed.jpg",
    description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
  },
  {
    title: "Good Will Hunting",
    genre: "Drama",
    rating: 8.3,
    poster: "images/posters/good-will-hunting.jpg",
    description: "Will Hunting, a janitor at MIT, has a gift for mathematics but needs help from a psychologist to find direction in his life."
  },
  {
    title: "A Beautiful Mind",
    genre: "Drama",
    rating: 8.2,
    poster: "images/posters/beautiful-mind.jpg",
    description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish."
  },
  {
    title: "The Social Network",
    genre: "Drama",
    rating: 7.8,
    poster: "images/posters/social-network.jpg",
    description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea."
  },
  {
    title: "Whiplash",
    genre: "Drama",
    rating: 8.5,
    poster: "images/posters/whiplash.jpg",
    description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    rating: 8.1,
    poster: "images/posters/mad-max.jpg",
    description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners and a drifter named Max."
  },
  {
    title: "Die Hard",
    genre: "Action",
    rating: 8.2,
    poster: "images/posters/die-hard.jpg",
    description: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles."
  },
  {
    title: "The Bourne Identity",
    genre: "Action",
    rating: 7.9,
    poster: "images/posters/bourne-identity.jpg",
    description: "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory."
  },
  {
    title: "Casino Royale",
    genre: "Action",
    rating: 8.0,
    poster: "images/posters/casino-royale.jpg",
    description: "After earning 00 status and a license to kill, Secret Agent James Bond sets out on his first mission to defeat a private banker funding terrorists in a high-stakes game of poker."
  },
  {
    title: "The Shining",
    genre: "Horror",
    rating: 8.4,
    poster: "images/posters/shining.jpg",
    description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
  },
  {
    title: "Get Out",
    genre: "Horror",
    rating: 7.7,
    poster: "images/posters/get-out.jpg",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
  },
  {
    title: "A Quiet Place",
    genre: "Horror",
    rating: 7.5,
    poster: "images/posters/quiet-place.jpg",
    description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing."
  },
  {
    title: "La La Land",
    genre: "Romance",
    rating: 8.0,
    poster: "images/posters/la-la-land.jpg",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
  },
  {
    title: "The Notebook",
    genre: "Romance",
    rating: 7.8,
    poster: "images/posters/notebook.jpg",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
  },
  {
    title: "Coco",
    genre: "Animation",
    rating: 8.4,
    poster: "images/posters/coco.jpg",
    description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
  }
];
