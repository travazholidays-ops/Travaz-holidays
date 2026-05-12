/* ════════════════════════════════════════════
   PACKAGE DATA
════════════════════════════════════════════ */
/* ════════════════════════════════════════════
   PACKAGE DATA (FULLY DETAILED 1 TO 7 DAYS)
════════════════════════════════════════════ */
const packages = {
  /* ─── 1 DAY TRIPS ─── */
  nandi1day: { title: "Nandi Hills Sunrise", route: "Bangalore → Nandi Hills → Bangalore", image: "images/nandi.webp", badges: ["Family", "Sunrise"], meta: [{ l: "Duration", v: "Half Day" }], days: [{ num: 1, title: "Sunrise & Temples", slots: [{ t: "4:00 AM", x: "Depart Bangalore. Carry warm jackets." }, { t: "5:30 AM", x: "Hike to Tipu's Drop for panoramic sunrise views." }, { t: "8:00 AM", x: "Visit the 9th-century Bhoga Nandeeshwara Temple." }, { t: "10:30 AM", x: "Breakfast on the highway and return." }] }], hotels: [], tip: "Visit on weekdays to avoid massive parking lines." },
  mysuru1day: { title: "Mysuru City Tour", route: "Bangalore → Mysuru → Bangalore", image: "images/mysuru.webp", badges: ["Family", "Heritage"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Royal Heritage", slots: [{ t: "6:00 AM", x: "Depart via the new expressway." }, { t: "9:30 AM", x: "Explore the grand Mysuru Palace." }, { t: "12:00 PM", x: "Visit Jaganmohan Palace Art Gallery." }, { t: "1:30 PM", x: "Traditional South Indian Thali lunch." }, { t: "3:00 PM", x: "Drive up Chamundi Hill for city views and Nandi statue." }, { t: "5:00 PM", x: "Evening stroll at Brindavan Gardens (Musical fountain)." }, { t: "8:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Book Palace tickets online to skip queues." },
  shiva1day: { title: "Shivanasamudra Falls", route: "Bangalore → Shivanasamudra → Bangalore", image: "images/shivanasamudra.webp", badges: ["Family", "Waterfalls"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Twin Waterfalls", slots: [{ t: "7:00 AM", x: "Depart Bangalore." }, { t: "10:00 AM", x: "View the cascading Gaganachukki Falls." }, { t: "11:30 AM", x: "Head to Bharachukki Falls. Coracle rides available here." }, { t: "1:30 PM", x: "Lunch." }, { t: "3:00 PM", x: "Visit the sand-covered temples of Talakadu before returning." }] }], hotels: [], tip: "Best visited during August-November for maximum water flow." },
  banner1day: { title: "Bannerghatta Safari", route: "Bangalore → Bannerghatta → Bangalore", image: "images/bannerghatta.webp", badges: ["Family", "Wildlife"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Jungle Safari", slots: [{ t: "8:00 AM", x: "Depart for the park." }, { t: "9:30 AM", x: "Board the Grand Safari bus (Lion, Tiger, Bear enclosures)." }, { t: "12:00 PM", x: "Explore the Butterfly Park and Zoo." }, { t: "2:30 PM", x: "Late lunch and return to the city." }] }], hotels: [], tip: "Park is strictly closed on Tuesdays." },
  skanda1day: { title: "Skandagiri Night Trek", route: "Bangalore → Skandagiri → Bangalore", image: "images/skandagiri.webp", badges: ["Adventure", "Night Trek"], meta: [{ l: "Duration", v: "Night/Half Day" }], days: [{ num: 1, title: "Cloud Sea Sunrise", slots: [{ t: "11:00 PM", x: "Depart Bangalore." }, { t: "1:00 AM", x: "Begin the 3.5km night trek." }, { t: "5:30 AM", x: "Reach summit. Wait for the 'sea of clouds' sunrise." }, { t: "8:00 AM", x: "Descend, have local breakfast at base, and return." }] }], hotels: [], tip: "Forest permit required via Karnataka Eco Tourism site." },
  savan1day: { title: "Savandurga Climb", route: "Bangalore → Savandurga → Bangalore", image: "images/savandurga.webp", badges: ["Adventure", "Trek"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Monolith Challenge", slots: [{ t: "5:30 AM", x: "Depart early." }, { t: "7:00 AM", x: "Begin steep ascent of Asia's largest monolith." }, { t: "9:30 AM", x: "Reach fort ruins at the peak." }, { t: "11:30 AM", x: "Descend safely and return." }] }], hotels: [], tip: "The granite rock gets burning hot by midday. Start early." },
  anthar1day: { title: "Anthargange Caves", route: "Bangalore → Anthargange → Bangalore", image: "images/anthargange.webp", badges: ["Adventure", "Caves"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Volcanic Boulders", slots: [{ t: "6:00 AM", x: "Depart towards Kolar." }, { t: "8:30 AM", x: "Visit Kashi Vishweshwara Temple." }, { t: "9:30 AM", x: "Crawl and navigate through natural boulder caves." }, { t: "1:00 PM", x: "Descend and drive back to Bangalore." }] }], hotels: [], tip: "Beware of monkeys near the temple. Wear full-length pants for crawling." },
  hogen1day: { title: "Hogenakkal Falls", route: "Bangalore → Hogenakkal → Bangalore", image: "images/hogenakkal.webp", badges: ["Nature", "Coracle"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Niagara of India", slots: [{ t: "6:00 AM", x: "Depart crossing into Tamil Nadu." }, { t: "9:30 AM", x: "Traditional round Coracle boat ride near the falls." }, { t: "1:00 PM", x: "Freshly fried river fish for lunch." }, { t: "3:30 PM", x: "Return journey." }] }], hotels: [], tip: "Negotiate coracle prices upfront." },
  meke1day: { title: "Mekedatu & Sangama", route: "Bangalore → Sangama → Bangalore", image: "images/mekedatu.webp", badges: ["Nature", "River"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "River Gorge", slots: [{ t: "7:00 AM", x: "Depart via Kanakapura." }, { t: "9:30 AM", x: "Arrive at Sangama (river confluence)." }, { t: "10:30 AM", x: "Take the bumpy forest bus to Mekedatu gorge." }, { t: "1:30 PM", x: "Lunch at Sangama and return." }] }], hotels: [], tip: "Swimming at Mekedatu is extremely dangerous and strictly prohibited." },
  lepakshi1day: { title: "Lepakshi Temple", route: "Bangalore → Lepakshi → Bangalore", image: "images/lepakshi.webp", badges: ["Heritage", "Temple"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Vijayanagara Art", slots: [{ t: "7:00 AM", x: "Depart north into Andhra Pradesh." }, { t: "9:30 AM", x: "Visit the massive monolithic Nandi." }, { t: "10:30 AM", x: "Explore Veerabhadra Temple. Slide a paper under the Hanging Pillar." }, { t: "1:30 PM", x: "Lunch and return." }] }], hotels: [], tip: "Hire a local guide to explain the ceiling murals." },
  srira1day: { title: "Srirangapatna Fort", route: "Bangalore → Srirangapatna → Bangalore", image: "images/srirangapatna.webp", badges: ["Heritage", "Fort"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Tipu's Island", slots: [{ t: "7:30 AM", x: "Depart via expressway." }, { t: "9:30 AM", x: "Visit Sri Ranganathaswamy Temple." }, { t: "11:00 AM", x: "Explore Dariya Daulat Bagh (Summer Palace) and the Gumbaz." }, { t: "12:30 PM", x: "Visit the Water Gate and historic Fort ruins." }, { t: "2:00 PM", x: "Return journey." }] }], hotels: [], tip: "A great historical day trip with less driving than going to Mysuru." },
  shravana1day: { title: "Shravanabelagola", route: "Bangalore → Shravanabelagola → Bangalore", image: "images/shravanabelagola.webp", badges: ["Pilgrimage", "Monument"], meta: [{ l: "Duration", v: "1 Day" }], days: [{ num: 1, title: "Giant Monolith", slots: [{ t: "6:00 AM", x: "Depart via Hassan highway." }, { t: "9:00 AM", x: "Climb 600 stone steps up Vindhyagiri Hill." }, { t: "10:30 AM", x: "Darshan of the 57ft Bahubali statue." }, { t: "1:00 PM", x: "Descend, traditional Jain lunch, and return." }] }], hotels: [], tip: "Footwear is not allowed on the hill. Carry thick socks." },

  /* ─── 2 DAYS / 1 NIGHT ─── */
  coorg2day: { title: "Coorg Retreat", route: "Bangalore → Coorg → Bangalore", image: "images/coorg.webp", badges: ["Hill Station"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Golden Temple & Sunset", slots: [{ t: "5:30 AM", x: "Depart. Breakfast on highway." }, { t: "10:00 AM", x: "Explore Namdroling Monastery (Golden Temple)." }, { t: "1:00 PM", x: "Arrive Madikeri. Lunch with Pandi Curry option." }, { t: "4:00 PM", x: "Visit Abbey Falls cascading through coffee estates." }, { t: "5:30 PM", x: "Raja's Seat sunset views." }] }, { num: 2, title: "Elephants & Return", slots: [{ t: "8:30 AM", x: "Dubare Elephant Camp interaction (feed and bathe elephants)." }, { t: "12:00 PM", x: "Walk through Nisargadhama bamboo forest island." }, { t: "1:30 PM", x: "Visit Omkareshwara Temple." }, { t: "3:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Dubare morning sessions end by 10:30 AM." },
  chik2day: { title: "Chikmagalur Retreat", route: "Bangalore → Chikmagalur → Bangalore", image: "images/chikmagalur.webp", badges: ["Hill Station"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Peaks & Coffee", slots: [{ t: "6:00 AM", x: "Depart Bangalore." }, { t: "12:00 PM", x: "Check-in to coffee estate homestay and have Malnad lunch." }, { t: "3:30 PM", x: "Drive and short trek to Mullayanagiri Peak for sunset." }, { t: "6:00 PM", x: "Guided coffee estate walk and tasting." }] }, { num: 2, title: "Falls & Return", slots: [{ t: "8:30 AM", x: "Thrilling Jeep ride to the secluded Hebbe Falls." }, { t: "11:30 AM", x: "Visit Bababudangiri hills." }, { t: "1:00 PM", x: "Shop for spices/coffee in town and return." }] }], hotels: [], tip: "Private cars cannot reach Hebbe Falls; local jeeps are required." },
  sakleshpur2day: { title: "Sakleshpur Green Route", route: "Bangalore → Sakleshpur → Bangalore", image: "images/sakleshpur.webp", badges: ["Hill Station"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Star Fort", slots: [{ t: "6:30 AM", x: "Depart via NH75." }, { t: "11:00 AM", x: "Visit the star-shaped Manjarabad Fort." }, { t: "1:00 PM", x: "Homestay check-in. Hike the local rolling meadows." }, { t: "5:00 PM", x: "Campfire and relax." }] }, { num: 2, title: "Viewpoints", slots: [{ t: "9:00 AM", x: "Drive to Bisle Ghat Viewpoint for endless valley views." }, { t: "12:00 PM", x: "Splash in Magajahalli Waterfalls." }, { t: "3:00 PM", x: "Return journey to Bangalore." }] }], hotels: [], tip: "Prone to leeches in monsoon; pack salt or wear boots." },
  yercaud2day: { title: "Yercaud Lake Escape", route: "Bangalore → Yercaud → Bangalore", image: "images/yercaud.webp", badges: ["Hill Station"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Lakes & Viewpoints", slots: [{ t: "6:00 AM", x: "Drive south via Salem." }, { t: "12:00 PM", x: "Navigate 20 hairpin bends. Check-in." }, { t: "3:00 PM", x: "Boating at the serene Emerald Lake." }, { t: "4:30 PM", x: "Visit Anna Park." }, { t: "5:30 PM", x: "Sunset views from Lady's Seat." }] }, { num: 2, title: "Waterfalls", slots: [{ t: "9:30 AM", x: "Explore Pagoda Point." }, { t: "11:30 AM", x: "Trek down to Kiliyur Falls." }, { t: "3:00 PM", x: "Descend the ghats and return." }] }], hotels: [], tip: "Kiliyur falls requires descending 300 steep steps." },
  mysuru2day: { title: "Mysuru Overnight", route: "Bangalore → Mysuru → Bangalore", image: "images/mysuru.webp", badges: ["City Escape"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Palace Glory", slots: [{ t: "8:00 AM", x: "Relaxed departure." }, { t: "1:00 PM", x: "Check-in and authentic lunch." }, { t: "3:00 PM", x: "Detailed tour of Mysuru Palace." }, { t: "5:00 PM", x: "Visit St. Philomena's Church." }, { t: "6:30 PM", x: "Brindavan Gardens fountain show." }] }, { num: 2, title: "Zoo & Hill", slots: [{ t: "9:00 AM", x: "Extensive walk through Mysore Zoo." }, { t: "12:30 PM", x: "Drive up Chamundi Hill, visit temple and Nandi." }, { t: "3:00 PM", x: "Devaraja Market for Silk/Sandalwood shopping and return." }] }], hotels: [], tip: "The palace is beautifully illuminated on Sunday evenings." },
  kabini2day: { title: "Kabini Forest Safari", route: "Bangalore → Kabini → Bangalore", image: "images/kabini.webp", badges: ["Wildlife"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "River Safari", slots: [{ t: "6:00 AM", x: "Depart via Mysore." }, { t: "1:00 PM", x: "Arrive at Kabini resort, enjoy lunch." }, { t: "3:30 PM", x: "Boat Safari on the Kabini River to spot elephant herds." }, { t: "7:00 PM", x: "Wildlife documentary screening at resort." }] }, { num: 2, title: "Jungle Safari", slots: [{ t: "6:00 AM", x: "Early Jeep Safari into Nagarhole National Park (look for big cats)." }, { t: "11:00 AM", x: "Checkout and return to Bangalore." }] }], hotels: [], tip: "Safari advance booking is strictly required via Jungle Lodges." },
  bandipur2day: { title: "Bandipur National Park", route: "Bangalore → Bandipur → Bangalore", image: "images/bandipur.webp", badges: ["Wildlife"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Evening Safari", slots: [{ t: "6:00 AM", x: "Depart Bangalore." }, { t: "1:00 PM", x: "Check into wildlife resort." }, { t: "4:00 PM", x: "Evening Forest Dept Safari (Bus/Jeep) to spot tigers and leopards." }] }, { num: 2, title: "Morning Safari", slots: [{ t: "6:00 AM", x: "Morning safari for bird watching and predator tracking." }, { t: "11:00 AM", x: "Drive up to Himavad Gopalaswamy Betta for panoramic views." }, { t: "2:00 PM", x: "Return journey." }] }], hotels: [], tip: "Forest highway is closed from 6 PM to 6 AM." },
  bhadra2day: { title: "Bhadra Sanctuary", route: "Bangalore → Bhadra → Bangalore", image: "images/bhadra.webp", badges: ["Wildlife"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Tiger Reserve", slots: [{ t: "6:00 AM", x: "Depart towards Chikmagalur." }, { t: "1:00 PM", x: "Arrive at Bhadra river project." }, { t: "4:00 PM", x: "Jeep Safari into the lush Tiger Reserve." }] }, { num: 2, title: "Reservoir Boat Ride", slots: [{ t: "8:00 AM", x: "Serene boat ride on the massive Bhadra Reservoir." }, { t: "12:00 PM", x: "Return journey to Bangalore." }] }], hotels: [], tip: "A quieter, less commercial wildlife experience." },
  mysrira2day: { title: "Mysuru + Srirangapatna", route: "Bangalore → Srirangapatna → Mysuru → Bangalore", image: "images/mysuru-srirangapatna.webp", badges: ["Heritage"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Tipu's Capital", slots: [{ t: "7:00 AM", x: "Depart Bangalore." }, { t: "10:00 AM", x: "Srirangapatna Fort, Dariya Daulat Bagh, Ranganathaswamy Temple." }, { t: "3:00 PM", x: "Check into Mysuru." }, { t: "5:00 PM", x: "Chamundi Hill sunset." }] }, { num: 2, title: "Palaces", slots: [{ t: "9:30 AM", x: "Mysuru Palace grand tour." }, { t: "12:00 PM", x: "Jaganmohan Palace Art Gallery." }, { t: "3:00 PM", x: "Return journey." }] }], hotels: [], tip: "Great blend of Islamic military history and Hindu royal architecture." },
  belurhale2day: { title: "Belur + Halebidu", route: "Bangalore → Belur → Halebidu → Bangalore", image: "images/belur-halebidu.webp", badges: ["Heritage"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Hoysala Mastery", slots: [{ t: "6:30 AM", x: "Depart via NH75." }, { t: "12:00 PM", x: "Check into Hassan hotel." }, { t: "2:30 PM", x: "Explore the intricate Chennakeshava Temple in Belur." }] }, { num: 2, title: "Halebidu", slots: [{ t: "9:00 AM", x: "Explore Hoysaleswara Temple, Halebidu (marvel at the 160 sculptural friezes)." }, { t: "1:00 PM", x: "Optional stop at Shravanabelagola on return." }] }], hotels: [], tip: "Hire an ASI guide to truly understand the soapstone carvings." },
  dharma2day: { title: "Dharmasthala", route: "Bangalore → Dharmasthala → Bangalore", image: "images/dharmasthala.webp", badges: ["Pilgrimage"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Ghats & Darshan", slots: [{ t: "6:00 AM", x: "Drive via scenic Charmadi Ghats." }, { t: "1:00 PM", x: "Arrive and check-in." }, { t: "4:00 PM", x: "Sri Manjunatha Swamy Temple Darshan." }, { t: "7:00 PM", x: "Partake in Temple Annadanam (sacred meal)." }] }, { num: 2, title: "Museums", slots: [{ t: "9:00 AM", x: "Visit Manjusha Car Museum & towering Bahubali Statue." }, { t: "1:00 PM", x: "Return journey." }] }], hotels: [], tip: "Men must remove their shirts to enter the sanctum." },
  tirupati2day: { title: "Tirupati Darshan", route: "Bangalore → Tirupati → Bangalore", image: "images/tirupati.webp", badges: ["Pilgrimage"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Arrival", slots: [{ t: "7:00 AM", x: "Depart via Chittoor." }, { t: "1:00 PM", x: "Arrive in Tirupati." }, { t: "4:00 PM", x: "Visit Sri Padmavathi Ammavari Temple." }] }, { num: 2, title: "Tirumala Darshan", slots: [{ t: "5:00 AM", x: "Drive up the hills to Tirumala." }, { t: "7:00 AM", x: "Special Entry Darshan of Lord Venkateswara." }, { t: "11:00 AM", x: "Collect Laddu Prasadam." }, { t: "2:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Special Entry Darshan tickets must be booked months in advance." },
  dandeli2day: { title: "Dandeli Rafting", route: "Bangalore → Dandeli → Bangalore", image: "images/dandeli.webp", badges: ["Adventure"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "White Water Rafting", slots: [{ t: "Overnight", x: "Overnight drive from Bangalore." }, { t: "8:00 AM", x: "Check into jungle resort." }, { t: "11:00 AM", x: "Kali River Rafting, Kayaking, and Coracle rides." }] }, { num: 2, title: "Jungle Trek", slots: [{ t: "7:00 AM", x: "Morning jungle walk to spot hornbills." }, { t: "10:30 AM", x: "Visit the massive monolithic Syntheri Rocks." }, { t: "2:00 PM", x: "Return journey." }] }], hotels: [], tip: "Rafting is subject to Supa Dam water release." },
  gokarna2day: { title: "Gokarna Escape", route: "Bangalore → Gokarna → Bangalore", image: "images/gokarna.webp", badges: ["Coastal"], meta: [{ l: "Duration", v: "2 Days" }], days: [{ num: 1, title: "Temples & Sunset", slots: [{ t: "Overnight", x: "Overnight drive from Bangalore." }, { t: "8:00 AM", x: "Visit Mahabaleshwara Temple." }, { t: "2:00 PM", x: "Trek from Kudle Beach to Om Beach." }, { t: "6:00 PM", x: "Sunset relaxing at Om Beach." }] }, { num: 2, title: "Beach Hopping", slots: [{ t: "9:00 AM", x: "Boat ride exploring Half-Moon and Paradise Beaches." }, { t: "2:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Best visited between October and February to avoid extreme humidity." },

  /* ─── 3 DAYS / 2 NIGHTS ─── */
  ootycoon3day: { title: "Ooty + Coonoor", route: "Bangalore → Ooty → Coonoor → Bangalore", image: "images/ooty.webp", badges: ["Bestseller", "Hills"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "To the Nilgiris", slots: [{ t: "5:00 AM", x: "Drive via Bandipur." }, { t: "1:00 PM", x: "Arrive Ooty. Explore the massive Government Botanical Garden." }, { t: "3:00 PM", x: "Stroll through the vibrant Rose Garden." }, { t: "4:30 PM", x: "Ooty Lake pedal boating." }] }, { num: 2, title: "Toy Train & Tea", slots: [{ t: "8:30 AM", x: "Take the heritage Toy Train to Coonoor." }, { t: "11:00 AM", x: "Visit Sim's Park and Dolphin's Nose viewpoint." }, { t: "2:00 PM", x: "Explore the Tea Factory Museum & Tea Garden." }, { t: "4:00 PM", x: "Visit the local Chocolate Factory for treats." }] }, { num: 3, title: "Highest Peak", slots: [{ t: "9:00 AM", x: "Drive up to Doddabetta Peak for panoramic views." }, { t: "11:00 AM", x: "Visit Karnataka Siri Horticulture Garden." }, { t: "12:30 PM", x: "Descend and return to Bangalore." }] }], hotels: [], tip: "Toy Train tickets sell out quickly; book via IRCTC." },
  coorg3day: { title: "Coorg Explorer", route: "Bangalore → Coorg → Bangalore", image: "images/coorg.webp", badges: ["Bestseller"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Arrival", slots: [{ t: "6:00 AM", x: "Depart. Visit Golden Temple en route." }, { t: "3:00 PM", x: "Check-in. Visit Madikeri Fort." }, { t: "5:30 PM", x: "Raja's Seat sunset views." }] }, { num: 2, title: "Nature & Wildlife", slots: [{ t: "8:30 AM", x: "Dubare Elephant Camp." }, { t: "11:30 AM", x: "Nisargadhama Forest." }, { t: "2:30 PM", x: "Abbey Falls & Omkareshwara Temple." }] }, { num: 3, title: "River Origins", slots: [{ t: "9:00 AM", x: "Drive to Talakaveri (origin of river Kaveri) and Bhagamandala." }, { t: "1:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "A 3-day trip allows time for Talakaveri." },
  wayanad3day: { title: "Wayanad Wilderness", route: "Bangalore → Wayanad → Bangalore", image: "images/wayanad.webp", badges: ["Nature", "Kerala"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Border Crossing", slots: [{ t: "5:00 AM", x: "Drive via Bandipur to Wayanad." }, { t: "2:00 PM", x: "Pookode Lake boating." }, { t: "4:30 PM", x: "Lakkidi Viewpoint." }] }, { num: 2, title: "Caves & Dams", slots: [{ t: "9:00 AM", x: "Hike up Edakkal Caves." }, { t: "1:00 PM", x: "Wayanad Heritage Museum." }, { t: "3:00 PM", x: "Banasura Sagar Dam boating." }] }, { num: 3, title: "Waterfalls", slots: [{ t: "8:00 AM", x: "Muthanga Wildlife Safari." }, { t: "11:00 AM", x: "Soochipara Waterfalls." }, { t: "2:00 PM", x: "Return journey." }] }], hotels: [], tip: "Wayanad spots are far apart; expect driving." },
  chik3day: { title: "Chikmagalur Complete", route: "Bangalore → Chikmagalur → Bangalore", image: "images/chikmagalur.webp", badges: ["Coffee Estates"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Hoysala Stop", slots: [{ t: "6:00 AM", x: "Depart. Visit Belur & Halebidu Temples en route." }, { t: "3:00 PM", x: "Estate check-in. Coffee plantation walk." }] }, { num: 2, title: "Peaks & Falls", slots: [{ t: "9:00 AM", x: "Mullayanagiri Peak climb." }, { t: "12:00 PM", x: "Bababudangiri hills." }, { t: "3:00 PM", x: "Jeep ride to Hebbe Falls." }] }, { num: 3, title: "Wildlife Safari", slots: [{ t: "6:00 AM", x: "Bhadra Wildlife Safari." }, { t: "12:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Estate homestays offer the best authentic food." },
  madurai3day: { title: "Madurai Temple Tour", route: "Bangalore → Madurai → Bangalore", image: "images/madurai.webp", badges: ["Temple"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Arrival", slots: [{ t: "6:00 AM", x: "Long drive to Madurai." }, { t: "4:00 PM", x: "Check-in. Evening Meenakshi Temple Aarti." }] }, { num: 2, title: "Temple Run", slots: [{ t: "9:00 AM", x: "Extensive Meenakshi Temple day tour." }, { t: "2:00 PM", x: "Thirumalai Nayakkar Mahal." }, { t: "5:00 PM", x: "Gandhi Memorial Museum." }] }, { num: 3, title: "Alagar Koil", slots: [{ t: "9:00 AM", x: "Visit Alagar Koil hill temple & Pazhamudhir Cholai." }, { t: "1:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "No electronics allowed inside Meenakshi Temple." },
  rames3day: { title: "Rameswaram", route: "Bangalore → Rameswaram → Bangalore", image: "images/rameswaram.webp", badges: ["Temple"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "The Island", slots: [{ t: "5:00 AM", x: "Depart Bangalore." }, { t: "4:00 PM", x: "Cross the scenic Pamban Bridge. Arrive." }] }, { num: 2, title: "Rituals", slots: [{ t: "5:00 AM", x: "Spadikalinga Darshan & 22 Holy Wells." }, { t: "10:00 AM", x: "Panchmukhi Hanuman Temple." }, { t: "2:00 PM", x: "Jeep to Dhanushkodi ghost town & Ram Setu point." }] }, { num: 3, title: "Return", slots: [{ t: "8:00 AM", x: "A.P.J. Abdul Kalam Memorial." }, { t: "10:00 AM", x: "Long drive back." }] }], hotels: [], tip: "Prepare for a very long drive on Days 1 and 3." },
  thanjavur3day: { title: "Thanjavur Brihadeeswarar", route: "Bangalore → Thanjavur → Trichy → Bangalore", image: "images/thanjavur.webp", badges: ["Heritage"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Tanjore", slots: [{ t: "6:00 AM", x: "Drive to Thanjavur." }, { t: "4:00 PM", x: "Evening visit to the massive Brihadeeswarar Temple." }] }, { num: 2, title: "Trichy", slots: [{ t: "9:00 AM", x: "Maratha Palace & Saraswathi Mahal Library." }, { t: "2:00 PM", x: "Drive to Trichy. Climb Rockfort Temple." }] }, { num: 3, title: "Srirangam", slots: [{ t: "8:00 AM", x: "Sri Ranganathaswamy Temple (largest active complex)." }, { t: "1:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Temple stones get burning hot by midday." },
  kanchichennai3day: { title: "Kanchipuram + Chennai", route: "Bangalore → Kanchi → Chennai → Bangalore", image: "images/kanchipuram.webp", badges: ["Heritage", "Silk"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Silk City", slots: [{ t: "6:00 AM", x: "Drive to Kanchipuram." }, { t: "1:00 PM", x: "Kailasanathar and Kamakshi Amman temples." }, { t: "4:00 PM", x: "Silk weaving unit visit." }] }, { num: 2, title: "Chennai Beaches", slots: [{ t: "9:00 AM", x: "Drive to Chennai." }, { t: "12:00 PM", x: "Kapaleeshwarar Temple, Fort St. George." }, { t: "4:00 PM", x: "Marina Beach sunset." }] }, { num: 3, title: "Mahabalipuram", slots: [{ t: "8:00 AM", x: "Detour to Mahabalipuram Shore Temple." }, { t: "1:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Buy silk from government weaver co-ops to avoid fakes." },
  tiruchennai3day: { title: "Tirupati + Chennai", route: "Bangalore → Tirupati → Chennai → Bangalore", image: "images/tirupati.webp", badges: ["Pilgrimage"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Arrival", slots: [{ t: "7:00 AM", x: "Drive to Tirupati." }, { t: "3:00 PM", x: "Visit Padmavathi Ammavari Temple." }] }, { num: 2, title: "Darshan & Coast", slots: [{ t: "6:00 AM", x: "Morning Tirumala Darshan." }, { t: "2:00 PM", x: "Drive to Chennai. Evening walk at Marina beach." }] }, { num: 3, title: "City Tour", slots: [{ t: "9:00 AM", x: "Chennai local sightseeing (Kapaleeshwarar)." }, { t: "2:00 PM", x: "Return to Bangalore." }] }], hotels: [], tip: "Manage Darshan timings carefully so you don't miss Chennai." },
  myscoorg3day: { title: "Mysuru + Coorg", route: "Bangalore → Mysuru → Coorg → Bangalore", image: "images/mysuru-coorg.webp", badges: ["Combo"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Palaces", slots: [{ t: "6:00 AM", x: "Drive to Mysuru." }, { t: "1:00 PM", x: "Mysuru Palace." }, { t: "6:00 PM", x: "Brindavan Gardens. Stay Mysuru." }] }, { num: 2, title: "Hills", slots: [{ t: "9:00 AM", x: "Drive to Coorg via Golden Temple." }, { t: "3:00 PM", x: "Abbey Falls & Raja's Seat. Stay Coorg." }] }, { num: 3, title: "Elephants", slots: [{ t: "8:30 AM", x: "Dubare Elephant Camp." }, { t: "12:00 PM", x: "Nisargadhama. Return to Bangalore." }] }], hotels: [], tip: "Perfect balance of city heritage and hill station nature." },
  mysooty3day: { title: "Mysuru + Ooty", route: "Bangalore → Mysuru → Ooty → Bangalore", image: "images/mysuru-ooty.webp", badges: ["Combo"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Royal Mysuru", slots: [{ t: "7:00 AM", x: "Arrive Mysuru. Palace & Zoo." }, { t: "5:00 PM", x: "Chamundi Hill. Stay Mysuru." }] }, { num: 2, title: "Forest to Ooty", slots: [{ t: "9:00 AM", x: "Drive through Bandipur Tiger Reserve." }, { t: "2:00 PM", x: "Ooty Botanical Gardens, Rose Garden. Stay Ooty." }] }, { num: 3, title: "Peaks", slots: [{ t: "9:00 AM", x: "Doddabetta Peak & Tea Factory." }, { t: "12:00 PM", x: "Descend and return." }] }], hotels: [], tip: "Cross Bandipur check-post well before 6 PM." },
  ootymasin3day: { title: "Ooty + Masinagudi", route: "Bangalore → Masinagudi → Ooty → Bangalore", image: "images/ooty-masinagudi.webp", badges: ["Combo"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Wildlife Arrival", slots: [{ t: "6:00 AM", x: "Drive to Masinagudi." }, { t: "3:30 PM", x: "Evening jungle safari in Mudumalai." }] }, { num: 2, title: "Steep Climb", slots: [{ t: "9:00 AM", x: "Drive the thrilling 36 hairpins to Ooty." }, { t: "2:00 PM", x: "Ooty Lake & Botanical Gardens." }, { t: "5:00 PM", x: "Karnataka Siri Horticulture Garden." }] }, { num: 3, title: "Return", slots: [{ t: "9:00 AM", x: "Doddabetta peak & Chocolate factory." }, { t: "12:00 PM", x: "Descend to Bangalore." }] }], hotels: [], tip: "The hairpin road is steep; ensure brakes are in top condition." },
  gokarna3day: { title: "Gokarna Extended", route: "Bangalore → Gokarna → Murudeshwar → Bangalore", image: "images/gokarna.webp", badges: ["Coastal"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Beaches", slots: [{ t: "Overnight", x: "Drive." }, { t: "10:00 AM", x: "Mahabaleshwara Temple." }, { t: "2:00 PM", x: "Trek Kudle to Om Beach." }, { t: "6:00 PM", x: "Sunset." }] }, { num: 2, title: "Giant Shiva", slots: [{ t: "9:00 AM", x: "Drive to Murudeshwar." }, { t: "12:00 PM", x: "View the 123ft Shiva statue & Gopuram." }] }, { num: 3, title: "Return", slots: [{ t: "9:00 AM", x: "Beach relax." }, { t: "12:00 PM", x: "Return journey." }] }], hotels: [], tip: "Take the elevator up the Murudeshwar Gopuram for views." },
  dandeli3day: { title: "Dandeli Extended", route: "Bangalore → Dandeli → Bangalore", image: "images/dandeli.webp", badges: ["Adventure"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Safari", slots: [{ t: "Overnight", x: "Drive." }, { t: "12:00 PM", x: "Check-in." }, { t: "3:30 PM", x: "Evening jungle safari." }] }, { num: 2, title: "River", slots: [{ t: "9:00 AM", x: "Full day Kali River rafting, Kayaking, Coracle." }] }, { num: 3, title: "Rocks", slots: [{ t: "9:00 AM", x: "Syntheri rocks." }, { t: "1:00 PM", x: "Return." }] }], hotels: [], tip: "Pack quick-drying clothes." },
  hampi3day: { title: "Hampi Ruins", route: "Bangalore → Hampi → Bangalore", image: "images/hampi.webp", badges: ["Heritage", "UNESCO"], meta: [{ l: "Duration", v: "3 Days" }], days: [{ num: 1, title: "Capital", slots: [{ t: "6:00 AM", x: "Drive to Hampi." }, { t: "3:00 PM", x: "Virupaksha Temple." }, { t: "5:30 PM", x: "Hemakuta Hill sunset." }] }, { num: 2, title: "Royal Center", slots: [{ t: "9:00 AM", x: "Vittala Temple (famous Stone Chariot & musical pillars)." }, { t: "2:00 PM", x: "Lotus Mahal, Elephant Stables, Queen's Bath." }] }, { num: 3, title: "Across River", slots: [{ t: "8:00 AM", x: "Coracle ride. Trek Anjaneya Hill." }, { t: "1:00 PM", x: "Return." }] }], hotels: [], tip: "Hampi requires extensive walking among boulders." },

  /* ─── 4 DAYS / 3 NIGHTS ─── */
  coorgway4day: { title: "Coorg + Wayanad", route: "Bangalore → Coorg → Wayanad → Bangalore", image: "images/coorg-wayanad.webp", badges: ["Premium", "Hills"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Coorg Arrival", slots: [{ t: "6:00 AM", x: "Depart." }, { t: "10:00 AM", x: "Golden Temple." }, { t: "3:00 PM", x: "Abbey Falls & Raja's Seat." }] }, { num: 2, title: "To Wayanad", slots: [{ t: "8:30 AM", x: "Dubare Camp." }, { t: "1:00 PM", x: "Cross into Kerala." }, { t: "4:00 PM", x: "Pookode Lake boating." }] }, { num: 3, title: "Wayanad Explorer", slots: [{ t: "9:00 AM", x: "Edakkal Caves trek." }, { t: "2:00 PM", x: "Banasura Sagar Dam." }, { t: "4:00 PM", x: "Soochipara Falls." }] }, { num: 4, title: "Safari & Return", slots: [{ t: "6:30 AM", x: "Muthanga Wildlife Safari." }, { t: "11:00 AM", x: "Return to Bangalore." }] }], hotels: [], tip: "Crosses two states; pack accordingly." },
  ootykodai4day: { title: "Ooty + Kodaikanal", route: "Bangalore → Ooty → Kodaikanal → Bangalore", image: "images/ooty-kodaikanal.webp", badges: ["Premium", "Hills"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Queen of Hills", slots: [{ t: "5:00 AM", x: "Drive via Bandipur." }, { t: "2:00 PM", x: "Botanical Gardens, Rose Garden, Ooty Lake." }] }, { num: 2, title: "Coonoor", slots: [{ t: "8:30 AM", x: "Toy Train." }, { t: "11:00 AM", x: "Sim's Park, Tea Factory." }, { t: "4:00 PM", x: "Doddabetta peak & Chocolate Factory." }] }, { num: 3, title: "Princess of Hills", slots: [{ t: "7:00 AM", x: "Long drive to Kodaikanal." }, { t: "3:00 PM", x: "Coaker's Walk." }] }, { num: 4, title: "Kodai & Return", slots: [{ t: "8:30 AM", x: "Pillar Rocks, Pine Forest." }, { t: "12:00 PM", x: "Long drive to Bangalore." }] }], hotels: [], tip: "Long drives on Day 3 and 4." },
  mysootykodai4day: { title: "Mysuru + Ooty + Kodai", route: "Bangalore → Mysuru → Ooty → Kodai → Bangalore", image: "images/mysuru-ooty-kodaikanal.webp", badges: ["Premium"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Mysuru", slots: [{ t: "6:00 AM", x: "Drive to Mysuru." }, { t: "2:00 PM", x: "Palace, Gardens, Zoo." }] }, { num: 2, title: "Ooty", slots: [{ t: "8:00 AM", x: "Bandipur drive." }, { t: "2:00 PM", x: "Botanical Garden, Rose Garden." }, { t: "5:00 PM", x: "Ooty Lake." }] }, { num: 3, title: "Kodaikanal", slots: [{ t: "7:00 AM", x: "Drive to Kodaikanal." }, { t: "4:00 PM", x: "Coaker's Walk." }] }, { num: 4, title: "Return", slots: [{ t: "8:00 AM", x: "Pillar Rocks." }, { t: "11:00 AM", x: "Drive to Bangalore." }] }], hotels: [], tip: "Very fast-paced, multi-destination trip." },
  madurames4day: { title: "Madurai + Rameswaram", route: "Bangalore → Madurai → Rameswaram → Bangalore", image: "images/madurai-rameswaram.webp", badges: ["Temple Circuit"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Madurai", slots: [{ t: "6:00 AM", x: "Depart." }, { t: "4:00 PM", x: "Meenakshi Darshan & Nayakkar Palace." }] }, { num: 2, title: "To Island", slots: [{ t: "9:00 AM", x: "Alagar Koil." }, { t: "3:00 PM", x: "Cross Pamban Bridge." }] }, { num: 3, title: "Rituals", slots: [{ t: "5:00 AM", x: "Temple wells." }, { t: "2:00 PM", x: "Dhanushkodi excursion." }] }, { num: 4, title: "Return", slots: [{ t: "8:00 AM", x: "Kalam Memorial. Long drive back." }] }], hotels: [], tip: "Strict dress codes at temples." },
  rameskanya4day: { title: "Rameswaram + Kanyakumari", route: "Bangalore → Rameswaram → Kanyakumari → Bangalore", image: "images/rameswaram-kanyakumari.webp", badges: ["Temple Circuit"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Rameswaram", slots: [{ t: "5:00 AM", x: "Drive to Rameswaram." }] }, { num: 2, title: "Dhanushkodi", slots: [{ t: "5:00 AM", x: "Temple rituals." }, { t: "10:00 AM", x: "Dhanushkodi." }, { t: "2:00 PM", x: "Drive to Kanyakumari." }] }, { num: 3, title: "Lands End", slots: [{ t: "8:00 AM", x: "Vivekananda Rock, Thiruvalluvar Statue." }, { t: "6:00 PM", x: "Sunset view." }] }, { num: 4, title: "Return", slots: [{ t: "6:00 AM", x: "Sunrise view." }, { t: "9:00 AM", x: "Drive to Bangalore." }] }], hotels: [], tip: "Enjoy both sunrise and sunset over the ocean." },
  thirumadu4day: { title: "Thiruchendur + Madurai", route: "Bangalore → Madurai → Thiruchendur → Bangalore", image: "images/thiruchendur.webp", badges: ["Temple Circuit"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Madurai", slots: [{ t: "6:00 AM", x: "Arrive Madurai." }, { t: "4:00 PM", x: "Meenakshi temple." }] }, { num: 2, title: "To Coast", slots: [{ t: "9:00 AM", x: "Palace." }, { t: "2:00 PM", x: "Drive to Thiruchendur." }] }, { num: 3, title: "Murugan Temple", slots: [{ t: "8:00 AM", x: "Coastal temple Darshan." }, { t: "3:00 PM", x: "Relax at beach." }] }, { num: 4, title: "Return", slots: [{ t: "8:00 AM", x: "Drive back to Bangalore." }] }], hotels: [], tip: "Thiruchendur temple is right on the beach." },
  gurukochi4day: { title: "Guruvayur + Kochi", route: "Bangalore → Guruvayur → Kochi → Bangalore", image: "images/kochi.webp", badges: ["Temple Circuit"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Guruvayur", slots: [{ t: "5:00 AM", x: "Drive to Kerala." }, { t: "5:00 PM", x: "Evening Darshan." }] }, { num: 2, title: "Elephants", slots: [{ t: "8:00 AM", x: "Punnathur Kotta Elephant sanctuary." }, { t: "1:00 PM", x: "Drive to Kochi." }] }, { num: 3, title: "Fort Kochi", slots: [{ t: "9:00 AM", x: "Chinese fishing nets." }, { t: "12:00 PM", x: "Jewish Synagogue, Mattancherry Palace." }] }, { num: 4, title: "Return", slots: [{ t: "8:00 AM", x: "Drive back to Bangalore." }] }], hotels: [], tip: "Men must wear Dhotis at Guruvayur." },
  munnar4day: { title: "Munnar Tea Hills", route: "Bangalore → Munnar → Bangalore", image: "images/munnar.webp", badges: ["Kerala"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Arrival", slots: [{ t: "5:00 AM", x: "Drive to Munnar." }, { t: "2:00 PM", x: "Cheeyappara & Valara waterfalls." }] }, { num: 2, title: "Estates", slots: [{ t: "9:00 AM", x: "Tea Museum." }, { t: "2:00 PM", x: "Mattupetty Dam, Rose Garden." }] }, { num: 3, title: "Wildlife", slots: [{ t: "8:00 AM", x: "Eravikulam National Park." }, { t: "3:00 PM", x: "Echo Point." }] }, { num: 4, title: "Return", slots: [{ t: "9:00 AM", x: "Drive back to Bangalore." }] }], hotels: [], tip: "Book Eravikulam tickets online." },
  munnarthek4day: { title: "Munnar + Thekkady", route: "Bangalore → Munnar → Thekkady → Bangalore", image: "images/munnar-thekkady.webp", badges: ["Kerala"], meta: [{ l: "Duration", v: "4 Days" }], days: [{ num: 1, title: "Munnar", slots: [{ t: "5:00 AM", x: "Drive to Munnar." }, { t: "3:00 PM", x: "Local waterfalls." }] }, { num: 2, title: "Tea Hills", slots: [{ t: "9:00 AM", x: "Tea Estates, Eravikulam." }, { t: "2:00 PM", x: "Mattupetty Dam." }] }, { num: 3, title: "Thekkady", slots: [{ t: "9:00 AM", x: "Drive to Thekkady. Spice Plantation walk." }, { t: "3:30 PM", x: "Periyar Boat Cruise." }] }, { num: 4, title: "Return", slots: [{ t: "8:00 AM", x: "Drive back to Bangalore." }] }], hotels: [], tip: "Periyar boat tickets sell out fast." },

  /* ─── 5 DAYS / 4 NIGHTS ─── */
  stn5day: { title: "South TN Temples", route: "Bangalore → Madurai → Rameswaram → Kanyakumari → Thiruchendur", image: "images/south-tn-temples.webp", badges: ["Grand Temple Tour"], meta: [{ l: "Duration", v: "5 Days" }], days: [{ num: 1, title: "Madurai", slots: [{ t: "6:00 AM", x: "Drive." }, { t: "4:00 PM", x: "Meenakshi Temple." }] }, { num: 2, title: "Rameswaram", slots: [{ t: "9:00 AM", x: "Palace." }, { t: "3:00 PM", x: "Pamban Bridge." }] }, { num: 3, title: "Kanyakumari", slots: [{ t: "6:00 AM", x: "Dhanushkodi." }, { t: "5:00 PM", x: "Drive to coast." }] }, { num: 4, title: "Thiruchendur", slots: [{ t: "8:00 AM", x: "Vivekananda Rock." }, { t: "2:00 PM", x: "Beachside Murugan Temple." }] }, { num: 5, title: "Return", slots: [{ t: "8:00 AM", x: "Drive to Bangalore." }] }], hotels: [], tip: "A comprehensive deep-south spiritual tour." },
  tnheritage5day: { title: "Tamil Nadu Heritage", route: "Chennai → Mahabalipuram → Pondy → Kanchipuram → Thanjavur", image: "images/tn-heritage.webp", badges: ["Heritage Circuit"], meta: [{ l: "Duration", v: "5 Days" }], days: [{ num: 1, title: "Chennai", slots: [{ t: "6:00 AM", x: "Drive." }, { t: "4:00 PM", x: "Marina Beach, Kapaleeshwarar." }] }, { num: 2, title: "Coast", slots: [{ t: "9:00 AM", x: "Mahabalipuram shore temples." }, { t: "3:00 PM", x: "Drive to Pondy." }] }, { num: 3, title: "Pondy", slots: [{ t: "9:00 AM", x: "Auroville." }, { t: "2:00 PM", x: "French Quarter stroll." }] }, { num: 4, title: "Tanjore", slots: [{ t: "8:00 AM", x: "Drive to Thanjavur." }, { t: "2:00 PM", x: "Brihadeeswarar Temple." }] }, { num: 5, title: "Return", slots: [{ t: "8:00 AM", x: "Return to Bangalore." }] }], hotels: [], tip: "Great mix of beaches, French culture, and Chola history." },
  kerala5day: { title: "Kerala Classic Tour", route: "Bangalore → Munnar → Thekkady → Alappuzha → Bangalore", image: "images/kerala.webp", badges: ["God's Own Country"], meta: [{ l: "Duration", v: "5 Days" }], days: [{ num: 1, title: "Munnar", slots: [{ t: "5:00 AM", x: "Drive." }, { t: "2:00 PM", x: "Cheeyappara Waterfalls." }] }, { num: 2, title: "Estates", slots: [{ t: "9:00 AM", x: "Eravikulam National Park." }, { t: "2:00 PM", x: "Mattupetty Dam." }] }, { num: 3, title: "Thekkady", slots: [{ t: "9:00 AM", x: "Drive." }, { t: "12:00 PM", x: "Spice Plantation walk." }, { t: "3:00 PM", x: "Periyar Safari." }] }, { num: 4, title: "Houseboat", slots: [{ t: "9:00 AM", x: "Drive to Alleppey." }, { t: "12:00 PM", x: "Houseboat stay & backwater cruise." }] }, { num: 5, title: "Return", slots: [{ t: "9:00 AM", x: "Disembark, drive to Bangalore." }] }], hotels: [], tip: "Houseboats dock at sunset for the night." },
  coastalkar5day: { title: "Coastal Karnataka", route: "Bangalore → Udupi → Murudeshwar → Gokarna", image: "images/coastal-karnataka.webp", badges: ["Coastal Trip"], meta: [{ l: "Duration", v: "5 Days" }], days: [{ num: 1, title: "Udupi", slots: [{ t: "6:00 AM", x: "Drive." }, { t: "4:00 PM", x: "Krishna Temple & Kaup Beach." }] }, { num: 2, title: "Malpe", slots: [{ t: "9:00 AM", x: "Malpe Beach." }, { t: "12:00 PM", x: "St. Mary's Island rock formations." }] }, { num: 3, title: "Murudeshwar", slots: [{ t: "9:00 AM", x: "Drive north via Maravanthe." }, { t: "3:00 PM", x: "Giant Shiva statue & Gopuram." }] }, { num: 4, title: "Gokarna", slots: [{ t: "9:00 AM", x: "Drive." }, { t: "4:00 PM", x: "Om Beach sunset." }] }, { num: 5, title: "Return", slots: [{ t: "9:00 AM", x: "Drive to Bangalore." }] }], hotels: [], tip: "St. Mary's Island ferry depends on tides." },

  /* ─── 6 DAYS / 5 NIGHTS ─── */
  tntemple6day: { title: "Complete TN Temples", route: "Chennai → Kanchi → Thanjavur → Madurai → Rameswaram → Kanyakumari", image: "images/tn-temple-circuit.webp", badges: ["Epic Tour"], meta: [{ l: "Duration", v: "6 Days" }], days: [{ num: 1, title: "Chennai", slots: [{ t: "6:00 AM", x: "Drive to Chennai." }, { t: "4:00 PM", x: "City temples." }] }, { num: 2, title: "Kanchi to Tanjore", slots: [{ t: "8:00 AM", x: "Silk city temples." }, { t: "3:00 PM", x: "Drive to Tanjore." }] }, { num: 3, title: "Madurai", slots: [{ t: "8:00 AM", x: "Brihadeeswarar." }, { t: "4:00 PM", x: "Meenakshi Temple." }] }, { num: 4, title: "Rameswaram", slots: [{ t: "9:00 AM", x: "Palace." }, { t: "3:00 PM", x: "Pamban bridge." }] }, { num: 5, title: "Kanyakumari", slots: [{ t: "6:00 AM", x: "Dhanushkodi." }, { t: "5:00 PM", x: "Sunset point." }] }, { num: 6, title: "Return", slots: [{ t: "6:00 AM", x: "Sunrise." }, { t: "9:00 AM", x: "Return journey." }] }], hotels: [], tip: "The ultimate Tamil Nadu pilgrimage." },
  keralagrand6day: { title: "Kerala Grand Tour", route: "Kochi → Munnar → Thekkady → Alappuzha → Guruvayur", image: "images/kerala-grand.webp", badges: ["Epic Tour"], meta: [{ l: "Duration", v: "6 Days" }], days: [{ num: 1, title: "Kochi", slots: [{ t: "6:00 AM", x: "Drive to Kochi." }, { t: "4:00 PM", x: "Chinese nets." }] }, { num: 2, title: "Munnar", slots: [{ t: "9:00 AM", x: "Drive to tea hills." }, { t: "2:00 PM", x: "Waterfalls." }] }, { num: 3, title: "Thekkady", slots: [{ t: "8:00 AM", x: "Eravikulam." }, { t: "3:00 PM", x: "Periyar reserve." }] }, { num: 4, title: "Alleppey", slots: [{ t: "9:00 AM", x: "Drive." }, { t: "12:00 PM", x: "Houseboat cruise." }] }, { num: 5, title: "Guruvayur", slots: [{ t: "9:00 AM", x: "Disembark." }, { t: "3:00 PM", x: "Temple Darshan." }] }, { num: 6, title: "Return", slots: [{ t: "8:00 AM", x: "Return journey." }] }], hotels: [], tip: "Covers culture, hills, wildlife, and backwaters." },
  karnatakagrand6day: { title: "Karnataka Grand Tour", route: "Mysuru → Coorg → Chikmagalur → Hampi", image: "images/karnataka-grand.webp", badges: ["Epic Tour"], meta: [{ l: "Duration", v: "6 Days" }], days: [{ num: 1, title: "Mysuru", slots: [{ t: "6:00 AM", x: "Drive." }, { t: "2:00 PM", x: "Palaces." }] }, { num: 2, title: "Coorg", slots: [{ t: "9:00 AM", x: "Drive." }, { t: "2:00 PM", x: "Abbey Falls, Dubare." }] }, { num: 3, title: "Chikmagalur", slots: [{ t: "8:00 AM", x: "Drive." }, { t: "4:00 PM", x: "Mullayanagiri Peak." }] }, { num: 4, title: "Hospet", slots: [{ t: "8:00 AM", x: "Hebbe Falls." }, { t: "2:00 PM", x: "Drive north to Hampi base." }] }, { num: 5, title: "Hampi", slots: [{ t: "8:00 AM", x: "Ruins exploration." }, { t: "4:00 PM", x: "Coracle ride." }] }, { num: 6, title: "Return", slots: [{ t: "8:00 AM", x: "Return journey." }] }], hotels: [], tip: "Incredible geographical diversity." },

  /* ─── 7 DAYS / 6 NIGHTS ─── */
  southindia7day: { title: "Complete South India Tour", route: "Mysuru → Ooty → Kodaikanal → Madurai → Rameswaram → Kanyakumari", image: "images/south-india.webp", badges: ["Ultimate"], meta: [{ l: "Duration", v: "7 Days" }], days: [{ num: 1, title: "Mysuru", slots: [{ t: "6:00 AM", x: "Depart." }, { t: "3:30 PM", x: "Mysuru Palace." }] }, { num: 2, title: "Ooty", slots: [{ t: "7:00 AM", x: "Bandipur drive." }, { t: "2:00 PM", x: "Botanical Garden, Rose Garden." }, { t: "5:00 PM", x: "Ooty Lake." }] }, { num: 3, title: "Kodaikanal", slots: [{ t: "7:00 AM", x: "Long drive down." }, { t: "4:30 PM", x: "Coaker's Walk." }] }, { num: 4, title: "Madurai", slots: [{ t: "8:30 AM", x: "Pillar Rocks." }, { t: "4:00 PM", x: "Meenakshi Temple." }] }, { num: 5, title: "Rameswaram", slots: [{ t: "9:00 AM", x: "Nayakkar Palace." }, { t: "4:00 PM", x: "Pamban Bridge." }] }, { num: 6, title: "Kanyakumari", slots: [{ t: "5:30 AM", x: "Temple Wells." }, { t: "9:30 AM", x: "Dhanushkodi." }, { t: "6:00 PM", x: "Sunset point." }] }, { num: 7, title: "Return", slots: [{ t: "6:00 AM", x: "Sunrise view." }, { t: "11:00 AM", x: "Long drive home." }] }], hotels: [], tip: "Fast-paced sampler tour." },
  templekerala7day: { title: "Temple + Kerala Combo", route: "Madurai → Rameswaram → Kanyakumari → Guruvayur → Kochi → Munnar", image: "images/temple-kerala.webp", badges: ["Ultimate"], meta: [{ l: "Duration", v: "7 Days" }], days: [{ num: 1, title: "Madurai", slots: [{ t: "6:00 AM", x: "Depart." }, { t: "4:30 PM", x: "Meenakshi Temple." }] }, { num: 2, title: "Rameswaram", slots: [{ t: "9:00 AM", x: "Palace." }, { t: "4:00 PM", x: "Pamban Bridge." }] }, { num: 3, title: "Kanyakumari", slots: [{ t: "8:00 AM", x: "Dhanushkodi." }, { t: "5:30 PM", x: "Sunset." }] }, { num: 4, title: "Guruvayur", slots: [{ t: "6:00 AM", x: "Vivekananda Rock." }, { t: "5:30 PM", x: "Kerala temple." }] }, { num: 5, title: "Kochi", slots: [{ t: "8:00 AM", x: "Elephant Sanctuary." }, { t: "1:00 PM", x: "Fort Kochi." }] }, { num: 6, title: "Munnar", slots: [{ t: "9:00 AM", x: "Eravikulam." }, { t: "3:30 PM", x: "Tea Hills." }] }, { num: 7, title: "Return", slots: [{ t: "8:30 AM", x: "Breakfast." }, { t: "10:00 AM", x: "Return." }] }], hotels: [], tip: "Spiritual Tamil Nadu meets relaxing Kerala." },
  tnpondy7day: { title: "TN + Pondy + Chennai", route: "Chennai → Mahabalipuram → Pondy → Thanjavur → Madurai → Rameswaram", image: "images/tn-pondy.webp", badges: ["Ultimate"], meta: [{ l: "Duration", v: "7 Days" }], days: [{ num: 1, title: "Chennai", slots: [{ t: "6:00 AM", x: "Depart." }, { t: "3:30 PM", x: "Kapaleeshwarar." }] }, { num: 2, title: "Pondicherry", slots: [{ t: "8:30 AM", x: "Shore temples." }, { t: "5:30 PM", x: "French Quarter." }] }, { num: 3, title: "Tanjore", slots: [{ t: "9:00 AM", x: "Auroville." }, { t: "5:00 PM", x: "Arrive Thanjavur." }] }, { num: 4, title: "Madurai", slots: [{ t: "8:00 AM", x: "Brihadeeswarar." }, { t: "6:30 PM", x: "Meenakshi." }] }, { num: 5, title: "Rameswaram", slots: [{ t: "9:30 AM", x: "Palace." }, { t: "3:00 PM", x: "Bridge." }] }, { num: 6, title: "Dhanushkodi", slots: [{ t: "6:00 AM", x: "Rituals." }, { t: "3:00 PM", x: "Ghost town." }] }, { num: 7, title: "Return", slots: [{ t: "8:00 AM", x: "Checkout." }, { t: "9:00 AM", x: "Return." }] }], hotels: [], tip: "Explores the entire eastern coastline." }
};
/* ════════════════════════════════════════
   GLOBAL VARIABLES
════════════════════════════════════════ */
let currentPkgTitle = "";
let currentPkgDuration = ""; // NEW: Added variable to store duration


/* ════════════════════════════════════════
   DEEP LINKING (URL HASH) INITIALIZATION
════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize Flatpickr for Date inputs
  if (document.getElementById("tripDate")) {
    flatpickr("#tripDate", {
      enableTime: true,
      dateFormat: "d-m-Y h:i K",
      minDate: "today"
    });
  }

  // 2. Check if a URL Hash exists on page load (e.g., #ootycoon3day or #1day)
  if (window.location.hash) {
    let hashValue = window.location.hash.substring(1); // Remove the '#'

    // Scenario A: It's a specific package ID (Open Modal)
    if (packages[hashValue]) {
      let durationMatch = hashValue.match(/(\d+)day/);
      if (durationMatch) {
        filterPackages(durationMatch[0]); // Auto-filter background
      }
      openPkg(hashValue);
    }
    // Scenario B: It's a duration filter from Google Ads (e.g., #1day)
    else if (hashValue.match(/^\d+day$/)) {
      filterPackages(hashValue);
    }
  }

  // 3. Clear the hash when a package modal is closed so the URL looks clean
  const detailModalEl = document.getElementById('pkgDetailModal');
  if (detailModalEl) {
    detailModalEl.addEventListener('hidden.bs.modal', function () {
      // Revert URL to just the active duration filter instead of clearing completely
      let activeFilter = document.querySelector('.dur-btn.active');
      if (activeFilter && activeFilter.id) {
        history.replaceState(null, null, '#' + activeFilter.id);
      } else {
        history.replaceState(null, null, ' ');
      }
    });
  }
});


/* ════════════════════════════════════════
   PACKAGE FILTER
════════════════════════════════════════ */
function filterPackages(type, btn) {
  // 1. Update the URL hash silently (Great for sharing and Ads tracking)
  if (type !== "all") {
    history.replaceState(null, null, '#' + type);
  }

  // 2. Update Button Active States
  document.querySelectorAll(".dur-btn").forEach(b => b.classList.remove("active"));
  if (btn) {
    btn.classList.add("active");
  } else {
    // If triggered by URL load instead of click, find and highlight the right button
    let autoBtn = document.getElementById(type);
    if (autoBtn) autoBtn.classList.add("active");
  }

  // 3. Show/Hide Packages
  document.querySelectorAll(".pkg").forEach(p => {
    p.style.display = type === "all" || p.classList.contains(type) ? "block" : "none";
  });

  // 4. Scroll smoothly to top of grid (only if triggered by an actual click)
  if (type !== "all" && btn) {
    const first = document.querySelector(`.pkg[class~="${type}"]`);
    if (first) first.closest(".section").scrollIntoView({ behavior: "smooth" });
  }
}


/* ════════════════════════════════════════
   ACCOMMODATION TOGGLE
════════════════════════════════════════ */
function toggleAccommodation() {
  const val = document.getElementById("accommodation").value;
  const box = document.getElementById("accommodationBox");
  const adults = document.getElementById("adults");

  if (val === "Yes") {
    box.style.display = "block";
    adults.setAttribute("required", "true");
  } else {
    box.style.display = "none";
    adults.removeAttribute("required");
  }
}


/* ════════════════════════════════════════
   CHILD AGE GENERATOR
════════════════════════════════════════ */
function generateChildAges() {
  let count = document.getElementById("children").value;
  let container = document.getElementById("childAges");

  container.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.min = "0";
    input.placeholder = "Age of Child " + i;
    input.className = "form-control mb-2";
    input.required = true;
    container.appendChild(input);
  }
}


/* ════════════════════════════════════════
   PHONE VALIDATION
════════════════════════════════════════ */
function validatePhone(input) {
  input.value = input.value.replace(/\D/g, "").slice(0, 10);
}



/* ════════════════════════════════════════
   OPEN PACKAGE MODAL
════════════════════════════════════════ */
function openPkg(id) {
  const p = packages[id];
  if (!p) {
    console.error("Package ID not found:", id);
    return;
  }

  window.location.hash = id;
  currentPkgTitle = p.title;

  // NEW: Find the duration from the meta tags and save it globally
  const durationMeta = p.meta.find(m => m.l === "Duration");
  currentPkgDuration = durationMeta ? durationMeta.v : "Not Specified";

  document.getElementById("modalHero").style.backgroundImage = `url('${p.image}')`;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalRoute").textContent = p.route;

  document.getElementById("modalBadges").innerHTML = p.badges.map(b => `<span class="modal-badge">${b}</span>`).join("");

  document.getElementById("modalMeta").innerHTML = p.meta.map(m => `
  <div class="modal-meta-item">
    <div class="lbl">${m.l}</div>
    <div class="val">${m.v}</div>
  </div>`).join("");

  document.getElementById("modalDays").innerHTML = p.days.map(d => `
  <div class="day-block">
    <div class="day-block-head">
      <div class="day-num">${d.num}</div>
      <div class="day-title">${d.title}</div>
      ${d.dist ? `<div class="day-dist">${d.dist}</div>` : ""}
    </div>
    <div class="slots">
      ${d.slots.map(s => `
        <div class="slot">
          <div class="slot-time">${s.t}</div>
          <div class="slot-text">${s.x}</div>
        </div>`).join("")}
    </div>
  </div>`).join("");

  document.getElementById("modalHotels").innerHTML = p.hotels?.length
      ? `<div class="section-lbl">Recommended Stays</div>
         <div class="hotel-pills">
           ${p.hotels.map(h => `<div class="hotel-pill"><span>${h.l}:</span> ${h.v}</div>`).join("")}
         </div>`
      : "";

  document.getElementById("modalTip").innerHTML = p.tip ? `<div class="tip-box">${p.tip}</div>` : "";

  new bootstrap.Modal(document.getElementById("pkgDetailModal")).show();
}


/* ════════════════════════════════════════
   OPEN BOOKING MODAL
════════════════════════════════════════ */
function openBookingModal() {
  const pkgModal = bootstrap.Modal.getInstance(document.getElementById("pkgDetailModal"));
  if (pkgModal) pkgModal.hide();

  new bootstrap.Modal(document.getElementById("bookingModal")).show();
}


/* ════════════════════════════════════════
   BOOKING FORM SUBMIT → WHATSAPP
════════════════════════════════════════ */
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let pickup = document.getElementById("pickup").value.trim();
  let drop = document.getElementById("drop").value.trim();
  let date = document.getElementById("tripDate") ? document.getElementById("tripDate").value : document.querySelector("input[name='pickupDT']").value;
  let passengers = document.getElementById("passengers").value.trim();
  let acc = document.getElementById("accommodation").value;

  if (!name || !phone || !passengers || !pickup || !drop || !date) {
    alert("Please fill all required fields!");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Enter valid 10-digit phone number");
    return;
  }

  // NEW: Duration is now added to the WhatsApp message right under the Package Title!
  let msg = `Hi Travaz Holidays 👋\n\nPackage: ${currentPkgTitle}\nDuration: ${currentPkgDuration}\nName: ${name}\nPhone: ${phone}\nPassengers: ${passengers}\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}\nAccommodation: ${acc}`;

  if (acc === "Yes") {
    let adults = document.getElementById("adults").value;
    let ages = [...document.querySelectorAll("#childAges input")].map(i => i.value).join(", ");
    msg += `\nAdults: ${adults}\nChild Ages: ${ages}`;
  }

  window.open("https://wa.me/917305868976?text=" + encodeURIComponent(msg), "_blank");
});


/* ════════════════════════════════════════
   QUICK WHATSAPP BUTTON
════════════════════════════════════════ */
function openWhatsApp() {
  const msg = "Hi Travaz Holidays, I want to plan a South India trip.";
  window.open("https://wa.me/917305868976?text=" + encodeURIComponent(msg), "_blank");
}


/* ════════════════════════════════════════
   HIDE FLOATING BUTTONS BEHIND MODALS
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const waBtn = document.getElementById('floatWa');
  const callBtn = document.getElementById('floatCall');
  if(waBtn && callBtn) {
    document.body.addEventListener('show.bs.modal', function () {
      waBtn.classList.add('hidden');
      callBtn.classList.add('hidden');
    });
    document.body.addEventListener('hidden.bs.modal', function () {
      waBtn.classList.remove('hidden');
      callBtn.classList.remove('hidden');
    });
  }
});
