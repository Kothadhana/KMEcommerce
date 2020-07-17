let topics=["Mobiles & Computers","TV Appliances & Electronics","Home, Kitchen & Pets","Beauty, Health & Grocery", "Toys, Baby Products & Kids Fasion","Boooks"]//,"Men's Fashion","Women's Fashion"];
let subtopics=[["Mobiles","Mobile Accessories","Power Banks","Laptops","Desktop","Printers"],["Televisions","Speakers","Cameras","HeadPhones","Home,Audio and Theatres","Security Cameras"],["Kitchen & Dining","Kitchen Storage & Containers","Furniture","Home Decor","Bedroom Linen","Indoor Lightening",],["Personal Care Appliances","Luxury Beauty","Make-up","Diet & Nutrition","Health & Personal Care","Household Supplies"],["Baby Products","Dipers","Toys","Kid's Clothings","Kid's Watches","Baby Fashion"],["Fiction Books","Editor's Corner","School Textbooks","Children's Books","Exam Central","Indian Language Books"]]//["T-Shirts & Polos","Shirts","Jeans","Shoes","Watches","Wallets"],["Western Wear","Ethnic Wear","Clutches & Hand Bags","Jewellery","Sunglasses","Watchess"]];

let sec11=[{name: "OnePlus 7T Pro",img: "111.jpg",colour: "Haze Blue", prop: "8+256GB" ,orcost: 53999 ,cost: 47999 , rating: 5},{name: "Redmi Note 9 Pro Maax",img: "112.webp",orcost: 16999 ,colour: "Glacier White",prop: "6GB RAM 64 GB storage",cost: 13999 , rating: 4},{name: "OPPO FIND X2",img: "113.jpg",orcost: 64990 ,colour: "Black",prop: "125GB RAM 256GB Storage",cost: 55999,rating: 4},{name: "SAMSUNG GALAXY S20 ULTRA",img: "114.jpg",orcost: 97999,cost: 85999 ,rating: 4,colour: "COSMIC GRAY",prop: "12GB RAM 128 GB STORAGE" },{name: "VIVO V17",img: "115.jpg",orcost: 24999,colour: "MidNight Ocean", prop: "8GB RAM 128GB Storage" ,cost: 23999,rating: 4}];
let sec12=[{name: "SYVO BASSTwins IPX4", colour:"Black" ,prop:"Wireless Bluetooth HeadPhones with Mic", img:"121.jpg", orcost: 3999, cost: 999, rating: 5},{name: "Syvo Flex Bluetooth 5.0 IPX4" ,img: "122.jpg",colour: "Black", prop: "SweatProof earphones with 10hours Battery Life",orcost: 3999 ,cost: 749,rating: 4},{name: "Syvo Flame Wireless Bluetooth Earphones" ,img: "123.jpg",colour: "Black", prop: "Waterproof with carry case, HD sounds" ,orcost: 4999,cost: 899 , rating: 4},{name: "Lustree vivo S1 Pro Case" ,img: "124.jpg",colour: "Transparent", prop: "protective [BuMPER] case",orcost: 300 ,cost: 299,rating: 5 },{name: "USB Charge and sync cable" ,img: "125.webp",colour: "Black", prop: " 3 Feet",orcost: 12000,cost: 699,rating: 5}];
let sec13=[{name: "Mi 10000mAH Li-Polymer Power Bank 2i " ,img: "131.jpg",colour: "Black", prop: "18W Fast Charging",orcost: 1200 ,cost: 899,rating: 4 },{name: "Ambrane 10000mAh Li-Polymer Powerbank " ,img: "132.jpg",colour: "Black", prop: "Compact Size & Fast Charging",orcost: 1500,cost: 649,rating: 5},{name: "URBN 10000 mAh Li-Polymer Ultra Compact Power Bank" ,img: "133.jpg",colour: "Blue", prop: "2.4 Amp 5V Fast Charge",orcost: 2499,cost: 749,rating: 5},{name: "iBall 10000 mAh Powerbank (IB-10000LP)" ,img: "134.jpg",colour: "White", prop: "Dual USB Output",orcost: 1599,cost: 599,rating: 4},{name: "Saco Shock Proof Pouch Case Wallet Cover Protector" ,img: "135.jpg",colour: "Black", prop: "2i Model PB20IZM",orcost: 775 ,cost: 326,rating: 4}];
let sec14=[{name: "Lenovo Ideapad Slim 3i 10th Gen Intel Core i3 14 inch FHD Thin and Light Laptop " ,img: "141.webp",colour: "Grey", prop: "4GB/256GB/Windows 10/MS Office/1.6Kg, 81WD0044IN",orcost: 52890 ,cost: 36490,rating: 5},{name: "Lenovo IdeaPad S540 81NG002BIN 15.6-inch FHD IPS Thin and Light Laptop" ,img: "142.webp",colour: "Mineral Grey", prop: "10th Gen CORE I5-10210U/8GB/1TB HDD + 256GB SSD/Windows 10/Microsoft Office/2GB Graphics ",orcost: 93690 ,cost: 63590 ,rating: 4 },{name: "HP Pavilion x360 Core i7 8th Gen 14-inch Touchscreen 2-in-1 FHD Thin and Light Laptop " ,img: "143.webp",colour: "Mineral Silver", prop: "16GB/512GB SSD/Windows 10/MS Office/2GB Graphics/1.59 kg, 14- dh0045TX",orcost: 95999,cost: 85990 ,rating: 4},{name: "Lenovo Ideapad S340 Intel Core i3 10th Gen 14 inch FHD Thin and Light Laptop" ,img: "144.webp",colour: "Platinum Grey", prop: "8GB/256GB SSD/Windows 10/MS Office/1.55Kg, 81VV00ECIN",orcost: 57290 ,cost: 40990,rating: 4},{name: "HP 14 10th Gen Intel Core i5 Processor 14-inch Laptop " ,img: "145.webp",colour: " Slate Grey", prop: "4GB RAM/512GB NVMe SSD/Windows 10/Integrated Graphics/Backlit KB/FP Reader/1.70 Kg by ASUS",orcost: 49999,cost: 35999,rating: 3}];
let sec15=[{name: "Dell P Series 24-inch (60.96 cm) Screen Full HD (1080p) LED-Lit Monitor " ,img: "151.webp",colour: "Black", prop: "IPS Panel ",orcost: 22999,cost: 13999,rating: 3},{name: "Lenovo 21.5 inch Monitor with LED Display, VA Panel, AMD Free Synch" ,img: "152.webp",colour: "Raven Black", prop: "HDMI and VGA inputs",orcost: 10490,cost: 7490 ,rating: 5 },{name: "Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor" ,img: "153.jpg",colour: "Black", prop: " Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL ",orcost: 14798 ,cost: 10999,rating: 5},{name: "Acer Aopen 21.5-inch Backlit LED LCD Monitor" ,img: "154.webp",colour: "22CHIQ", prop: "200nits Brightness -HDMI and VGA Port ",orcost: 7999,cost: 5499,rating: 4},{name: "Zebronics K25 Standard Keyboard " ,img: "155.webp",colour: "black", prop: "USB Input",orcost: 399,cost: 370,rating: 5}];
let sec16=[{name: "HP DeskJet 2131 " ,img: "161.jpg",colour: "White", prop: "All-in-One Inkjet Colour Printer",orcost: 4782,cost: 3799,rating: 4},{name: "Canon PIXMA MG2577s" ,img: "162.webp",colour: "Blue/White", prop: "All-in-One Inkjet Colour Printer",orcost: 3365 , cost: 2799 , rating: 5 },{name: "Canon E4270" ,img: "163.webp",colour: "Black", prop: "All-in-One Ink Efficient WiFi Printer with FAX/ADF/Duplex Printing ",orcost: 9625 ,cost: 7999 ,rating: 3 },{name: "Canon Pixma G3000" ,img: "164.jpg",colour: "Black", prop: "All-in-One Wireless Ink Tank Colour Printer",orcost: 14285,cost: 12999,rating: 4},{name: "HP DeskJet 2135" ,img: "165.jpg",colour: "White and Green", prop: "All-in-One Ink Advantage Colour Printer",orcost:6000,cost: 5000,rating: 5}];

let sec21=[{name: "eAirtec 61 cm (24 inches) HD Ready LED TV 24DJ" ,img: "211.webp",colour:  "Blue",prop: "2020 Model",orcost:10000 ,cost:8000 ,rating:5 },{name: "Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV" ,img: "212.jpg",colour: "Black",prop: "Data Saver", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Shinco 165 cm (65 Inches) 4K UHD Smart LED TV S65QHDR10" ,img: "213.jpg",colour: "black", prop: "2019 model",orcost:5000 ,cost:3000 ,rating:3 },{name: "TCL 163.96 cm (65 inches)  AI 4K UHD Certified Android Smart LED TV 65P8 " ,img: "214.jpg",colour: "Blue", prop: "2019 Model",orcost: 5000,cost: 3000,rating:4 },{name: "Onida 108 cm (43 Inches) Full HD Smart IPS LED TV" ,img: "215.jpg",colour: "Black",prop: "Fire TV Edition ",orcost: 2000,cost: 1000,rating: 5}];
let sec22=[{name: "Echo Dot (3rd Gen) " ,img: "221.jpg",colour:  "Blue",prop: "New and improved smart speaker with Alexa",orcost:10000 ,cost:8000 ,rating:5 },{name: "Marshall Stanmore II Bluetooth Speaker" ,img: "222.jpg",colour: "Black",prop: "", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Zebronics Zeb-Warrior 2.0 Multimedia Speaker " ,img: "223.jpg",colour: "White", prop: "Aux Connectivity,USB Powered and Volume Control",orcost:5000 ,cost:3000 ,rating:3 },{name: "Zebronics Zeb-S999 2.0 Multimedia Speaker" ,img: "224.jpg",colour: "Blue", prop: "Aux Connectivity,USB Powered and Volume Control",orcost: 5000,cost: 3000,rating:4 },{name: "F&D F-203G 2.1 Channel Multimedia Speakers System" ,img: "225.jpg",colour: "Black",prop: "",orcost: 2000,cost: 1000,rating: 5}];
let sec23=[{name: "Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit" ,img: "231.jpg",colour:  "Blue",prop: "14-42 mm Lens",orcost:10000 ,cost:8000 ,rating:5 },{name: "Mi 360° 1080p Full HD WiFi Smart Security Camera" ,img: "232.jpg",colour: "Black",prop: "360° Viewing Area |Intruder Alert | Night Vision | Two-Way Audio |Inverted Installation", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Fujifilm Instax Mini 9 Instant Camera" ,img: "233.jpg",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Canon EOS 1500D 24.1 Digital SLR Camera " ,img: "234.jpg",colour: "Blue", prop: "EF S18-55 is II Lens, 16GB Card and Carry Case",orcost: 5000,cost: 3000,rating:4 },{name: "Zebronics Zeb-Crystal Pro Web Camera" ,img: "235.jpg",colour: "Black",prop: "USB Powered,3P Lens,Night Vision and Built-in Mic",orcost: 2000,cost: 1000,rating: 5}];
let sec24=[{name: "JBL C100SI In-Ear Deep Bass Headphones with Mic" ,img: "241.jpg",colour:  "Blue",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "boAt BassHeads 100 in-Ear Wired Earphones" ,img: "242.jpg",colour: "Black",prop: "Super Extra Bass, in-line Mic, Hawk Inspired Design and Perfect Length Cable ", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Zebronics Zeb-Thunder Wireless BT Headphone " ,img: "243.jpg",colour: "White", prop: "40mm Drivers, AUX Connectivity, Built in FM, Call Function, 9Hrs* Playback time and Supports Micro SD Card",orcost:5000 ,cost:3000 ,rating:3 },{name: "Sennheiser HD 450BT Over Ear Wireless Headphones" ,img: "244.jpg",colour: "Blue", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "OPPO ENCO M31 Wireless in-Ear Bluetooth Earphones with Mic" ,img: "245.jpg",colour: "Black",prop: "",orcost: 2000,cost: 1000,rating: 5}];
let sec25=[{name: "IKALL IK-4444 7.1 Bluetooth Multimedia Home Theater " ,img: "251.webp",colour:  "Blue",prop: "FM/Pen Drive/Aux Support",orcost:10000 ,cost:8000 ,rating:5 },{name: "Philips SPA4040B/94 Multimedia Speakers System " ,img: "252.webp",colour: "Black",prop: "", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Philips IN-MMS6080B/94 2.1 Channel Multimedia Speakers" ,img: "253.webp",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Tecnia 704 Bluetooth 7.1 Home Theater System" ,img: "254.webp",colour: "Blue", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Philips MMS2550B/94 Bluetooth Multimedia Speaker" ,img: "255.webp",colour: "Black",prop: "",orcost: 2000,cost: 1000,rating: 5}];
let sec26=[{name: "Mi 360° 1080p Full HD WiFi Smart Security Camera" ,img: "261.jpg",colour:  "Blue",prop: "360° Viewing Area |Intruder Alert | Night Vision | Two-Way Audio |Inverted Installation",orcost:10000 ,cost:8000 ,rating:5 },{name: "QUBO Smart Indoor Camera" ,img: "262.jpg",colour: "Black",prop: "WiFi/Wireless Home Security System| 1080p FHD| Face Recognition| Alexa Built-In Speaker| Intruder Alarm| Baby Cry Monitor| Night Vision| 2 Way Talk| Home Automation Hub", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Qubo Smart Home Security Camera" ,img: "263.jpg",colour: "White", prop: " Wireless/WiFi Security Camera| 1080p FHD Resolution| Person Detection| Baby Cry Monitor| Weather Resistant - Outdoor Usage| Alexa Enabled| Night Vision|2 Way Talk",orcost:5000 ,cost:3000 ,rating:3 },{name: "IFITech - 1080p HD Hidden Camera" ,img: "264.jpg",colour: "Blue", prop: "Plug USB Charger, 128GB SD Card Support, 2 Mode Recording, Home, Kids, Baby, Pet Monitoring",orcost: 5000,cost: 3000,rating:4 },{name: "TP-Link Tapo C100 IP Home Security Wi-Fi Camera " ,img: "265.jpg",colour: "Black",prop: "1920 x 1080 Pixels, Night Vision, Wireless WiFi Indoor Spy Cam with Two-Way Audio",orcost: 2000,cost: 1000,rating: 5}];
let sec31=[{name: "Baskety Set Anti-Slip Plastic Heat Pad Insulated Kitchen Placemats Insulation Mats" ,img: "311.jpg",colour:  "Multicolour",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "SHIVOW Ceramic Pickle Jars Set of 2, Ceramic Jars 450-500 Grams" ,img: "312.jpg",colour: "Sunny Yellow",prop: "Kitchen Storage,Ceramic Jars for Dining Table ", orcost:7000 ,cost:5000 ,rating: 4 },{name: "RD MALL Round Silicone Hot Pot Holder Mat Heat Resistant Disc Pads " ,img: "313.jpg",colour: "2 Piece - Multicolor", prop: "Kitchen Insulation Anti-Slip Coasters Dining Table Mat ",orcost:5000 ,cost:3000 ,rating:3 },{name: "Tanyash Plastic Fruit Basket with Cover" ,img: "314.jpg",colour: "Pink", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Factcore Combo of Refrigerator Cover " ,img: "315.jpg",colour: "Black",prop: "2 Handle Cover (B&W) and 3 Fridge Mats(B&W)(Circle) Standard Size; -Set of 6 Pieces",orcost: 2000,cost: 1000,rating: 5}];
let sec32=[{name: "Dewberries Set of 6 Pcs (1100 ml)" ,img: "321.jpg",colour:  "Blue",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Easy Flow Kitchen Container" ,img: "322.jpg",colour: "Black",prop: "", orcost:7000 ,cost:5000 ,rating: 4 },{name: "Bhakti Enterprise-Airtight Food Storage Containers Plastic Kitchen Storage Jars " ,img: "323.jpg",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Sky Lexus Celebration 18 Pcs Storage Container" ,img: "324.jpg",colour: "Blue", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Storage Container Set (1.1 L, Assorted Colours)" ,img: "325.jpg",colour: "Black",prop: "",orcost: 2000,cost: 1000,rating: 5}];
let sec33=[{name: "Dewberries Set of 6 Pcs (1100 ml)" ,img: "331.jpg",colour:  "Blue",prop: "Easy Flow Kitchen Container",orcost:10000 ,cost:8000 ,rating:5 },{name: "Bhakti Enterprise-Airtight Food Storage Containers Plastic Kitchen Storage Jars and Container Set, Kitchen Storage Container, Jar Set for Kitchen, Kitchen Storage Jars, Fridge Storage Containers 3" ,img: "332.jpg",colour: "Black", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Sturdii Java Plastic Kitchen Stackable BPA-Free Storage Container Set (1.1 L, Assorted Colours)" ,img: "333.jpg",colour: "White", prop: " Pack of 6",orcost:5000 ,cost:3000 ,rating:3 },{name: "JRM's Airtight Food Storage Containers Plastic Kitchen Storage Jars and Container Set, Kitchen Storage Container, Jar Set for Kitchen, Kitchen Storage Jars, Fridge Storage Containers 6pc" ,img: "334.jpg",colour: "Blue", prop: "400ML",orcost: 5000,cost: 3000,rating:4 },{name: "Sky Lexus Celebration 18 Pcs Storage Container Gift Set for Kitchen (300ml x 6 Pcs, 750ml x 6 Pcs, 1400ml x 6 Pcs) " ,img: "335.jpg",colour: "Grey", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec34=[{name: "Furniture Cafe Wall Decor Book Shelf/Wall Display Rack (3 Shelves) " ,img: "341.jpg",colour:  "Blue",prop: "Ideal for Gift (Standard, Mahogany)",orcost:10000 ,cost:8000 ,rating:5 },{name: "Furniture Cafe Engineered Wood Wall Mounted Floating Intersecting Storage Display Wall Shelves" ,img: "342.jpg",colour: "rown", prop: "Set of 3",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Furniture Cafe Engineered Wood Hexagon Shape Wall Shelf " ,img: "343.jpg",colour: "White and Sky Blue"  , prop: "Set of 6",orcost:5000 ,cost:3000 ,rating:3 },{name: "Keekos 4 Layer Multipurpose Portable Folding Shoes Rack/Shoes Shelf/Shoes Cabinet with Wardrobe Cover, Easy Installation Stand for Shoes(Shoes Rack)(Shoes Rack, Shoes Racks for Home)" ,img: "344.jpg",colour: "Maroon", prop: "4 Layer ",orcost: 5000,cost: 3000,rating:4 },{name: "AMZ Exclusive Soft Rocking Chair Cushions Home Cotton Cushion Long Chair Pad" ,img: "345.jpg",colour: "Chocolate Brown", prop: "(48 x 16 inches,Set of 1) (48 x 16 Inches)",orcost:2000 ,cost:1000 ,rating:5 }];
let sec35=[{name: "Generic Extra Large Black 3D CNC Cut 3 Section Tree Designed Garden Decor,Hanging Outdoor and Indoor Wall Decor" ,img: "351.jpg",colour:  "Blue",prop: "48 inch * 36 inch",orcost:10000 ,cost:8000 ,rating:5 },{name: "Home Centre Splendid Abstract Swan Pair Figurine " ,img: "352.jpg",colour: "Red", prop: "17 x 7 x 37 cms",orcost:7000 ,cost:5000 ,rating: 4 },{name: "GIG Metal Betel Leaf Design Tree of Life Wall Mounted Art Sculpture Decor Hanging Home Living Room Office Artwork" ,img: "353.jpg",colour: "Golden Brown", prop: "Size 138 x 95 x 6 cm",orcost:5000 ,cost:3000 ,rating:3 },{name: "SAF Set of 3 Ganesha UV Coated Home Decorative Gift Item Framed Painting " ,img: "354.jpg",colour: "Blue", prop: "13.5 inch X 22.5 inch",orcost: 5000,cost: 3000,rating:4 },{name: "Bikri Kendra® Hexagon 20 Golden Mirror" ,img: "355.jpg",colour: "Golden", prop: "3D Acrylic Mirror Wall Stickers for Home & Office",orcost:2000 ,cost:1000 ,rating:5 }];
let sec36=[{name: "Kuber Industries Zig Zag Design 2 Pieces Sheer Door Curtains Linen Look Semi Transparent Voile Grommet Elegance Curtains for Living Dining Room, Bedroom Drapes 48 x 84 Inch Long, (Cream) - CTKTC040494" ,img: "361.jpg",colour:  "Yellow",prop: "12 Stars",orcost:10000 ,cost:8000 ,rating:5 },{name: "Satyam Kraft Battery Powered Acrylic 20 Clip Indoor Outdoor Decoration Light " ,img: "362.jpg",colour: "Golden", prop: "Standard Size",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Prop It up Portuguese Style Antique Golden Wall lamp with 2 Lamp Shades" ,img: "363.jpg",colour: "Gold", prop: "Double Wall Light",orcost:5000 ,cost:3000 ,rating:3 },{name: "Imper!al Wooden Wall Light/Wall Hanging Lamp for Bedroom, Living Room, Home Decor" ,img: "364.jpg",colour: "Brown", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Story@Home Metro Style Mesmerizing Mercerize Beautiful Zebra Stripes Design Art Deco Cotton 1 Piece Double / Queen Bed Size Bedsheet with 2 Pillow Covers" ,img: "365.jpg",colour: "Brown", prop: "Bulb not Included",orcost:2000 ,cost:1000 ,rating:5 }];
let sec41=[{name: "GAHI Multifunction Beauty Care Brush Deep Clean 5 in 1 Facial Cleaner Relief Face Massager" ,img: "411.jpg",colour:  "Pink",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "GAHI Multifunction Beauty Care Brush Deep Clean 5 in 1 Facial Cleaner Relief Face Massager" ,img: "412.jpg",colour: "Black", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "CARECROFT Electric Painless Eyebrow Trimmer/Razor Shaver/Threading Tool for Women" ,img: "413.jpg",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Kubra KB-1045 Rechargeable, Cordless Beard and Hair Trimmer For Men (Black), 45 Mins Runtime, 1 Year Warranty" ,img: "414.jpg",colour: "Blue", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Xmate Juno Corded/Cordless Trimmer, 100% Waterproof, 70 min Runtime, 17 Length Settings, Lightweight, Rechargeable Beard Trimmer for Men" ,img: "415.jpg",colour: "Black", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec42=[{name: "Forest Essentials Sandalwood and Saffron Night Treatment Cream, 1.7 oz" ,img: "421.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Forest Essentials Luscious Sugared Rose Petal Lip Balm, 4g" ,img: "422.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Kama Ayurveda Kumkumadi Miraculous Beauty Ayurvedic Night Serum, 12ml" ,img: "423.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "StBotanica Refreshing Green Tea and Cucumber Shower Gel (Luxury Body Wash With Pure Extracts & Oils), 300ml" ,img: "424.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Swiss Beauty Luxury Velvet Eyeshadow Palette, Eye MakeUp, Multicolor-1, 12g" ,img: "425.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec43=[{name: "Brain Freezer Makeup Brush | Liquid Foundation Blend Blush | Wood with sponge" ,img: "431.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Swamey DISHIN 360 Degree Rotatable Cosmetics Plastic Makeup Storage 2 Layer Multifunctional Cosmetic Organizer (1pc)" ,img: "432.jpg",colour: "Black", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Lady In Different Hats Latex-Free Makeup Blending Applicator sponge (Mint Green)" ,img: "433.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Prime Sponge Makeup Bender For Women,10 Gram, 6 Pcs, Multicolor, Pack Of 1 (11428)" ,img: "434.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Lakme Absolute Blur Perfect Makeup Primer, 30g" ,img: "435.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec44=[{name: "The Indian Bodybuilding Diet: Know Indian Food, Debunk the Myths, and Understand the Nutrition Kindle Edition" ,img: "441.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "The Ultimate Bodybuilding Diet, Nutrition and Workout Plan for Men and Women Kindle Edition" ,img: "442.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Williams' Basic Nutrition & Diet Therapy: First South Asia Edition Paperback – 1 " ,img: "443.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Optimum Nutrition For Your Child: How to boost your child's health, behaviour and IQ Paperback " ,img: "444.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "The Blood Sugar Solution 10-Day Detox Diet Cookbook: More than 150 Recipes to Help You Lose Weight and Stay Healthy for Life Hardcover" ,img: "445.jpg",colour: "Black", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec45=[{name: "HealthSense My-Sole LM 400 Leg & Foot Massager with Air Pressure" ,img: "451.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Lifelong LLM18 Air Pressure Massager for blood circulation and pain relief of Arms, Leg, Calf and Foot " ,img: "452.jpg",colour: "Brown", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "ZUBEHOR'S HEALTH OXYGEN EXERCISER(WALKER)" ,img: "453.jpg",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Listerine Cool Mint Mouthwash Removes 99.9% Germs, 250ml (Buy 2 Get 1 Free)" ,img: "454.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Dr Physio (USA) Eva Cordless Rechargeable Personal Body Wand Massager Machine with 28 Vibration modes & Water Resistant" ,img: "455.jpg",colour: "Black", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec46=[{name: "Surf Excel Matic Top Loa" ,img: "461.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Vim Dishwash Gel, Lemon, 1.8 L" ,img: "462.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Comfort After Wash Morning Fresh Fabric Conditioner, 860 ml" ,img: "463.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Ariel Matic Top Load Detergent Washing Powder - 3 kg" ,img: "464.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Good Knight Power Activ+, Mosquito Repellent Refill (Pack of 2)" ,img: "465.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec51=[{name: "MOM'S HOME Organic Cotton Soft Summer Butterfly AC Quilt Blanket Cum Bedspread 110 x 120 Cms for Baby Boy and Girl (Pink, 0-3 Years)" ,img: "511.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "My NewBorn 3 in 1 Baby Blanket-Safety Bag-Sleeping Bag for Babies" ,img: "512.jpg",colour: "Pink", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "My Newborn Baby Mitten Cap and Booty Set - Set of 3 Packs" ,img: "513.jpg",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "BeyBee Waterproof Baby Bed Protector Dry Sheet for New Born Babies (Small (50cm X 70cm))" ,img: "514.jpg",colour: "Salmon Rose", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Mee Mee Baby Gentle Wet Wipes ((72 Pcs,Pack of 03), Aloe Vera Wet Wipes)" ,img: "515.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec52=[{name: "Pampers Active Baby Diapers, New Born, 72 Count" ,img: "521.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Supples Baby Diaper Pants, Monthly Mega-Box, X-Large, 108 Count" ,img: "522.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Supples Baby Pants Diapers, X-Large, 54 Count" ,img: "523.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Little Angel Baby Diaper Pants, Medium (74 Count)" ,img: "524.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Huggies Wonder Pants Extra Large Size Diapers, 56 Count" ,img: "525.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5}]

let sec53=[{name: "SUPER TOY LCD Writing Tablet 8.5Inch E-Note Pad" ,img: "531.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "" ,img: "532.jpg",colour: "Creative Educational Aids P. Ltd. Fun With Words Puzzle (Multi-Color, 90 Pieces)", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Jiada Kids Laptop, LED Display, with Music, Educational Laptop Learner with LED Screen, Multi Color" ,img: "533.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "My First Library: Boxset of 10 Board Books for Kids Board book" ,img: "534.jpg",colour: "Blue", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Toyztrend Junior Smiley Stacking Multicolour 5 Rings for Toddlers" ,img: "535.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec54=[{name: "Hopscotch Boys Cotton Blazer Style Shirt and Pant Set in Grey Colour" ,img: "541.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Bon Organik Disney Princess (OFFICIAL MERCHANDISE) 2 Ply Printed Cotton Cloth Face Mask Bundle For Kids (Set Of 3)" ,img: "542.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Kuchipoo Girl's Cotton Regular Fit T-Shirt - Pack of 5" ,img: "543.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Bon Organik Mighty Avengers (OFFICIAL MERCHANDISE) 2 Ply Printed Cotton Cloth Face Mask Bundle For Kids (Set Of 3)" ,img: "544.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Wish Karo Baby Girls' Knee Length Dress." ,img: "545.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec55=[{name: "Generic Digital 24 Images Spiderman Projector Watch for Kids, Diwali Gift, Birthday Return Gift (Color May Vary)" ,img: "551.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Mashoor Party Maker® Hello Kitty / Frozen / Princess Led Glowing Watch for Girls (Random Character)" ,img: "552.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Truvic LED Digital Black Dial Silicone Bracelet Boys Kids Watch Combo Pack of 2 - (B.P)" ,img: "553.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Kidzo Football Fan Blue Analog Kids Wrist Watch with 3D Strap." ,img: "554.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "DRITON Digital Men's Watch (Black Dial)" ,img: "555.jpg",colour: "Black", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec56=[{name: "Arshia Fashions Boy's silk Sherwani Kurta Pyjama" ,img: "561.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Mahi Fashion Baby Caps for Winters (0-2 Years, Multicolor)" ,img: "562.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Fashion Dream Baby Girls' Maxi Dress" ,img: "563.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Baby Basics Company Crochet Cutwork Flower Headband for Baby Girls (Multicolor,Pack of 6)" ,img: "564.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Fashion shoes Kids Unisex Synthetic Leather LED Light Shoes" ,img: "565.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec61=[{name: "The Prophet Paperback" ,img: "611.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Losing My Religion (Hindi) (Hindi) Paperback – 1 October 2015" ,img: "612.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Ikigai: The Japanese secret to a long and happy life Hardcover – 27 September 2017" ,img: "613.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Wuthering Heights" ,img: "614.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "The Alchemist Paperback – 17 October 2005" ,img: "615.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec62=[{name: "Celestial Bodies (Winner of the Man Booker International Prize 2019)" ,img: "621.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Notes from the Editor's Corner of Cath Lab Digest Paperback " ,img: "622.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "The Silent Corner (Jane Hawk Thriller) Paperback – 30 July 2017" ,img: "623.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Red Line/Blue Line: Essays from the Editor's Corner Kindle Edition" ,img: "624.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "An Editor's Corner: Reflections on how dentistry is changing" ,img: "625.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec63=[{name: "Oswaal NCERT & CBSE Question Bank Class 8 Science Book (For March 2021 Exam) Paperback – 1 May 2019" ,img: "631.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "NCERT Books Set for Class 5 (English Medium) (4 Books - SchoolWaale.com) Unknown Binding – 1 January 2019" ,img: "632.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Science Textbook for Class - 9 - 964 Paperback – 1 January 2014" ,img: "633.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "NCERT Books Set for Class 3 (English Medium) (4 Books - SchoolWaale.com) Unknown Binding – 1 January 2019" ,img: "634.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Math Magic - Textbook in Mathematics for Class - 4 - 425 Paperback – 1 January 2014" ,img: "635.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec64=[{name: "Quantitative Aptitude for Competitive Examinations Paperback – 21 February 2017" ,img: "641.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Pratiyogi Parikshaon Ke Liye Ankganit by R.S. Aggarwal (Revised Edition) (Hindi) Paperback – 1 April 2017" ,img: "642.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Exam Warriors Paperback – 15 January 2019" ,img: "643.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Prakash Publication 5 Years Allahabad Central University LL.B. Entrance Exam Guide New Pattern By D Kumar Paperback – 1 January 2019" ,img: "644.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "GMAT Quant: How to Beat Advanced GMAT Arithmetic: Revisit the High School Rules and Learn a Set of GMAT-Specific Techniques to Boost Your Score (GMAT Guides Book 2) Kindle Edition" ,img: "645.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec65=[{name: "Books For Kids: Timmy the Fluffy Bunny: Bedtime Stories For Kids Ages 3-6 (Children's Books - Free Stories) Kindle Edition" ,img: "651.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "My First Library: Boxset of 10 Board Books for Kids Board book – 25 April 2018" ,img: "652.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Children's Encyclopedia - Scientists, Inventions And Discoveries: The World of Knowledge Paperback – 1 January 2013" ,img: "653.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Ruskin Bond - Best Selling Children Story Books Collection (Set of 4 Books) Product Bundle – 1 January 2019" ,img: "654.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Bedtime Stories for Kids: Short Bedtime Stories For Children Ages 4-11- Fables and Fairy Talesto Help Children and Toddlers Fall Asleep Fast and Have a Peaceful Sleeping and Thrive Kindle Edition" ,img: "655.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sec66=[{name: "Indian Sign Language (Native American) Paperback – 1 June 1969" ,img: "661.jpg",colour:  "",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "Who Will Cry When You Die? Paperback – 15 June 2006",img: "662.jpg",colour: "", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "Learn & Speak 15 Indian Languages Through Hindi & English Paperback – 1 June 1998" ,img: "663.jpg",colour: "", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "Certificate Physical And Human Geography; Indian Edition Paperback – 27 October 1995" ,img: "664.jpg",colour: "", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "Indian Polity - For Civil Services and Other State Examinations | 6th Edition Paperback – 27 December 2019" ,img: "665.jpg",colour: "", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
//let sec64=[{name: "" ,img: "641.jpg",colour:  "Blue",prop: "",orcost:10000 ,cost:8000 ,rating:5 },{name: "" ,img: "642.jpg",colour: "Black", prop: "",orcost:7000 ,cost:5000 ,rating: 4 },{name: "" ,img: "643.jpg",colour: "White", prop: "",orcost:5000 ,cost:3000 ,rating:3 },{name: "" ,img: "644.jpg",colour: "Blue", prop: "",orcost: 5000,cost: 3000,rating:4 },{name: "" ,img: "645.jpg",colour: "Black", prop: "",orcost:2000 ,cost:1000 ,rating:5 }];
let sections=[[sec11,sec12,sec13,sec14,sec15,sec16],[sec21,sec22,sec23,sec24,sec25,sec26],[sec31,sec32,sec33,sec34,sec35,sec36],[sec41,sec42,sec43,sec44,sec45,sec46],[sec51,sec52,sec53,sec54,sec55,sec56],[sec61,sec62,sec63,sec64,sec65,sec66]]

for(let i=0;i<6;i++)
{
  let addDiv="<div class='first-div' id='section"+(i+1).toString()+"'><h1>"+topics[i]+"</h1><hr/></div>";
  $(".content").append(addDiv);
  for(let j=0;j<subtopics[i].length;j++)
  {
    let section="#section"+(i+1).toString();
    let addItemGroups="<div class='second-div' id='section"+(i+1).toString()+(j+1).toString()+"'><h3>"+subtopics[i][j]+"</h3><hr/></div>";
    $(section).append(addItemGroups);
    let arr="sec"+(i+1).toString()+(j+1).toString();
    let group="#section"+(i+1).toString()+(j+1).toString();
  //  console.log(arr,arr.length);
    for(let k=0;k<sections[i][j].length;k++)
    {
        let indvidualItemDetails=sections[i][j][k].name;
        let rate="";
        for(let x=0;x<sections[i][j][k].rating;x++)
        {
          rate+="🌟";
        }
          if(sections[i][j][k].prop.length>0)
          {
               indvidualItemDetails=sections[i][j][k].name+"-"+sections[i][j][k].prop;
               if(sections[i][j][k].colour.length>0)
               {
                 indvidualItemDetails=sections[i][j][k].name+"-"+sections[i][j][k].prop+"-"+sections[i][j][k].colour;
               }

          }
          else  if(sections[i][j][k].colour.length>0)
           {
             indvidualItemDetails=sections[i][j][k].name+"-"+sections[i][j][k].colour;
           }
           let itemDetails="<p><h4>"+indvidualItemDetails+"</h4></p><h1>"+sections[i][j][k].cost+"/-<span><h4 style='text-decoration: line-through ; display: inline'>"+sections[i][j][k].orcost+"/-</h4></span></h1><p>"+rate+"</p>"
        //  console.log(arr[k],arr[k].img);
          let addItem="<div class='third-div row' id='section"+(i+1).toString()+(j+1).toString()+(j+1).toString()+"'><div class='col col-sm-6 col-md-6 col-xsm-12 col-xlg-6 col-lg-6'><img  class='img-item' src='public.zip/public/"+sections[i][j][k].img+"' alt='pic'></img></div><div class='col2 col col-sm-6 col-md-6 col-xsm-12 col-xlg-6 col-lg-6' >"+itemDetails+"</div></div>"
          $(group).append(addItem);
    }
  }
}
