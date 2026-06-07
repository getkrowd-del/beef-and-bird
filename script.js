tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brandTan: '#D2B48C',
                        brandTanLight: '#F3EFE9',
                        brandBrown: '#221915',
                        brandPlum: '#612B58',
                        brandPlumLight: '#7E3E74', 
                        brandRed: '#C1272D',
                        brandRedLight: '#DC353C',
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif'],
                    }
                }
            }
        }

const menuData = {
            bullpen: [
                {name:"Bagg's Square Beef",description:"Our classic house roasted beef dunked in jus, piled high on a toasted Heidelburg Round Roll.",tag:"Slow Roasted Daily",fat:"100% Beef Tallow Jus",colorClass:"brandPlum",price:"10"},
                {name:"The Big Dipper",description:"Our version of the Classic French Dip, artisan bread made in House, loaded with shaved house roasted beef dipped in our seasoned jus, with Swiss cheese & caramelized onions served with au jus.",tag:"House Artisan Bread",fat:"Tallow Caramelized Onions",colorClass:"brandPlum",price:"15"},
                {name:"The Little Dipper",description:"(Nothing Little About This) Another version of a French Dip with no frills, just roasted beef, homemade artisan bread & a side of our flavorful jus.",tag:"No Frills Classic",fat:"Classic Tallow Dip",colorClass:"brandPlum",price:"13"},
                {name:"Beef & Brew Cheese Melt",description:"A mountain of shaved beef with a touch of our signature Beef & Bird Sauce on a buttered Heidelburg roll with a side of in house made Utica Gold, our beer-infused sauce made with Utica Club.",tag:"Utica Club Infused",fat:"Buttered Heidelburg Roll",colorClass:"brandPlum",price:"11"},
                {name:"Beef on Weck",description:"Thinly sliced roast beef on a Kummelweck roll (homemade sourdough roll topped with caraway seeds and flake sea salt).",tag:"Sourdough Sensation",fat:"100% Natural Meat Juices",colorClass:"brandPlum",price:"12"},
                {name:"Great Steak Sandwich",description:"Grilled flat iron steak seasoned & seared in beef tallow, sliced tender with hints of hot honey, brandy caramelized onions & Utica Gold beer cheese sauce on the side.",tag:"Premium Tender Flat Iron",fat:"Beef Tallow Seared",colorClass:"brandPlum",price:"22"}
            ],
            pecking: [
                {name:"Yardbyrd Sandwich",description:"Hand-cut chicken breast, marinated in buttermilk, house breading, fried in beef tallow, finished with Beef & Bird Sauce and sliced dill pickles served on Heidelburg round roll.",tag:"100% Hormone Free",fat:"Fried in Beef Tallow",colorClass:"brandRed",price:"10"},
                {name:"Bird's Nest",description:"Marinated all natural chicken breast, deep fried in beef tallow, dipped in B&B Hot Honey sauce topped with spring mix, pepper jack cheese with ranch dressing served on Heidelburg round roll.",tag:"Hot Honey Classic",fat:"100% Tallow Fried",colorClass:"brandRed",price:"13.25"},
                {name:"The Dirty Bird",description:"Chopped chicken thighs with hints of Cajun spice, hand-sliced thin and piled high with organic spring mix, pepper-jack cheese, and our house caramelized-onion mayo, served on toasted artisan bread.",tag:"Spiced Cajun Thighs",fat:"Caramelized-Onion Mayo",colorClass:"brandRed",price:"15"},
                {name:"Bird Bites",description:"Hand-trimmed cuts of white meat chicken, brined in buttermilk and seasoned with our secret 1886 Prime herb blend with House breading served with Beef & Bird sauce.",tag:"1886 Prime Herb Blend",fat:"Tallow Fried Cuts",colorClass:"brandRed",price:"10"},
                {name:"Gluten Free Roast Beef",description:"Our classic house roasted beef dunked in jus, piled high on a gluten free roll.",tag:"Gluten Free Available",fat:"Gluten Free Prep",colorClass:"brandRed",price:"12"}
            ],
            "fries-sides": [
                {name:"Fresh-Cut French Fries",description:"Non-GMO Burbank Russet potatoes fried in 100% beef tallow and salted with sea salt. (Regular: $6 | Bucket: $9 | Add Utica Gold Cheese Sauce: +$3)",tag:"Burbank Russets",fat:"100% Beef Tallow Fried",colorClass:"brandBrown",price:"6 / 9"},
                {name:"Poutine",description:"Fresh-cut, beef-tallow fries layered with rich house-made gravy, Wisconsin cheese curds softened by the heat, and finished with dried chives for balance. (Add Bird Bites: +$5 | Add Grilled Chicken: +$6 | Add Steak: +$8)",tag:"Local Wisconsin Curds",fat:"House-Made Gravy",colorClass:"brandBrown",price:"11.11"},
                {name:"Steak Frites",description:"Generous slices of seasoned flat iron steak, seared in beef tallow, served over fresh-cut fries fried in 100% beef tallow. Finished with our classic au poivre—cracked black peppercorns, butter, pan reduction, brandy, & heavy cream. Garnished with dried chives.",tag:"House Au Poivre Special",fat:"Steak Seared in Tallow",colorClass:"brandBrown",price:"18"},
                {name:"Super Fly Super Fries",description:"Fresh-cut fries with a touch of Cajun spice, topped with Utica Gold Cheese Sauce, maple bacon bits with ranch drizzle and shredded cheddar. (Add Bird Bites: +$5 | Add Grilled Chicken: +$6 | Add Steak: +$8)",tag:"Ultimate Fry Bucket",fat:"Utica Gold Cheese Sauce",colorClass:"brandBrown",price:"12.25"},
                {name:"Side Hustles Assortment",description:"Dill Pickle ($2) | Garlic Truffle Aioli ($2) | B&B Hot Honey ($1) | Au Jus 6oz ($2) | Ranch ($1) | Gravy 6oz ($3) | B&B Special Sauce ($1) | Au Poivre 6oz ($4)",tag:"House Crafted Sauces",fat:"Handcrafted Batches",colorClass:"brandBrown",price:"1 - 4"},
                {name:"House Cheesecake",description:"Decadently rich, velvety restaurant cheesecake prepared in house. Pure ingredients, zero processed stabilizers.",tag:"Dessert Sweet",fat:"Real Pasture Butter Crust",colorClass:"brandBrown",price:"7"}
            ]
        };
        const scienceData = {
            tallow: {
                title:"Beef Tallow Profile",
                badge:"Highly Stable",
                smokeVal:"400°F (High)",
                smokePct:"85%",
                toxinVal:"None (Safe)",
                toxinPct:"5%",
                desc:"Because beef tallow contains naturally high levels of saturated and monounsaturated fatty acids, it offers excellent heat stability and minimal toxin formation during cooking. This makes it ideal for frying and enhances flavor without harmful byproducts."
            },
            butter: {
                title:"Real Grass-Fed Butter Profile",
                badge:"Pure & Traditional",
                smokeVal:"350°F (Moderate)",
                smokePct:"65%",
                toxinVal:"Extremely Low",
                toxinPct:"12%",
                desc:"Butter, sourced from grass-fed cows, provides a rich flavor and moderate smoke point. Its toxin levels remain low when used properly, making it a wholesome option for sautéing and finishing dishes."
            },
            canola: {
                title:"Canola / Seed Oil Profile",
                badge:"Highly Unstable",
                smokeVal:"400°F (Deceptive)",
                smokePct:"80%",
                toxinVal:"High Risk (Aldehydes)",
                toxinPct:"95%",
                desc:"Seed oils like canola have deceptive smoke points but oxidize quickly at high heat, producing harmful aldehydes and toxins. Their instability can affect both flavor and health negatively, which is why we avoid them completely."
            }
        };
        const sciThemeMap = {
            tallow: {btn:"brandPlum", bar:"brandPlum"},
            butter: {btn:"brandBrown", bar:"brandBrown"},
            canola: {btn:"brandRed", bar:"brandRed"}
        };
        let currentSlide = 0;
        let carouselInterval = null;
        const slideNames = ["Beef BBq Atw","Beef Barbecue Sandwich","Italian Beef Poutine","The Cold Shoulder"];
        const slideColors = ["bg-brandPlum","bg-brandPlum","bg-brandPlum","bg-brandRed"];
        function showSlide(i) {
            const slides = document.querySelectorAll("#carousel-slides img");
            slides.forEach((slide, idx) => {
                slide.style.opacity = idx === i ? "1" : "0";
            });
            const dots = document.querySelectorAll("#carousel-slides + div button");
            dots.forEach((dot, idx) => {
                dot.classList.toggle("bg-brandRed", idx===i && slideColors[i]==="bg-brandRed");
                dot.classList.toggle("bg-brandPlum", idx===i && slideColors[i]==="bg-brandPlum");
                dot.setAttribute("aria-current", idx===i ? "true" : "false");
            });
            const title = document.getElementById("carousel-title");
            title.textContent = slideNames[i];
            title.className = `inline-block text-brandTanLight px-4 py-1 rounded font-black tracking-wide uppercase select-none shadow-hard-sm ${slideColors[i]}`;
            currentSlide = i;
        }
        function nextSlide() {
            let next = (currentSlide + 1) % slideNames.length;
            showSlide(next);
        }
        function setSlide(i) {
            clearInterval(carouselInterval);
            showSlide(i);
            startCarousel();
        }
        function startCarousel() {
            carouselInterval = setInterval(nextSlide, 3500);
        }
        function updateLiveStatus() {
            const dot = document.getElementById("status-dot");
            const text = document.getElementById("status-text");
            if (!dot || !text) return;
            const now = new Date();
            const day = now.getDay(); // 0=Sun
            const hr = now.getHours();
            let open = false;
            if (day === 0 || day === 1) open = false; // Sunday, Monday closed
            else if (day >= 2 && day <= 4) open = (hr >= 11 && hr < 19);
            else if (day === 5) open = (hr >= 11 && hr < 20);
            else if (day === 6) open = (hr >= 12 && hr < 19);
            if (open) {
                dot.className = "inline-block w-4 h-4 rounded-full bg-emerald-500 shadow-hard-sm";
                text.textContent = "Open Now";
                text.className = "font-bold text-lg text-emerald-500 tracking-wide select-none";
            } else {
                dot.className = "inline-block w-4 h-4 rounded-full bg-brandRed shadow-hard-sm";
                text.textContent = "Closed";
                text.className = "font-bold text-lg text-brandRed tracking-wide select-none";
            }
        }
        function switchTab(cat) {
            const btns = {
                bullpen: document.getElementById("tab-btn-bullpen"),
                pecking: document.getElementById("tab-btn-pecking"),
                "fries-sides": document.getElementById("tab-btn-fries-sides")
            };
            Object.entries(btns).forEach(([key,btn])=>{
                if(key===cat){
                    btn.classList.add("shadow-hard-plum","bg-brandPlum","text-brandTanLight");
                    btn.classList.remove("shadow-hard-red","bg-brandRed");
                    btn.classList.remove("shadow-hard","bg-brandBrown");
                } else {
                    btn.classList.remove("shadow-hard-plum","bg-brandPlum","text-brandTanLight");
                    btn.classList.remove("shadow-hard-red","bg-brandRed","text-brandTanLight");
                    btn.classList.add("shadow-hard","bg-brandBrown","text-brandTanLight");
                }
            });
            const container = document.getElementById("menu-container");
            container.style.opacity = "0";
            setTimeout(() => {
                container.innerHTML = "";
                menuData[cat].forEach(item => {
                    const tagColor = item.colorClass === "brandPlum" ? "bg-brandPlum" : (item.colorClass === "brandRed" ? "bg-brandRed" : "bg-brandBrown");
                    const card = document.createElement("article");
                    card.className = "bg-brandTanLight border-4 border-brandBrown rounded-xl p-6 flex flex-col justify-between shadow-hard-sm";
                    card.innerHTML = `
                        <header>
                            <h3 class="text-lg font-black font-serif text-brandBrown tracking-tight leading-tight">${item.name}</h3>
                            <span class="inline-block mt-1 px-3 py-1 text-xs font-extrabold uppercase tracking-wide rounded ${tagColor} text-brandTanLight select-none">${item.tag}</span>
                        </header>
                        <p class="mt-3 flex-grow text-sm font-semibold text-brandBrown leading-relaxed">${item.description}</p>
                        <footer class="mt-4 flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                            <span class="text-brandBrown select-none">${item.fat}</span>
                            <span class="bg-brandBrown text-brandTan rounded px-3 py-1 shadow-hard-sm">${item.price}</span>
                        </footer>
                    `;
                    container.appendChild(card);
                });
                container.style.opacity = "1";
            }, 200);
        }
        function setScienceFat(k) {
            const tallowBtn = document.getElementById("sci-btn-tallow");
            const butterBtn = document.getElementById("sci-btn-butter");
            const canolaBtn = document.getElementById("sci-btn-canola");
            [tallowBtn, butterBtn, canolaBtn].forEach(btn=>{
                btn.classList.remove("bg-brandPlum", "bg-brandBrown", "bg-brandRed", "shadow-hard-plum", "shadow-hard", "shadow-hard-red");
                btn.classList.add("text-brandTanLight");
            });
            if(k==="tallow") {
                tallowBtn.classList.add("bg-brandPlum", "shadow-hard-plum");
                butterBtn.classList.add("bg-brandBrown", "shadow-hard");
                canolaBtn.classList.add("bg-brandRed", "shadow-hard-red");
            } else if(k==="butter") {
                butterBtn.classList.add("bg-brandBrown", "shadow-hard");
                tallowBtn.classList.add("bg-brandPlum", "shadow-hard-plum");
                canolaBtn.classList.add("bg-brandRed", "shadow-hard-red");
            } else {
                canolaBtn.classList.add("bg-brandRed", "shadow-hard-red");
                tallowBtn.classList.add("bg-brandPlum", "shadow-hard-plum");
                butterBtn.classList.add("bg-brandBrown", "shadow-hard");
            }
            const data = scienceData[k];
            const colorClass = sciThemeMap[k].bar;
            const sciTitle = document.getElementById("sci-title");
            const sciBadge = document.getElementById("sci-badge");
            const barSmoke = document.getElementById("sci-bar-smoke");
            const smokeVal = document.getElementById("sci-smoke-val");
            const barToxin = document.getElementById("sci-bar-toxin");
            const toxinVal = document.getElementById("sci-toxin-val");
            const sciDesc = document.getElementById("sci-desc");
            sciTitle.textContent = data.title;
            sciBadge.textContent = data.badge;
            sciBadge.className = `inline-block px-4 py-1 font-black uppercase tracking-widest rounded select-none shadow-hard-sm max-w-max bg-${colorClass} text-brandTanLight`;
            barSmoke.style.width = data.smokePct;
            barSmoke.className = `h-4 rounded-full transition-all bg-${colorClass}`;
            smokeVal.textContent = data.smokeVal;
            barToxin.style.width = data.toxinPct;
            barToxin.className = `h-4 rounded-full transition-all bg-${colorClass}`;
            toxinVal.textContent = data.toxinVal;
            sciDesc.textContent = data.desc;
        }
        function toggleMobileMenu() {
            const menu = document.getElementById("mobile-menu");
            const icon = document.getElementById("menu-icon");
            if(menu.classList.contains("hidden")){
                menu.classList.remove("hidden");
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                menu.classList.add("hidden");
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
        window.onload = () => {
            switchTab("bullpen");
            setScienceFat("tallow");
            startCarousel();
            updateLiveStatus();
            setInterval(updateLiveStatus, 60000);
        };