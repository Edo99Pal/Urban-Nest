import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  hostels = [
    {
      location: 'Berlin',
      images: [
        'activity-1.jpg',
        'event-berlin-1.jpg',
        'event-berlin-2.jpg',
      ],
      description: [
        "Berlin, the vibrant capital of Germany, is a city steeped in history and culture, offering a plethora of attractions that cater to every interest. One of the must-visit landmarks is the iconic Brandenburg Gate, a symbol of Germany's reunification and a testament to the city's tumultuous past. Nearby, visitors can explore the Reichstag Building, housing the German parliament, boasting a stunning glass dome offering panoramic views of the city. For history enthusiasts, the remnants of the Berlin Wall at the East Side Gallery stand as a poignant reminder of the city's division and subsequent reunification, adorned with captivating murals that reflect the spirit of unity and hope.",
        "Museum Island is a UNESCO World Heritage Site and a treasure trove for art and history aficionados. This island in the Spree River hosts several world-renowned museums, including the Pergamon Museum, home to impressive archaeological collections including the famous Ishtar Gate and the Market Gate of Miletus. Art enthusiasts can revel in the vast collections at the Altes Museum, showcasing classical antiquities, while the Neues Museum houses the iconic bust of Queen Nefertiti. Additionally, Berlin's cultural scene thrives in its diverse neighborhoods like Kreuzberg and Friedrichshain, where visitors can immerse themselves in a vibrant street art scene, eclectic nightlife, and a rich tapestry of culinary delights, from trendy cafes to traditional beer halls.",
        "The city's resilience and creative spirit are evident in its modern architecture, such as the Berlin Hauptbahnhof, one of Europe's largest train stations, showcasing contemporary design and efficient infrastructure. For a serene escape, Tiergarten, Berlin's central park, offers lush greenery, peaceful pathways, and picturesque lakes, providing an oasis in the heart of the bustling city. Finally, the Memorial to the Murdered Jews of Europe, a haunting yet powerful tribute comprising concrete slabs of varying heights, commemorates the Jewish victims of the Holocaust, serving as a somber reminder of the atrocities of the past and the importance of remembrance in shaping a more compassionate future."
      ],
      facilities: [
        "Bicycle Rental/Storage",
        "24-Hour Reception/Security",
        "Vending Machines",
        "Laundry Facilities",
        "Tourist Information/Travel Desk"
      ],
      rating: 4.5,
    },
    {
      location: 'Prague',
      images: [
        'activity-2.jpg',
        'event-prague-1.jpg',
        'event-prague-2.jpg',
      ],
      description: [
        "Prague, known as the 'City of a Hundred Spires,' is a cultural jewel adorned with centuries-old history and architectural wonders. At the heart of the city lies the imposing Prague Castle, an emblem of Czech heritage. This vast complex encompasses various palaces, courtyards, and gardens, along with the awe-inspiring St. Vitus Cathedral, an epitome of Gothic architecture with its intricate details and stained glass windows. The charming cobblestone streets lead to the iconic Charles Bridge, an architectural marvel adorned with Baroque statues offering mesmerizing views of the Vltava River.",
  
        "The Old Town Square, with its enchanting ambiance, captivates visitors with the impressive Astronomical Clock on the Old Town Hall and the striking Týn Church's Gothic spires. The historical Jewish Quarter, Josefov, preserves poignant reminders of the city's Jewish heritage through its synagogues and the poignant Old Jewish Cemetery. Meandering through the streets of Prague reveals a blend of architectural styles, from Renaissance to Art Nouveau, complementing the city's diverse cultural tapestry.",
        
        "Exploring Prague extends beyond its architectural splendor. The National Gallery presents a comprehensive display of Czech and international art, while the Municipal House showcases Art Nouveau elegance. Visitors can immerse themselves in Prague's vibrant nightlife, experiencing live music in atmospheric jazz clubs or sampling traditional Czech cuisine in quaint restaurants. The city's rich cultural calendar includes numerous festivals celebrating music, film, and arts, further enriching the visitor's experience."
      ],
      facilities: [
        "Pub Crawls/Events",
        "Cultural Tours/Local Experiences",
        "Luggage Storage",
        "Multilingual Staff",
        "Chill-out Garden/Outdoor Area"
      ],
      rating: 4.2,
    },
    {
      location: 'Vienna',
      images: [
        'activity-3.jpg',
        'event-vienna-1.jpg',
        'event-vienna-2.jpg',
      ],
      description: [
        "Vienna, Austria's capital, is a city steeped in imperial grandeur, artistic achievements, and rich history. Schönbrunn Palace, an architectural masterpiece and UNESCO World Heritage Site, stands as a testament to the Habsburg dynasty's opulence. Its lavish interiors, sprawling gardens, and the Gloriette, overlooking the palace, offer a glimpse into Austria's imperial past. The Belvedere Palace, with its Upper and Lower Belvedere buildings, hosts an impressive collection of art, including Gustav Klimt's renowned painting, 'The Kiss.'",
  
        "St. Stephen's Cathedral, a landmark of Vienna's skyline, showcases remarkable Gothic architecture and intricate details, including its vibrant, multi-colored roof. The Hofburg Palace, a historic residence of Austrian rulers, and the adjacent Spanish Riding School are symbolic of the city's regal heritage. Exploring Vienna's historic Innere Stadt reveals elegant boulevards, picturesque squares, and iconic landmarks like the Austrian National Library, preserving centuries-old manuscripts.",
        
        "Vienna thrives on its cultural offerings. The Vienna State Opera, a renowned venue for operatic performances, and the Musikverein, home to the Vienna Philharmonic Orchestra, attract music enthusiasts worldwide. Art enthusiasts can indulge in masterpieces at the Kunsthistorisches Museum or explore contemporary art at the MuseumsQuartier. The Naschmarkt, Vienna's bustling market, presents an array of international delicacies, fresh produce, and local specialties, encapsulating the city's vibrant culinary scene."
      ],
      facilities: [
        "Thermal Baths/Spa Access",
        "Rooftop Terrace/Viewpoint",
        "Gym/Fitness Facilities",
        "Communal BBQ Area",
        "City Bike Tours/rentals"
      ],
      rating: 4.3,
    },
    {
      location: 'Budapest',
      images: [
        'activity-4.jpg',
        'event-budapest-1.jpg',
        'event-budapest-2.jpg',
      ],
      description: [
        "Budapest, Hungary's capital, is a mesmerizing fusion of history, architecture, and natural beauty. The Buda Castle, perched atop Castle Hill, encompasses historical museums and galleries offering insights into Hungary's past. From this vantage point, visitors can admire panoramic views of the Danube River and the city's skyline, complemented by the Matthias Church and the neo-Gothic Fisherman's Bastion.",
  
        "The Hungarian Parliament, an iconic Neo-Gothic masterpiece on the Danube's bank, symbolizes the nation's grandeur with its imposing architecture and stunning interiors. Budapest's thermal baths, such as the Széchenyi Thermal Bath, invite relaxation in healing waters amidst breathtaking architectural settings. Margaret Island, a serene oasis in the Danube, features lush parks, recreational activities, and a musical fountain.",
        
        "The city's cultural wealth is evident in its museums and vibrant neighborhoods. The Hungarian National Museum chronicles Hungary's history, while the House of Terror provides insight into the nation's tumultuous past. Visitors can savor the flavors of Hungarian cuisine, from hearty goulash to chimney cake, at local eateries or the bustling Great Market Hall, where the aroma of spices fills the air."
      ],
      facilities: ['Free Walking Tours', 'Rooftop Terrace', 'Bicycle Rental', '24-hour Check-in'],
      rating: 4.4,
    }
  ];

  commonFacilities: string[] = [
    "Dormitories",
    "Shared Bathrooms",
    "Common Area/Lounge",
    "Kitchen",
    "Free Wi-Fi"
  ];

  activeHostel = 0;
  constructor() { }

  get getHostels(): any[] {
    return this.hostels;
  }

  get getCommonFacilities(): string[] {
    return this.commonFacilities;
  }

  set setActiveCity(n: number) {
    this.activeHostel = n;
  }
}
