import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  events: any[] = [
    {
      title: 'Cultural Fusion Night: "Around the World in One Evening',
      location: 'Berlin',
      description: {
        firstParagraph: "Embark on a global journey without leaving the comfort of our hostel! Join us for a magical evening of Cultural Fusion, where we're turning our common areas into a vibrant tapestry of traditions, flavors, and experiences from around the world.",
        sections: 
        [
          {
            title: "🌍 Explore the Diversity",
            description: "Step into our transformed spaces adorned with flags, banners, and cultural artifacts, as we take you on a visual tour of different countries. Immerse yourself in the colors, textures, and stories that make each culture unique."
          },
          {
            title: "👗 Dress the Part",
            description: "Get ready to showcase your creativity! Whether it's donning traditional attire or putting a modern spin on cultural fashion, we invite you to express the beauty of diversity through your own unique style."
          },
          {
            title: "🍜 Culinary Adventure",
            description: "Satisfy your taste buds with   a culinary journey spanning continents. Indulge in an array of international cuisines, each dish carefully curated to bring authentic flavors straight to your plate. Our food stations will be a feast for both the eyes and the palate."
          },
          {
            title: "🎶 Rhythms of the World",
            description: "Let the beats of diverse music transport you as we curate a playlist that traverses the globe. From the lively rhythms of Latin America to the soulful tunes of Asia, experience the world's melodies in one unforgettable night."
          },
          {
            title: "💃 Live Performances",
            description: "Be captivated by live performances that showcase the rich cultural tapestry of our global community. Enjoy traditional dances, musical acts, and demonstrations that will transport you to faraway lands."
          },
          {
            title: "🌐 Interactive Stations",
            description: "Engage your senses with hands-on activities representing different cultures. Try your hand at henna artistry, experience the elegance of calligraphy, or capture the moment at our international-themed photo booth."
          },
          {
            title: "🌟 Contest and Prizes",
            description: "Participate in friendly competitions and quizzes for a chance to win exciting prizes. Whether you excel in trivia, have the best-dressed cultural attire, or simply want to share your unique cultural story, there's something for everyone."
          },
          {
            title: "🤝 Cultural Exchange",
            description: "Connect with fellow travelers on our Cultural Exchange Board, where you can share your own travel stories, cultural insights, and recommendations. It's a space for building connections and celebrating the diversity within our community."
          }
        ]
      },
      date: this.addDays(new Date(), 3, true),
      dayTime: true
    },
    {
      title: 'Biking Tour: "Cityscape Explorations"',
      location: 'Berlin',
      description: {
        firstParagraph: "Join us for an invigorating biking tour through the diverse cityscape of Berlin! Pedal through historic landmarks, green spaces, and vibrant neighborhoods as you uncover the unique charm of Germany's capital on two wheels.",
        sections: [
          {
            title: "🚴 Urban Landmarks",
            description: "Cycle past iconic landmarks such as the Brandenburg Gate, Berlin Wall remnants, and Museum Island. Discover the city's rich history and architectural marvels along the route."
          },
          {
            title: "🌳 Green Oases",
            description: "Explore Berlin's lush parks and scenic riverbanks as you take leisurely rides through Tiergarten, Tempelhofer Feld, or along the Spree River. Experience nature within the bustling metropolis."
          },
          {
            title: "🏰 Neighborhood Exploration",
            description: "Navigate through eclectic neighborhoods like Kreuzberg, Prenzlauer Berg, or Friedrichshain, each offering its own distinct character, street art, and vibrant culture."
          },
          {
            title: "🍻 Local Hangouts",
            description: "Pause at charming cafes or beer gardens favored by locals. Refresh with a drink, sample local delicacies, and soak in the lively atmosphere during breaks along the biking tour."
          },
          {
            title: "🏙️ Modern Architecture",
            description: "Marvel at Berlin's contemporary architecture, from striking glass facades to innovative urban spaces. Witness the city's evolution and modern design elements during the tour."
          },
          {
            title: "🚲 Bike-Friendly Tips",
            description: "Receive biking tips and insights on navigating Berlin's bike lanes and cycling culture. Learn about bike-friendly routes and essential gear for an enjoyable urban biking experience."
          },
          {
            title: "🌟 Cityscape Memories",
            description: "Capture picturesque moments amidst Berlin's diverse cityscape. Share your biking adventure stories and snapshots with fellow riders!"
          }
        ]
      },
      date: this.addDays(new Date(), 8, true),
      dayTime: true
    },
    {
      title: 'Artisan Market Tour: "Cultural Treasures"',
      location: 'Berlin',
      description: {
        firstParagraph: "Immerse yourself in Berlin's vibrant artisan markets! Join us for a cultural journey through local markets filled with handcrafted treasures, artisanal goods, and a tapestry of cultures waiting to be explored.",
        sections: [
          {
            title: "🎨 Artisan Market Exploration",
            description: "Wander through bustling markets featuring a variety of handmade crafts, artworks, and unique souvenirs. Engage with local artisans and discover their stories behind the creations."
          },
          {
            title: "🛍️ Cultural Souvenirs",
            description: "Find exquisite souvenirs that showcase Berlin's diverse cultural influences. Support local craftsmen and take home authentic pieces that reflect the city's creative spirit."
          },
          {
            title: "🍴 Culinary Delights",
            description: "Treat your taste buds to a culinary adventure with local delicacies and street food available at the markets. Experience the flavors and aromas of Berlin's vibrant food scene."
          },
          {
            title: "🖼️ Artisan Demonstrations",
            description: "Witness live demonstrations by skilled artisans showcasing their craft. Gain insights into traditional techniques and the artistic processes behind their unique creations."
          },
          {
            title: "🌸 Cultural Insights",
            description: "Engage in conversations with artisans and delve into the cultural significance of their crafts. Explore the symbolism and traditions woven into Berlin's diverse artisanal heritage."
          },
          {
            title: "🤝 Community Connection",
            description: "Connect with local artisans and fellow explorers, fostering a sense of community and appreciation for Berlin's cultural richness. Share experiences and stories during the tour."
          },
          {
            title: "🌟 Artisan Appreciation",
            description: "Celebrate the craftsmanship and creativity of Berlin's artisans. Acknowledge the cultural depth reflected in their work and the role it plays in the city's vibrant identity."
          }
        ]
      },
      date: this.addDays(new Date(), 15, true),
      dayTime: true
    },
    {
      title: 'Global Rhythm Nights: "Beats from Around the World"',
      location: 'Berlin',
      description: {
        firstParagraph: "Get ready for a pulsating night of rhythms and beats from around the world! Join us for an electrifying party where global music takes center stage, creating an atmosphere that transcends borders and cultures.",
        sections: [
          {
            title: "🎵 Eclectic DJ Sets",
            description: "Dance to a diverse mix of global sounds curated by renowned DJs. From Latin beats to Afro-house vibes and beyond, our lineup promises an unforgettable sonic journey."
          },
          {
            title: "🌟 Lively Dance Floors",
            description: "Experience the energy as our dance floors come alive with a fusion of dance styles. Move to the rhythms, let loose, and celebrate the unity in diversity through the universal language of dance."
          },
          {
            title: "🍹 Signature Cocktails",
            description: "Sip on specialty cocktails inspired by international flavors. Our mixologists craft drinks that complement the global theme, adding an exotic twist to your party experience."
          }
        ]
      },
      date: this.addDays(new Date(), 3, false),
      dayTime: false 
    },
    {
      title: 'Berlin Nightscape Party: "City\'s Pulse After Dark"',
      location: 'Berlin',
      description: {
        firstParagraph: "Experience Berlin's vibrant nightlife at our exclusive party! Join us as the city comes alive after dark, pulsating with energy, dynamic beats, and an electric atmosphere that defines Berlin's party scene.",
        sections: [
          {
            title: "🎶 Dynamic Music Mix",
            description: "Groove to a mix of house, techno, and eclectic beats spun by top-notch DJs. Feel the rhythm of the city as each track adds to the electric vibe of the night."
          },
          {
            title: "🌆 Cityscape Views",
            description: "Savor the breathtaking views of Berlin's iconic landmarks under the starlit sky. Our venue offers a panoramic backdrop that enhances the magic of the night."
          },
          {
            title: "🍸 Crafted Cocktails",
            description: "Indulge in handcrafted cocktails that embody the spirit of Berlin's nightlife. Our bartenders craft drinks that elevate the party experience to new heights."
          }
        ]
      },
      date: this.addDays(new Date(), 10, false),
      dayTime: false
    },
    {
      title: 'Electric Dance Extravaganza: "Night of Endless Moves"',
      location: 'Berlin',
      description: {
        firstParagraph: "Get ready to dance the night away at our Electric Dance Extravaganza! Join us for a night filled with high-energy beats, exhilarating moves, and an electric atmosphere that keeps you moving till dawn.",
        sections: [
          {
            title: "🎵 Energetic DJ Performances",
            description: "Feel the adrenaline rush as our DJs drop pulsating beats, keeping the dance floor alive all night long. Expect an electrifying mix that caters to dance enthusiasts."
          },
          {
            title: "🕺 Endless Dance Party",
            description: "Embrace the energy and rhythm as the night unfolds. Let loose, express yourself through dance, and be a part of an unforgettable dance extravaganza."
          },
          {
            title: "🍹 Refreshing Beverages",
            description: "Quench your thirst with a selection of refreshing drinks available throughout the night. Our bars ensure your energy levels stay high as you groove to the beats."
          }
        ]
      },
      date: this.addDays(new Date(), 17, false),
      dayTime: false
    },
    {
      title: 'Adventure Package: "Discover the Thrill"',
      location: 'Prague',
      description: {
        firstP: "Get ready for an adrenaline-pumping adventure with our exclusive Adventure Package. Whether you're an outdoor enthusiast or a thrill-seeker, this package is designed to immerse you in the natural wonders of our surroundings.",
        sections: [
          {
            title: "🏞️ Explore the Wilderness",
            description: "Embark on a guided hiking tour through breathtaking landscapes, conquer challenging biking trails, or experience the rush of water sports. Our adventure package is your ticket to an unforgettable outdoor experience."
          },
          {
            title: "🌄 Scenic Views and Excitement",
            description: "Indulge in the beauty of nature while satisfying your craving for excitement. From mountain vistas to riverside trails, our adventure package ensures a perfect blend of awe-inspiring scenery and heart-pounding activities."
          },
          {
            title: "🛶 Guided Tours and Equipment",
            description: "Our experienced guides will lead you through the best routes, providing insights into the local flora and fauna. All equipment is provided, ensuring a safe and thrilling adventure for every participant."
          },
          {
            title: "🌟 Unleash Your Adventurous Spirit",
            description: "Whether you're a seasoned adventurer or a first-timer, our Adventure Package promises an unforgettable journey. Join us for an experience that combines the thrill of exploration with the beauty of the great outdoors."
          }
        ]
      },
      date: this.addDays(new Date(), 6, true),
      dayTime: true
    },
    {
      title: 'Prague Beer Tasting Tour: "Brewery Delights"',
      location: 'Prague',
      description: {
        firstP: "Indulge in Prague's rich beer culture with our Beer Tasting Tour! Join us for a delightful journey through local breweries and pubs, discovering the city's renowned craft beers and brewing traditions.",
        sections: [
          {
            title: "🍺 Brewery Visits",
            description: "Explore traditional breweries and microbreweries, learning about Prague's beer-making process from expert brewers. Taste a variety of beer styles crafted with passion and expertise."
          },
          {
            title: "🍻 Beer Sampling",
            description: "Savor a selection of Czech beers, from pilsners to ales, experiencing the diverse flavors and aromas. Gain insights into beer tasting techniques and beer pairings."
          },
          {
            title: "🍽️ Beer and Food Pairing",
            description: "Enjoy beer paired with local Czech cuisine. Discover how different beer styles complement various dishes, enhancing the gastronomic experience of Prague's culinary delights."
          }
        ]
      },
      date: this.addDays(new Date(), 5, true),
      dayTime: true
    },
    {
      title: 'Historical Walking Tour: "Step Back in Time"',
      location: 'Prague',
      description: {
        firstP: "Embark on a journey through history with our captivating Historical Walking Tour. Immerse yourself in the rich tapestry of our locale as our expert guides lead you through iconic landmarks, hidden gems, and the stories that shaped our past.",
        sections: [
          {
            title: "🏰 Explore Landmarks and Architecture",
            description: "Step back in time as you stroll through the historical heart of our city. Discover architectural wonders, centuries-old landmarks, and the stories behind each cobblestone, all woven into the fabric of our cultural heritage."
          },
          {
            title: "📜 Anecdotes and Legends",
            description: "Our knowledgeable guides will regale you with anecdotes, legends, and fascinating facts about the characters who shaped our history. From royal tales to everyday life, our Historical Walking Tour is a captivating storytelling experience."
          },
          {
            title: "👣 Guided Exploration",
            description: "Let our guides lead you through narrow alleys and grand avenues, offering insights into the historical significance of each location. Feel the echoes of the past as you absorb the charm and character of our storied city."
          }
        ]
      },
      date: this.addDays(new Date(), 2, true),
      dayTime: true 
    },
    {
      title: 'Ruins Pub Crawl: "Nightlife Adventure"',
      location: 'Prague',
      description: {
        firstP: "Embark on a thrilling Ruins Pub Crawl and immerse yourself in Budapest's legendary nightlife! Join us for an unforgettable evening exploring unique ruin bars, each with its own atmosphere and vibe.",
        sections: [
          {
            title: "🍻 Pub Exploration",
            description: "Visit iconic ruin bars across Budapest's historic district, each housed in repurposed buildings with an eclectic decor. Experience the vibrant energy and diverse crowds."
          },
          {
            title: "🎶 Live Music and DJ Sets",
            description: "Groove to live music performances and DJ sets showcasing a mix of genres. From indie tunes to electronic beats, each bar offers a distinct musical experience."
          },
          {
            title: "🌌 Bohemian Atmosphere",
            description: "Immerse yourself in the bohemian ambiance and artistic vibes of the ruin bars. Embrace the unconventional charm and free-spirited atmosphere of Budapest's nightlife."
          }
        ]
      },
      date: this.addDays(new Date(), 3, false),
      dayTime: false
    },
    {
      title: 'Rooftop Rendezvous: "Cityscape Soiree"',
      location: 'Prague',
      description: {
        firstP: "Join us for an unforgettable Rooftop Rendezvous overlooking Prague's iconic skyline! Enjoy an exclusive soirée set against the city's panoramic backdrop, blending sophistication with breathtaking views.",
        sections: [
          {
            title: "🌆 Panoramic Views",
            description: "Savor the stunning views of Prague's landmarks illuminated against the night sky. Our rooftop venue offers a picturesque backdrop for an elegant night out."
          },
          {
            title: "🥂 Fine Cocktails and Conversations",
            description: "Sip on curated cocktails and engage in meaningful conversations amidst a refined atmosphere. Network, socialize, and create memorable moments overlooking the city."
          },
          {
            title: "🌟 Nighttime Glamour",
            description: "Immerse yourself in the glamour of the evening. Dress to impress and revel in the sophistication of our rooftop soirée, where every moment is picture-perfect."
          }
        ]
      },
      date: this.addDays(new Date(), 12, false),
      dayTime: false 
    },
    {
      title: 'Neon Nights Dance Party: "Vibrant Beats"',
      location: 'Prague',
      description: {
        firstP: "Experience an electrifying night at our Neon Nights Dance Party! Join us for a vibrant celebration pulsating with neon lights, high-energy beats, and an electric atmosphere that keeps you moving.",
        sections: [
          {
            title: "🎶 DJ Sets and Dance Beats",
            description: "Groove to a mix of upbeat tracks spun by renowned DJs. Feel the energy of the dance floor as neon lights set the stage for an unforgettable night of dancing."
          },
          {
            title: "🌈 Neon Glow Experience",
            description: "Immerse yourself in the neon-lit ambiance, where vibrant colors and glowing decor create a mesmerizing atmosphere. Let the neon lights intensify the party vibe."
          },
          {
            title: "🍹 Refreshing Beverages",
            description: "Quench your thirst with a variety of refreshing drinks available at our neon-themed bars. Keep your energy high as you dance the night away."
          }
        ]
      },
      date: this.addDays(new Date(), 15, false),
      dayTime: false 
    },
    {
      title: 'Historical Walking Tour: "Step Back in Time"',
      location: 'Vienna',
      description: {
        firstP: "Embark on a journey through history with our captivating Historical Walking Tour. Immerse yourself in the rich tapestry of our locale as our expert guides lead you through iconic landmarks, hidden gems, and the stories that shaped our past.",
        sections: [
          {
            title: "🏰 Explore Landmarks and Architecture",
            description: "Step back in time as you stroll through the historical heart of our city. Discover architectural wonders, centuries-old landmarks, and the stories behind each cobblestone, all woven into the fabric of our cultural heritage."
          },
          {
            title: "📜 Anecdotes and Legends",
            description: "Our knowledgeable guides will regale you with anecdotes, legends, and fascinating facts about the characters who shaped our history. From royal tales to everyday life, our Historical Walking Tour is a captivating storytelling experience."
          },
          {
            title: "👣 Guided Exploration",
            description: "Let our guides lead you through narrow alleys and grand avenues, offering insights into the historical significance of each location. Feel the echoes of the past as you absorb the charm and character of our storied city."
          },
          {
            title: "🌍 Time-Traveling Experience",
            description: "Join us for a time-traveling experience that transports you to bygone eras. The Historical Walking Tour is not just a journey through history; it's an immersive exploration of the cultural roots that make our city unique."
          }
        ]
      },
      date: this.addDays(new Date(), 2, true),
      dayTime: true
    },
    {
      title: 'Vienna Coffeehouse Tour: "Aroma Discovery"',
      location: 'Vienna',
      description: {
        firstP: "Embark on a sensory journey through Vienna's iconic coffeehouses with our Coffeehouse Tour! Immerse yourself in the city's coffee culture, tasting exquisite brews and learning about their historical significance.",
        sections: [
          {
            title: "☕️ Coffeehouse Exploration",
            description: "Visit renowned coffeehouses steeped in Viennese tradition. Discover the unique ambiance and history behind each cafe while savoring freshly brewed coffee."
          },
          {
            title: "🍰 Sweet Delights",
            description: "Indulge in delectable pastries and desserts that complement Viennese coffee traditions. Experience the perfect pairing of coffee and exquisite sweets."
          },
          {
            title: "📚 Cultural Insights",
            description: "Learn about the cultural importance of Viennese coffeehouses as hubs for intellectual discourse and artistic gatherings. Immerse yourself in the heritage of these iconic establishments."
          }
        ]
      },
      date: this.addDays(new Date(), 3, true),
      dayTime: true 
    },
    {
      title: 'Schönbrunn Palace Tour: "Imperial Splendor"',
      location: 'Vienna',
      description: {
        firstP: "Step into Vienna's imperial history with a captivating tour of the Schönbrunn Palace! Explore the opulent residence, lush gardens, and fascinating stories of the Habsburg dynasty's legacy.",
        sections: [
          {
            title: "🏰 Palace Exploration",
            description: "Discover the grandeur of Schönbrunn Palace with guided tours through its lavish rooms, including the stunning State Rooms and the historic Royal Apartments."
          },
          {
            title: "🌳 Gardens and Landscapes",
            description: "Stroll through the palace gardens, marveling at the meticulously landscaped grounds, ornate fountains, and the breathtaking vistas that surround the palace."
          },
          {
            title: "👑 Imperial History",
            description: "Delve into the history of the Habsburg dynasty, learning about their lives, achievements, and the significance of Schönbrunn Palace in Austria's imperial legacy."
          }
        ]
      },
      date: this.addDays(new Date(), 7, true),
      dayTime: true 
    },
    {
      title: 'Masquerade Ball: "Glamorous Soirée"',
      location: 'Vienna',
      description: {
        firstP: "Experience the elegance of a traditional Masquerade Ball in Vienna! Join us for a glamorous evening of mystery and sophistication, adorned in masks and immersed in an atmosphere of luxury.",
        sections: [
          {
            title: "🎭 Masked Revelry",
            description: "Indulge in the enchantment of masked revelry, donning elegant attire and intricate masks. Dance in opulent ballrooms filled with mystery and allure."
          },
          {
            title: "🍾 Champagne Reception",
            description: "Start the evening with a sophisticated champagne reception, setting the tone for an evening of glamour and enchantment."
          },
          {
            title: "💃 Live Orchestra and Dance",
            description: "Sway to the rhythm of a live orchestra playing waltzes and classical melodies. Embrace the grace and elegance of Viennese dance traditions."
          }
        ]
      },
      date: this.addDays(new Date(), 4, false),
      dayTime: false
    },
    {
      title: 'Club Vienna Nights: "Electric Beats"',
      location: 'Vienna',
      description: {
        firstP: "Join us for a vibrant night at Vienna's top clubs! Experience an electric atmosphere with pulsating beats, high-energy dance floors, and an exciting blend of music genres.",
        sections: [
          {
            title: "🎵 DJ Sets and Dance Floors",
            description: "Groove to the beats of renowned DJs spinning a mix of music styles. Dance into the night amidst the lively energy of Vienna's club scene."
          },
          {
            title: "🥂 Premium Drinks",
            description: "Sip on premium cocktails and beverages available at the clubs' bars. Enjoy a diverse selection of drinks while mingling and enjoying the nightlife vibe."
          },
          {
            title: "🔥 High-Energy Party Scene",
            description: "Immerse yourself in the high-energy party atmosphere of Vienna's clubs. Revel in the vibrant nightlife experience that the city has to offer."
          }
        ]
      },
      date: this.addDays(new Date(), 8, false), 
      dayTime: false 
    },
    {
      title: 'Rooftop Lounge Soirée: "Cityscape Elegance"',
      location: 'Vienna',
      description: {
        firstP: "Elevate your night with a Rooftop Lounge Soirée offering stunning views of Vienna's skyline! Join us for an upscale evening blending sophistication with panoramic vistas and a chic ambiance.",
        sections: [
          {
            title: "🌃 Skyline Views",
            description: "Enjoy breathtaking views of Vienna's landmarks illuminated against the night sky. Our rooftop venue offers a picturesque backdrop for an elegant night out."
          },
          {
            title: "🍸 Cocktails and Socializing",
            description: "Savor crafted cocktails and mingle with fellow attendees in a chic rooftop setting. Socialize amidst the urban glamour and vibrant atmosphere of our soirée."
          },
          {
            title: "🎉 Elegant Entertainment",
            description: "Indulge in sophisticated entertainment and live music performances. Experience an evening of refinement amidst Vienna's enchanting skyline."
          }
        ]
      },
      date: this.addDays(new Date(), 12, false),
      dayTime: false 
    },
    {
      title: 'Local Food Tasting Experience: "Savor the Flavor"',
      location: 'Budapest',
      description: {
        firstP: "Indulge your taste buds in a culinary adventure with our Local Food Tasting Experience. Immerse yourself in the diverse flavors of our region as our expert chefs curate a delectable journey through the best local dishes and hidden culinary gems.",
        sections: [
          {
            title: "🍽️ Culinary Delights",
            description: "Savor the authentic taste of our region with a curated selection of local dishes. From street food to fine dining, our Local Food Tasting Experience is a gastronomic journey designed to please even the most discerning palates."
          },
          {
            title: "🥂 Food Pairing and Exquisite Tastes",
            description: "Experience the art of food pairing as our chefs guide you through a symphony of flavors. Discover the perfect combinations of local ingredients, spices, and culinary techniques that make each dish a masterpiece."
          },
          {
            title: "👨‍🍳 Chef's Insights",
            description: "Our passionate chefs will share insights into the cultural significance of each dish, highlighting the stories and traditions behind the flavors. Engage in a culinary dialogue that enhances your appreciation for the local food scene."
          },
          {
            title: "🌶️ A Feast for the Senses",
            description: "Join us for a feast that transcends taste and becomes a celebration of our local culinary heritage. The Local Food Tasting Experience is not just a meal; it's a sensory journey through the diverse and delicious flavors of our region."
          }
        ]
      },
      date: this.addDays(new Date(), 1, true),
      dayTime: true
    },
    {
      title: 'Danube River Cruise: "Riverside Odyssey"',
      location: 'Budapest',
      description: {
        firstP: "Embark on a scenic Danube River Cruise and witness the splendor of Budapest from the water! Glide along the iconic river, passing by architectural marvels and panoramic views that define the city's beauty.",
        sections: [
          {
            title: "🏰 Iconic Landmarks",
            description: "Sail past Budapest's landmarks including the Buda Castle, Hungarian Parliament, and Chain Bridge. Learn about their history and architectural significance from expert guides."
          },
          {
            title: "🌉 Riverside Panorama",
            description: "Admire the stunning riverside panorama showcasing the blend of historic and modern elements that characterize Budapest's skyline. Capture picture-perfect moments as you cruise along."
          },
          {
            title: "🛳️ Leisure and Comfort",
            description: "Relax on the cruise deck, enjoying the gentle breeze and breathtaking views. Indulge in onboard amenities while savoring the beauty of Budapest's riverfront."
          }
        ]
      },
      date: this.addDays(new Date(), 4, true),
      dayTime: true 
    },
    {
      title: 'Culinary Walking Tour: "Taste of Budapest"',
      location: 'Budapest',
      description: {
        firstP: "Embark on a flavorsome journey through Budapest's culinary scene with our guided Culinary Walking Tour! Discover the city's gastronomic delights, sampling local delicacies and hidden food gems.",
        sections: [
          {
            title: "🍲 Food Tasting Adventure",
            description: "Stroll through local markets and eateries, indulging in a variety of Hungarian dishes. From hearty stews to sweet pastries, savor the diverse flavors of Budapest."
          },
          {
            title: "🥂 Cultural Insights",
            description: "Learn about Hungarian culinary traditions and the cultural significance of various dishes. Engage with local vendors and chefs, gaining insights into their culinary expertise."
          },
          {
            title: "🍻 Immersive Experience",
            description: "Immerse yourself in Budapest's food culture, experiencing the lively atmosphere of food markets and tasting authentic flavors. It's a culinary journey to remember!"
          }
        ]
      },
      date: this.addDays(new Date(), 8, true),
      dayTime: true
    },
    {
      title: 'Moonlit Masquerade Ball: "Enchanted Evening"',
      location: 'Budapest',
      description: {
        firstP: "Step into a world of mystique and magic at our Moonlit Masquerade Ball! Join us for an enchanted evening filled with intrigue, elegance, and dancing under the shimmering moonlight.",
        sections: [
          {
            title: "🌙 Masked Elegance",
            description: "Adorn your finest attire and mysterious masks for a night of glamour and anonymity. Let the allure of secrecy add a touch of magic to the enchanting atmosphere."
          },
          {
            title: "💃 Dance and Revelry",
            description: "Dance to live music performed by talented musicians, creating an ambiance of sophistication and grace. The ballroom awaits your elegant moves and charming company."
          },
          {
            title: "🎭 Masquerade Charms",
            description: "Engage in conversations and playful encounters while concealing your identity. Embrace the intrigue and revel in the thrill of the masquerade ball."
          }
        ]
      },
      date: this.addDays(new Date(), 7, false),
      dayTime: false 
    },
    {
      title: 'Rooftop Party: "Skyline Revelry"',
      location: 'Budapest',
      description: {
        firstP: "Elevate your nightlife experience with our Rooftop Party offering breathtaking views of Budapest's skyline! Join us for an exclusive celebration high above the city, blending sophistication with panoramic vistas.",
        sections: [
          {
            title: "🌆 Panoramic Views",
            description: "Savor the stunning views of Budapest's landmarks illuminated against the night sky. Our rooftop venue offers a picturesque backdrop for an elegant night out."
          },
          {
            title: "🥂 Cocktails and Socializing",
            description: "Enjoy crafted cocktails and mingle with fellow partygoers in a chic setting. Socialize amidst the urban glamour and vibrant atmosphere of our rooftop soirée."
          },
          {
            title: "🎉 High-Energy Entertainment",
            description: "Dance to the beats of lively music while reveling in the energy of the city below. The rooftop party promises an unforgettable night high above Budapest."
          }
        ]
      },
      date: this.addDays(new Date(), 7, false),
      dayTime: false 
    },
    {
      title: 'Club Night Extravaganza: "Electric Vibes"',
      location: 'Budapest',
      description: {
        firstP: "Experience an electric night at Budapest's renowned clubs! Join us for a Club Night Extravaganza, where the pulsating beats, lively crowds, and immersive ambiance create an unforgettable party atmosphere.",
        sections: [
          {
            title: "🎵 DJ Sets and Dance Floors",
            description: "Groove to the beats of top DJs spinning a mix of music genres. Let the rhythm take over as you dance the night away on vibrant club dance floors."
          },
          {
            title: "🍹 Premium Beverages",
            description: "Sip on premium drinks and cocktails served at the clubs' bars. Enjoy a diverse selection of beverages while socializing and soaking in the club's ambiance."
          },
          {
            title: "🔥 High-Energy Party Scene",
            description: "Immerse yourself in the lively and energetic party scene of Budapest's clubs. Embrace the electric vibes and vibrant energy that define the city's nightlife."
          }
        ]
      },
      date: this.addDays(new Date(), 10, false),
      dayTime: false 
    }
  ]
  constructor() { }

  get getEvents() {
    return this.events;
  }

  get getBerlinEvents() {
    return this.events.filter(el => el.location == 'Berlin');
  }

  get getPragueEvents() {
    return this.events.filter(el => el.location == 'Prague');
  }

  get getViennaEvents() {
    return this.events.filter(el => el.location == 'Vienna');
  }
  
  get getBudapestEvents() {
    return this.events.filter(el => el.location == 'Budapest');
  }

  addDays(date: Date, days: number, dayTime: boolean): any {
    const weekday: any = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let millisecondsDate = date.getTime();
    millisecondsDate = millisecondsDate + 1000 * 60 * 60 * 24 * days;
    let retDate = new Date(millisecondsDate);
    let ret = {
      weekDay: weekday[retDate.getDay()],
      day: retDate.getDate(),
      month: retDate.getMonth() + 1,
      hour: dayTime ? Math.floor(Math.random() * 24 % 4 + 13) : Math.floor(Math.random() * 24 % 6 + 18),
      minutes: '00'
    }
    return ret;
  }
}
