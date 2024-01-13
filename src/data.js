const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://cdn.thecodehelp.in/Goa.jpeg",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://cdn.thecodehelp.in/Kochi.jpeg",
		price: "68,595",
	},
		{
		  id: 11,
		  name: "Chennai",
		  info: "Chennai, the capital of Tamil Nadu, is a vibrant city known for its cultural heritage, classical music, and thriving IT industry. Marina Beach, Kapaleeshwarar Temple, and Fort St. George are among the notable attractions.",
		  image: "https://images.unsplash.com/photo-1528035544317-2cd2fab2d213?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		  price: "42,800",
		},
		{
		  id: 12,
		  name: "Hyderabad",
		  info: "Hyderabad, the capital of Telangana, is a city of contrasts with its historic Old City and modern IT hubs. The Charminar, Golconda Fort, and Ramoji Film City are some of the key landmarks in this city.",
		  image: "https://images.unsplash.com/photo-1696488331221-1e08719a3a6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		  price: "55,450",
		},
		{
		  id: 13,
		  name: "Amritsar",
		  info: "Amritsar is a city in the state of Punjab, known for the Golden Temple, the holiest site in Sikhism. The city also has the historic Jallianwala Bagh and a rich tradition of Punjabi cuisine.",
		  image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		  price: "33,990",
		},
		{
		  id: 14,
		  name: "Pune",
		  info: "Pune, located in Maharashtra, is a city that blends history with modernity. It is known for its educational institutions, historic landmarks like Shaniwar Wada, and the vibrant nightlife.",
		  image: "https://images.unsplash.com/photo-1572782252655-9c8771392601?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		  price: "48,200",
		},
		{
		  id: 15,
		  name: "Rishikesh",
		  info: "Rishikesh, nestled in the Himalayas, is a spiritual and adventure hub. It is famous for its yoga retreats, the Ganga Aarti, and serves as a gateway to the Char Dham pilgrimage sites.",
		  image: "https://images.unsplash.com/photo-1626787243127-b9506e9aea2a?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		  price: "36,500",
		},
		// Add more cities here, following the same structure
		// ...
		{
		  id: 20,
		  name: "Mysuru",
		  info: "Mysuru, also known as Mysore, is a city in Karnataka known for its grand palaces, rich cultural heritage, and the famous Mysore Dasara festival. The Mysore Palace and Chamundi Hills are popular attractions.",
		  image: "https://images.unsplash.com/photo-1600112356915-089abb8fc71a?q=80&w=1594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		  price: "40,150",
		},
		{
			id: 8,
			name: "Mumbai",
			info: "Mumbai, formerly known as Bombay, is the financial capital of India. It is a bustling metropolis with a mix of colonial and modern architecture. The city is known for its vibrant street food, bustling markets, and iconic landmarks like the Gateway of India and Marine Drive.",
			image: "https://images.unsplash.com/photo-1567359485688-f39861174e25?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "45,690",
		  },
		  {
			id: 9,
			name: "Shimla",
			info: "Shimla is a charming hill station in the northern Indian state of Himachal Pradesh. It is known for its colonial architecture, scenic landscapes, and as a popular destination for snowfall during winters. The Mall Road and Christ Church are prominent attractions in Shimla.",
			image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "38,275",
		  },
		  {
			id: 10,
			name: "Kolkata",
			info: "Kolkata, the capital of West Bengal, is a city rich in cultural heritage and historical significance. Known for its Durga Puja celebrations, the city has landmarks like the Victoria Memorial and Howrah Bridge. Kolkata is also famous for its literary and artistic contributions.",
			image: "https://images.unsplash.com/photo-1589041127168-9b1915731dc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: "50,120",
		  },
		
	];


export default data;
