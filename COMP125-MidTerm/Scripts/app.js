// setup your IIFE (Immediately Invoked Function Expression)
(function () {
        "use strict";


        //Intro parah here
        let paragraph = document.getElementById("IntroParagraph1");
        let Sentence = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. ";
        paragraph.textContent = Sentence;
        let paragraph1 = document.getElementById("IntroParagraph2");
        let Sentence1 = "Greece has 1,400 islands, though only 230 of them are inhabited. ";
        paragraph1.textContent = Sentence1;
        let paragraph2 = document.getElementById("IntroParagraph3");
        let Sentence2 = "And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
        paragraph2.textContent = Sentence2;
        //content for Folegandros 
        let paragraph3 = document.getElementById("Folegandros");
        let Sentence3 = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";
        paragraph3.textContent = Sentence3;
        //content for Alonissos 
        let paragraph4 = document.getElementById("Alonissos");
        let Sentence4 = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.";
        paragraph4.textContent = Sentence4;
        //content for Spetses 
        let paragraph5 = document.getElementById("Spetses");
        let Sentence5 = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";
        paragraph5.textContent = Sentence5;
        //content for Amorgos 
        let paragraph6 = document.getElementById("Amorgos");
        let Sentence6 = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.";
        paragraph6.textContent = Sentence6;
        //content for Syros 
        let paragraph7 = document.getElementById("Syros");
        let Sentence7 = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";
        paragraph7.textContent = Sentence7;
        //content for Milos  
        let paragraph8 = document.getElementById("Milos");
        let Sentence8 = 'This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, its also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours"its home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.';
        paragraph8.textContent = Sentence8;
        //content for Hydra  
        let paragraph9 = document.getElementById("Hydra");
        let Sentence9 = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.";
        paragraph9.textContent = Sentence9;
        //content for Ithaca 
        let paragraph10 = document.getElementById("Ithaca");
        let Sentence10 = 'Most famous for being the home of Odysseus, and a prominent figure in Homers "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.';
        paragraph10.textContent = Sentence10;
        //content for Gavdos 
        let paragraph11 = document.getElementById("Gavdos");
        let Sentence11 = "Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.";
        paragraph11.textContent = Sentence11;



//300981989 Raghav Syal


        //Contact Form
        
         function myFunction()
         {
        var FirstName = document.getElementById("contactForm").elements[0].value;
        console.log("FirstName "+FirstName);
        let ContactNumber=document.getElementById("contactForm").elements[1].value;
        console.log("Contact Number "+ContactNumber);
        let EmailID=document.getElementById("contactForm").elements[2].value;
        console.log("EmailID "+EmailID);
        let Message=document.getElementById("contactForm").elements[3].value;
        console.log("Message "+Message);
    }
        // YOUR CODE GOES HERE


})();

