let theme = 1111
function slider() {
    if (theme == 1111) {


        // alert("if");
        document.getElementById("slider-mi").style.display = "block";
        document.getElementById("slider-mi").style.animation = "men 1.2s"
        setTimeout(() => {
            document.getElementById("slider-mi").style.display = "none"
        }, 1200)

        document.body.style.backgroundColor = ("black");
        document.getElementById("logoimg").style.filter = "invert(1)";
        let Atag = document.getElementsByClassName("nava");
        for (let i = 0; i < Atag.length; i + 1) {
            Atag[i].classList.add("navap");
            Atag[i].classList.remove('nava');

        }
        let span = document.querySelectorAll(".spandiv");
        span.forEach(headingspan => {
            // alert("poiuytrew")
            headingspan.style.color = "white"
        })

        document.getElementById("wishlist").innerHTML = "&#x1F90D";
        document.getElementById("w-p-pi").style.boxShadow = "0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgba(255, 255, 255, 0.19%)";
        document.getElementById("fcci").style.boxShadow = "0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%)";
        document.getElementById("s-f-d-id").style.boxShadow = "0 2px 10px 0 rgb(255 255 255 / 40%), 0 6px 20px 0 rgb(255 255 255 / 10%)";
        document.getElementById("s-f-d-id").style.border = "1px solid white";
        document.getElementById("t-s-s-h-id").setAttribute("style", "border-bottom: 1px solid #ffffff;border-top: 1px solid #ffffff;")
        document.getElementById("h1ecoyc").style.color = "white";
        let c1class = document.getElementsByClassName("c1");
        for (let i = 0; i < c1class.length; i++) {
            c1class[i].style.boxShadow = "0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%)";
        }
        let c12class = document.getElementsByClassName("c12");
        for (let i = 0; i < c12class.length; i++) {
            c12class[i].style.boxShadow = "0 4px 8px 0 rgb(255 255 255 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%)";
        }

        document.getElementById("t-s-s1-2-1-id").setAttribute("style", "border-bottom: 1px solid white;border-top: 1px solid white;")
        let sliderclass = document.getElementsByClassName("slider1");
        for (let i = 0; i < sliderclass.length; i++) {
            sliderclass[i].style.color = "white";

        }

        document.getElementById("col2h4-id").style.color = "white";
        document.getElementById("Room-Rent").setAttribute("style", "border-bottom: 1px solid white;border-top: 1px solid white;");
        document.getElementById("r-r-thh4-id").style.color = "white";
        let rr1class = document.getElementsByClassName("rr1");
        for (let i = 0; i < rr1class.length; i++) {
            rr1class[i].style.border = "1px solid white";
        }

        document.getElementById("Car-rental").setAttribute("style", "border-bottom: 1px solid white;border-top: 1px solid white;")
        document.getElementById("v-h-th4-id").style.color = "white";
        document.getElementById("v-c-d1-id").style.border = "1px solid white";
        let carnclass = document.getElementsByClassName("v-c-d2h2");
        for (let i = 0; i < carnclass.length; i++) {
            carnclass[i].style.color = "white";

        }
        document.getElementById("About").setAttribute("style", "border-bottom: 1px solid white;border-top: 1px solid white;")
        document.getElementById("abouth1-id").style.color = "white";
        document.getElementById("about-ppi").style.border = "1px solid white";
        document.getElementById("about-p2h3-id").style.color = "white";
        let staclass = document.getElementsByClassName("st1");
        for (let i = 0; i < staclass.length; i++) {
            staclass[i].style.boxShadow = "0 0 8px 0 rgb(255 255 255 / 50%), 0 6px 21px 0 rgb(255 255 255 / 19%)";
        }
        document.getElementById("map-st-id").style.border = "1px solid white";
        document.getElementById("map-sth1-id").style.color = "white";
        document.getElementById("sta-cr-id").setAttribute("style", "border: 1px solid white;background-color: white;")
        document.getElementById("sta-cr1-id").setAttribute("style", "border: 1px solid white;background-color: white;")
        document.getElementById("sta-wl-id").setAttribute("style", "border: 1px solid white;background-color: white;")
        document.getElementById("sta-wl1-id").setAttribute("style", "border: 1px solid white;background-color: white;")
        let stahover = document.getElementById("sta-nav1-1-id");
        stahover.classList.remove('sta-nav1-1', 'sta-nav1-1b');
        stahover.classList.add('sta-nav1-1b');

        let wishhover = document.getElementById("sta-nav1-1-w-id");
        wishhover.classList.remove('sta-nav1-1-w', 'sta-nav1-1wb');
        wishhover.classList.add('sta-nav1-1wb');
        document.getElementById("wl-mh1").style.color = "white";
        document.getElementById("wlidp").style.color = "white";
        document.getElementById("wl-headid").style.borderBottom = "2px solid white";

        let slid = document.getElementsByClassName("sld");
        for (let i = 0; i < slid.length; i + 1) {
            slid[i].classList.add("sld2class");
            slid[i].classList.remove('sld');

        }
        document.getElementById("map-st-h4-id").style.color = "white";

        document.getElementById("upbtnimg").style.filter = "invert(1)"
        document.getElementById("diimg").style.filter = "invert(1)";


        theme = 2222;





    }
    else {



        // alert("else");

        document.getElementById("slider-mi").style.display = "block";
        document.getElementById("slider-mi").style.animation = "men 1.2s"
        setTimeout(() => {
            document.getElementById("slider-mi").style.display = "none"
        }, 1200)

        document.body.style.backgroundColor = ("white");
        document.getElementById("logoimg").style.filter = "invert(0)";
        let Atag = document.getElementsByClassName("navap");
        for (let i = 0; i < Atag.length; i + 1) {
            Atag[i].classList.add("nava");
            Atag[i].classList.remove('navap');

        }
        let span = document.querySelectorAll(".spandiv");
        span.forEach(headingspan => {
            // alert("poiuytrew")
            headingspan.style.color = "black"
        })
        document.getElementById("wishlist").innerHTML = "&#x1F5A4";
        document.getElementById("w-p-pi").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        document.getElementById("fcci").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        document.getElementById("s-f-d-id").style.boxShadow = "0 2px 10px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.10)";
        document.getElementById("s-f-d-id").style.border = "1px solid black";
        document.getElementById("t-s-s-h-id").setAttribute("style", "border-bottom: 1px solid black;border-top: 1px solid black;")
        document.getElementById("h1ecoyc").style.color = "black";
        let c1class = document.getElementsByClassName("c1");
        for (let i = 0; i < c1class.length; i++) {
            c1class[i].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        }

        let c12class = document.getElementsByClassName("c12");
        for (let i = 0; i < c12class.length; i++) {
            c12class[i].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        }

        document.getElementById("t-s-s1-2-1-id").setAttribute("style", "border-bottom: 1px solid black;border-top: 1px solid black;")
        let sliderclass = document.getElementsByClassName("slider1");
        for (let i = 0; i < sliderclass.length; i++) {
            sliderclass[i].style.color = "black";

        }

        document.getElementById("col2h4-id").style.color = "black";
        document.getElementById("Room-Rent").setAttribute("style", "border-bottom: 1px solid black;border-top: 1px solid black;")
        document.getElementById("r-r-thh4-id").style.color = "black";
        let rr1class = document.getElementsByClassName("rr1");
        for (let i = 0; i < rr1class.length; i++) {
            rr1class[i].style.border = "1px solid black";
        }

        document.getElementById("Car-rental").setAttribute("style", "border-bottom: 1px solid black;border-top: 1px solid black;")
        document.getElementById("v-h-th4-id").style.color = "black";
        document.getElementById("v-c-d1-id").style.border = "1px solid black";
        let carnclass = document.getElementsByClassName("v-c-d2h2");
        for (let i = 0; i < carnclass.length; i++) {
            carnclass[i].style.color = "black";

        }
        document.getElementById("About").setAttribute("style", "border-bottom: 1px solid black;border-top: 1px solid black;")
        document.getElementById("abouth1-id").style.color = "black";
        document.getElementById("about-ppi").style.border = "1px solid black";
        document.getElementById("about-p2h3-id").style.color = "black";
        let staclass = document.getElementsByClassName("st1");
        for (let i = 0; i < staclass.length; i++) {
            staclass[i].style.boxShadow = "0 0 8px 0 rgba(0, 0, 0, 0.5), 0 6px 21px 0 rgba(0, 0, 0, 0.19)";
        }
        document.getElementById("map-st-id").style.border = "1px solid black";
        document.getElementById("map-sth1-id").style.color = "black";
        document.getElementById("sta-cr-id").setAttribute("style", "border: 1px solid black;background-color: black;");
        document.getElementById("sta-cr1-id").setAttribute("style", "border: 1px solid black;background-color: black;");
        document.getElementById("sta-wl-id").setAttribute("style", "border: 1px solid black;background-color: black;")
        document.getElementById("sta-wl1-id").setAttribute("style", "border: 1px solid black;background-color: black;")

        let stahover = document.getElementById("sta-nav1-1-id");
        stahover.classList.remove('sta-nav1-1', 'sta-nav1-1b');
        stahover.classList.add('sta-nav1-1');

        let wishhover = document.getElementById("sta-nav1-1-w-id");
        wishhover.classList.remove('sta-nav1-1-w', 'sta-nav1-1wb');
        wishhover.classList.add('sta-nav1-1-w');
        document.getElementById("wl-mh1").style.color = "black";
        document.getElementById("wlidp").style.color = "black";
        document.getElementById("wl-headid").style.borderBottom = "2px solid black";





        let slid = document.getElementsByClassName("sld2class");
        for (let i = 0; i < slid.length; i + 1) {
            slid[i].classList.add("sld");
            slid[i].classList.remove('sld2class');

        }
        document.getElementById("map-st-h4-id").style.color = "black";
        document.getElementById("upbtnimg").style.filter = "invert(0)";
        document.getElementById("diimg").style.filter = "invert(0)";




        theme = 1111




    }





}

document.getElementById("logoimg").addEventListener("click", reload)

function reload() {
    window.location.reload();

}



function Slidest() {
    document.getElementById("Home").style.display = "none";
    document.getElementById("state-m-id").style.display = "block";
    document.getElementById("wl-m-id").style.display = "none";
    if (document.getElementById("w-t1-id1").style.display == "block") {
        window.scrollTo(0, 500);
    }
    else if (document.getElementById("w-t1-id2").style.display == "block") {
        window.scrollTo(0, 950);


    }
    else if (document.getElementById("w-t1-id3").style.display == "block") {
        window.scrollTo(0, 1400);


    }
    else {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }


}

function cutsta() {
    document.getElementById("Home").style.display = "block";
    document.getElementById("state-m-id").style.display = "none";

}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%---DL click---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

document.getElementById("DLcid").addEventListener("click", Dlc);


function Dlc() {
    window.location.reload();
}



document.getElementById("c1id-main").addEventListener("click", c1idmaindl)

function c1idmaindl() {
    document.getElementById("col1imgid").src = "DL/NM/niz9.jpg";
    document.getElementById("col1imgid2").src = "DL/NM/niz1.jpg";
    document.getElementById("col1imgid3").src = "DL/NM/niz4.jpg";

    document.getElementById("col2h4-id").innerHTML = "Nizamuddin Dargah is the dargah of the Sufi saint Khwaja Nizamuddin Auliya.Situated in theNizamuddin West area of Delhi, the dargah is visited by thousands of pilgrims every week.The site is also known for its evening qawwali devotional music sessions";


}

document.getElementById("c1id-main1").addEventListener("click", c1idmain1dl)


function c1idmain1dl() {
    document.getElementById("col1imgid").src = "DL/IG/ig7.jpg";
    document.getElementById("col1imgid2").src = "DL/IG/ig8.jpeg"
    document.getElementById("col1imgid3").src = "DL/IG/ig5.jpg"
    document.getElementById("col2h4-id").innerHTML = "The India Gate (formerly known as All India War Memorial) is a war memorial located near the Kartavya path on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Rajpath..";


}


document.getElementById("c1id-main2").addEventListener("click", c1idmain2dl)

function c1idmain2dl() {
    document.getElementById("col1imgid").src = "DL/SN/sn9.jpg";
    document.getElementById("col1imgid2").src = "DL/SN/sn2-1.jpg";
    document.getElementById("col1imgid3").src = "DL/SN/sn4.jpg";

    document.getElementById("col2h4-id").innerHTML = "Sunder Nursery, formerly called Azim Bagh or Bagh-e-Azeem, is a 16th-century heritage park complex adjacent to the Humayun's Tomb, a UNESCO World Heritage Site in Delhi. Originally known as Azim Bagh and built by the Mughals in the 16th century, it lies on the Mughal-era Grand Trunk Road, and is spread over 90 acres.";

}

document.getElementById("c12id-main").addEventListener("click", c12idmaindl)

function c12idmaindl() {
    document.getElementById("col1imgid").src = "DL/AK/ak1.jpg";
    document.getElementById("col1imgid2").src = "DL/AK/ak2.jpg";
    document.getElementById("col1imgid3").src = "DL/AK/ak3.jpg";

    document.getElementById("col2h4-id").innerHTML = "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture.";

}


document.getElementById("c12id-main1").addEventListener("click", c12idmain1dl)

function c12idmain1dl() {
    document.getElementById("col1imgid").src = "DL/QM/q-m.jpg";
    document.getElementById("col1imgid2").src = "DL/QM/qu4.jpg";
    document.getElementById("col1imgid3").src = "DL/QM/qu5.jpg";

    document.getElementById("col2h4-id").innerHTML = "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 steps It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.";


}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--wishlist=start---$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

document.getElementById("sta-nav1-1-w-id").addEventListener("click", cutwish);

function cutwish() {
    document.getElementById("Home").style.display = "block";
    document.getElementById("wl-m-id").style.display = "none";
    document.getElementById("state-m-id").style.display = "none";
}


document.getElementById("wishlist").addEventListener("click", openwish);

function openwish() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("wl-m-id").style.display = "block";
    document.getElementById("Home").style.display = "none";
    document.getElementById("state-m-id").style.display = "none";


}



// %$#%$#@#$^%$#%$#$######################4$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%


document.getElementById("btncutdiv").addEventListener("click", clearall)
let disply = document.getElementById("wlid");
let dp = 1234
const hchange = document.querySelectorAll(".heartc");
function clearall() {
    // alert("clearall");
    var wishRemove = document.querySelectorAll(".wishdiv");

    if (dp == 1234) {
        // alert("mpmp")

        wishRemove.forEach(heading => {
            heading.remove();
            // alert("poiuytrew")
        })


    }
    for (let i = 0; i < hchange.length; i++) {
        hchange[i].innerHTML = "🤍"
    }

    document.getElementById("wlid2id").style.display = "block";
    document.getElementById("wlid2id").style.display = "flex";






}


var wislis = document.querySelectorAll(".wishdiv");

const buttonwish = document.querySelectorAll(".heartc");



let nm = 1111;
let ig = 2222;
let sn = 3333;
let ak = 4444;
let qu = 5555;
let sr = 6666;
let dr = 7777;
let ddr = 8888;
let v1 = 9999;
let v2 = 1010;
let v3 = 1212;
let sr1 = 1122;
let dr1 = 2233;
let ddr1 = 3344;
let sr2 = 1112;
let dr2 = 2223;
let ddr2 = 3334;

let bl = 1111;
let cb = 2222;
let hm = 3333;
let jl = 4444;
let pu = 5555;

let lbt = 1010;
let sg = 1212;
let mll = 1313;
let mvt = 1414;
let pt = 1515;

let cn = 1000;
let kk = 2000;
let kd = 3000;
let mb = 4000;
let ot = 5000;

let srj1 = 1001;
let drj1 = 2002;
let ddrj1 = 3003;

let srj2 = 4004;
let drj2 = 5005;
let ddrj2 = 6006;

let srj3 = 7007;
let drj3 = 8008;
let ddrj3 = 9009;


let sla1 = 1001;
let dla1 = 2002;
let ddla1 = 3003;

let sla2 = 4004;
let dla2 = 5005;
let ddla2 = 6006;

let sla3 = 7007;
let dla3 = 8008;
let ddla3 = 9009;

let stn1 = 1001;
let dtn1 = 2002;
let ddtn1 = 3003;

let stn2 = 4004;
let dtn2 = 5005;
let ddtn2 = 6006;

let stn3 = 7007;
let dtn3 = 8008;
let ddtn3 = 9009;



let cv12 = 4000;
let cv22 = 5000;
let cv32 = 6000;

let cv13 = 7000;
let cv23 = 8000;
let cv33 = 9000;

let cv14 = 1100;
let cv24 = 1200;
let cv34 = 1300;

let cv15 = 1400;
let cv25 = 1500;
let cv35 = 1600;







var heartwish = 143
let heartwi = 143



buttonwish.forEach(function (buttonwish) {
    buttonwish.addEventListener("click", function () {



        if (buttonwish.id == "w1nm" && nm == 1111) {
            // alert("enter");


            if (buttonwish.innerHTML == "🤍") {
                // alert("NM");
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid1");
                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "DL/NM/niz8.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinid");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Khwaja Nizamuddin Auliya"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Nizamuddin Dargah is the dargah of the Sufi saint Khwaja Nizamuddin Auliya.Situated in theNizamuddin West area of Delhi, the dargah is visited by thousands of pilgrims every week.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)
                function dust() {
                    div.style.display = "block";
                    nm = 1212

                    if (div.style.display === "block" && nm == 1212) {
                        // alert("dustpp")
                        div.remove();
                        imgchange.src = "RP/dust1.png";
                        document.getElementById("w1nm").innerHTML = "🤍"

                        nm = 1111
                    }
                    else if (div.style.display === "none" && nm == 1111) {
                        // alert("else");
                        div.style.display = "block"


                    }



                }


                disply.style.display = "block";

                document.getElementById("wlid").style.display = "block"
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid1").appendChild(imgchange);
                document.getElementById("wishdivid1").appendChild(mainimg);
                document.getElementById("wishdivid1").appendChild(divin);
                document.getElementById("wishdivinid").appendChild(texth2);
                document.getElementById("wishdivinid").appendChild(texth4);
                document.getElementById("wishlist").style.animation = "zoom 2s infinite"
                nm = 1212
            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("else")
                // alert("work");
                document.getElementById("wishdivid1").remove();
                div.remove();

                document.getElementById("wlid2id").style.display = "block"


            }

            nm = 1111;


        }
        else if (buttonwish.id == "w2ig" && ig == 2222) {
            // alert("ig Enter")

            if (buttonwish.innerHTML == "🤍") {
                // alert("ig")
                function dust() {
                    div.style.display = "block"
                    ig = 2323

                    if (div.style.display === "block" && ig == 2323) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w2ig").innerHTML = "🤍"

                        ig = 2222
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }



                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                // div.innerHTML = "ig"
                div.setAttribute("id", "wishdivid");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "DL/IG/ig7.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidig");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "India Gate"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The India Gate (formerly known as All India War Memorial) is a war memorial located near the Kartavya path on the eastern edge of the 'ceremonial axis' of New Delhi, formerly called Rajpath.";





                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)




                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex";
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid").appendChild(imgchange);
                document.getElementById("wishdivid").appendChild(mainimg);
                document.getElementById("wishdivid").appendChild(divin);
                document.getElementById("wishdivinidig").appendChild(texth2);
                document.getElementById("wishdivinidig").appendChild(texth4);
                document.getElementById("wishlist").style.animation = "zoom 2s infinite"
                ig = 2323
            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid").remove();
                div.remove();



            }
            ig = 2222


        }
        else if (buttonwish.id == "w3sn" && sn == 3333) {
            // alert("enter sn");


            if (buttonwish.innerHTML == "🤍") {

                // alert("sn")
                function dust() {
                    sn = 3434
                    div.style.display = "block"

                    if (div.style.display === "block" && sn == 3434) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w3sn").innerHTML = "🤍"
                        sn = 3333
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }



                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid2");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "DL/SN/sn9.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsn");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Sunder Nursery"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Sunder Nursery, formerly called Azim Bagh or Bagh-e-Azeem, is a 16th-century heritage park complex adjacent to the Humayun's Tomb, a UNESCO World Heritage Site in Delhi.";



                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)


                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex";
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid2").appendChild(mainimg);
                document.getElementById("wishdivid2").appendChild(divin);
                document.getElementById("wishdivinidsn").appendChild(texth2);
                document.getElementById("wishdivinidsn").appendChild(texth4);
                document.getElementById("wishdivid2").appendChild(imgchange);
                sn = 3434
            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid2").remove();
                div.remove();

            }
            sn = 3333

        }
        else if (buttonwish.id == "w4ak" && ak == 4444) {
            // alert("enter ak")


            if (buttonwish.innerHTML == "🤍") {

                // alert("ak")
                function dust() {
                    ak = 4545
                    div.style.display = "block"
                    if (div.style.display === "block" && ak == 4545) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w4ak").innerHTML = "🤍"
                        ak = 4444
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }



                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid3");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "DL/AK/ak1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidak");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Swaminarayan Akshardham"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture.";




                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)



                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid3").appendChild(mainimg);
                document.getElementById("wishdivid3").appendChild(divin);
                document.getElementById("wishdivinidak").appendChild(texth2);
                document.getElementById("wishdivinidak").appendChild(texth4);
                document.getElementById("wishdivid3").appendChild(imgchange);
                ak = 4545

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid3").remove();
                div.remove();

            }
            ak = 4444

        }
        else if (buttonwish.id == "w5qu" && qu == 5555) {

            // alert("enter qu")

            if (buttonwish.innerHTML == "🤍") {

                // alert("qu")
                function dust() {
                    qu = 5656
                    div.style.display = "block"
                    if (div.style.display === "block" && qu == 5656) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w5qu").innerHTML = "🤍"
                        qu = 5555
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }



                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid4");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "DL/QM/qu6.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidqu");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Qutb Minar"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 steps It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.";





                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)


                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid4").appendChild(mainimg);
                document.getElementById("wishdivid4").appendChild(divin);
                document.getElementById("wishdivinidqu").appendChild(texth2);
                document.getElementById("wishdivinidqu").appendChild(texth4);
                document.getElementById("wishdivid4").appendChild(imgchange);
                qu = 5656

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid4").remove();
                div.remove();

            }
            qu = 5555;



        }
        else if (buttonwish.id == "w6sr" && sr == 6666) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sr = 6767
                    div.style.display = "block"
                    if (div.style.display === "block" && sr == 6767) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6sr").innerHTML = "🤍"
                        sr = 6666
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid5");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/s1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsr");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.    |    3.7 km from centre Ideally set in the Mahipalpur district of New Delhi, Hotel Park Suites Near Delhi Airport is situated 9.1 km from Qutub Minar, 13 km from MG Road and 15 km from Lodhi Gardens.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)




                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"



                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivid5").appendChild(mainimg);
                document.getElementById("wishdivid5").appendChild(divin);
                document.getElementById("wishdivinidsr").appendChild(texth2);
                document.getElementById("wishdivinidsr").appendChild(texth3);
                document.getElementById("wishdivinidsr").appendChild(texth4);
                document.getElementById("wishdivid5").appendChild(imgchange);




                sr = 6767

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid5").remove();
                div.remove();

            }
            sr = 6666

        }
        else if (buttonwish.id == "w7dr" && dr == 7777) {

            // alert("enter dr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("dr")
                function dust() {
                    dr = 7878
                    div.style.display = "block"
                    if (div.style.display === "block" && dr == 7878) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dr").innerHTML = "🤍"
                        dr = 7777
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }

                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid6");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/d1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddr");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.    |    3.7 km from centre Ideally set in the Mahipalpur district of New Delhi, Hotel Park Suites Near Delhi Airport is situated 9.1 km from Qutub Minar, 13 km from MG Road and 15 km from Lodhi Gardens.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg");
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust);

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid6").appendChild(mainimg);
                document.getElementById("wishdivid6").appendChild(divin);
                document.getElementById("wishdiviniddr").appendChild(texth2);
                document.getElementById("wishdiviniddr").appendChild(texth3);
                document.getElementById("wishdiviniddr").appendChild(texth4);
                document.getElementById("wishdivid6").appendChild(imgchange);
                dr = 7878

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid6").remove();
                div.remove();

            }
            dr = 7777

        }
        else if (buttonwish.id == "w8ddr" && ddr == 8888) {
            // alert("enter ddr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("ddr")
                function dust() {
                    ddr = 8989
                    div.style.display = "block"
                    if (div.style.display === "block" && ddr == 8989) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddr").innerHTML = "🤍"
                        ddr = 8888
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }

                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivid7");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/de1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddr");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.    |    3.7 km from centre Ideally set in the Mahipalpur district of New Delhi, Hotel Park Suites Near Delhi Airport is situated 9.1 km from Qutub Minar, 13 km from MG Road and 15 km from Lodhi Gardens.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivid7").appendChild(mainimg);
                document.getElementById("wishdivid7").appendChild(divin);
                document.getElementById("wishdivinidddr").appendChild(texth2);
                document.getElementById("wishdivinidddr").appendChild(texth3);
                document.getElementById("wishdivinidddr").appendChild(texth4);
                document.getElementById("wishdivid7").appendChild(imgchange);
                ddr = 8989

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivid7").remove();
                div.remove();

            }
            ddr = 8888

        }
        else if (buttonwish.id == "w9v1" && v1 == 9999) {

            // alert("enter v1");

            if (buttonwish.innerHTML == "🤍") {

                // alert("v1")
                function dust() {
                    v1 = 9898
                    div.style.display = "block"
                    if (div.style.display === "block" && v1 == 9898) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w9v1").innerHTML = "🤍"
                        v1 = 9999
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }

                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdividv1");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/sed/seor.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidv1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Sedan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Ford Aspire"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 steps It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.";




                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)




                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex";
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdividv1").appendChild(mainimg);
                document.getElementById("wishdividv1").appendChild(divin);
                document.getElementById("wishdivinidv1").appendChild(texth2);
                document.getElementById("wishdivinidv1").appendChild(texth3);
                document.getElementById("wishdivinidv1").appendChild(texth4);
                document.getElementById("wishdividv1").appendChild(imgchange);
                v1 = 9898
            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdividv1").remove();
                div.remove();

            }
            v1 = 9999

        }
        else if (buttonwish.id == "w10v2" && v2 == 1010) {
            // alert("enter v2");

            if (buttonwish.innerHTML == "🤍") {

                // alert("v2")
                function dust() {
                    v2 = 2020
                    div.style.display = "block"
                    if (div.style.display === "block" && v2 == 2020) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w10v2").innerHTML = "🤍"
                        v2 = 1010
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }

                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdividv2");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/sed/se22.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidv2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Sedan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Suzuki Ciaz"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 steps It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.";




                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)




                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdividv2").appendChild(mainimg);
                document.getElementById("wishdividv2").appendChild(divin);
                document.getElementById("wishdivinidv2").appendChild(texth2);
                document.getElementById("wishdivinidv2").appendChild(texth3);
                document.getElementById("wishdivinidv2").appendChild(texth4);
                document.getElementById("wishdividv2").appendChild(imgchange);
                v2 = 2020
            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdividv2").remove();
                div.remove();

            }
            v2 = 1010

        }
        else if (buttonwish.id == "w11v3" && v3 == 1212) {
            // alert("enter v3")

            if (buttonwish.innerHTML == "🤍") {

                // alert("v3")
                function dust() {
                    v3 = 1313
                    div.style.display = "block"
                    if (div.style.display === "block" && v3 == 1313) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w11v3").innerHTML = "🤍"
                        v3 = 1212
                    }
                    else if (div.style.display === "none") {
                        alert("else");
                        div.style.display = "block"


                    }

                }
                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdividv3");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/sed/ss5.png");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidv3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Sedan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Sakoda Slavia"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The Qutb Minar, also spelled Qutub Minar and Qutab Minar, is a minaret and 'victory tower' that forms part of the Qutb complex, which lies at the site of Delhi's oldest fortified city, Lal Kot, founded by the Tomar Rajputs. It consists of 399 steps It is a UNESCO World Heritage Site in the Mehrauli area of South Delhi, India. It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.";





                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)




                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"
                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdividv3").appendChild(mainimg);
                document.getElementById("wishdividv3").appendChild(divin);
                document.getElementById("wishdivinidv3").appendChild(texth2);
                document.getElementById("wishdivinidv3").appendChild(texth3);
                document.getElementById("wishdivinidv3").appendChild(texth4);
                document.getElementById("wishdividv3").appendChild(imgchange);
                v3 = 1313
            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdividv3").remove();

                div.remove();

            }
            v3 = 1212

        }

        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

        else if (buttonwish.id == "w6sr1" && sr1 == 1122) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sr1 = 2211
                    div.style.display = "block"
                    if (div.style.display === "block" && sr1 == 2211) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6sr1").innerHTML = "🤍"
                        sr1 = 1122
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsr1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/d2.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsr1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.|* Situated in the South Delhi district in New Delhi, 500 metres from Nizamuddin Dargha, Amidst Monuments and Serenity features free WiFi access and private parking.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsr1id").appendChild(mainimg);
                document.getElementById("wishdivsr1id").appendChild(divin);
                document.getElementById("wishdivinidsr1").appendChild(texth2);
                document.getElementById("wishdivinidsr1").appendChild(texth3);
                document.getElementById("wishdivinidsr1").appendChild(texth4);
                document.getElementById("wishdivsr1id").appendChild(imgchange);




                sr1 = 2211

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsr1id").remove();
                div.remove();

            }
            sr1 = 1122

        }

        else if (buttonwish.id == "w7dr1" && dr1 == 2233) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    dr1 = 3322
                    div.style.display = "block"
                    if (div.style.display === "block" && dr1 == 3322) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dr1").innerHTML = "🤍"
                        dr1 = 2233
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdr1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/s3.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddr1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.| * Situated in the South Delhi district in New Delhi, 500 metres from Nizamuddin Dargha, Amidst Monuments and Serenity features free WiFi access and private parking.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdr1id").appendChild(mainimg);
                document.getElementById("wishdivdr1id").appendChild(divin);
                document.getElementById("wishdiviniddr1").appendChild(texth2);
                document.getElementById("wishdiviniddr1").appendChild(texth3);
                document.getElementById("wishdiviniddr1").appendChild(texth4);
                document.getElementById("wishdivdr1id").appendChild(imgchange);

                dr1 = 3322

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdr1id").remove();
                div.remove();

            }
            dr1 = 2233

        }

        else if (buttonwish.id == "w8ddr1" && ddr1 == 3344) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddr1 = 4433
                    div.style.display = "block"
                    if (div.style.display === "block" && ddr1 == 4433) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddr1").innerHTML = "🤍"
                        ddr1 = 3344
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddr1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/de2.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddr1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.| * Situated in the South Delhi district in New Delhi, 500 metres from Nizamuddin Dargha, Amidst Monuments and Serenity features free WiFi access and private parking.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddr1id").appendChild(mainimg);
                document.getElementById("wishdivddr1id").appendChild(divin);
                document.getElementById("wishdivinidddr1").appendChild(texth2);
                document.getElementById("wishdivinidddr1").appendChild(texth3);
                document.getElementById("wishdivinidddr1").appendChild(texth4);
                document.getElementById("wishdivddr1id").appendChild(imgchange);

                ddr1 = 4433

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddr1id").remove();
                div.remove();

            }
            ddr1 = 3344

        }

        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


        else if (buttonwish.id == "w6sr2" && sr2 == 1112) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sr2 = 2221
                    div.style.display = "block"
                    if (div.style.display === "block" && sr2 == 2221) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6sr2").innerHTML = "🤍"
                        sr2 = 1112
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsr2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/s5.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsr2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms. |  * Featuring free WiFi throughout the property, Hotel Radisson In Laxmi Nagar Metro Station is situated in New Delhi, 4.4 km from Swaminarayan Akshardham . ";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsr2id").appendChild(mainimg);
                document.getElementById("wishdivsr2id").appendChild(divin);
                document.getElementById("wishdivinidsr2").appendChild(texth2);
                document.getElementById("wishdivinidsr2").appendChild(texth3);
                document.getElementById("wishdivinidsr2").appendChild(texth4);
                document.getElementById("wishdivsr2id").appendChild(imgchange);

                sr2 = 2221

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsr2id").remove();
                div.remove();

            }
            sr2 = 1112

        }

        else if (buttonwish.id == "w7dr2" && dr2 == 2223) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    dr2 = 3332
                    div.style.display = "block"
                    if (div.style.display === "block" && dr2 == 3332) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dr2").innerHTML = "🤍"
                        dr2 = 2223
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdr2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/d4.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddr2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | DL"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms. | * Featuring free WiFi throughout the property, Hotel Radisson In Laxmi Nagar Metro Station is situated in New Delhi, 4.4 km from Swaminarayan Akshardham .";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdr2id").appendChild(mainimg);
                document.getElementById("wishdivdr2id").appendChild(divin);
                document.getElementById("wishdiviniddr2").appendChild(texth2);
                document.getElementById("wishdiviniddr2").appendChild(texth3);
                document.getElementById("wishdiviniddr2").appendChild(texth4);
                document.getElementById("wishdivdr2id").appendChild(imgchange);

                dr2 = 3332

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdr2id").remove();
                div.remove();

            }
            dr2 = 2223

        }

        else if (buttonwish.id == "w8ddr2" && ddr2 == 3334) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    ddr2 = 4443
                    div.style.display = "block"
                    if (div.style.display === "block" && ddr2 == 4443) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddr2").innerHTML = "🤍"
                        ddr2 = 3334
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddr2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/de3.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddr2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.| * Featuring free WiFi throughout the property, Hotel Radisson In Laxmi Nagar Metro Station is situated in New Delhi, 4.4 km from Swaminarayan Akshardham .";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddr2id").appendChild(mainimg);
                document.getElementById("wishdivddr2id").appendChild(divin);
                document.getElementById("wishdivinidddr2").appendChild(texth2);
                document.getElementById("wishdivinidddr2").appendChild(texth3);
                document.getElementById("wishdivinidddr2").appendChild(texth4);
                document.getElementById("wishdivddr2id").appendChild(imgchange);

                ddr2 = 4443

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddr2id").remove();
                div.remove();

            }
            ddr2 = 3334

        }
        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&--RJ-hotells1--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

        else if (buttonwish.id == "w6srj1" && srj1 == 1001) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    srj1 = 1011
                    div.style.display = "block"
                    if (div.style.display === "block" && srj1 == 1011) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6srj1").innerHTML = "🤍"
                        srj1 = 1001
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsrj1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/las.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsrj1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 3.7 km from centre Ideally set in the Rajasthan , Hotel Park Suites Rajasthan Airport is situated 9.1 km from Hawa Mahal. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsrj1id").appendChild(mainimg);
                document.getElementById("wishdivsrj1id").appendChild(divin);
                document.getElementById("wishdivinidsrj1").appendChild(texth2);
                document.getElementById("wishdivinidsrj1").appendChild(texth3);
                document.getElementById("wishdivinidsrj1").appendChild(texth4);
                document.getElementById("wishdivsrj1id").appendChild(imgchange);

                srj1 = 1011

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsrj1id").remove();
                div.remove();

            }
            srj1 = 1001

        }

        else if (buttonwish.id == "w7drj1" && drj1 == 2002) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    drj1 = 2022
                    div.style.display = "block"
                    if (div.style.display === "block" && drj1 == 2022) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7drj1").innerHTML = "🤍"
                        drj1 = 2002
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdrj1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/lad.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddrj1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 3.7 km from centre Ideally set in the Rajasthan , Hotel Park Suites Rajasthan Airport is situated 9.1 km from Hawa Mahal. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdrj1id").appendChild(mainimg);
                document.getElementById("wishdivdrj1id").appendChild(divin);
                document.getElementById("wishdiviniddrj1").appendChild(texth2);
                document.getElementById("wishdiviniddrj1").appendChild(texth3);
                document.getElementById("wishdiviniddrj1").appendChild(texth4);
                document.getElementById("wishdivdrj1id").appendChild(imgchange);

                drj1 = 2022

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdrj1id").remove();
                div.remove();

            }
            drj1 = 2002

        }
        else if (buttonwish.id == "w8ddrj1" && ddrj1 == 3003) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    ddrj1 = 3033
                    div.style.display = "block"
                    if (div.style.display === "block" && ddrj1 == 3033) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddrj1").innerHTML = "🤍"
                        ddrj1 = 3003
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddrj1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/ladd.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddrj1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 3.7 km from centre Ideally set in the Rajasthan , Hotel Park Suites Rajasthan Airport is situated 9.1 km from Hawa Mahal. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddrj1id").appendChild(mainimg);
                document.getElementById("wishdivddrj1id").appendChild(divin);
                document.getElementById("wishdivinidddrj1").appendChild(texth2);
                document.getElementById("wishdivinidddrj1").appendChild(texth3);
                document.getElementById("wishdivinidddrj1").appendChild(texth4);
                document.getElementById("wishdivddrj1id").appendChild(imgchange);

                ddrj1 = 3033

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddrj1id").remove();
                div.remove();

            }
            ddrj1 = 3003

        }

        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&--RJ-hotells2--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

        else if (buttonwish.id == "w6srj2" && srj2 == 4004) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    srj2 = 4044
                    div.style.display = "block"
                    if (div.style.display === "block" && srj2 == 4044) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6srj2").innerHTML = "🤍"
                        srj2 = 4004
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsrj2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/rjs1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsrj2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Situated in the in Rajasthan, 4.1 km from Blue city, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivsrj2id").appendChild(mainimg);
                document.getElementById("wishdivsrj2id").appendChild(divin);
                document.getElementById("wishdivinidsrj2").appendChild(texth2);
                document.getElementById("wishdivinidsrj2").appendChild(texth3);
                document.getElementById("wishdivinidsrj2").appendChild(texth4);
                document.getElementById("wishdivsrj2id").appendChild(imgchange);

                srj2 = 4044

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsrj2id").remove();
                div.remove();

            }
            srj2 = 4004

        }

        else if (buttonwish.id == "w7drj2" && drj2 == 5005) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    drj2 = 5055
                    div.style.display = "block"
                    if (div.style.display === "block" && drj2 == 5055) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7drj2").innerHTML = "🤍"
                        drj2 = 5005
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdrj2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/rjd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddrj2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Situated in the in Rajasthan, 4.1 km from Blue city, Amidst Monuments and Serenity features free WiFi access and private parking.  | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdrj2id").appendChild(mainimg);
                document.getElementById("wishdivdrj2id").appendChild(divin);
                document.getElementById("wishdiviniddrj2").appendChild(texth2);
                document.getElementById("wishdiviniddrj2").appendChild(texth3);
                document.getElementById("wishdiviniddrj2").appendChild(texth4);
                document.getElementById("wishdivdrj2id").appendChild(imgchange);




                drj2 = 5055

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdrj2id").remove();
                div.remove();

            }
            drj2 = 5005

        }

        else if (buttonwish.id == "w8ddrj2" && ddrj2 == 6006) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddrj2 = 6066
                    div.style.display = "block"
                    if (div.style.display === "block" && ddrj2 == 6066) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddrj2").innerHTML = "🤍"
                        ddrj2 = 6006
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddrj2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/rjdd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddrj2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Situated in the in Rajasthan, 4.1 km from Blue city, Amidst Monuments and Serenity features free WiFi access and private parking.  | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddrj2id").appendChild(mainimg);
                document.getElementById("wishdivddrj2id").appendChild(divin);
                document.getElementById("wishdivinidddrj2").appendChild(texth2);
                document.getElementById("wishdivinidddrj2").appendChild(texth3);
                document.getElementById("wishdivinidddrj2").appendChild(texth4);
                document.getElementById("wishdivddrj2id").appendChild(imgchange);

                ddrj2 = 6066

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddrj2id").remove();
                div.remove();

            }
            ddrj2 = 6006

        }

        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&--RJ-hotells3--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        else if (buttonwish.id == "w6srj3" && srj3 == 7007) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    srj3 = 7077
                    div.style.display = "block"
                    if (div.style.display === "block" && srj3 == 7077) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6srj3").innerHTML = "🤍"
                        srj3 = 7007
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsrj3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/rjs2.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsrj3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Featuring free WiFi throughout the property, Hotel Radisson In jodhpur  in Rajasthan, 4.4 km from Swaminarayan Akshardham . |* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsrj3id").appendChild(mainimg);
                document.getElementById("wishdivsrj3id").appendChild(divin);
                document.getElementById("wishdivinidsrj3").appendChild(texth2);
                document.getElementById("wishdivinidsrj3").appendChild(texth3);
                document.getElementById("wishdivinidsrj3").appendChild(texth4);
                document.getElementById("wishdivsrj3id").appendChild(imgchange);

                srj3 = 7077

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsrj3id").remove();
                div.remove();

            }
            srj3 = 7007

        }

        else if (buttonwish.id == "w7drj3" && drj3 == 8008) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    drj3 = 8088
                    div.style.display = "block"
                    if (div.style.display === "block" && drj3 == 8088) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7drj3").innerHTML = "🤍"
                        drj3 = 8008
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdrj3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/rjd2.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddrj3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = " * Featuring free WiFi throughout the property, Hotel Radisson In jodhpur  in Rajasthan, 4.4 km from Swaminarayan Akshardham .| * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdrj3id").appendChild(mainimg);
                document.getElementById("wishdivdrj3id").appendChild(divin);
                document.getElementById("wishdiviniddrj3").appendChild(texth2);
                document.getElementById("wishdiviniddrj3").appendChild(texth3);
                document.getElementById("wishdiviniddrj3").appendChild(texth4);
                document.getElementById("wishdivdrj3id").appendChild(imgchange);

                drj3 = 8088

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdrj3id").remove();
                div.remove();

            }
            drj3 = 8008

        }

        else if (buttonwish.id == "w8ddrj3" && ddrj3 == 9009) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddrj3 = 9099
                    div.style.display = "block"
                    if (div.style.display === "block" && ddrj3 == 9099) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddrj3").innerHTML = "🤍"
                        ddrj3 = 9009
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddrj3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/rjdd2.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddrj3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | RJ"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Featuring free WiFi throughout the property, Hotel Radisson In jodhpur  in Rajasthan, 4.4 km from Swaminarayan Akshardham . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg");
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust);

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddrj3id").appendChild(mainimg);
                document.getElementById("wishdivddrj3id").appendChild(divin);
                document.getElementById("wishdivinidddrj3").appendChild(texth2);
                document.getElementById("wishdivinidddrj3").appendChild(texth3);
                document.getElementById("wishdivinidddrj3").appendChild(texth4);
                document.getElementById("wishdivddrj3id").appendChild(imgchange);

                ddrj3 = 9099

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddrj3id").remove();
                div.remove();

            }
            ddrj3 = 9009

        }

        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&--LA-hotells1--&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        else if (buttonwish.id == "w6sla1" && sla1 == 1001) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sla1 = 1011
                    div.style.display = "block"
                    if (div.style.display === "block" && sla1 == 1011) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6sla1").innerHTML = "🤍"
                        sla1 = 1001
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsla1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/lthlas1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsla1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 4.8 km from centre Ideally set in the  ladakh , Hotel Park Suites ladakh Airport is situated 9.1 km from pangong tso. |* 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsla1id").appendChild(mainimg);
                document.getElementById("wishdivsla1id").appendChild(divin);
                document.getElementById("wishdivinidsla1").appendChild(texth2);
                document.getElementById("wishdivinidsla1").appendChild(texth3);
                document.getElementById("wishdivinidsla1").appendChild(texth4);
                document.getElementById("wishdivsla1id").appendChild(imgchange);

                sla1 = 1011

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsla1id").remove();
                div.remove();

            }
            sla1 = 1001

        }
        else if (buttonwish.id == "w7dla1" && dla1 == 2002) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    dla1 = 2022
                    div.style.display = "block"
                    if (div.style.display === "block" && dla1 == 2022) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dla1").innerHTML = "🤍"
                        dla1 = 2002
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdla1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/lthlad1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddla1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 4.8 km from centre Ideally set in the  ladakh , Hotel Park Suites ladakh Airport is situated 9.1 km from pangong tso. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdla1id").appendChild(mainimg);
                document.getElementById("wishdivdla1id").appendChild(divin);
                document.getElementById("wishdiviniddla1").appendChild(texth2);
                document.getElementById("wishdiviniddla1").appendChild(texth3);
                document.getElementById("wishdiviniddla1").appendChild(texth4);
                document.getElementById("wishdivdla1id").appendChild(imgchange);

                dla1 = 2022

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdla1id").remove();
                div.remove();

            }
            dla1 = 2002

        }
        else if (buttonwish.id == "w8ddla1" && ddla1 == 3003) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    ddla1 = 3033
                    div.style.display = "block"
                    if (div.style.display === "block" && ddla1 == 3033) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddla1").innerHTML = "🤍"
                        ddla1 = 3003
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddla1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/lthladd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddla1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* 4.8 km from centre Ideally set in the  ladakh , Hotel Park Suites ladakh Airport is situated 9.1 km from pangong tso. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddla1id").appendChild(mainimg);
                document.getElementById("wishdivddla1id").appendChild(divin);
                document.getElementById("wishdivinidddla1").appendChild(texth2);
                document.getElementById("wishdivinidddla1").appendChild(texth3);
                document.getElementById("wishdivinidddla1").appendChild(texth4);
                document.getElementById("wishdivddla1id").appendChild(imgchange);

                ddla1 = 3033

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddla1id").remove();
                div.remove();

            }
            ddla1 = 3003

        }
        else if (buttonwish.id == "w6sla2" && sla2 == 4004) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sla2 = 4044
                    div.style.display = "block"
                    if (div.style.display === "block" && sla2 == 4044) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6sla2").innerHTML = "🤍"
                        sla2 = 4004
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsla2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/itclas1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsla2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Situated in the in Ladakh, 5.3 km from markha valley, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsla2id").appendChild(mainimg);
                document.getElementById("wishdivsla2id").appendChild(divin);
                document.getElementById("wishdivinidsla2").appendChild(texth2);
                document.getElementById("wishdivinidsla2").appendChild(texth3);
                document.getElementById("wishdivinidsla2").appendChild(texth4);
                document.getElementById("wishdivsla2id").appendChild(imgchange);

                sla2 = 4044

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsla2id").remove();
                div.remove();

            }
            sla2 = 4004

        }
        else if (buttonwish.id == "w7dla2" && dla2 == 5005) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    dla2 = 5055
                    div.style.display = "block"
                    if (div.style.display === "block" && dla2 == 5055) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dla2").innerHTML = "🤍";
                        dla2 = 5005
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdla2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/itclad1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddla2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Situated in the in Ladakh, 5.3 km from markha valley, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdla2id").appendChild(mainimg);
                document.getElementById("wishdivdla2id").appendChild(divin);
                document.getElementById("wishdiviniddla2").appendChild(texth2);
                document.getElementById("wishdiviniddla2").appendChild(texth3);
                document.getElementById("wishdiviniddla2").appendChild(texth4);
                document.getElementById("wishdivdla2id").appendChild(imgchange);

                dla2 = 5055

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdla2id").remove();
                div.remove();

            }
            dla2 = 5005

        }
        else if (buttonwish.id == "w8ddla2" && ddla2 == 6006) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddla2 = 6066
                    div.style.display = "block"
                    if (div.style.display === "block" && ddla2 == 6066) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddla2").innerHTML = "🤍"
                        ddla2 = 6006
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddla2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/itcladd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddla2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* Situated in the in Ladakh, 5.3 km from markha valley, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddla2id").appendChild(mainimg);
                document.getElementById("wishdivddla2id").appendChild(divin);
                document.getElementById("wishdivinidddla2").appendChild(texth2);
                document.getElementById("wishdivinidddla2").appendChild(texth3);
                document.getElementById("wishdivinidddla2").appendChild(texth4);
                document.getElementById("wishdivddla2id").appendChild(imgchange);

                ddla2 = 6066

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddla2id").remove();
                div.remove();

            }
            ddla2 = 6006

        }
        else if (buttonwish.id == "w6sla3" && sla3 == 7007) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sla3 = 7077
                    div.style.display = "block"
                    if (div.style.display === "block" && sla3 == 7077) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6sla3").innerHTML = "🤍"
                        sla3 = 7007
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsla3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/rdla1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsla3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Featuring free WiFi throughout the property, Hotel Radisson near  Diskit Monastery  in Ladakh, 4.4 km from stargazing . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivsla3id").appendChild(mainimg);
                document.getElementById("wishdivsla3id").appendChild(divin);
                document.getElementById("wishdivinidsla3").appendChild(texth2);
                document.getElementById("wishdivinidsla3").appendChild(texth3);
                document.getElementById("wishdivinidsla3").appendChild(texth4);
                document.getElementById("wishdivsla3id").appendChild(imgchange);

                sla3 = 7077

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsla3id").remove();
                div.remove();

            }
            sla3 = 7007

        }
        else if (buttonwish.id == "w7dla3" && dla3 == 8008) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    dla3 = 8088
                    div.style.display = "block"
                    if (div.style.display === "block" && dla3 == 8088) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dla3").innerHTML = "🤍"
                        dla3 = 8008
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdla3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/rdlad1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddla3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Featuring free WiFi throughout the property, Hotel Radisson near  Diskit Monastery  in Ladakh, 4.4 km from stargazing . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdla3id").appendChild(mainimg);
                document.getElementById("wishdivdla3id").appendChild(divin);
                document.getElementById("wishdiviniddla3").appendChild(texth2);
                document.getElementById("wishdiviniddla3").appendChild(texth3);
                document.getElementById("wishdiviniddla3").appendChild(texth4);
                document.getElementById("wishdivdla3id").appendChild(imgchange);

                dla3 = 8088

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdla3id").remove();
                div.remove();

            }
            dla3 = 8008

        }
        else if (buttonwish.id == "w8ddla3" && ddla3 == 9009) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddla3 = 9099
                    div.style.display = "block"
                    if (div.style.display === "block" && ddla3 == 9099) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddla3").innerHTML = "🤍"
                        ddla3 = 9009
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddla3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/Lah/rdladd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddla3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | LA"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Featuring free WiFi throughout the property, Hotel Radisson near  Diskit Monastery  in Ladakh, 4.4 km from stargazing . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddla3id").appendChild(mainimg);
                document.getElementById("wishdivddla3id").appendChild(divin);
                document.getElementById("wishdivinidddla3").appendChild(texth2);
                document.getElementById("wishdivinidddla3").appendChild(texth3);
                document.getElementById("wishdivinidddla3").appendChild(texth4);
                document.getElementById("wishdivddla3id").appendChild(imgchange);

                ddla3 = 9099

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddla3id").remove();
                div.remove();

            }
            ddla3 = 9009

        }


        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!--TN-hotells1--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

        else if (buttonwish.id == "w6stn1" && stn1 == 1001) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    stn1 = 1011
                    div.style.display = "block"
                    if (div.style.display === "block" && stn1 == 1011) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6stn1").innerHTML = "🤍"
                        stn1 = 1001
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }


                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivstn1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/lthtns1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidstn1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "6.7 km from centre Ideally set in the  Tamil Nadu  , Hotel Park Suites Tamil Nadu Airport is situated 9.1 km from  Krishna's Butterball. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivstn1id").appendChild(mainimg);
                document.getElementById("wishdivstn1id").appendChild(divin);
                document.getElementById("wishdivinidstn1").appendChild(texth2);
                document.getElementById("wishdivinidstn1").appendChild(texth3);
                document.getElementById("wishdivinidstn1").appendChild(texth4);
                document.getElementById("wishdivstn1id").appendChild(imgchange);

                stn1 = 1011

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivstn1id").remove();
                div.remove();

            }
            stn1 = 1001

        }
        else if (buttonwish.id == "w7dtn1" && dtn1 == 2002) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    dtn1 = 2022
                    div.style.display = "block"
                    if (div.style.display === "block" && dtn1 == 2022) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dtn1").innerHTML = "🤍"
                        dtn1 = 2002
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdtn1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/lthtnd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddtn1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "6.7 km from centre Ideally set in the  Tamil Nadu  , Hotel Park Suites Tamil Nadu Airport is situated 9.1 km from  Krishna's Butterball. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdtn1id").appendChild(mainimg);
                document.getElementById("wishdivdtn1id").appendChild(divin);
                document.getElementById("wishdiviniddtn1").appendChild(texth2);
                document.getElementById("wishdiviniddtn1").appendChild(texth3);
                document.getElementById("wishdiviniddtn1").appendChild(texth4);
                document.getElementById("wishdivdtn1id").appendChild(imgchange);

                dtn1 = 2022

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdtn1id").remove();
                div.remove();

            }
            dtn1 = 2002

        }
        else if (buttonwish.id == "w8ddtn1" && ddtn1 == 3003) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddtn1 = 3033
                    div.style.display = "block"
                    if (div.style.display === "block" && ddtn1 == 3033) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddtn1").innerHTML = "🤍"
                        ddtn1 = 3003
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddtn1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/lthtndd1.jpg");


                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddtn1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Lemon Tree Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "6.7 km from centre Ideally set in the  Tamil Nadu  , Hotel Park Suites Tamil Nadu Airport is situated 9.1 km from  Krishna's Butterball. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddtn1id").appendChild(mainimg);
                document.getElementById("wishdivddtn1id").appendChild(divin);
                document.getElementById("wishdivinidddtn1").appendChild(texth2);
                document.getElementById("wishdivinidddtn1").appendChild(texth3);
                document.getElementById("wishdivinidddtn1").appendChild(texth4);
                document.getElementById("wishdivddtn1id").appendChild(imgchange);

                ddtn1 = 3033

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddtn1id").remove();
                div.remove();

            }
            ddtn1 = 3003

        }
        else if (buttonwish.id == "w6stn2" && stn2 == 4004) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    stn2 = 4044
                    div.style.display = "block"
                    if (div.style.display === "block" && stn2 == 4044) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6stn2").innerHTML = "🤍"
                        stn2 = 4004
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivstn2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/itctns1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidstn2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Situated in the in Tamil Nadu, 4.1 km from “ Kodaikanal ”, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivstn2id").appendChild(mainimg);
                document.getElementById("wishdivstn2id").appendChild(divin);
                document.getElementById("wishdivinidstn2").appendChild(texth2);
                document.getElementById("wishdivinidstn2").appendChild(texth3);
                document.getElementById("wishdivinidstn2").appendChild(texth4);
                document.getElementById("wishdivstn2id").appendChild(imgchange);

                stn2 = 4044

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivstn2id").remove();
                div.remove();

            }
            stn2 = 4004

        }
        else if (buttonwish.id == "w7dtn2" && dtn2 == 5005) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    dtn2 = 5055
                    div.style.display = "block"
                    if (div.style.display === "block" && dtn2 == 5055) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dtn2").innerHTML = "🤍"
                        dtn2 = 5005
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdtn2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/itcd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddtn2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Situated in the in Tamil Nadu, 4.1 km from “ Kodaikanal ”, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdtn2id").appendChild(mainimg);
                document.getElementById("wishdivdtn2id").appendChild(divin);
                document.getElementById("wishdiviniddtn2").appendChild(texth2);
                document.getElementById("wishdiviniddtn2").appendChild(texth3);
                document.getElementById("wishdiviniddtn2").appendChild(texth4);
                document.getElementById("wishdivdtn2id").appendChild(imgchange);

                dtn2 = 5055

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdtn2id").remove();
                div.remove();

            }
            dtn2 = 5005

        }
        else if (buttonwish.id == "w8ddtn2" && ddtn2 == 6006) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    ddtn2 = 6066
                    div.style.display = "block"
                    if (div.style.display === "block" && ddtn2 == 6066) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddtn2").innerHTML = "🤍"
                        ddtn2 = 6006
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddtn2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/itctndd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddtn2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "ITC Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Situated in the in Tamil Nadu, 4.1 km from “ Kodaikanal ”, Amidst Monuments and Serenity features free WiFi access and private parking. | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddtn2id").appendChild(mainimg);
                document.getElementById("wishdivddtn2id").appendChild(divin);
                document.getElementById("wishdivinidddtn2").appendChild(texth2);
                document.getElementById("wishdivinidddtn2").appendChild(texth3);
                document.getElementById("wishdivinidddtn2").appendChild(texth4);
                document.getElementById("wishdivddtn2id").appendChild(imgchange);

                ddtn2 = 6066

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddtn2id").remove();
                div.remove();

            }
            ddtn2 = 6006

        }
        else if (buttonwish.id == "w6stn3" && stn3 == 7007) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    stn3 = 7077
                    div.style.display = "block"
                    if (div.style.display === "block" && stn3 == 7077) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w6stn3").innerHTML = "🤍"
                        stn3 = 7007
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivstn3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/rdtns1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidstn3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Single Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Featuring free WiFi throughout the property, Hotel Radisson In Kaniyakumari  in Tamil Nadu, 4.4 km from Vivekananda Rock Memorial . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivstn3id").appendChild(mainimg);
                document.getElementById("wishdivstn3id").appendChild(divin);
                document.getElementById("wishdivinidstn3").appendChild(texth2);
                document.getElementById("wishdivinidstn3").appendChild(texth3);
                document.getElementById("wishdivinidstn3").appendChild(texth4);
                document.getElementById("wishdivstn3id").appendChild(imgchange);

                stn3 = 7077

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivstn3id").remove();
                div.remove();

            }
            stn3 = 7007

        }
        else if (buttonwish.id == "w7dtn3" && dtn3 == 8008) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {
                // alert("sr")
                function dust() {
                    dtn3 = 8088
                    div.style.display = "block"
                    if (div.style.display === "block" && dtn3 == 8088) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w7dtn3").innerHTML = "🤍"
                        dtn3 = 8008
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivdtn3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/rdtnd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdiviniddtn3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Double Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Featuring free WiFi throughout the property, Hotel Radisson In Kaniyakumari  in Tamil Nadu, 4.4 km from Vivekananda Rock Memorial . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivdtn3id").appendChild(mainimg);
                document.getElementById("wishdivdtn3id").appendChild(divin);
                document.getElementById("wishdiviniddtn3").appendChild(texth2);
                document.getElementById("wishdiviniddtn3").appendChild(texth3);
                document.getElementById("wishdiviniddtn3").appendChild(texth4);
                document.getElementById("wishdivdtn3id").appendChild(imgchange);

                dtn3 = 8088

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivdtn3id").remove();
                div.remove();

            }
            dtn3 = 8008

        }
        else if (buttonwish.id == "w8ddtn3" && ddtn3 == 9009) {
            // alert("enter sr")
            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ddtn3 = 9099
                    div.style.display = "block"
                    if (div.style.display === "block" && ddtn3 == 9099) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w8ddtn3").innerHTML = "🤍"
                        ddtn3 = 9009
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivddtn3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Tnh/rdtndd1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidddtn3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Radisson blu Hotel | TN"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Delux Room"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Featuring free WiFi throughout the property, Hotel Radisson In Kaniyakumari  in Tamil Nadu, 4.4 km from Vivekananda Rock Memorial . | * 24-Hours Security. Landlord also lives in the same premises which helps every facility. * 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there * Internet connectivity. * Housekeeping services.* Laundering services.* AC and Non-AC Rooms.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);
                document.getElementById("wishdivddtn3id").appendChild(mainimg);
                document.getElementById("wishdivddtn3id").appendChild(divin);
                document.getElementById("wishdivinidddtn3").appendChild(texth2);
                document.getElementById("wishdivinidddtn3").appendChild(texth3);
                document.getElementById("wishdivinidddtn3").appendChild(texth4);
                document.getElementById("wishdivddtn3id").appendChild(imgchange);

                ddtn3 = 9099

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivddtn3id").remove();
                div.remove();

            }
            ddtn3 = 9009

        }


        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&---RJ----&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


        else if (buttonwish.id == "w1bl" && bl == 1111) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    bl = 2222
                    div.style.display = "block"
                    if (div.style.display === "block" && bl == 2222) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w1bl").innerHTML = "🤍"
                        bl = 1111
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivblid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/BC/bc3.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidbl");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Rajasthan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Blue City"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that’s now a museum, displaying weapons, paintings and elaborate royal palanquins (sedan chairs). Set on on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivblid").appendChild(mainimg);
                document.getElementById("wishdivblid").appendChild(divin);
                document.getElementById("wishdivinidbl").appendChild(texth2);
                document.getElementById("wishdivinidbl").appendChild(texth3);
                document.getElementById("wishdivinidbl").appendChild(texth4);
                document.getElementById("wishdivblid").appendChild(imgchange);

                bl = 2222

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivblid").remove();
                div.remove();

            }
            bl = 1111

        }

        else if (buttonwish.id == "w2cb" && cb == 2222) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cb = 3333
                    div.style.display = "block"
                    if (div.style.display === "block" && cb == 3333) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w2cb").innerHTML = "🤍"
                        cb = 2222
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivcbid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/CSW/csw1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidcb");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Rajasthan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Chand Baori (stepwell)"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Chand Baori (stepwell) in the Abhaneri village is one of the oldest and most popular attractions in Rajasthan. It was built by King Chanda of the Nikumbha Dynasty in 9th century AD. One of the largest stepwells in the world, Chand Baori was built to conserve water and provide a respite from the intense heat.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"


                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivcbid").appendChild(mainimg);
                document.getElementById("wishdivcbid").appendChild(divin);
                document.getElementById("wishdivinidcb").appendChild(texth2);
                document.getElementById("wishdivinidcb").appendChild(texth3);
                document.getElementById("wishdivinidcb").appendChild(texth4);
                document.getElementById("wishdivcbid").appendChild(imgchange);

                cb = 3333

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivcbid").remove();
                div.remove();

            }
            cb = 2222
        }

        else if (buttonwish.id == "w3hm" && hm == 3333) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    hm = 4545
                    div.style.display = "block"
                    if (div.style.display === "block" && hm == 4545) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w3hm").innerHTML = "🤍"
                        hm = 3333
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivhmid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/H/hawa-m1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidhm");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Rajasthan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Hawa Mahal"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The five-storey building looks like a honeycomb of a beehive and it is always windy inside, owing to the numerous windows and jharokhas.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivhmid").appendChild(mainimg);
                document.getElementById("wishdivhmid").appendChild(divin);
                document.getElementById("wishdivinidhm").appendChild(texth2);
                document.getElementById("wishdivinidhm").appendChild(texth3);
                document.getElementById("wishdivinidhm").appendChild(texth4);
                document.getElementById("wishdivhmid").appendChild(imgchange);

                hm = 4545

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivhmid").remove();
                div.remove();

            }
            hm = 3333
        }

        else if (buttonwish.id == "w4jl" && jl == 4444) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    jl = 5656
                    div.style.display = "block"
                    if (div.style.display === "block" && jl == 5656) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w4jl").innerHTML = "🤍"
                        jl = 4444
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivjlid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/JAS/jas3.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidjl");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Rajasthan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Jaisalmer"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Jaisalmer is a former medieval trading center and a princely state in the western Indian state of Rajasthan, in the heart of the Thar Desert. Known as the 'Golden City,' it's distinguished by its yellow sandstone architecture. Dominating the skyline is Jaisalmer Fort, a sprawling hilltop citadel buttressed by 99 bastions. Behind its massive walls stand the ornate Maharaja's Palace and intricately carved Jain temples.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivjlid").appendChild(mainimg);
                document.getElementById("wishdivjlid").appendChild(divin);
                document.getElementById("wishdivinidjl").appendChild(texth2);
                document.getElementById("wishdivinidjl").appendChild(texth3);
                document.getElementById("wishdivinidjl").appendChild(texth4);
                document.getElementById("wishdivjlid").appendChild(imgchange);

                jl = 5656

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivjlid").remove();
                div.remove();

            }
            jl = 4444
        }

        else if (buttonwish.id == "w5pu" && pu == 5555) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    pu = 6767
                    div.style.display = "block"
                    if (div.style.display === "block" && pu == 6767) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w5pu").innerHTML = "🤍"
                        pu = 5555
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivpuid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RJ/PU/pushkar.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidpu");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Rajasthan"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Pushkar"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Pushkar is a temple town, near Ajmer City and headquarters of Pushkar tehsil in the Ajmer district in the Indian state of Rajasthan. It is situated about 10 km northwest of Ajmer and about 150 kilometres southwest of Jaipur. It is a pilgrimage site for Hindus and Sikhs. Pushkar has many temples.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivpuid").appendChild(mainimg);
                document.getElementById("wishdivpuid").appendChild(divin);
                document.getElementById("wishdivinidpu").appendChild(texth2);
                document.getElementById("wishdivinidpu").appendChild(texth3);
                document.getElementById("wishdivinidpu").appendChild(texth4);
                document.getElementById("wishdivpuid").appendChild(imgchange);

                pu = 6767

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivpuid").remove();
                div.remove();

            }
            pu = 5555
        }


        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&---LD----&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

        else if (buttonwish.id == "w1lbt" && lbt == 1010) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    lbt = 2020
                    div.style.display = "block"
                    if (div.style.display === "block" && lbt == 2020) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w1lbt").innerHTML = "🤍"
                        lbt = 1010
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivlbtid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/LBT/lbt1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidlbt");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Ladakh"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Ladakh Bike Tour"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Talking about the first things first, every biker must give his or her total attention to their first love, which is their bike. One must be very careful and picky when it comes to choosing their Leh Ladakh road trip bike. So whenever you’re choosing a bike for any road trip, make sure you go for suitability more than popularity. Consider it one of the most vital aspects of your Leh Ladakh bike trip plan!.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivlbtid").appendChild(mainimg);
                document.getElementById("wishdivlbtid").appendChild(divin);
                document.getElementById("wishdivinidlbt").appendChild(texth2);
                document.getElementById("wishdivinidlbt").appendChild(texth3);
                document.getElementById("wishdivinidlbt").appendChild(texth4);
                document.getElementById("wishdivlbtid").appendChild(imgchange);

                lbt = 2020

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivlbtid").remove();
                div.remove();

            }
            lbt = 1010
        }

        else if (buttonwish.id == "w2sg" && sg == 1212) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    sg = 2121
                    div.style.display = "block"
                    if (div.style.display === "block" && sg == 2121) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w2sg").innerHTML = "🤍"
                        sg = 1212
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsgid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/SG/stargazing.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsg");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Ladakh"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Stargazing"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Leh-Ladakh, as already mentioned earlier, is a must visit place for all photography lovers – especially, Astro-photographers! The Major reason why Ladakh is a favourite among astrophotographers is because it provides clear night skies to complement the scenic beauty. Cities don’t generally have such pellucid skies owing to the pollution around.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivsgid").appendChild(mainimg);
                document.getElementById("wishdivsgid").appendChild(divin);
                document.getElementById("wishdivinidsg").appendChild(texth2);
                document.getElementById("wishdivinidsg").appendChild(texth3);
                document.getElementById("wishdivinidsg").appendChild(texth4);
                document.getElementById("wishdivsgid").appendChild(imgchange);

                sg = 2121

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsgid").remove();
                div.remove();

            }
            sg = 1212
        }

        else if (buttonwish.id == "w3mll" && mll == 1313) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    mll = 3131
                    div.style.display = "block"
                    if (div.style.display === "block" && mll == 3131) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w3mll").innerHTML = "🤍"
                        mll = 1313
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivmllid");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/MLLD/mlll1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidmll");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Ladakh"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Magical leh Ladakh"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The Magical Ladakh Tour is one of the best Leh Ladakh tour packages to unravel the mesmeric beauty of the ‘Land of High Passes’. Originating from the scenic locales of Leh, it takes the visitors on a captivating tour to some of the most gorgeous and captivating places to visit in Ladakh.";






                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)




                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"



                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivmllid").appendChild(mainimg);
                document.getElementById("wishdivmllid").appendChild(divin);
                document.getElementById("wishdivinidmll").appendChild(texth2);
                document.getElementById("wishdivinidmll").appendChild(texth3);
                document.getElementById("wishdivinidmll").appendChild(texth4);
                document.getElementById("wishdivmllid").appendChild(imgchange);




                mll = 3131

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivmllid").remove();
                div.remove();

            }
            mll = 1313
        }

        else if (buttonwish.id == "w4mvt" && mvt == 1414) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    mvt = 4141
                    div.style.display = "block"
                    if (div.style.display === "block" && mvt == 4141) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w4mvt").innerHTML = "🤍"
                        mvt = 1414
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivmvtid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/MVT/mvt4.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidmvt");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Ladakh"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Markha Valley Trek"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Set in the arid cold desert of Ladakh, Markha is a stunning river valley in Hemis National Park. The trek through Markha Valley is very picturesque and full of adventure.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivmvtid").appendChild(mainimg);
                document.getElementById("wishdivmvtid").appendChild(divin);
                document.getElementById("wishdivinidmvt").appendChild(texth2);
                document.getElementById("wishdivinidmvt").appendChild(texth3);
                document.getElementById("wishdivinidmvt").appendChild(texth4);
                document.getElementById("wishdivmvtid").appendChild(imgchange);

                mvt = 4141

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivmvtid").remove();
                div.remove();

            }
            mvt = 1414
        }

        else if (buttonwish.id == "w5pt" && pt == 1515) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    pt = 5151
                    div.style.display = "block"
                    if (div.style.display === "block" && pt == 5151) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w5pt").innerHTML = "🤍"
                        pt = 1515
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivptid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "LD/PL/pl1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidpt");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Ladakh"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Pangong Tso"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "The most popular tourist attraction in Ladakh, Pangong lake is an endorheic (landlocked) lake situated at 4350 meters. The lake does not remain blue throughout the year or even the day, rather it changes colours from azure to light blue to green and grey too! It is famous amongst tourists as Ladakh lake, the spot where the Bollywood movie '3 Idiots' was shot.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivptid").appendChild(mainimg);
                document.getElementById("wishdivptid").appendChild(divin);
                document.getElementById("wishdivinidpt").appendChild(texth2);
                document.getElementById("wishdivinidpt").appendChild(texth3);
                document.getElementById("wishdivinidpt").appendChild(texth4);
                document.getElementById("wishdivptid").appendChild(imgchange);

                pt = 5151

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivptid").remove();
                div.remove();

            }
            pt = 1515
        }


        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&---LD-END----&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


        // *&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&---TN----&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


        else if (buttonwish.id == "w1cn" && cn == 1000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cn = 1100
                    div.style.display = "block"
                    if (div.style.display === "block" && cn == 1100) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w1cn").innerHTML = "🤍"
                        cn = 1000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivcnid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Coonoor/hv.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidcn");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Tamil Nadu"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Coonoor"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Although there is an endless list of activities in Coonoor, those searching for some adventure should embark on an exciting trek through the town’s mysterious rainforests. Hidden Valley is a haven for adventure and photography enthusiasts and a nice place for a picnic with family and friends. It is one of the most unusual things to do in Coonoor.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivcnid").appendChild(mainimg);
                document.getElementById("wishdivcnid").appendChild(divin);
                document.getElementById("wishdivinidcn").appendChild(texth2);
                document.getElementById("wishdivinidcn").appendChild(texth3);
                document.getElementById("wishdivinidcn").appendChild(texth4);
                document.getElementById("wishdivcnid").appendChild(imgchange);

                cn = 1100

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivcnid").remove();
                div.remove();

            }
            cn = 1000
        }


        else if (buttonwish.id == "w2kk" && kk == 2000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    kk = 2100
                    div.style.display = "block"
                    if (div.style.display === "block" && kk == 2100) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w2kk").innerHTML = "🤍"
                        kk = 2000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivkkid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Kanyakumari/vrm.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidkk");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Tamil Nadu"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Kanyakumari"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip. The memorial stands on one of the two rocks located about 500 meters off mainland of Vavathurai. It was built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivkkid").appendChild(mainimg);
                document.getElementById("wishdivkkid").appendChild(divin);
                document.getElementById("wishdivinidkk").appendChild(texth2);
                document.getElementById("wishdivinidkk").appendChild(texth3);
                document.getElementById("wishdivinidkk").appendChild(texth4);
                document.getElementById("wishdivkkid").appendChild(imgchange);

                kk = 2100

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivkkid").remove();
                div.remove();

            }
            kk = 2000
        }

        else if (buttonwish.id == "w3kd" && kd == 3000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    kd = 3100
                    div.style.display = "block"
                    if (div.style.display === "block" && kd == 3100) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w3kd").innerHTML = "🤍"
                        kd = 3000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivkdid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Kodaikanal/water fall.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidkd");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Tamil Nadu"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Kodaikanal"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Coakers Walk is a beautiful man-made one-kilometre-long walking plaza built on the mountains in the mesmerizing city of Kodaikanal. The lovely path of Coakers Walk that curves by the edge of the gorgeous mountain have been constructed mainly for morning and evening walks. One can also choose to ride a bicycle to explore the scenic location. . It costs INR 30 per hour for adults and INR 20 per hour for children.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivkdid").appendChild(mainimg);
                document.getElementById("wishdivkdid").appendChild(divin);
                document.getElementById("wishdivinidkd").appendChild(texth2);
                document.getElementById("wishdivinidkd").appendChild(texth3);
                document.getElementById("wishdivinidkd").appendChild(texth4);
                document.getElementById("wishdivkdid").appendChild(imgchange);

                kd = 3100

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivkdid").remove();
                div.remove();

            }
            kd = 3000
        }

        else if (buttonwish.id == "w4mb" && mb == 4000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    mb = 4100
                    div.style.display = "block"
                    if (div.style.display === "block" && mb == 4100) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w4mb").innerHTML = "🤍"
                        mb = 4000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivmbid");


                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Mahabalipuram/kbb.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidmb");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Tamil Nadu"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Mahabalipuram"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Krishna's Butterball is a gigantic balancing rock, granite-boulder resting on a short incline in the historical coastal resort town of Mamallapuram in Tamil Nadu state of India.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivmbid").appendChild(mainimg);
                document.getElementById("wishdivmbid").appendChild(divin);
                document.getElementById("wishdivinidmb").appendChild(texth2);
                document.getElementById("wishdivinidmb").appendChild(texth3);
                document.getElementById("wishdivinidmb").appendChild(texth4);
                document.getElementById("wishdivmbid").appendChild(imgchange);

                mb = 4100

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivmbid").remove();
                div.remove();

            }
            mb = 4000
        }

        else if (buttonwish.id == "w5ot" && ot == 5000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    ot = 5100
                    div.style.display = "block"
                    if (div.style.display === "block" && ot == 5100) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w5ot").innerHTML = "🤍"
                        ot = 5000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivotid");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "TN/Ooty/otyn1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidot");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "Tamil Nadu"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Ooty"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state. Founded as a British Raj summer resort, it retains a working steam railway line. Other reminders of its colonial past include Stone House, a 19th-century residence, and the circa-1829 St. Stephen’s Church. Its 55-acre Government Botanical Garden lies on the slopes of Doddabetta Peak.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivotid").appendChild(mainimg);
                document.getElementById("wishdivotid").appendChild(divin);
                document.getElementById("wishdivinidot").appendChild(texth2);
                document.getElementById("wishdivinidot").appendChild(texth3);
                document.getElementById("wishdivinidot").appendChild(texth4);
                document.getElementById("wishdivotid").appendChild(imgchange);

                ot = 5100

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivotid").remove();
                div.remove();

            }
            ot = 5000
        }


        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@CAR == SEC @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



        else if (buttonwish.id == "w9v1-su" && cv12 == 4000) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv12 = 4001
                    div.style.display = "block"
                    if (div.style.display === "block" && cv12 == 4001) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w9v1-su").innerHTML = "🤍"
                        cv12 = 4000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsuv1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/suv/fsuv.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsuv1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "SUV"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Ford Explorer"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 6 Persons. | * The Ford Explorer mileage is 9.8KM/L kmpl. | * The Sefety Rating of Ford Explorer is 5 star. | * INR ₹19/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivsuv1id").appendChild(mainimg);
                document.getElementById("wishdivsuv1id").appendChild(divin);
                document.getElementById("wishdivinidsuv1").appendChild(texth2);
                document.getElementById("wishdivinidsuv1").appendChild(texth3);
                document.getElementById("wishdivinidsuv1").appendChild(texth4);
                document.getElementById("wishdivsuv1id").appendChild(imgchange);

                cv12 = 4001

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsuv1id").remove();
                div.remove();

            }
            cv12 = 4000

        }

        else if (buttonwish.id == "w10v2-su" && cv22 == 5000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv22 = 5001
                    div.style.display = "block"
                    if (div.style.display === "block" && cv22 == 5001) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w10v2-su").innerHTML = "🤍"
                        cv22 = 5000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsuv2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/suv/hsuv.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsuv2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "SUV"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Hyundai Creta"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 5 Persons. | * The hyundai creta mileage is 17.4 to 21.8 kmpl. | * The Sefety Rating of Hyundai Creta is 3 star. | * INR ₹16/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivsuv2id").appendChild(mainimg);
                document.getElementById("wishdivsuv2id").appendChild(divin);
                document.getElementById("wishdivinidsuv2").appendChild(texth2);
                document.getElementById("wishdivinidsuv2").appendChild(texth3);
                document.getElementById("wishdivinidsuv2").appendChild(texth4);
                document.getElementById("wishdivsuv2id").appendChild(imgchange);

                cv22 = 5001

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsuv2id").remove();
                div.remove();

            }
            cv22 = 5000

        }

        else if (buttonwish.id == "w11v3-su" && cv32 == 6000) {

            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv32 = 6001
                    div.style.display = "block"
                    if (div.style.display === "block" && cv32 == 6001) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w11v3-su").innerHTML = "🤍"
                        cv32 = 6000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivsuv3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/suv/rsuv1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidsuv3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "SUV"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Renault Koleos"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 5 Persons. | * The renault koleos mileage is 14.56 to 17.15 kmpl. | * The Sefety Rating of renault koleos 5 STAR . | * INR ₹21/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivsuv3id").appendChild(mainimg);
                document.getElementById("wishdivsuv3id").appendChild(divin);
                document.getElementById("wishdivinidsuv3").appendChild(texth2);
                document.getElementById("wishdivinidsuv3").appendChild(texth3);
                document.getElementById("wishdivinidsuv3").appendChild(texth4);
                document.getElementById("wishdivsuv3id").appendChild(imgchange);

                cv32 = 6001

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivsuv3id").remove();
                div.remove();

            }
            cv32 = 6000

        }

        else if (buttonwish.id == "w9v1-mu" && cv13 == 7000) {
            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv13 = 7001
                    div.style.display = "block"
                    if (div.style.display === "block" && cv13 == 7001) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w9v1-mu").innerHTML = "🤍"
                        cv13 = 7000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }

                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivmuv1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/muv/mu1.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidmuv1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "MUV"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Suzuki Eartiga"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 7 Persons.| * The Suzuki Eartiga mileage is 20.3 kmpl.| * The Sefety Rating of suzuki eartiga is 3 star.| * INR ₹18/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivmuv1id").appendChild(mainimg);
                document.getElementById("wishdivmuv1id").appendChild(divin);
                document.getElementById("wishdivinidmuv1").appendChild(texth2);
                document.getElementById("wishdivinidmuv1").appendChild(texth3);
                document.getElementById("wishdivinidmuv1").appendChild(texth4);
                document.getElementById("wishdivmuv1id").appendChild(imgchange);

                cv13 = 7001

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivmuv1id").remove();
                div.remove();

            }
            cv13 = 7000

        }

        else if (buttonwish.id == "w10v2-mu" && cv23 == 8000) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv23 = 8001
                    div.style.display = "block"
                    if (div.style.display === "block" && cv23 == 8001) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w10v2-mu").innerHTML = "🤍"
                        cv23 = 8000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivmuv2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/muv/mu4.png");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidmuv2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "MUV"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Kia Carnival"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 11 Persons.| * The Kia Carnival mileage is 13.9 kmpl.| * The Sefety Rating of Kia Carnival is 5 star.| * INR ₹25/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivmuv2id").appendChild(mainimg);
                document.getElementById("wishdivmuv2id").appendChild(divin);
                document.getElementById("wishdivinidmuv2").appendChild(texth2);
                document.getElementById("wishdivinidmuv2").appendChild(texth3);
                document.getElementById("wishdivinidmuv2").appendChild(texth4);
                document.getElementById("wishdivmuv2id").appendChild(imgchange);

                cv23 = 8001

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivmuv2id").remove();
                div.remove();

            }
            cv23 = 8000

        }

        else if (buttonwish.id == "w11v3-mu" && cv33 == 9000) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv33 = 9001
                    div.style.display = "block"
                    if (div.style.display === "block" && cv33 == 9001) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w11v3-mu").innerHTML = "🤍"
                        cv33 = 9000
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivmuv3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/muv/tmuv.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidmuv3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "MUV"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Tata Hexa"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 7 Persons.| * The Tata Hexa mileage is 14.4 kmpl.| * The Sefety Rating of Tata Hexa 4 STAR .| * INR ₹21/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivmuv3id").appendChild(mainimg);
                document.getElementById("wishdivmuv3id").appendChild(divin);
                document.getElementById("wishdivinidmuv3").appendChild(texth2);
                document.getElementById("wishdivinidmuv3").appendChild(texth3);
                document.getElementById("wishdivinidmuv3").appendChild(texth4);
                document.getElementById("wishdivmuv3id").appendChild(imgchange);

                cv33 = 9001

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivmuv3id").remove();
                div.remove();

            }
            cv33 = 9000

        }

        else if (buttonwish.id == "w9v1-lu" && cv14 == 1100) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv14 = 1101
                    div.style.display = "block"
                    if (div.style.display === "block" && cv14 == 1101) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w9v1-lu").innerHTML = "🤍"
                        cv14 = 1100
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivluv1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/lux/lu3.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidluv1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "LUXURY"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Jaguar F-Pace"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 5 Persons.| * The Jaguar F-Pace mileage is 12.9 kmpl.| * The Sefety Rating of Jaguar F-Pace is 5 star.| * INR ₹100/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivluv1id").appendChild(mainimg);
                document.getElementById("wishdivluv1id").appendChild(divin);
                document.getElementById("wishdivinidluv1").appendChild(texth2);
                document.getElementById("wishdivinidluv1").appendChild(texth3);
                document.getElementById("wishdivinidluv1").appendChild(texth4);
                document.getElementById("wishdivluv1id").appendChild(imgchange);

                cv14 = 1101

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivluv1id").remove();
                div.remove();

            }
            cv14 = 1100

        }

        else if (buttonwish.id == "w10v2-lu" && cv24 == 1200) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv24 = 1201
                    div.style.display = "block"
                    if (div.style.display === "block" && cv24 == 1201) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w10v2-lu").innerHTML = "🤍"
                        cv24 = 1200
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivluv2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/lux/blu.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidluv2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "LUXURY"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "BMW i7"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 4 Persons.| * The BMW i7 mileage is 595 to 625 Km/Full Charge.| * The Sefety Rating of BMW i7 is 5 star.| * INR ₹1000/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivluv2id").appendChild(mainimg);
                document.getElementById("wishdivluv2id").appendChild(divin);
                document.getElementById("wishdivinidluv2").appendChild(texth2);
                document.getElementById("wishdivinidluv2").appendChild(texth3);
                document.getElementById("wishdivinidluv2").appendChild(texth4);
                document.getElementById("wishdivluv2id").appendChild(imgchange);

                cv24 = 1201

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivluv2id").remove();
                div.remove();

            }
            cv24 = 1200

        }

        else if (buttonwish.id == "w11v3-lu" && cv34 == 1300) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv34 = 1301
                    div.style.display = "block"
                    if (div.style.display === "block" && cv34 == 1301) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w11v3-lu").innerHTML = "🤍"
                        cv34 = 1300
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivluv3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/lux/alu1.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidluv3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "LUXURY"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Audi A4"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 5 Persons.| * The Tata Audi A4 is 17.4 kmpl| * The Sefety Rating of Audi A4 5 STAR .| * INR ₹900/km|.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivluv3id").appendChild(mainimg);
                document.getElementById("wishdivluv3id").appendChild(divin);
                document.getElementById("wishdivinidluv3").appendChild(texth2);
                document.getElementById("wishdivinidluv3").appendChild(texth3);
                document.getElementById("wishdivinidluv3").appendChild(texth4);
                document.getElementById("wishdivluv3id").appendChild(imgchange);

                cv34 = 1301

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivluv3id").remove();
                div.remove();

            }
            cv34 = 1300

        }

        else if (buttonwish.id == "w9v1-tr" && cv15 == 1400) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv15 = 1401
                    div.style.display = "block"
                    if (div.style.display === "block" && cv15 == 1401) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w9v1-tr").innerHTML = "🤍"
                        cv15 = 1400
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivtrv1id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/trav/tra1.jpeg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidtrv1");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "TRAVELLERS"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Force Traveller"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 14 Persons.| * The Force Traveller mileage is 17 KMPL.| * The Sefety Rating of Force Traveller is 5 star.| * INR ₹--/km|depend on group size.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivtrv1id").appendChild(mainimg);
                document.getElementById("wishdivtrv1id").appendChild(divin);
                document.getElementById("wishdivinidtrv1").appendChild(texth2);
                document.getElementById("wishdivinidtrv1").appendChild(texth3);
                document.getElementById("wishdivinidtrv1").appendChild(texth4);
                document.getElementById("wishdivtrv1id").appendChild(imgchange);

                cv15 = 1401

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivtrv1id").remove();
                div.remove();

            }
            cv15 = 1400

        }

        else if (buttonwish.id == "w10v2-tr" && cv25 == 1500) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv25 = 1501
                    div.style.display = "block"
                    if (div.style.display === "block" && cv25 == 1501) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w10v2-tr").innerHTML = "🤍"
                        cv25 = 1500
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivtrv2id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/trav/tran1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidtrv2");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "TRAVELLERS"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "TOYOTA COASTER"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 29 Persons.| * The TOYOTA COASTER mileage is 20 kmpl.| * The Sefety Rating of TOYOTA COASTER is 5 star.| * INR ₹--/km|depend on group size.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivtrv2id").appendChild(mainimg);
                document.getElementById("wishdivtrv2id").appendChild(divin);
                document.getElementById("wishdivinidtrv2").appendChild(texth2);
                document.getElementById("wishdivinidtrv2").appendChild(texth3);
                document.getElementById("wishdivinidtrv2").appendChild(texth4);
                document.getElementById("wishdivtrv2id").appendChild(imgchange);

                cv25 = 1501

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivtrv2id").remove();
                div.remove();

            }
            cv25 = 1500

        }

        else if (buttonwish.id == "w11v3-tr" && cv35 == 1600) {


            // alert("enter sr")

            if (buttonwish.innerHTML == "🤍") {

                // alert("sr")
                function dust() {
                    cv35 = 1601
                    div.style.display = "block"
                    if (div.style.display === "block" && cv35 == 1601) {
                        // alert("dustpp")
                        imgchange.setAttribute("src", "RP/dust2.png");
                        div.remove();
                        document.getElementById("w11v3-tr").innerHTML = "🤍"
                        cv35 = 1600
                    }
                    else if (div.style.display === "none") {
                        // alert("else");
                        div.style.display = "block"


                    }

                }



                var div = document.createElement("div");
                div.classList.add("wishdiv");
                div.setAttribute("id", "wishdivtrv3id");

                var mainimg = document.createElement("img");
                mainimg.classList.add("wishmainimg");
                mainimg.setAttribute("src", "RP/car/trav/tralu1.jpg");

                var divin = document.createElement("div");
                divin.classList.add("wishdivin");
                divin.setAttribute("id", "wishdivinidtrv3");

                var texth2 = document.createElement("h2");
                texth2.classList.add("nm2");
                texth2.innerText = "TRAVELLERS"

                var texth3 = document.createElement("h3");
                texth3.classList.add("nm3");
                texth3.innerText = "Mercedes-Benz Sprinter"

                var texth4 = document.createElement("h4");
                texth4.classList.add("nmh4");
                texth4.innerText = "* seat up to 12 Persons.| * The TataMercedes-Benz Sprinter is 16.44 kmpl| * The Sefety Rating of Mercedes-Benz Sprinter 5 STAR .| * INR ₹--/km|depend on group size.";

                var imgchange = document.createElement("IMG");
                imgchange.classList.add("wishimg")
                imgchange.setAttribute("src", "RP/dust1.png");
                imgchange.addEventListener("click", dust)

                document.getElementById("wlid2id").style.display = "none";
                document.getElementById("wlid").style.display = "block";
                document.getElementById("wlid").style.display = "flex"

                document.getElementById("wlid").appendChild(div);

                document.getElementById("wishdivtrv3id").appendChild(mainimg);
                document.getElementById("wishdivtrv3id").appendChild(divin);
                document.getElementById("wishdivinidtrv3").appendChild(texth2);
                document.getElementById("wishdivinidtrv3").appendChild(texth3);
                document.getElementById("wishdivinidtrv3").appendChild(texth4);
                document.getElementById("wishdivtrv3id").appendChild(imgchange);

                cv35 = 1601

            }
            else if (buttonwish.innerHTML != "🤍") {
                // alert("work");
                document.getElementById("wishdivtrv3id").remove();
                div.remove();

            }
            cv35 = 1600

        }





















    });
});


// %%%%%%%%%%%%%%%%%%==heart==%%%%%%%%%%%%%%%%%%%%%%
var heart = 143

document.querySelectorAll('.heartc').forEach(element => element.addEventListener('click', event => {






    if (heart == 143 && event.target.innerText == "🤍") {
        // alert(event.target.innerText);
        // alert("if");
        event.target.innerText = "❤️";

        document.getElementById("wishlist").style.animation = "zoom 2s infinite"
        heart = 341

    }
    else if (heart == 341 && event.target.innerText == "❤️") {
        // alert("elseifwhite")
        event.target.innerText = "🤍";
        heart = 143

    }
    else if (event.target.innerText == "🤍") {

        // alert("elseifred");
        event.target.innerText = "❤️";
        document.getElementById("wishlist").style.animation = "zoom 2s infinite"




    }
    else {
        // alert("else")
        event.target.innerText = "🤍";

    }




}));

// %%%%%%%%%%%%%%%%%%==heart-end==%%%%%%%%%%%%%%%%%%%%%%


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%---DL click-end---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let wnrj=1111;
const rjwish = document.querySelectorAll(".heartc");
document.getElementById("RJcid").addEventListener("click", RJc);
function RJc() {

    if (document.getElementById("c1id-main").style.display == "none") {
        // alert("ggggg")
        document.getElementById("c1id-main").style.display = "block";
        document.getElementById("c1id-main1").style.display = "block";
        document.getElementById("c12id-main").style.display = "none";
        document.getElementById("c12id-main1").style.display = "none";

    }


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


    lawish.forEach(matchp => {


        if (matchp.id == "w1nm") {
            // alert("enter Dl")
            document.getElementById("w1nm").setAttribute("id", "w1bl");
            document.getElementById("w2ig").setAttribute("id", "w2cb");
            document.getElementById("w3sn").setAttribute("id", "w3hm");
            document.getElementById("w4ak").setAttribute("id", "w4jl");
            document.getElementById("w5qu").setAttribute("id", "w5pu");

            document.getElementById("rr1id").setAttribute("id", "rr1idrj")
            document.getElementById("rr1id1").setAttribute("id", "rr1id1rj")
            document.getElementById("rr1id2").setAttribute("id", "rr1id2rj")



        }
        else if (matchp.id == "w1lbt") {
            // alert("enterelse La")
            document.getElementById("w1lbt").setAttribute("id", "w1bl");
            document.getElementById("w2sg").setAttribute("id", "w2cb");
            document.getElementById("w3mll").setAttribute("id", "w3hm");
            document.getElementById("w4mvt").setAttribute("id", "w4jl");
            document.getElementById("w5pt").setAttribute("id", "w5pu");

            document.getElementById("rr1idla").setAttribute("id", "rr1idrj")
            document.getElementById("rr1id1la").setAttribute("id", "rr1id1rj")
            document.getElementById("rr1id2la").setAttribute("id", "rr1id2rj")



        }
        else if (matchp.id == "w1cn") {
            // alert("enterelse Tn")
            document.getElementById("w1cn").setAttribute("id", "w1bl");
            document.getElementById("w2kk").setAttribute("id", "w2cb");
            document.getElementById("w3kd").setAttribute("id", "w3hm");
            document.getElementById("w4mb").setAttribute("id", "w4jl");
            document.getElementById("w5ot").setAttribute("id", "w5pu");

            document.getElementById("rr1idtn").setAttribute("id", "rr1idrj")
            document.getElementById("rr1id1tn").setAttribute("id", "rr1id1rj")
            document.getElementById("rr1id2tn").setAttribute("id", "rr1id2rj")



        }


    })


    document.getElementById("w1bl").innerHTML = "🤍"
    document.getElementById("w2cb").innerHTML = "🤍"
    document.getElementById("w3hm").innerHTML = "🤍"
    document.getElementById("w4jl").innerHTML = "🤍"
    document.getElementById("w5pu").innerHTML = "🤍"

    // alert("hello");
    document.getElementById("state-m-id").style.display = "none";
    document.getElementById("Home").style.display = "block";


    var img = document.getElementById('w-t1-id1');

    var slides = ['RJ/BC/bc2.jpg', "RJ/CSW/csw1.jpg", "RJ/H/hawa-m1.jpg", "RJ/JAS/jas2.jpeg", "RJ/JAS/jas1.jpg"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dff src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 4000);

    if (PHONE.matches) {
        // alert("wwwwwwwwwww")
        document.getElementById("w-th1-id").style.fontSize = "large";
        wnrj = 2222
    }

    document.getElementById("w-t1-id1").style.display = "block";
    document.getElementById("w-t1-id").style.display = "none";
    document.getElementById("w-t1-id2").style.display = "none";
    document.getElementById("w-t1-id3").style.display = "none";

    document.getElementsByClassName("spandiv").innerHTML = "RJ"

    document.getElementById("c2imgid").src = "RJ/JAS/jas3.jpeg";
    document.getElementById("c2-tid").innerHTML = "“ Jaisalmer ”";
    document.getElementById("c2imgid1").src = "RJ/PU/pushkar.jpg";
    document.getElementById("c2-tid1").innerHTML = "“ Pushkar ”";
    document.getElementById("w-th1-id").innerHTML = "“A land where culture thrives.”";
    document.getElementById("c1imgid").src = "RJ/BC/bc3.jpg";
    document.getElementById("c1-tid").innerHTML = "“ Blue City ”";
    document.getElementById("c1imgid1").src = "RJ/CSW/csw1.jpg";
    document.getElementById("c1-tid1").innerHTML = "“ Chand Baori ('step well') ”";
    document.getElementById("c1imgid2").src = "RJ/H/hawa-m1.jpg";
    document.getElementById("c1-tid2").innerHTML = "“ Hawa Mahal ”";


    document.getElementById("col1imgid").src = "RJ/BC/bc3.jpg";
    document.getElementById("col1imgid2").src = "RJ/BC/mf.jpg";
    document.getElementById("col1imgid3").src = "RJ/BC/bc2.jpg";

    document.getElementById("col2h4-id").innerHTML = "jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that’s now a museum, displaying weapons, paintings and elaborate royal palanquins (sedan chairs). Set on on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue.";


    document.getElementById("c1id-main").addEventListener("click", c1idmainRJ)
    document.getElementById("c1imgid").setAttribute('title', 'Blue City');

    function c1idmainRJ() {
        document.getElementById("col1imgid").src = "RJ/BC/bc3.jpg";
        document.getElementById("col1imgid2").src = "RJ/BC/mf.jpg";
        document.getElementById("col1imgid3").src = "RJ/BC/bc2.jpg";

        document.getElementById("col2h4-id").innerHTML = "jodhpur is a city in the Thar Desert of the northwest Indian state of Rajasthan. Its 15th-century Mehrangarh Fort is a former palace that’s now a museum, displaying weapons, paintings and elaborate royal palanquins (sedan chairs). Set on on a rocky outcrop, the fort overlooks the walled city, where many buildings are painted the city’s iconic shade of blue.";


    }


    document.getElementById("c1id-main1").addEventListener("click", c1idmain1RJ)
    document.getElementById("c1imgid1").setAttribute('title', 'Chand Baori');

    function c1idmain1RJ() {
        document.getElementById("col1imgid").src = "RJ/CSW/csw1.jpg";
        document.getElementById("col1imgid2").src = "RJ/CSW/csw.jpg";
        document.getElementById("col1imgid3").src = "RJ/CSW/csw2.jpg";

        document.getElementById("col2h4-id").innerHTML = "Chand Baori (stepwell) in the Abhaneri village is one of the oldest and most popular attractions in Rajasthan. It was built by King Chanda of the Nikumbha Dynasty in 9th century AD. One of the largest stepwells in the world, Chand Baori was built to conserve water and provide a respite from the intense heat.";



    }


    document.getElementById("c1id-main2").addEventListener("click", c1idmain2RJ)
    document.getElementById("c1imgid2").setAttribute('title', 'Hawa Mahal');

    function c1idmain2RJ() {
        document.getElementById("col1imgid").src = "RJ/H/hawa-m1.jpg";
        document.getElementById("col1imgid2").src = "RJ/H/hawa-m.jpg";
        document.getElementById("col1imgid3").src = "RJ/H/hawa.jpg";

        document.getElementById("col2h4-id").innerHTML = "The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The five-storey building looks like a honeycomb of a beehive and it is always windy inside, owing to the numerous windows and jharokhas.";



    }


    document.getElementById("c12id-main").addEventListener("click", c12idmainRJ)
    document.getElementById("c2imgid").setAttribute('title', 'Jaisalmer');

    function c12idmainRJ() {
        document.getElementById("col1imgid").src = "RJ/JAS/jas3.jpeg";
        document.getElementById("col1imgid2").src = "RJ/JAS/jas1.jpg";
        document.getElementById("col1imgid3").src = "RJ/JAS/ph.jpg";

        document.getElementById("col2h4-id").innerHTML = "Jaisalmer is a former medieval trading center and a princely state in the western Indian state of Rajasthan, in the heart of the Thar Desert. Known as the 'Golden City,' it's distinguished by its yellow sandstone architecture. Dominating the skyline is Jaisalmer Fort, a sprawling hilltop citadel buttressed by 99 bastions. Behind its massive walls stand the ornate Maharaja's Palace and intricately carved Jain temples.";

    }


    document.getElementById("c12id-main1").addEventListener("click", c12idmain1RJ)
    document.getElementById("c2imgid1").setAttribute('title', 'Pushkar');

    function c12idmain1RJ() {
        document.getElementById("col1imgid").src = "RJ/PU/pushkar.jpg";
        document.getElementById("col1imgid2").src = "RJ/PU/PushkarFairbyTrain.jpg";
        document.getElementById("col1imgid3").src = "RJ/PU/wep";

        document.getElementById("col2h4-id").innerHTML = "Pushkar is a temple town, near Ajmer City and headquarters of Pushkar tehsil in the Ajmer district in the Indian state of Rajasthan. It is situated about 10 km northwest of Ajmer and about 150 kilometres southwest of Jaipur. It is a pilgrimage site for Hindus and Sikhs. Pushkar has many temples.";


    }

    let span = document.querySelectorAll(".spandiv");
    span.forEach(headingspan => {
        // alert("poiuytrew")
        headingspan.innerHTML = "(RJ)"
    })

    document.getElementById("h1imgid").src = "RJ/Rjh/ltrj.jpg";
    document.getElementById("h1imgid1").src = "RJ/Rjh/itcrj.jpg";
    document.getElementById("h1imgid2").src = "RJ/Rjh/rdrj1.jpg";

    document.getElementById("dlhma1").innerHTML = "* 3.7 km from centre Ideally set in the  Rajasthan , Hotel Park Suites Rajasthan Airport is situated 9.1 km from  Hawa Mahal."
    document.getElementById("dlhma2").innerHTML = "* Situated in the in Rajasthan, 4.1 km from Blue city, Amidst Monuments and Serenity features free WiFi access and private parking."
    document.getElementById("dlhma3").innerHTML = "* Featuring free WiFi throughout the property, Hotel Radisson In jodhpur  in Rajasthan, 4.4 km from Swaminarayan Akshardham ."

    rjwish.forEach(matchprjwis => {

        if (matchprjwis.id == "w6sr" || matchprjwis.id == "w6sr1" || matchprjwis.id == "w6sr2") {
            // alert("dl remove wish")
            if (matchprjwis.id == "w6sr" || matchprjwis.id == "w7sr" || matchprjwis.id == "w8sr") {
                // alert("dl 0 remove wish")
                document.getElementById("w6sr").style.display = "none";
                document.getElementById("w7dr").style.display = "none";
                document.getElementById("w8ddr").style.display = "none";


            }
            else if (matchprjwis.id == "w6sr1" || matchprjwis.id == "w7sr1" || matchprjwis.id == "w8sr1") {
                // alert("dl 2 remove wish")
                document.getElementById("w6sr1").style.display = "none";
                document.getElementById("w7dr1").style.display = "none";
                document.getElementById("w8ddr1").style.display = "none";


            }
            else if (matchprjwis.id == "w6sr2" || matchprjwis.id == "w7sr2" || matchprjwis.id == "w8sr2") {
                // alert("dl 2 remove wish")
                document.getElementById("w6sr2").style.display = "none";
                document.getElementById("w7dr2").style.display = "none";
                document.getElementById("w8ddr2").style.display = "none";


            }


        }
        else if (matchprjwis.id == "w6sla1" || matchprjwis.id == "w6sla2" || matchprjwis.id == "w6sla3") {
            // alert("la remove wish")
            if (matchprjwis.id == "w6sla1" || matchprjwis.id == "w7sla1" || matchprjwis.id == "w8sla1") {
                // alert("la 1 remove wish")
                document.getElementById("w6sla1").style.display = "none";
                document.getElementById("w7dla1").style.display = "none";
                document.getElementById("w8ddla1").style.display = "none";


            }
            else if (matchprjwis.id == "w6sla2" || matchprjwis.id == "w7sla2" || matchprjwis.id == "w8sla2") {
                // alert("la 2 remove wish")
                document.getElementById("w6sla2").style.display = "none";
                document.getElementById("w7dla2").style.display = "none";
                document.getElementById("w8ddla2").style.display = "none";


            }
            else if (matchprjwis.id == "w6sla3" || matchprjwis.id == "w7sla3" || matchprjwis.id == "w8sla3") {
                // alert("la 3 remove wish")
                document.getElementById("w6sla3").style.display = "none";
                document.getElementById("w7dla3").style.display = "none";
                document.getElementById("w8ddla3").style.display = "none";


            }


        }
        else if (matchprjwis.id == "w6stn1" || matchprjwis.id == "w6stn2" || matchprjwis.id == "w6stn3") {
            // alert("Tn remove wish")
            if (matchprjwis.id == "w6stn1" || matchprjwis.id == "w7stn1" || matchprjwis.id == "w8stn1") {
                // alert("tn 1 remove wish")
                document.getElementById("w6stn1").style.display = "none";
                document.getElementById("w7dtn1").style.display = "none";
                document.getElementById("w8ddtn1").style.display = "none";


            }
            else if (matchprjwis.id == "w7dtn2" || matchprjwis.id == "w6stn2" || matchprjwis.id == "w8stn2") {
                // alert("tn 2 remove wish")
                document.getElementById("w6stn2").style.display = "none";
                document.getElementById("w7dtn2").style.display = "none";
                document.getElementById("w8ddtn2").style.display = "none";


            }
            else if (matchprjwis.id == "w8ddtn3" || matchprjwis.id == "w7ddtn3" || matchprjwis.id == "w6ddtn3") {
                // alert("tn 3 remove wish")
                document.getElementById("w6stn3").style.display = "none";
                document.getElementById("w7dtn3").style.display = "none";
                document.getElementById("w8ddtn3").style.display = "none";


            }
        }

    })

    document.getElementById("htnameid1").innerHTML = " Lemon Tree Hotel";
    document.getElementById("htnameid2").innerHTML = "ITC Hotel";
    document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel";

    if (document.getElementById("w-t1-id2").style.display == "none" && document.getElementById("w-t1-id3").style.display == "none" || document.getElementById("w-t1-id").style.display == "none") {

        // alert("poiuyt")
        document.getElementById("rr1idrj").addEventListener("click", hlrj1)
        let h31 = document.querySelectorAll(".h3id1");
        let h41 = document.querySelectorAll(".htnmroom");

        function hlrj1() {
            // alert("success")
            document.getElementById("rr1idrj").removeEventListener("click", hl1)
            document.getElementById("rr1id1rj").removeEventListener("click", hl2)
            document.getElementById("rr1id2rj").removeEventListener("click", hl3)

            document.getElementById("rr1id2rj").removeEventListener("click", hlrj3)
            document.getElementById("rr1id1rj").removeEventListener("click", hlrj2)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"

            document.getElementById("h1imgid").src = "RJ/las.jpg";
            document.getElementById("h1imgid1").src = "RJ/lad.jpg";
            document.getElementById("h1imgid2").src = "RJ/ladd.jpg";


            document.getElementById("htnameid3").innerHTML = "Lemon Tree Hotel";
            document.getElementById("htnameid2").innerHTML = "Lemon Tree Hotel";
            document.getElementById("htnameid1").innerHTML = "Lemon Tree Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹6500/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹7800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹9800/-";


            h31[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[2].innerHTML = "* Internet connectivity."
            h31[3].innerHTML = "* Housekeeping services."
            h31[4].innerHTML = "* Laundering services."
            h31[5].innerHTML = "* AC and Non-AC Rooms."

            h31[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[8].innerHTML = "* Internet connectivity."
            h31[9].innerHTML = "* Housekeeping services."
            h31[10].innerHTML = "* Laundering services."
            h31[11].innerHTML = "* AC and Non-AC Rooms."
            h31[12].innerHTML = ""

            h31[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[15].innerHTML = "* Internet connectivity."
            h31[16].innerHTML = "* Housekeeping services."
            h31[17].innerHTML = "* Laundering services."
            h31[18].innerHTML = "* AC and Non-AC Rooms."
            h31[19].innerHTML = ""

            if (document.getElementById("w-t1-id2").style.display == "none") {

                // alert("enter start rj")

                rjwish.forEach(matchprjwis => {


                    if (matchprjwis.id == "w6sr" || matchprjwis.id == "w6sr1" || matchprjwis.id == "w6sr2") {
                        // alert("dl remove wish")

                        if (matchprjwis.id == "w6sr" || matchprjwis.id == "w7dr" || matchprjwis.id == "w8ddr") {
                            // alert("0")
                            document.getElementById("w6sr").setAttribute("id", "w6srj1");
                            document.getElementById("w7dr").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");

                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"




                        }
                        else if (matchprjwis.id == "w6sr1" || matchprjwis.id == "w7dr1" || matchprjwis.id == "w8ddr1") {
                            // alert("1")
                            document.getElementById("w6sr1").setAttribute("id", "w6srj1");
                            document.getElementById("w7dr1").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");

                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }
                        else if (matchprjwis.id == "w6sr2" || matchprjwis.id == "w7dr2" || matchprjwis.id == "w8ddr2") {
                            // alert("2")
                            document.getElementById("w6sr2").setAttribute("id", "w6srj1");
                            document.getElementById("w7dr2").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");



                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }


                    }
                    else if (matchprjwis.id == "w6sla1" || matchprjwis.id == "w6sla2" || matchprjwis.id == "w6sla3") {
                        // alert("la remove wish")
                        if (matchprjwis.id == "w6sla1" || matchprjwis.id == "w7dla1" || matchprjwis.id == "w8ddla1") {
                            // alert("la 1")
                            document.getElementById("w6sla1").setAttribute("id", "w6srj1");
                            document.getElementById("w7dla1").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddla1").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");


                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }
                        else if (matchprjwis.id == "w6sla2" || matchprjwis.id == "w7dla2" || matchprjwis.id == "w8ddla2") {
                            // alert(" la2")
                            document.getElementById("w6sla2").setAttribute("id", "w6srj1");
                            document.getElementById("w7dla2").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddla2").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");


                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }
                        else if (matchprjwis.id == "w6sla3" || matchprjwis.id == "w7dla3" || matchprjwis.id == "w8ddla3") {
                            // alert(" la3")
                            document.getElementById("w6sla3").setAttribute("id", "w6srj1");
                            document.getElementById("w7dla3").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddla3").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");


                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }


                    }
                    else if (matchprjwis.id == "w6stn1" || matchprjwis.id == "w6stn2" || matchprjwis.id == "w6stn3") {
                        // alert("tn remove wish")
                        if (matchprjwis.id == "w6stn1" || matchprjwis.id == "w7dtn1" || matchprjwis.id == "w8ddtn1") {
                            // alert("s tn1")
                            document.getElementById("w6stn1").setAttribute("id", "w6srj1");
                            document.getElementById("w7dtn1").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddtn1").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");


                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"


                        }
                        else if (matchprjwis.id == "w7dtn2" || matchprjwis.id == "w6stn2" || matchprjwis.id == "w8ddtn2") {
                            // alert("s1 tn2")
                            document.getElementById("w6stn2").setAttribute("id", "w6srj1");
                            document.getElementById("w7dtn2").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddtn2").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");


                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }
                        else if (matchprjwis.id == "w6stn3" || matchprjwis.id == "w7dtn3" || matchprjwis.id == "w8ddtn3") {
                            // alert("s2 tn3")
                            document.getElementById("w6stn3").setAttribute("id", "w6srj1");
                            document.getElementById("w7dtn3").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddtn3").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");


                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }
                    }

                })

            }


        }


        document.getElementById("rr1id1rj").addEventListener("click", hlrj2);
        let h32 = document.querySelectorAll(".h3id1");

        function hlrj2() {
            document.getElementById("rr1id1rj").removeEventListener("click", hl2)
            document.getElementById("rr1id2rj").removeEventListener("click", hl3)
            document.getElementById("rr1idrj").removeEventListener("click", hl1)
            document.getElementById("rr1id2rj").removeEventListener("click", hlrj3)
            document.getElementById("rr1idrj").removeEventListener("click", hlrj1)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"

            document.getElementById("h1imgid").src = "RJ/rjs1.jpg";
            document.getElementById("h1imgid1").src = "RJ/rjd1.jpg";
            document.getElementById("h1imgid2").src = "RJ/rjdd1.jpg";

            document.getElementById("htnameid1").innerHTML = "ITC Hotel";
            document.getElementById("htnameid3").innerHTML = "ITC Hotel";
            document.getElementById("htnameid2").innerHTML = "ITC Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹5900/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹8900/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹12900/-";


            h32[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[2].innerHTML = "* Internet connectivity."
            h32[3].innerHTML = "* Housekeeping services."
            h32[4].innerHTML = "* Laundering services."
            h32[5].innerHTML = "* AC and Non-AC Rooms."

            h32[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[8].innerHTML = "* Internet connectivity."
            h32[9].innerHTML = "* Housekeeping services."
            h32[10].innerHTML = "* Laundering services."
            h32[11].innerHTML = "* AC and Non-AC Rooms."
            h32[12].innerHTML = ""

            h32[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[15].innerHTML = "* Internet connectivity."
            h32[16].innerHTML = "* Housekeeping services."
            h32[17].innerHTML = "* Laundering services."
            h32[18].innerHTML = "* AC and Non-AC Rooms."
            h32[19].innerHTML = ""


            if (document.getElementById("w-t1-id2").style.display == "none") {

                // alert("enter mid rj")
                rjwish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter Dlppp")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6srj2");
                            document.getElementById("w7dr").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6srj2");
                            document.getElementById("w7dr1").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6srj1");
                            document.getElementById("w7dr2").setAttribute("id", "w7drj1");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddrj1");

                            document.getElementById("w6srj1").setAttribute("style", "disply:block");
                            document.getElementById("w7drj1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj1").setAttribute("style", "disply:block");

                            document.getElementById("w6srj1").innerHTML = "🤍"
                            document.getElementById("w7drj1").innerHTML = "🤍"
                            document.getElementById("w8ddrj1").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6sla1" || matchpwis.id == "w6sla2" || matchpwis.id == "w6sla3") {
                        // alert("enterelse La wishhhhhhhhhhhhhhhhhh")
                        if (matchpwis.id == "w6sla1" || matchpwis.id == "w7dla1" || matchpwis.id == "w8ddla1") {
                            // alert("s la1")
                            document.getElementById("w6sla1").setAttribute("id", "w6srj2");
                            document.getElementById("w7dla1").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddla1").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("rr1id").removeEventListener("click", LDc.hlla1);
                            document.getElementById("rr1id1").removeEventListener("click", LDc.hlla2);
                            document.getElementById("rr1id2").removeEventListener("click", LDc.hlla3);


                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sla2" || matchpwis.id == "w7dla2" || matchpwis.id == "w8ddla2") {
                            // alert("s1 la2")
                            document.getElementById("w6sla2").setAttribute("id", "w6srj2");
                            document.getElementById("w7dla2").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddla2").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("rr1id").removeEventListener("click", LDc.hlla1);
                            document.getElementById("rr1id1").removeEventListener("click", LDc.hlla2);
                            document.getElementById("rr1id2").removeEventListener("click", LDc.hlla3);


                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sla3" || matchpwis.id == "w7dla3" || matchpwis.id == "w8ddla3") {
                            // alert("s2 la3")
                            document.getElementById("w6sla3").setAttribute("id", "w6srj2");
                            document.getElementById("w7dla3").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddla3").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("rr1id").removeEventListener("click", LDc.hlla1);
                            document.getElementById("rr1id1").removeEventListener("click", LDc.hlla2);
                            document.getElementById("rr1id2").removeEventListener("click", LDc.hlla3);


                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6stn1" || matchpwis.id == "w6stn2" || matchpwis.id == "w6stn3") {
                        // alert("enterelse Tn")
                        if (matchpwis.id == "w6stn1" || matchpwis.id == "w7dtn1" || matchpwis.id == "w8ddtn1") {
                            // alert("s tn1")
                            document.getElementById("w6stn1").setAttribute("id", "w6srj2");
                            document.getElementById("w7dtn1").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddtn1").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6stn2" || matchpwis.id == "w7dtn2" || matchpwis.id == "w8ddtn2") {
                            // alert("s1 tn2")
                            document.getElementById("w6stn2").setAttribute("id", "w6srj2");
                            document.getElementById("w7dtn2").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddtn2").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6stn3" || matchpwis.id == "w7dtn3" || matchpwis.id == "w8ddtn3") {
                            // alert("s2 tn3")
                            document.getElementById("w6stn3").setAttribute("id", "w6srj2");
                            document.getElementById("w7dtn3").setAttribute("id", "w7drj2");
                            document.getElementById("w8ddtn3").setAttribute("id", "w8ddrj2");

                            document.getElementById("w6srj2").setAttribute("style", "disply:block");
                            document.getElementById("w7drj2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj2").setAttribute("style", "disply:block");

                            document.getElementById("w6srj2").innerHTML = "🤍"
                            document.getElementById("w7drj2").innerHTML = "🤍"
                            document.getElementById("w8ddrj2").innerHTML = "🤍"



                        }
                    }

                })


            }




        }


        document.getElementById("rr1id2rj").addEventListener("click", hlrj3);
        let h33 = document.querySelectorAll(".h3id1");

        function hlrj3() {
            document.getElementById("rr1idrj").removeEventListener("click", hl3);
            document.getElementById("rr1idrj").removeEventListener("click", hl1);
            document.getElementById("rr1id1rj").removeEventListener("click", hl2);
            document.getElementById("rr1idrj").removeEventListener("click", hlrj1);
            document.getElementById("rr1id1rj").removeEventListener("click", hlrj2);

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"

            document.getElementById("h1imgid").src = "RJ/rjs2.jpg";
            document.getElementById("h1imgid1").src = "RJ/rjd2.jpg";
            document.getElementById("h1imgid2").src = "RJ/rjdd2.jpg";

            document.getElementById("htnameid1").innerHTML = "Radisson blu Hotel";
            document.getElementById("htnameid2").innerHTML = "Radisson blu Hotel";
            document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹7500/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹9800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹13000/-";


            h33[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[2].innerHTML = "* Internet connectivity."
            h33[3].innerHTML = "* Housekeeping services."
            h33[4].innerHTML = "* Laundering services."
            h33[5].innerHTML = "* AC and Non-AC Rooms."

            h33[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[8].innerHTML = "* Internet connectivity."
            h33[9].innerHTML = "* Housekeeping services."
            h33[10].innerHTML = "* Laundering services."
            h33[11].innerHTML = "* AC and Non-AC Rooms."
            h33[12].innerHTML = ""

            h33[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[15].innerHTML = "* Internet connectivity."
            h33[16].innerHTML = "* Housekeeping services."
            h33[17].innerHTML = "* Laundering services."
            h33[18].innerHTML = "* AC and Non-AC Rooms."
            h33[19].innerHTML = ""


            if (document.getElementById("w-t1-id2").style.display == "none") {
                // alert("enter last rj")
                rjwish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter Dlppp")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6srj3");
                            document.getElementById("w7dr").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6srj3");
                            document.getElementById("w7dr1").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6srj3");
                            document.getElementById("w7dr2").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6sla1" || matchpwis.id == "w6sla2" || matchpwis.id == "w6sla3") {
                        // alert("enterelse La wish")
                        if (matchpwis.id == "w6sla1" || matchpwis.id == "w7dla1" || matchpwis.id == "w8ddla1") {
                            // alert("s la1")
                            document.getElementById("w6sla1").setAttribute("id", "w6srj3");
                            document.getElementById("w7dla1").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddla1").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("rr1id").removeEventListener("click", LDc.hlla1);
                            document.getElementById("rr1id1").removeEventListener("click", LDc.hlla2);
                            document.getElementById("rr1id2").removeEventListener("click", LDc.hlla3);


                            // document.getElementById("rr1id2").removeEventListener("click", hlrj3);
                            // document.getElementById("rr1id").removeEventListener("click", hlrj1);
                            // document.getElementById("rr1id1").removeEventListener("click", hlrj2);

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sla2" || matchpwis.id == "w7dla2" || matchpwis.id == "w8ddla2") {
                            // alert("s1 la2")
                            document.getElementById("w6sla2").setAttribute("id", "w6srj3");
                            document.getElementById("w7dla2").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddla2").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("rr1id").removeEventListener("click", LDc.hlla1);
                            document.getElementById("rr1id1").removeEventListener("click", LDc.hlla2);
                            document.getElementById("rr1id2").removeEventListener("click", LDc.hlla3);



                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sla3" || matchpwis.id == "w7dla3" || matchpwis.id == "w8ddla3") {
                            // alert("s2 la3")
                            document.getElementById("w6sla3").setAttribute("id", "w6srj3");
                            document.getElementById("w7dla3").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddla3").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("rr1id").removeEventListener("click", LDc.hlla1);
                            document.getElementById("rr1id1").removeEventListener("click", LDc.hlla2);
                            document.getElementById("rr1id2").removeEventListener("click", LDc.hlla3);



                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6stn1" || matchpwis.id == "w6stn2" || matchpwis.id == "w6stn3") {
                        // alert("enterelse Tn")
                        if (matchpwis.id == "w6stn1" || matchpwis.id == "w7dtn1" || matchpwis.id == "w8ddtn1") {
                            // alert("s tn1")
                            document.getElementById("w6stn1").setAttribute("id", "w6srj3");
                            document.getElementById("w7dtn1").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddtn1").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6stn2" || matchpwis.id == "w7dtn2" || matchpwis.id == "w8ddtn2") {
                            // alert("s1 tn2")
                            document.getElementById("w6stn2").setAttribute("id", "w6srj3");
                            document.getElementById("w7dtn2").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddtn2").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6stn3" || matchpwis.id == "w7dtn3" || matchpwis.id == "w8ddtn3") {
                            // alert("s2 tn3")
                            document.getElementById("w6stn3").setAttribute("id", "w6srj3");
                            document.getElementById("w7dtn3").setAttribute("id", "w7drj3");
                            document.getElementById("w8ddtn3").setAttribute("id", "w8ddrj3");

                            document.getElementById("w6srj3").setAttribute("style", "disply:block");
                            document.getElementById("w7drj3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddrj3").setAttribute("style", "disply:block");

                            document.getElementById("w6srj3").innerHTML = "🤍"
                            document.getElementById("w7drj3").innerHTML = "🤍"
                            document.getElementById("w8ddrj3").innerHTML = "🤍"



                        }
                    }

                })


            }


        }

    }


}



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----LD-start---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const lawish = document.querySelectorAll(".heartc");
document.getElementById("LDcid").addEventListener("click", LDc);
let wn = 1111;

function LDc() {


    if (document.getElementById("c1id-main").style.display == "none") {
        // alert("ggggg")
        document.getElementById("c1id-main").style.display = "block";
        document.getElementById("c1id-main1").style.display = "block";
        document.getElementById("c12id-main").style.display = "none";
        document.getElementById("c12id-main1").style.display = "none";

    }
    // alert("hello");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    lawish.forEach(matchp => {


        if (matchp.id == "w1nm") {
            // alert("enterif Dl")
            document.getElementById("w1nm").setAttribute("id", "w1lbt");
            document.getElementById("w2ig").setAttribute("id", "w2sg");
            document.getElementById("w3sn").setAttribute("id", "w3mll");
            document.getElementById("w4ak").setAttribute("id", "w4mvt");
            document.getElementById("w5qu").setAttribute("id", "w5pt");

            document.getElementById("rr1id").setAttribute("id", "rr1idla")
            document.getElementById("rr1id1").setAttribute("id", "rr1id1la")
            document.getElementById("rr1id2").setAttribute("id", "rr1id2la")

        }
        else if (matchp.id == "w1bl") {
            // alert("enterelse RJ")
            document.getElementById("w1bl").setAttribute("id", "w1lbt");
            document.getElementById("w2cb").setAttribute("id", "w2sg");
            document.getElementById("w3hm").setAttribute("id", "w3mll");
            document.getElementById("w4jl").setAttribute("id", "w4mvt");
            document.getElementById("w5pu").setAttribute("id", "w5pt");

            document.getElementById("rr1idrj").setAttribute("id", "rr1idla")
            document.getElementById("rr1id1rj").setAttribute("id", "rr1id1la")
            document.getElementById("rr1id2rj").setAttribute("id", "rr1id2la")



        }
        else if (matchp.id == "w1cn") {
            // alert("enterelse Tn")
            document.getElementById("w1cn").setAttribute("id", "w1lbt");
            document.getElementById("w2kk").setAttribute("id", "w2sg");
            document.getElementById("w3kd").setAttribute("id", "w3mll");
            document.getElementById("w4mb").setAttribute("id", "w4mvt");
            document.getElementById("w5ot").setAttribute("id", "w5pt");

            document.getElementById("rr1idtn").setAttribute("id", "rr1idla")
            document.getElementById("rr1id1tn").setAttribute("id", "rr1id1la")
            document.getElementById("rr1id2tn").setAttribute("id", "rr1id2la")



        }

    })


    document.getElementById("w1lbt").innerHTML = "🤍"
    document.getElementById("w2sg").innerHTML = "🤍"
    document.getElementById("w3mll").innerHTML = "🤍"
    document.getElementById("w4mvt").innerHTML = "🤍"
    document.getElementById("w5pt").innerHTML = "🤍"

    document.getElementById("state-m-id").style.display = "none";
    document.getElementById("Home").style.display = "block";

    if (PHONE.matches) {
        // alert("wwwwwwwwwww")
        document.getElementById("w-th1-id").style.fontSize = "17px";
        wn = 2222
    }

    var img = document.getElementById('w-t1-id2');

    var slides = ['LD/LBT/lbt1.jpg', "LD/SG/stargazing.jpg", "LD/MLLD/mlll1.jpg", "LD/MVT/mvt1.jpg", "LD/PL/pl1.jpg"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dff src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 4000);

    document.getElementById("w-t1-id2").style.display = "block";
    document.getElementById("w-t1-id").style.display = "none";
    document.getElementById("w-t1-id1").style.display = "none";
    document.getElementById("w-t1-id3").style.display = "none";
    if (wn == 1111) {
        document.getElementById("w-th1-id").style.fontSize = "62px";
    }
    document.getElementById("w-th1-id").innerHTML = "“A place where dreams become reality.”";
    document.getElementById("c1imgid").src = "LD/LBT/lbt1.jpg";
    document.getElementById("c1-tid").innerHTML = "“ Ladakh Bike Tour ”";
    document.getElementById("c1imgid1").src = "LD/SG/stargazing.jpg";
    document.getElementById("c1-tid1").innerHTML = "“ Stargazing ”";
    document.getElementById("c1imgid2").src = "LD/MLLD/mlll1.jpg";
    document.getElementById("c1-tid2").innerHTML = "“ Magical leh ladakh ”";

    document.getElementById("c2imgid").src = "LD/MVT/mvt4.jpg";
    document.getElementById("c2-tid").innerHTML = "“ Markha Valley Trek ”";
    document.getElementById("c2imgid1").src = "LD/PL/pl1.jpg";
    document.getElementById("c2-tid1").innerHTML = "“ Pangong Tso ”";

    document.getElementById("col1imgid").src = "LD/LBT/lbt1.jpg";
    document.getElementById("col1imgid2").src = "LD/LBT/lbt.jpg";
    document.getElementById("col1imgid3").src = "LD/LBT/lbt2.jpg";
    document.getElementById("col2h4-id").innerHTML = "Talking about the first things first, every biker must give his or her total attention to their first love, which is their bike. One must be very careful and picky when it comes to choosing their Leh Ladakh road trip bike. So whenever you’re choosing a bike for any road trip, make sure you go for suitability more than popularity. Consider it one of the most vital aspects of your Leh Ladakh bike trip plan!.";


    document.getElementById("c1id-main").addEventListener("click", c1idmainLD)
    document.getElementById("c1imgid").setAttribute('title', 'Ladakh Bike Tour');

    function c1idmainLD() {
        document.getElementById("col1imgid").src = "LD/LBT/lbt1.jpg";
        document.getElementById("col1imgid2").src = "LD/LBT/lbt.jpg";
        document.getElementById("col1imgid3").src = "LD/LBT/lbt2.jpg";

        document.getElementById("col2h4-id").innerHTML = "Talking about the first things first, every biker must give his or her total attention to their first love, which is their bike. One must be very careful and picky when it comes to choosing their Leh Ladakh road trip bike. So whenever you’re choosing a bike for any road trip, make sure you go for suitability more than popularity. Consider it one of the most vital aspects of your Leh Ladakh bike trip plan!.";


    }


    document.getElementById("c1id-main1").addEventListener("click", c1idmain1LD)
    document.getElementById("c1imgid1").setAttribute('title', 'Stargazing');

    function c1idmain1LD() {
        document.getElementById("col1imgid").src = "LD/SG/stargazing.jpg";
        document.getElementById("col1imgid2").src = "LD/SG/sg.webp";
        document.getElementById("col1imgid3").src = "LD/SG/sg1.jpg";

        document.getElementById("col2h4-id").innerHTML = "Leh-Ladakh, as already mentioned earlier, is a must visit place for all photography lovers – especially, Astro-photographers! The Major reason why Ladakh is a favourite among astrophotographers is because it provides clear night skies to complement the scenic beauty. Cities don’t generally have such pellucid skies owing to the pollution around.";


    }


    document.getElementById("c1id-main2").addEventListener("click", c1idmain2LD)
    document.getElementById("c1imgid2").setAttribute('title', 'Magical leh ladakh');

    function c1idmain2LD() {
        document.getElementById("col1imgid").src = "LD/MLLD/mlll1.jpg";
        document.getElementById("col1imgid2").src = "LD/MLLD/mlll2.jpg";
        document.getElementById("col1imgid3").src = "LD/MLLD/mlll3.jpg";

        document.getElementById("col2h4-id").innerHTML = "The Magical Ladakh Tour is one of the best Leh Ladakh tour packages to unravel the mesmeric beauty of the ‘Land of High Passes’. Originating from the scenic locales of Leh, it takes the visitors on a captivating tour to some of the most gorgeous and captivating places to visit in Ladakh.";



    }


    document.getElementById("c12id-main").addEventListener("click", c12idmainLD)
    document.getElementById("c2imgid").setAttribute('title', 'Markha Valley Trek');

    function c12idmainLD() {
        document.getElementById("col1imgid").src = "LD/MVT/mvt4.jpg";
        document.getElementById("col1imgid2").src = "LD/MVT/mvt3.jpg";
        document.getElementById("col1imgid3").src = "LD/MVT/mvt1.jpg";

        document.getElementById("col2h4-id").innerHTML = "Set in the arid cold desert of Ladakh, Markha is a stunning river valley in Hemis National Park. The trek through Markha Valley is very picturesque and full of adventure.";


    }


    document.getElementById("c12id-main1").addEventListener("click", c12idmain12LD)
    document.getElementById("c2imgid1").setAttribute('title', 'Pangong Tso');

    function c12idmain12LD() {
        document.getElementById("col1imgid").src = "LD/PL/pl1.jpg";
        document.getElementById("col1imgid2").src = "LD/PL/pl2.jpg";
        document.getElementById("col1imgid3").src = "LD/PL/pl3.jpg";

        document.getElementById("col2h4-id").innerHTML = "The most popular tourist attraction in Ladakh, Pangong lake is an endorheic (landlocked) lake situated at 4350 meters. The lake does not remain blue throughout the year or even the day, rather it changes colours from azure to light blue to green and grey too! It is famous amongst tourists as Ladakh lake, the spot where the Bollywood movie '3 Idiots' was shot.";



    }

    let span = document.querySelectorAll(".spandiv");
    span.forEach(headingspan => {
        // alert("poiuytrew")
        headingspan.innerHTML = "(LA)"
    })



    document.getElementById("h1imgid").src = "LD/Lah/ltla1.jpg";
    document.getElementById("h1imgid1").src = "LD/Lah/itcla.jpg";
    document.getElementById("h1imgid2").src = "LD/Lah/rdla.jpg";


    document.getElementById("dlhma1").innerHTML = "* 4.8 km from centre Ideally set in the  ladakh , Hotel Park Suites ladakh Airport is situated 9.1 km from pangong tso."
    document.getElementById("dlhma2").innerHTML = "* Situated in the in Ladakh, 5.3 km from markha valley, Amidst Monuments and Serenity features free WiFi access and private parking."
    document.getElementById("dlhma3").innerHTML = "* Featuring free WiFi throughout the property, Hotel Radisson near  Diskit Monastery  in Ladakh, 4.4 km from stargazing ."

    document.getElementById("htnameid1").innerHTML = " Lemon Tree Hotel";
    document.getElementById("htnameid2").innerHTML = "ITC Hotel";
    document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel";

    lawish.forEach(matchpwis => {

        if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
            // alert("dl remove wish")
            if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                // alert("dl s remove wish")
                document.getElementById("w6sr").style.display = "none";
                document.getElementById("w7dr").style.display = "none";
                document.getElementById("w8ddr").style.display = "none";


            }
            else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                // alert("dl s1 remove wish")
                document.getElementById("w6sr1").style.display = "none";
                document.getElementById("w7dr1").style.display = "none";
                document.getElementById("w8ddr1").style.display = "none";


            }
            else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                // alert("dl s2 remove wish")
                document.getElementById("w6sr2").style.display = "none";
                document.getElementById("w7dr2").style.display = "none";
                document.getElementById("w8ddr2").style.display = "none";


            }


        }
        else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
            // alert("la remove wish")
            if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                // alert("rj rj1 remove wish")
                document.getElementById("w6srj1").style.display = "none";
                document.getElementById("w7drj1").style.display = "none";
                document.getElementById("w8ddrj1").style.display = "none";


            }
            else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                // alert("rj rj2 remove wish")
                document.getElementById("w6srj2").style.display = "none";
                document.getElementById("w7drj2").style.display = "none";
                document.getElementById("w8ddrj2").style.display = "none";


            }
            else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                // alert("rj rj3 remove wish")
                document.getElementById("w6srj3").style.display = "none";
                document.getElementById("w7drj3").style.display = "none";
                document.getElementById("w8ddrj3").style.display = "none";


            }


        }
        else if (matchpwis.id == "w6stn1" || matchpwis.id == "w6stn2" || matchpwis.id == "w6stn3") {
            // alert("enterelse Tn")
            if (matchpwis.id == "w6stn1" || matchpwis.id == "w7dtn1" || matchpwis.id == "w8ddtn1") {
                // alert("tn tn1 remove wish")
                document.getElementById("w6stn1").style.display = "none";
                document.getElementById("w7dtn1").style.display = "none";
                document.getElementById("w8ddtn1").style.display = "none";


            }
            else if (matchpwis.id == "w6stn2" | matchpwis.id == "w7dtn2" || matchpwis.id == "w8ddtn2") {
                // alert("tn tn2 remove wish")
                document.getElementById("w6stn2").style.display = "none";
                document.getElementById("w7dtn2").style.display = "none";
                document.getElementById("w8ddtn2").style.display = "none";


            }
            else if (matchpwis.id == "w6stn3" || matchpwis.id == "w7dtn3" || matchpwis.id == "w8ddtn3") {
                // alert("tn tn3 remove wish")
                document.getElementById("w6stn3").style.display = "none";
                document.getElementById("w7dtn3").style.display = "none";
                document.getElementById("w8ddtn3").style.display = "none";


            }
        }

    })


    if (document.getElementById("w-t1-id1").style.display == "none" && document.getElementById("w-t1-id3").style.display == "none" || document.getElementById("w-t1-id").style.display == "none") {

        // alert("asdfghjkl")
        let h31 = document.querySelectorAll(".h3id1");
        let h41 = document.querySelectorAll(".htnmroom");
        document.getElementById("rr1idla").addEventListener("click", hlla1);

        function hlla1() {
            // alert("enter1")
            document.getElementById("rr1idla").removeEventListener("click", hl1)
            document.getElementById("rr1id1la").removeEventListener("click", hl2)
            document.getElementById("rr1id2la").removeEventListener("click", hl3)

            document.getElementById("rr1id1la").removeEventListener("click", hlla2)
            document.getElementById("rr1id2la").removeEventListener("click", hlla3)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"


            document.getElementById("h1imgid").src = "LD/Lah/lthlas1.jpg";
            document.getElementById("h1imgid1").src = "LD/Lah/lthlad1.jpg";
            document.getElementById("h1imgid2").src = "LD/Lah/lthladd1.jpg";

            document.getElementById("htnameid3").innerHTML = "Lemon Tree Hotel";
            document.getElementById("htnameid2").innerHTML = "Lemon Tree Hotel";
            document.getElementById("htnameid1").innerHTML = "Lemon Tree Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹5500/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹8300/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹11000/-";


            h31[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[2].innerHTML = "* Internet connectivity."
            h31[3].innerHTML = "* Housekeeping services."
            h31[4].innerHTML = "* Laundering services."
            h31[5].innerHTML = "* AC and Non-AC Rooms."

            h31[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[8].innerHTML = "* Internet connectivity."
            h31[9].innerHTML = "* Housekeeping services."
            h31[10].innerHTML = "* Laundering services."
            h31[11].innerHTML = "* AC and Non-AC Rooms."
            h31[12].innerHTML = ""

            h31[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[15].innerHTML = "* Internet connectivity."
            h31[16].innerHTML = "* Housekeeping services."
            h31[17].innerHTML = "* Laundering services."
            h31[18].innerHTML = "* AC and Non-AC Rooms."
            h31[19].innerHTML = ""


            if (document.getElementById("w-t1-id1").style.display == "none") {
                // alert("enter first")
                lawish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter Dlppp delhi sr ")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6sla1");
                            document.getElementById("w7dr").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6sla1");
                            document.getElementById("w7dr1").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6sla1");
                            document.getElementById("w7dr2").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
                        // alert("enterelse La wish from rj")
                        if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                            // alert("s la1")
                            document.getElementById("w6srj1").setAttribute("id", "w6sla1");
                            document.getElementById("w7drj1").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddrj1").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"

                            return;
                        }
                        else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                            // alert("s1 la2")
                            document.getElementById("w6srj2").setAttribute("id", "w6sla1");
                            document.getElementById("w7drj2").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddrj2").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"

                            return;



                        }
                        else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                            // alert("s2 la3")
                            document.getElementById("w6srj3").setAttribute("id", "w6sla1");
                            document.getElementById("w7drj3").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddrj3").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"


                            return;
                        }


                    }
                    else if (matchpwis.id == "w6stn1" || matchpwis.id == "w6stn2" || matchpwis.id == "w6stn3") {
                        // alert("enterelse Tn")
                        if (matchpwis.id == "w6stn1" || matchpwis.id == "w7dtn1" || matchpwis.id == "w8ddtn1") {
                            // alert("s tn1")
                            document.getElementById("w6stn1").setAttribute("id", "w6sla1");
                            document.getElementById("w7dtn1").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddtn1").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6stn2" || matchpwis.id == "w7dtn2" || matchpwis.id == "w8ddtn2") {
                            // alert("s1 tn2")
                            document.getElementById("w6stn2").setAttribute("id", "w6sla1");
                            document.getElementById("w7dtn2").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddtn2").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6stn3" || matchpwis.id == "w7dtn3" || matchpwis.id == "w8ddtn3") {
                            // alert("s2 tn3")
                            document.getElementById("w6stn3").setAttribute("id", "w6sla1");
                            document.getElementById("w7dtn3").setAttribute("id", "w7dla1");
                            document.getElementById("w8ddtn3").setAttribute("id", "w8ddla1");

                            document.getElementById("w6sla1").setAttribute("style", "disply:block");
                            document.getElementById("w7dla1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla1").setAttribute("style", "disply:block");

                            document.getElementById("w6sla1").innerHTML = "🤍"
                            document.getElementById("w7dla1").innerHTML = "🤍"
                            document.getElementById("w8ddla1").innerHTML = "🤍"



                        }
                    }

                })

            }
            else {
                alert("runing la")
            }



        }


        document.getElementById("rr1id1la").addEventListener("click", hlla2);
        let h32 = document.querySelectorAll(".h3id1");

        function hlla2() {
            document.getElementById("rr1id1la").removeEventListener("click", hl2);
            document.getElementById("rr1id2la").removeEventListener("click", hl3);
            document.getElementById("rr1idla").removeEventListener("click", hl1);

            document.getElementById("rr1idla").removeEventListener("click", hlla1)
            document.getElementById("rr1id2la").removeEventListener("click", hlla3)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"


            document.getElementById("h1imgid").src = "LD/Lah/itclas1.jpg";
            document.getElementById("h1imgid1").src = "LD/Lah/itclad1.jpg";
            document.getElementById("h1imgid2").src = "LD/Lah/itcladd1.jpg";

            document.getElementById("htnameid1").innerHTML = "ITC Hotel";
            document.getElementById("htnameid2").innerHTML = "ITC Hotel";
            document.getElementById("htnameid3").innerHTML = "ITC Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹6000/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹7800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹13400/-";


            h32[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[2].innerHTML = "* Internet connectivity."
            h32[3].innerHTML = "* Housekeeping services."
            h32[4].innerHTML = "* Laundering services."
            h32[5].innerHTML = "* AC and Non-AC Rooms."

            h32[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[8].innerHTML = "* Internet connectivity."
            h32[9].innerHTML = "* Housekeeping services."
            h32[10].innerHTML = "* Laundering services."
            h32[11].innerHTML = "* AC and Non-AC Rooms."
            h32[12].innerHTML = ""

            h32[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[15].innerHTML = "* Internet connectivity."
            h32[16].innerHTML = "* Housekeeping services."
            h32[17].innerHTML = "* Laundering services."
            h32[18].innerHTML = "* AC and Non-AC Rooms."
            h32[19].innerHTML = ""


            if (document.getElementById("w-t1-id1").style.display == "none") {
                // alert("enter mid");
                lawish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter Dlppp delhi sr ")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6sla2");
                            document.getElementById("w7dr").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6sla2");
                            document.getElementById("w7dr1").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6sla2");
                            document.getElementById("w7dr2").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
                        // alert("enterelse La wish from rj")
                        if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                            // alert("s la1")
                            document.getElementById("w6srj1").setAttribute("id", "w6sla2");
                            document.getElementById("w7drj1").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddrj1").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                            // alert("s1 la2")
                            document.getElementById("w6srj2").setAttribute("id", "w6sla2");
                            document.getElementById("w7drj2").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddrj2").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                            // alert("s2 la3")
                            document.getElementById("w6srj3").setAttribute("id", "w6sla2");
                            document.getElementById("w7drj3").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddrj3").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6stn1" || matchpwis.id == "w6stn2" || matchpwis.id == "w6stn3") {
                        // alert("enterelse Tn")
                        if (matchpwis.id == "w6stn1" || matchpwis.id == "w7dtn1" || matchpwis.id == "w8ddtn1") {
                            // alert("s tn1")
                            document.getElementById("w6stn1").setAttribute("id", "w6sla2");
                            document.getElementById("w7dtn1").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddtn1").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6stn2" || matchpwis.id == "w7dtn2" || matchpwis.id == "w8ddtn2") {
                            // alert("s1 tn2")
                            document.getElementById("w6stn2").setAttribute("id", "w6sla2");
                            document.getElementById("w7dtn2").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddtn2").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6stn3" || matchpwis.id == "w7dtn3" || matchpwis.id == "w8ddtn3") {
                            // alert("s2 tn3")
                            document.getElementById("w6stn3").setAttribute("id", "w6sla2");
                            document.getElementById("w7dtn3").setAttribute("id", "w7dla2");
                            document.getElementById("w8ddtn3").setAttribute("id", "w8ddla2");

                            document.getElementById("w6sla2").setAttribute("style", "disply:block");
                            document.getElementById("w7dla2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla2").setAttribute("style", "disply:block");

                            document.getElementById("w6sla2").innerHTML = "🤍"
                            document.getElementById("w7dla2").innerHTML = "🤍"
                            document.getElementById("w8ddla2").innerHTML = "🤍"



                        }
                    }

                })

            }

        }


        document.getElementById("rr1id2la").addEventListener("click", hlla3);
        let h33 = document.querySelectorAll(".h3id1");

        function hlla3() {
            document.getElementById("rr1id2la").removeEventListener("click", hl3);
            document.getElementById("rr1idla").removeEventListener("click", hl1);
            document.getElementById("rr1id1la").removeEventListener("click", hl2);

            document.getElementById("rr1id1la").removeEventListener("click", hlla2)
            document.getElementById("rr1idla").removeEventListener("click", hlla1)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"


            document.getElementById("h1imgid").src = "LD/Lah/rdla1.jpg";
            document.getElementById("h1imgid1").src = "LD/Lah/rdlad1.jpg";
            document.getElementById("h1imgid2").src = "LD/Lah/rdladd1.jpg";


            document.getElementById("htnameid1").innerHTML = "Radisson blu Hotel";
            document.getElementById("htnameid2").innerHTML = "Radisson blu Hotel";
            document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹5500/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹6800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹8800/-";



            h33[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[2].innerHTML = "* Internet connectivity."
            h33[3].innerHTML = "* Housekeeping services."
            h33[4].innerHTML = "* Laundering services."
            h33[5].innerHTML = "* AC and Non-AC Rooms."


            h33[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[8].innerHTML = "* Internet connectivity."
            h33[9].innerHTML = "* Housekeeping services."
            h33[10].innerHTML = "* Laundering services."
            h33[11].innerHTML = "* AC and Non-AC Rooms."
            h33[12].innerHTML = ""

            h33[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[15].innerHTML = "* Internet connectivity."
            h33[16].innerHTML = "* Housekeeping services."
            h33[17].innerHTML = "* Laundering services."
            h33[18].innerHTML = "* AC and Non-AC Rooms."
            h33[19].innerHTML = ""


            if (document.getElementById("w-t1-id1").style.display == "none") {
                // alert("enter last")
                lawish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter Dlppp delhi sr ")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6sla3");
                            document.getElementById("w7dr").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6sla3");
                            document.getElementById("w7dr1").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" | matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6sla3");
                            document.getElementById("w7dr2").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
                        // alert("enterelse La wish from rj")
                        if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                            // alert("s la1")
                            document.getElementById("w6srj1").setAttribute("id", "w6sla3");
                            document.getElementById("w7drj1").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddrj1").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                            // alert("s1 la2")
                            document.getElementById("w6srj2").setAttribute("id", "w6sla3");
                            document.getElementById("w7drj2").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddrj2").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                            // alert("s2 la3")
                            document.getElementById("w6srj3").setAttribute("id", "w6sla3");
                            document.getElementById("w7drj3").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddrj3").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6stn1" || matchpwis.id == "w6stn2" || matchpwis.id == "w6stn3") {
                        // alert("enterelse Tn")
                        if (matchpwis.id == "w6stn1" || matchpwis.id == "w7dtn1" || matchpwis.id == "w8ddtn1") {
                            // alert("s tn1")
                            document.getElementById("w6stn1").setAttribute("id", "w6sla3");
                            document.getElementById("w7dtn1").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddtn1").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6stn2" || matchpwis.id == "w7dtn2" || matchpwis.id == "w8ddtn2") {
                            // alert("s1 tn2")
                            document.getElementById("w6stn2").setAttribute("id", "w6sla3");
                            document.getElementById("w7dtn2").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddtn2").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6stn3" || matchpwis.id == "w7dtn3" || matchpwis.id == "w8ddtn3") {
                            // alert("s2 tn3")
                            document.getElementById("w6stn3").setAttribute("id", "w6sla3");
                            document.getElementById("w7dtn3").setAttribute("id", "w7dla3");
                            document.getElementById("w8ddtn3").setAttribute("id", "w8ddla3");

                            document.getElementById("w6sla3").setAttribute("style", "disply:block");
                            document.getElementById("w7dla3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddla3").setAttribute("style", "disply:block");

                            document.getElementById("w6sla3").innerHTML = "🤍"
                            document.getElementById("w7dla3").innerHTML = "🤍"
                            document.getElementById("w8ddla3").innerHTML = "🤍"



                        }
                    }

                })

            }


        }


    }







}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----LD-END---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----TN-start---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


document.getElementById("TNcid").addEventListener("click", TNc);

function TNc() {

    if (document.getElementById("c1id-main").style.display == "none") {
        // alert("ggggg")
        document.getElementById("c1id-main").style.display = "block";
        document.getElementById("c1id-main1").style.display = "block";
        document.getElementById("c12id-main").style.display = "none";
        document.getElementById("c12id-main1").style.display = "none";

    }
    // alert("hello");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("state-m-id").style.display = "none";
    document.getElementById("Home").style.display = "block";

    lawish.forEach(matchp => {

        if (matchp.id == "w1nm") {
            // alert("enterif")
            document.getElementById("w1nm").setAttribute("id", "w1cn");
            document.getElementById("w2ig").setAttribute("id", "w2kk");
            document.getElementById("w3sn").setAttribute("id", "w3kd");
            document.getElementById("w4ak").setAttribute("id", "w4mb");
            document.getElementById("w5qu").setAttribute("id", "w5ot");

            document.getElementById("rr1id").setAttribute("id", "rr1idtn")
            document.getElementById("rr1id1").setAttribute("id", "rr1id1tn")
            document.getElementById("rr1id2").setAttribute("id", "rr1id2tn")

        }
        else if (matchp.id == "w1bl") {

            // alert("enterelserj")
            document.getElementById("w1bl").setAttribute("id", "w1cn");
            document.getElementById("w2cb").setAttribute("id", "w2kk");
            document.getElementById("w3hm").setAttribute("id", "w3kd");
            document.getElementById("w4jl").setAttribute("id", "w4mb");
            document.getElementById("w5pu").setAttribute("id", "w5ot");

            document.getElementById("rr1idrj").setAttribute("id", "rr1idtn")
            document.getElementById("rr1id1rj").setAttribute("id", "rr1id1tn")
            document.getElementById("rr1id2rj").setAttribute("id", "rr1id2tn")

        }
        else if (matchp.id == "w1lbt") {
            // alert("enterelse la")
            document.getElementById("w1lbt").setAttribute("id", "w1cn");
            document.getElementById("w2sg").setAttribute("id", "w2kk");
            document.getElementById("w3mll").setAttribute("id", "w3kd");
            document.getElementById("w4mvt").setAttribute("id", "w4mb");
            document.getElementById("w5pt").setAttribute("id", "w5ot");

            document.getElementById("rr1idla").setAttribute("id", "rr1idtn")
            document.getElementById("rr1id1la").setAttribute("id", "rr1id1tn")
            document.getElementById("rr1id2la").setAttribute("id", "rr1id2tn")



        }

    })


    document.getElementById("w1cn").innerHTML = "🤍"
    document.getElementById("w2kk").innerHTML = "🤍"
    document.getElementById("w3kd").innerHTML = "🤍"
    document.getElementById("w4mb").innerHTML = "🤍"
    document.getElementById("w5ot").innerHTML = "🤍"


    var img = document.getElementById('w-t1-id3');

    var slides = ['TN/Coonoor/hv.jpg', "TN/Coonoor/Lm.jpg", "TN/Kodaikanal/R-t.jpg", "TN/Ooty/otyn1.jpg", "TN/Ooty/otyn.jpg", "TN/Ooty/ooty1.jpg"];

    var Start = 0;

    function slider() {
        if (Start < slides.length) {
            Start = Start + 1;
        }
        else {
            Start = 1;
        }
        img.innerHTML = "<img class= dff src=" + slides[Start - 1] + ">";

    }
    setInterval(slider, 4000);

    document.getElementById("w-t1-id3").style.display = "block";
    document.getElementById("w-t1-id1").style.display = "none";
    document.getElementById("w-t1-id").style.display = "none";
    document.getElementById("w-t1-id2").style.display = "none";

    document.getElementById("w-th1-id").innerHTML = "“Experience Yourself.”";
    document.getElementById("c1imgid").src = "TN/Coonoor/hv.jpg";
    document.getElementById("c1-tid").innerHTML = "“ Coonoor ”";
    document.getElementById("c1imgid1").src = "TN/Kanyakumari/vrm.jpeg";
    document.getElementById("c1-tid1").innerHTML = "“ Kanyakumari ”";
    document.getElementById("c1imgid2").src = "TN/Kodaikanal/water fall.jpg";
    document.getElementById("c1-tid2").innerHTML = "“ Kodaikanal ”";

    document.getElementById("c2imgid").src = "TN/Mahabalipuram/kbb.jpeg";
    document.getElementById("c2-tid").innerHTML = "“ Mahabalipuram ”";
    document.getElementById("c2imgid1").src = "TN/Ooty/otyn1.jpg";
    document.getElementById("c2-tid1").innerHTML = "“ Ooty ”";
    document.getElementById("col1imgid").src = "TN/Coonoor/hv.jpg";
    document.getElementById("col1imgid2").src = "TN/Coonoor/tf.jpg";
    document.getElementById("col1imgid3").src = "TN/Coonoor/mlf.jpg";

    document.getElementById("col2h4-id").innerHTML = "Although there is an endless list of activities in Coonoor, those searching for some adventure should embark on an exciting trek through the town’s mysterious rainforests. Hidden Valley is a haven for adventure and photography enthusiasts and a nice place for a picnic with family and friends. It is one of the most unusual things to do in Coonoor.";




    document.getElementById("c1id-main").addEventListener("click", c1idmain)
    document.getElementById("c1imgid").setAttribute('title', 'Coonoor');

    function c1idmain() {
        document.getElementById("col1imgid").src = "TN/Coonoor/hv.jpg";
        document.getElementById("col1imgid2").src = "TN/Coonoor/tf.jpg";
        document.getElementById("col1imgid3").src = "TN/Coonoor/mlf.jpg";

        document.getElementById("col2h4-id").innerHTML = "Although there is an endless list of activities in Coonoor, those searching for some adventure should embark on an exciting trek through the town’s mysterious rainforests. Hidden Valley is a haven for adventure and photography enthusiasts and a nice place for a picnic with family and friends. It is one of the most unusual things to do in Coonoor.";


    }

    document.getElementById("c1id-main1").addEventListener("click", c1idmain1)
    document.getElementById("c1imgid1").setAttribute('title', 'Kanyakumari');


    function c1idmain1() {
        document.getElementById("col1imgid").src = "TN/Kanyakumari/vrm.jpeg";
        document.getElementById("col1imgid2").src = "TN/Kanyakumari/sb.avif";
        document.getElementById("col1imgid3").src = "TN/Kanyakumari/ssp.jpeg";

        document.getElementById("col2h4-id").innerHTML = "Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip. The memorial stands on one of the two rocks located about 500 meters off mainland of Vavathurai. It was built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock.";




    }

    document.getElementById("c1id-main2").addEventListener("click", c1idmain2)
    document.getElementById("c1imgid2").setAttribute('title', 'Kodaikanal');

    function c1idmain2() {
        document.getElementById("col1imgid").src = "TN/Kodaikanal/c walk.jpg";
        document.getElementById("col1imgid2").src = "TN/Kodaikanal/R-t.jpg";
        document.getElementById("col1imgid3").src = "TN/Kodaikanal/water fall.jpg";

        document.getElementById("col2h4-id").innerHTML = "Coakers Walk is a beautiful man-made one-kilometre-long walking plaza built on the mountains in the mesmerizing city of Kodaikanal. The lovely path of Coakers Walk that curves by the edge of the gorgeous mountain have been constructed mainly for morning and evening walks. One can also choose to ride a bicycle to explore the scenic location. . It costs INR 30 per hour for adults and INR 20 per hour for children.";




    }


    document.getElementById("c12id-main").addEventListener("click", c12idmainTN)
    document.getElementById("c2imgid").setAttribute('title', 'Mahabalipuram');

    function c12idmainTN() {
        document.getElementById("col1imgid").src = "TN/Mahabalipuram/kbb.jpeg";
        document.getElementById("col1imgid2").src = "TN/Mahabalipuram/kbb1.jpeg";
        document.getElementById("col1imgid3").src = "TN/Mahabalipuram/kbb3.jpeg";

        document.getElementById("col2h4-id").innerHTML = "Krishna's Butterball is a gigantic balancing rock, granite-boulder resting on a short incline in the historical coastal resort town of Mamallapuram in Tamil Nadu state of India.";



    }


    document.getElementById("c12id-main1").addEventListener("click", c12idmain12TN)
    document.getElementById("c2imgid1").setAttribute('title', 'Ooty');

    function c12idmain12TN() {
        document.getElementById("col1imgid").src = "TN/Ooty/otyn1.jpg";
        document.getElementById("col1imgid2").src = "TN/Ooty/tnt.jpg";
        document.getElementById("col1imgid3").src = "TN/Ooty/ooty1.jpg";

        document.getElementById("col2h4-id").innerHTML = "Ooty (short for Udhagamandalam) is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state. Founded as a British Raj summer resort, it retains a working steam railway line. Other reminders of its colonial past include Stone House, a 19th-century residence, and the circa-1829 St. Stephen’s Church. Its 55-acre Government Botanical Garden lies on the slopes of Doddabetta Peak. ";



    }

    let span = document.querySelectorAll(".spandiv");
    span.forEach(headingspan => {
        // alert("poiuytrew")
        headingspan.innerHTML = "(TN)"
    })



    document.getElementById("h1imgid").src = "TN/Tnh/lttn.jpg";
    document.getElementById("h1imgid1").src = "TN/Tnh/itctn.jpg";
    document.getElementById("h1imgid2").src = "TN/Tnh/rdtn.jpg";


    document.getElementById("dlhma1").innerHTML = "* 6.7 km from centre Ideally set in the  Tamil Nadu  , Hotel Park Suites Tamil Nadu Airport is situated 9.1 km from  Krishna's Butterball."
    document.getElementById("dlhma2").innerHTML = "* Situated in the in Tamil Nadu, 4.1 km from “ Kodaikanal ”, Amidst Monuments and Serenity features free WiFi access and private parking."
    document.getElementById("dlhma3").innerHTML = "* Featuring free WiFi throughout the property, Hotel Radisson In Kaniyakumari  in Tamil Nadu, 4.4 km from Vivekananda Rock Memorial ."

    document.getElementById("htnameid1").innerHTML = " Lemon Tree Hotel";
    document.getElementById("htnameid2").innerHTML = "ITC Hotel";
    document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel";

    lawish.forEach(matchpwis => {

        if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
            // alert("dl remove wish")
            if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                // alert("dl s remove wish")
                document.getElementById("w6sr").style.display = "none";
                document.getElementById("w7dr").style.display = "none";
                document.getElementById("w8ddr").style.display = "none";


            }
            else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                // alert("dl s1 remove wish")
                document.getElementById("w6sr1").style.display = "none";
                document.getElementById("w7dr1").style.display = "none";
                document.getElementById("w8ddr1").style.display = "none";


            }
            else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                // alert("dl s2 remove wish")
                document.getElementById("w6sr2").style.display = "none";
                document.getElementById("w7dr2").style.display = "none";
                document.getElementById("w8ddr2").style.display = "none";


            }


        }
        else if (matchpwis.id == "w6sla1" || matchpwis.id == "w6sla2" || matchpwis.id == "w6sla3") {
            // alert("la remove wish")
            if (matchpwis.id == "w6sla1" || matchpwis.id == "w7dla1" || matchpwis.id == "w8ddla1") {
                // alert("la la1 remove wish")
                document.getElementById("w6sla1").style.display = "none";
                document.getElementById("w7dla1").style.display = "none";
                document.getElementById("w8ddla1").style.display = "none";


            }
            else if (matchpwis.id == "w6sla2" || matchpwis.id == "w7dla2" || matchpwis.id == "w8ddla2") {
                // alert("la la2 remove wish")
                document.getElementById("w6sla2").style.display = "none";
                document.getElementById("w7dla2").style.display = "none";
                document.getElementById("w8ddla2").style.display = "none";


            }
            else if (matchpwis.id == "w6sla3" || matchpwis.id == "w7dla3" || matchpwis.id == "w8ddla3") {
                // alert("la la3 remove wish")
                document.getElementById("w6sla3").style.display = "none";
                document.getElementById("w7dla3").style.display = "none";
                document.getElementById("w8ddla3").style.display = "none";


            }


        }
        else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
            // alert("enterelse remove rj")
            if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                // alert("rj rj1 remove wish")
                document.getElementById("w6srj1").style.display = "none";
                document.getElementById("w7drj1").style.display = "none";
                document.getElementById("w8ddrj1").style.display = "none";


            }
            else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" | matchpwis.id == "w8ddrj2") {
                // alert("rj rj2 remove wish")
                document.getElementById("w6srj2").style.display = "none";
                document.getElementById("w7drj2").style.display = "none";
                document.getElementById("w8ddrj2").style.display = "none";


            }
            else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" | matchpwis.id == "w8ddrj3") {
                // alert("rj rj3 remove wish")
                document.getElementById("w6srj3").style.display = "none";
                document.getElementById("w7drj3").style.display = "none";
                document.getElementById("w8ddrj3").style.display = "none";


            }
        }

    })



    if (document.getElementById("w-t1-id1").style.display == "none" && document.getElementById("w-t1-id2").style.display == "none" || document.getElementById("w-t1-id").style.display == "none") {
        // alert("enter ")
        document.getElementById("rr1idtn").addEventListener("click", hltn1)
        let h31 = document.querySelectorAll(".h3id1");
        let h41 = document.querySelectorAll(".htnmroom");

        function hltn1() {
            document.getElementById("rr1idtn").removeEventListener("click", hl1)
            document.getElementById("rr1id1tn").removeEventListener("click", hl2)
            document.getElementById("rr1id2tn").removeEventListener("click", hl3)

            document.getElementById("rr1id1tn").removeEventListener("click", hltn2)
            document.getElementById("rr1id2tn").removeEventListener("click", hltn3)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"


            document.getElementById("h1imgid").src = "TN/Tnh/lthtns1.jpg";
            document.getElementById("h1imgid1").src = "TN/Tnh/lthtnd1.jpg";
            document.getElementById("h1imgid2").src = "TN/Tnh/lthtndd1.jpg";


            document.getElementById("htnameid3").innerHTML = "Lemon Tree Hotel";
            document.getElementById("htnameid2").innerHTML = "Lemon Tree Hotel";
            document.getElementById("htnameid1").innerHTML = "Lemon Tree Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹7000/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹8800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹12000/-";


            h31[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[2].innerHTML = "* Internet connectivity."
            h31[3].innerHTML = "* Housekeeping services."
            h31[4].innerHTML = "* Laundering services."
            h31[5].innerHTML = "* AC and Non-AC Rooms."


            h31[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[8].innerHTML = "* Internet connectivity."
            h31[9].innerHTML = "* Housekeeping services."
            h31[10].innerHTML = "* Laundering services."
            h31[11].innerHTML = "* AC and Non-AC Rooms."
            h31[12].innerHTML = ""

            h31[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h31[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h31[15].innerHTML = "* Internet connectivity."
            h31[16].innerHTML = "* Housekeeping services."
            h31[17].innerHTML = "* Laundering services."
            h31[18].innerHTML = "* AC and Non-AC Rooms."
            h31[19].innerHTML = ""


            if (document.getElementById("w-t1-id1").style.display == "none" && document.getElementById("w-t1-id2").style.display == "none" || document.getElementById("w-t1-id").style.display == "none") {

                lawish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter dl to tn  ")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6stn1");
                            document.getElementById("w7dr").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6stn1");
                            document.getElementById("w7dr1").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6stn1");
                            document.getElementById("w7dr2").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
                        // alert("enter rj to tn ")
                        if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                            // alert("rj to tn srj1")
                            document.getElementById("w6srj1").setAttribute("id", "w6stn1");
                            document.getElementById("w7drj1").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddrj1").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                            // alert("rj to tn srj2")
                            document.getElementById("w6srj2").setAttribute("id", "w6stn1");
                            document.getElementById("w7drj2").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddrj2").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                            // alert("rj to tn srj3")
                            document.getElementById("w6srj3").setAttribute("id", "w6stn1");
                            document.getElementById("w7drj3").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddrj3").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6sla1" || matchpwis.id == "w6sla2" || matchpwis.id == "w6sla3") {
                        // alert("enter la to Tn")
                        if (matchpwis.id == "w6sla1" || matchpwis.id == "w7dla1" || matchpwis.id == "w8ddla1") {
                            // alert("la to tn sla1")
                            document.getElementById("w6sla1").setAttribute("id", "w6stn1");
                            document.getElementById("w7dla1").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddla1").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w7dla2" || matchpwis.id == "w6sla2" || matchpwis.id == "w8ddla2") {
                            // alert("la to tn sla2")
                            document.getElementById("w6sla2").setAttribute("id", "w6stn1");
                            document.getElementById("w7dla2").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddla2").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w8ddla3" || matchpwis.id == "w7dla3" || matchpwis.id == "w6sla3") {
                            // alert("la to tn srla3")
                            document.getElementById("w6sla3").setAttribute("id", "w6stn1");
                            document.getElementById("w7dla3").setAttribute("id", "w7dtn1");
                            document.getElementById("w8ddla3").setAttribute("id", "w8ddtn1");

                            document.getElementById("w6stn1").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn1").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn1").setAttribute("style", "disply:block");

                            document.getElementById("w6stn1").innerHTML = "🤍"
                            document.getElementById("w7dtn1").innerHTML = "🤍"
                            document.getElementById("w8ddtn1").innerHTML = "🤍"



                        }
                    }

                })

            }





        }


        document.getElementById("rr1id1tn").addEventListener("click", hltn2);
        let h32 = document.querySelectorAll(".h3id1");

        function hltn2() {
            document.getElementById("rr1id1tn").removeEventListener("click", hl2)
            document.getElementById("rr1id2tn").removeEventListener("click", hl3)
            document.getElementById("rr1idtn").removeEventListener("click", hl1)

            document.getElementById("rr1idtn").removeEventListener("click", hltn1)
            document.getElementById("rr1id2tn").removeEventListener("click", hltn3)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"


            document.getElementById("h1imgid").src = "TN/Tnh/itctns1.jpg";
            document.getElementById("h1imgid1").src = "TN/Tnh/itcd1.jpg";
            document.getElementById("h1imgid2").src = "TN/Tnh/itctndd1.jpg";


            document.getElementById("htnameid1").innerHTML = "ITC Hotel"
            document.getElementById("htnameid2").innerHTML = "ITC Hotel"
            document.getElementById("htnameid3").innerHTML = "ITC Hotel"

            document.getElementById("rnh4id1").innerHTML = "INR ₹5590/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹9800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹10800/-";


            h32[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[2].innerHTML = "* Internet connectivity."
            h32[3].innerHTML = "* Housekeeping services."
            h32[4].innerHTML = "* Laundering services."
            h32[5].innerHTML = "* AC and Non-AC Rooms."

            h32[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[8].innerHTML = "* Internet connectivity."
            h32[9].innerHTML = "* Housekeeping services."
            h32[10].innerHTML = "* Laundering services."
            h32[11].innerHTML = "* AC and Non-AC Rooms."
            h32[12].innerHTML = ""

            h32[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h32[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h32[15].innerHTML = "* Internet connectivity."
            h32[16].innerHTML = "* Housekeeping services."
            h32[17].innerHTML = "* Laundering services."
            h32[18].innerHTML = "* AC and Non-AC Rooms."
            h32[19].innerHTML = ""



            if (document.getElementById("w-t1-id1").style.display == "none" && document.getElementById("w-t1-id2").style.display == "none" || document.getElementById("w-t1-id").style.display == "none") {


                lawish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter dl to tn  ")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6stn2");
                            document.getElementById("w7dr").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6stn2");
                            document.getElementById("w7dr1").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6stn2");
                            document.getElementById("w7dr2").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
                        // alert("enter rj to tn ")
                        if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                            // alert("rj to tn srj1")
                            document.getElementById("w6srj1").setAttribute("id", "w6stn2");
                            document.getElementById("w7drj1").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddrj1").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                            // alert("rj to tn srj2")
                            document.getElementById("w6srj2").setAttribute("id", "w6stn2");
                            document.getElementById("w7drj2").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddrj2").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                            // alert("rj to tn srj3")
                            document.getElementById("w6srj3").setAttribute("id", "w6stn2");
                            document.getElementById("w7drj3").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddrj3").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6sla1" || matchpwis.id == "w6sla2" || matchpwis.id == "w6sla3") {
                        // alert("enter la to Tn")
                        if (matchpwis.id == "w6sla1" || matchpwis.id == "w7dla1" || matchpwis.id == "w8ddla1") {
                            // alert("la to tn sla1")
                            document.getElementById("w6sla1").setAttribute("id", "w6stn2");
                            document.getElementById("w7dla1").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddla1").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w7dla2" || matchpwis.id == "w8ddla2" || matchpwis.id == "w6sla2") {
                            // alert("la to tn sla2")
                            document.getElementById("w6sla2").setAttribute("id", "w6stn2");
                            document.getElementById("w7dla2").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddla2").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w8ddla3" || matchpwis.id == "w7dla3" || matchpwis.id == "w6sla3") {
                            // alert("la to tn srla3")
                            document.getElementById("w6sla3").setAttribute("id", "w6stn2");
                            document.getElementById("w7dla3").setAttribute("id", "w7dtn2");
                            document.getElementById("w8ddla3").setAttribute("id", "w8ddtn2");

                            document.getElementById("w6stn2").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn2").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn2").setAttribute("style", "disply:block");

                            document.getElementById("w6stn2").innerHTML = "🤍"
                            document.getElementById("w7dtn2").innerHTML = "🤍"
                            document.getElementById("w8ddtn2").innerHTML = "🤍"



                        }
                    }

                })

            }







        }


        document.getElementById("rr1id2tn").addEventListener("click", hltn3);
        let h33 = document.querySelectorAll(".h3id1");

        function hltn3() {
            document.getElementById("rr1id2tn").removeEventListener("click", hl3);
            document.getElementById("rr1idtn").removeEventListener("click", hl1);
            document.getElementById("rr1id1tn").removeEventListener("click", hl2);
            document.getElementById("rr1id1tn").removeEventListener("click", hltn2)
            document.getElementById("rr1idtn").removeEventListener("click", hltn1)

            h41[0].innerHTML = "Single Room"
            h41[1].innerHTML = "Double Room"
            h41[2].innerHTML = "Delux Room"

            document.getElementById("h1imgid").src = "TN/Tnh/rdtns1.jpg";
            document.getElementById("h1imgid1").src = "TN/Tnh/rdtnd1.jpg";
            document.getElementById("h1imgid2").src = "TN/Tnh/rdtndd1.jpg";

            document.getElementById("htnameid1").innerHTML = "Radisson blu Hotel";
            document.getElementById("htnameid2").innerHTML = "Radisson blu Hotel";
            document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel";

            document.getElementById("rnh4id1").innerHTML = "INR ₹6500/-";
            document.getElementById("rnh4id2").innerHTML = "INR ₹8800/-";
            document.getElementById("rnh4id3").innerHTML = "INR ₹14700/-";



            h33[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[2].innerHTML = "* Internet connectivity."
            h33[3].innerHTML = "* Housekeeping services."
            h33[4].innerHTML = "* Laundering services."
            h33[5].innerHTML = "* AC and Non-AC Rooms."

            h33[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[8].innerHTML = "* Internet connectivity."
            h33[9].innerHTML = "* Housekeeping services."
            h33[10].innerHTML = "* Laundering services."
            h33[11].innerHTML = "* AC and Non-AC Rooms."
            h33[12].innerHTML = ""

            h33[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
            h33[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
            h33[15].innerHTML = "* Internet connectivity."
            h33[16].innerHTML = "* Housekeeping services."
            h33[17].innerHTML = "* Laundering services."
            h33[18].innerHTML = "* AC and Non-AC Rooms."
            h33[19].innerHTML = ""


            if (document.getElementById("w-t1-id1").style.display == "none" && document.getElementById("w-t1-id2").style.display == "none" || document.getElementById("w-t1-id").style.display == "none") {


                lawish.forEach(matchpwis => {


                    if (matchpwis.id == "w6sr" || matchpwis.id == "w6sr1" || matchpwis.id == "w6sr2") {
                        // alert("enter dl to tn  ")
                        if (matchpwis.id == "w6sr" || matchpwis.id == "w7dr" || matchpwis.id == "w8ddr") {
                            // alert("s")
                            document.getElementById("w6sr").setAttribute("id", "w6stn3");
                            document.getElementById("w7dr").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddr").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6sr1" || matchpwis.id == "w7dr1" || matchpwis.id == "w8ddr1") {
                            // alert("s1")
                            document.getElementById("w6sr1").setAttribute("id", "w6stn3");
                            document.getElementById("w7dr1").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddr1").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6sr2" || matchpwis.id == "w7dr2" || matchpwis.id == "w8ddr2") {
                            // alert("s2")
                            document.getElementById("w6sr2").setAttribute("id", "w6stn3");
                            document.getElementById("w7dr2").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddr2").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6srj1" || matchpwis.id == "w6srj2" || matchpwis.id == "w6srj3") {
                        // alert("enter rj to tn ")
                        if (matchpwis.id == "w6srj1" || matchpwis.id == "w7drj1" || matchpwis.id == "w8ddrj1") {
                            // alert("rj to tn srj1")
                            document.getElementById("w6srj1").setAttribute("id", "w6stn3");
                            document.getElementById("w7drj1").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddrj1").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w6srj2" || matchpwis.id == "w7drj2" || matchpwis.id == "w8ddrj2") {
                            // alert("rj to tn srj2")
                            document.getElementById("w6srj2").setAttribute("id", "w6stn3");
                            document.getElementById("w7drj2").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddrj2").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w6srj3" || matchpwis.id == "w7drj3" || matchpwis.id == "w8ddrj3") {
                            // alert("rj to tn srj3")
                            document.getElementById("w6srj3").setAttribute("id", "w6stn3");
                            document.getElementById("w7drj3").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddrj3").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"



                        }


                    }
                    else if (matchpwis.id == "w6sla1" || matchpwis.id == "w6sla2" || matchpwis.id == "w6sla3") {
                        // alert("enter la to Tn")
                        if (matchpwis.id == "w6sla1" || matchpwis.id == "w7dla1" || matchpwis.id == "w8ddla1") {
                            // alert("la to tn sla1")
                            document.getElementById("w6sla1").setAttribute("id", "w6stn3");
                            document.getElementById("w7dla1").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddla1").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"


                        }
                        else if (matchpwis.id == "w7dla2" || matchpwis.id == "w8ddla2" || matchpwis.id == "w6sla2") {
                            // alert("la to tn sla2")
                            document.getElementById("w6sla2").setAttribute("id", "w6stn3");
                            document.getElementById("w7dla2").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddla2").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"



                        }
                        else if (matchpwis.id == "w8ddla3" || matchpwis.id == "w7dla3" || matchpwis.id == "w6sla3") {
                            // alert("la to tn srla3")
                            document.getElementById("w6sla3").setAttribute("id", "w6stn3");
                            document.getElementById("w7dla3").setAttribute("id", "w7dtn3");
                            document.getElementById("w8ddla3").setAttribute("id", "w8ddtn3");

                            document.getElementById("w6stn3").setAttribute("style", "disply:block");
                            document.getElementById("w7dtn3").setAttribute("style", "disply:block");
                            document.getElementById("w8ddtn3").setAttribute("style", "disply:block");

                            document.getElementById("w6stn3").innerHTML = "🤍"
                            document.getElementById("w7dtn3").innerHTML = "🤍"
                            document.getElementById("w8ddtn3").innerHTML = "🤍"



                        }
                    }

                })

            }




        }


    }







}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----TN-end---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----RJ-MAP---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.getElementById("Rjmap").addEventListener("click", Rjmap)
function Rjmap() { RJc() };

document.getElementById("DLmap").addEventListener("click", DLmap)
function DLmap() { Dlc() };

document.getElementById("LDmap").addEventListener("click", LDmap)
function LDmap() { LDc() };

document.getElementById("TNmap").addEventListener("click", TNmap)
function TNmap() { TNc() };


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%----RJ-MAP-end---%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-----sta-slid--%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55
document.getElementById("nexti").addEventListener("click", next);

function next() {
    // alert("old +")
    document.getElementById("c1id-main").style.display = "none";
    document.getElementById("c1id-main1").style.display = "none";
    document.getElementById("c12id-main").style.display = "block";
    document.getElementById("c12id-main1").style.display = "block";


}

document.getElementById("previ").addEventListener("click", prev)

function prev() {
    document.getElementById("c1id-main").style.display = "block";
    document.getElementById("c1id-main1").style.display = "block";
    document.getElementById("c12id-main").style.display = "none";
    document.getElementById("c12id-main1").style.display = "none";


}


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--input--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

var inputField = document.querySelector('#input1id');

inputField.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--input1--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


var inputField = document.querySelector('#input1id1');

inputField.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--input2--$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


var inputField = document.querySelector('#input1id2');

inputField.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};

// $$$$$$$$$$$$$$$$$%$%$%$%$$%$%$%$%$$$$$$$$---back--to--top--btn----$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


window.addEventListener("scroll", function () {
    if (window.scrollY >= 700) {
        document.getElementById("upbtnid").style.display = "block";
        document.getElementById("upbtnimg").addEventListener("click", top)
        function top() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

        }

    }
    else if (window.scrollY >= -700) {
        document.getElementById("upbtnid").style.display = "none";
    }



});

window.addEventListener("scroll", function () {

    if (window.scrollY >= 300) {
        document.getElementById("s-f-d-id").style.display = "block";
    }

    else if (window.scrollY >= -300) {
        document.getElementById("s-f-d-id").style.display = "none";
    }




});

// $$$$$$$$$$$$$$$$$%$%$%$%$$%$%$%$%$$$$$$$$---back--to--top--btn----$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// &*&*&&&&&&&&&&&&&&&&&&&&*&*&*&*=====HOTELS START==========#$%^&*((*&^%$#))


document.getElementById("rr1id").addEventListener("click", hl1)
let h31 = document.querySelectorAll(".h3id1");
let h41 = document.querySelectorAll(".htnmroom");

function hl1() {
    document.getElementById("rr1id1").removeEventListener("click", hl2)
    document.getElementById("rr1id2").removeEventListener("click", hl3)

    h41[0].innerHTML = "Single Room"
    h41[1].innerHTML = "Double Room"
    h41[2].innerHTML = "Delux Room"


    document.getElementById("h1imgid").src = "RP/s1.jpg";
    document.getElementById("h1imgid1").src = "RP/d1.jpg";
    document.getElementById("h1imgid2").src = "RP/de1.jpg";


    document.getElementById("htnameid3").innerHTML = "Lemon Tree Hotel";
    document.getElementById("htnameid2").innerHTML = "Lemon Tree Hotel";
    document.getElementById("htnameid1").innerHTML = "Lemon Tree Hotel";

    document.getElementById("rnh4id1").innerHTML = "INR ₹5500/-";
    document.getElementById("rnh4id2").innerHTML = "INR ₹7500/-";
    document.getElementById("rnh4id3").innerHTML = "INR ₹9000/-";


    h31[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h31[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h31[2].innerHTML = "* Internet connectivity."
    h31[3].innerHTML = "* Housekeeping services."
    h31[4].innerHTML = "* Laundering services."
    h31[5].innerHTML = "* AC and Non-AC Rooms."



    h31[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h31[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h31[8].innerHTML = "* Internet connectivity."
    h31[9].innerHTML = "* Housekeeping services."
    h31[10].innerHTML = "* Laundering services."
    h31[11].innerHTML = "* AC and Non-AC Rooms."
    h31[12].innerHTML = ""

    h31[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h31[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h31[15].innerHTML = "* Internet connectivity."
    h31[16].innerHTML = "* Housekeeping services."
    h31[17].innerHTML = "* Laundering services."
    h31[18].innerHTML = "* AC and Non-AC Rooms."
    h31[19].innerHTML = ""

    document.getElementById("w6sr").style.display = "block"
    document.getElementById("w7dr").style.display = "block"
    document.getElementById("w8ddr").style.display = "block"



}


document.getElementById("rr1id1").addEventListener("click", hl2);
let h32 = document.querySelectorAll(".h3id1");

function hl2() {
    document.getElementById("rr1id2").removeEventListener("click", hl3)
    document.getElementById("rr1id").removeEventListener("click", hl1)

    document.getElementById("w6sr").setAttribute("id", "w6sr1");
    document.getElementById("w7dr").setAttribute("id", "w7dr1");
    document.getElementById("w8ddr").setAttribute("id", "w8ddr1");


    h41[0].innerHTML = "Single Room"
    h41[1].innerHTML = "Double Room"
    h41[2].innerHTML = "Delux Room"



    document.getElementById("h1imgid").src = "RP/d2.jpg";
    document.getElementById("h1imgid1").src = "RP/s3.jpg";
    document.getElementById("h1imgid2").src = "RP/de2.jpg";


    document.getElementById("htnameid1").innerHTML = "ITC Hotel";
    document.getElementById("htnameid2").innerHTML = "ITC Hotel"
    document.getElementById("htnameid3").innerHTML = "ITC Hotel";


    document.getElementById("rnh4id1").innerHTML = "INR ₹3500/-";
    document.getElementById("rnh4id2").innerHTML = "INR ₹5500/-";
    document.getElementById("rnh4id3").innerHTML = "INR ₹7000/-";


    h32[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h32[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h32[2].innerHTML = "* Internet connectivity."
    h32[3].innerHTML = "* Housekeeping services."
    h32[4].innerHTML = "* Laundering services."
    h32[5].innerHTML = "* AC and Non-AC Rooms."



    h32[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h32[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h32[8].innerHTML = "* Internet connectivity."
    h32[9].innerHTML = "* Housekeeping services."
    h32[10].innerHTML = "* Laundering services."
    h32[11].innerHTML = "* AC and Non-AC Rooms."
    h32[12].innerHTML = ""

    h32[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h32[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h32[15].innerHTML = "* Internet connectivity."
    h32[16].innerHTML = "* Housekeeping services."
    h32[17].innerHTML = "* Laundering services."
    h32[18].innerHTML = "* AC and Non-AC Rooms."
    h32[19].innerHTML = ""

    document.getElementById("w6sr1").style.display = "block"
    document.getElementById("w7dr1").style.display = "block"
    document.getElementById("w8ddr1").style.display = "block"



}


document.getElementById("rr1id2").addEventListener("click", hl3);
let h33 = document.querySelectorAll(".h3id1");

function hl3() {
    document.getElementById("rr1id").removeEventListener("click", hl1);
    document.getElementById("rr1id1").removeEventListener("click", hl2);

    document.getElementById("w6sr").setAttribute("id", "w6sr2");
    document.getElementById("w7dr").setAttribute("id", "w7dr2");
    document.getElementById("w8ddr").setAttribute("id", "w8ddr2");


    h41[0].innerHTML = "Single Room"
    h41[1].innerHTML = "Double Room"
    h41[2].innerHTML = "Delux Room"


    document.getElementById("h1imgid").src = "RP/s5.jpg";
    document.getElementById("h1imgid1").src = "RP/d4.jpg";
    document.getElementById("h1imgid2").src = "RP/de3.jpg";


    document.getElementById("htnameid1").innerHTML = "Radisson blu Hotel"
    document.getElementById("htnameid2").innerHTML = "Radisson blu Hotel"
    document.getElementById("htnameid3").innerHTML = "Radisson blu Hotel"



    document.getElementById("rnh4id1").innerHTML = "INR ₹5500/-";
    document.getElementById("rnh4id2").innerHTML = "INR ₹6700/-";
    document.getElementById("rnh4id3").innerHTML = "INR 10000/-";


    h33[0].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h33[1].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h33[2].innerHTML = "* Internet connectivity."
    h33[3].innerHTML = "* Housekeeping services."
    h33[4].innerHTML = "* Laundering services."
    h33[5].innerHTML = "* AC and Non-AC Rooms."



    h33[6].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h33[7].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h33[8].innerHTML = "* Internet connectivity."
    h33[9].innerHTML = "* Housekeeping services."
    h33[10].innerHTML = "* Laundering services."
    h33[11].innerHTML = "* AC and Non-AC Rooms."
    h33[12].innerHTML = ""

    h33[13].innerHTML = "* 24-Hours Security. Landlord also lives in the same premises which helps every facility."
    h33[14].innerHTML = "* 24 hours Electricity: The area is posh so most of the time electricity is there but then also electricity Back-up is there."
    h33[15].innerHTML = "* Internet connectivity."
    h33[16].innerHTML = "* Housekeeping services."
    h33[17].innerHTML = "* Laundering services."
    h33[18].innerHTML = "* AC and Non-AC Rooms."
    h33[19].innerHTML = ""

    document.getElementById("w6sr2").style.display = "block"
    document.getElementById("w7dr2").style.display = "block"
    document.getElementById("w8ddr2").style.display = "block"


}




// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&--CAR SECTION ----^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

document.getElementById("calid1").addEventListener("click", multiply)
function multiply() {
    var number_1 = document.getElementById("input1id").value;
    var number_2 = 15;

    var result = 0;
    result = number_1 * number_2;
    document.getElementById("show1").innerHTML = "INR ₹" + result;


    return result;
}

document.getElementById("calid2").addEventListener("click", multiply1)
function multiply1() {
    var number_1 = document.getElementById("input1id1").value;
    var number_2 = 17;

    var result1 = 0;
    result1 = number_1 * number_2;
    document.getElementById("show2").innerHTML = "INR ₹" + result1;


    return result1;
}


document.getElementById("calid3").addEventListener("click", multiply2)
function multiply2() {
    var number_1 = document.getElementById("input1id2").value;
    var number_2 = 20;

    var result2 = 0;
    result2 = number_1 * number_2;
    document.getElementById("show3").innerHTML = "INR ₹" + result2;


    return result2;
}

var carsec = document.querySelectorAll(".heartc");

document.getElementById("car1").addEventListener("click", car1c);

function car1c() {
    // alert("enterv2")
    document.getElementById("carhi1").style.borderBottom = "1px solid red"
    document.getElementById("carhi2").style.border = "none"
    document.getElementById("carhi3").style.border = "none"
    document.getElementById("carhi4").style.border = "none"
    document.getElementById("carhi5").style.border = "none"

    document.getElementById("mcs").style.animation = "carslide1 2s "

    document.getElementById("carimgch1").src = "RP/car/sed/seor.jpg"
    document.getElementById("carimgch2").src = "RP/car/sed/se22.jpg"
    document.getElementById("carimgch3").src = "RP/car/sed/ss5.png"

    document.getElementById("carsec").innerHTML = "SEDAN"
    carin[0].innerHTML = "Ford Aspire"
    carin[1].innerHTML = "* 4 seater car including Car Driver and Three 3 Persons."
    carin[2].innerHTML = "* The Ford Aspire mileage is 16.3 to 26.1 kmpl."
    carin[3].innerHTML = "* The Sefety Rating of Ford Aspire is 3 star."
    carin[4].innerHTML = "* INR ₹15/km|."

    carin[5].innerHTML = "Suzuki Ciaz"
    carin[6].innerHTML = "* 4 seater car including Car Driver and Three 3 Persons."
    carin[7].innerHTML = "* The Suzuki Ciaz mileage is 20.0 to 21.65 kmpl."
    carin[8].innerHTML = "* The Sefety Rating of Suzuki Ciaz is 4 star."
    carin[9].innerHTML = "* INR ₹17/km|."


    carin[10].innerHTML = "Sakoda Slavia"
    carin[11].innerHTML = "* 4 seater car including Car Driver and Three 3 Persons"
    carin[12].innerHTML = "* The Sakoda Slavia mileage is 19 to 20 kmpl."
    carin[13].innerHTML = "* The Sefety Rating of Sakoda slavia is 5 star."
    carin[14].innerHTML = "* INR ₹20/km|"



    // document.getElementById("w9v1").setAttribute("id", "w9v11");
    // document.getElementById("w10v2").setAttribute("id", "w10v22");
    // document.getElementById("w11v3").setAttribute("id", "w11v33");

    document.getElementById("input1id").value = " "
    document.getElementById("input1id1").value = " "
    document.getElementById("input1id2").value = " "
    document.getElementById("input1id").placeholder = "Enter Total km "
    document.getElementById("input1id1").placeholder = "Enter Total km "
    document.getElementById("input1id2").placeholder = "Enter Total km "
    document.getElementById("show1").innerHTML = "INR ₹0"
    document.getElementById("show2").innerHTML = "INR ₹0"
    document.getElementById("show3").innerHTML = "INR ₹0"

    document.getElementById("calid1").addEventListener("click", multiply)
    function multiply() {
        var number_1 = document.getElementById("input1id").value;
        var number_2 = 15;

        var result = 0;
        result = number_1 * number_2;
        document.getElementById("show1").innerHTML = "INR ₹" + result;


        return result;
    }

    document.getElementById("calid2").addEventListener("click", multiply1)
    function multiply1() {
        var number_1 = document.getElementById("input1id1").value;
        var number_2 = 17;

        var result1 = 0;
        result1 = number_1 * number_2;
        document.getElementById("show2").innerHTML = "INR ₹" + result1;


        return result1;
    }


    document.getElementById("calid3").addEventListener("click", multiply2)
    function multiply2() {
        var number_1 = document.getElementById("input1id2").value;
        var number_2 = 20;

        var result2 = 0;
        result2 = number_1 * number_2;
        document.getElementById("show3").innerHTML = "INR ₹" + result2;


        return result2;
    }



    carsec.forEach(matchp => {


        if (matchp.id == "w9v1-su" || matchp.id == "w10v2-su" || matchp.id == "w11v3-su") {
            // alert("enter su to se")
            document.getElementById("w9v1-su").setAttribute("id", "w9v1");
            document.getElementById("w10v2-su").setAttribute("id", "w10v2");
            document.getElementById("w11v3-su").setAttribute("id", "w11v3");

            document.getElementById("w9v1").innerHTML = "🤍"
            document.getElementById("w10v2").innerHTML = "🤍"
            document.getElementById("w11v3").innerHTML = "🤍"



        }
        else if (matchp.id == "w9v1-mu" || matchp.id == "w10v2-mu" || matchp.id == "w11v3-mu") {
            // alert("entere mu to se")
            document.getElementById("w9v1-mu").setAttribute("id", "w9v1");
            document.getElementById("w10v2-mu").setAttribute("id", "w10v2");
            document.getElementById("w11v3-mu").setAttribute("id", "v11v3");

            document.getElementById("w9v1").innerHTML = "🤍"
            document.getElementById("w10v2").innerHTML = "🤍"
            document.getElementById("w11v3").innerHTML = "🤍"


        }
        else if (matchp.id == "w9v1-lu" || matchp.id == "w10v2-lu" || matchp.id == "w11v3-lu") {
            // alert("entere lu to se")
            document.getElementById("w9v1-lu").setAttribute("id", "w9v1");
            document.getElementById("w10v2-lu").setAttribute("id", "w10v2");
            document.getElementById("w11v3-lu").setAttribute("id", "w11v3");

            document.getElementById("w9v1").innerHTML = "🤍"
            document.getElementById("w10v2").innerHTML = "🤍"
            document.getElementById("w11v3").innerHTML = "🤍"


        }
        else if (matchp.id == "w9v1-tr" || matchp.id == "w10v2-tr" || matchp.id == "w11v3-tr") {
            // alert("enter tr to se")
            document.getElementById("w9v1-tr").setAttribute("id", "w9v1");
            document.getElementById("w10v2-tr").setAttribute("id", "w10v2");
            document.getElementById("w11v3-tr").setAttribute("id", "w11v3");

            document.getElementById("w9v1").innerHTML = "🤍"
            document.getElementById("w10v2").innerHTML = "🤍"
            document.getElementById("w11v3").innerHTML = "🤍"


        }

    })



}

document.getElementById("car2").addEventListener("click", car2c);
let carin = document.querySelectorAll(".carinfo");
function car2c() {
    // alert("enterv2")
    document.getElementById("carhi2").style.borderBottom = "1px solid red"
    document.getElementById("carhi1").style.border = "none"
    document.getElementById("carhi3").style.border = "none"
    document.getElementById("carhi4").style.border = "none"
    document.getElementById("carhi5").style.border = "none"

    document.getElementById("mcs").style.animation = "carslide2 2s "

    document.getElementById("carimgch1").src = "RP/car/suv/fsuv.jpg"
    document.getElementById("carimgch2").src = "RP/car/suv/hsuv.jpg"
    document.getElementById("carimgch3").src = "RP/car/suv/rsuv1.jpg"

    document.getElementById("carsec").innerHTML = "SUV"
    carin[0].innerHTML = "Ford Explorer"
    carin[1].innerHTML = "* seat up to 6 Persons."
    carin[2].innerHTML = "* The  Ford Explorer mileage is 9.8KM/L kmpl."
    carin[3].innerHTML = "* The Sefety Rating of Ford Explorer is 5 star."
    carin[4].innerHTML = "* INR ₹19/km|."

    carin[5].innerHTML = "Hyundai Creta"
    carin[6].innerHTML = "* seat up to 5 Persons."
    carin[7].innerHTML = "* The hyundai creta mileage is 17.4 to 21.8 kmpl."
    carin[8].innerHTML = "* The Sefety Rating of Hyundai Creta is 3 star."
    carin[9].innerHTML = "* INR ₹16/km|."


    carin[10].innerHTML = "Renault Koleos"
    carin[11].innerHTML = "* seat up to 5 Persons."
    carin[12].innerHTML = "* The renault koleos mileage is 14.56 to 17.15 kmpl."
    carin[13].innerHTML = "* The Sefety Rating of renault koleos 5 STAR ."
    carin[14].innerHTML = "* INR ₹21/km|."



    document.getElementById("input1id").value = " ";
    document.getElementById("input1id1").value = " ";
    document.getElementById("input1id2").value = " ";
    document.getElementById("show1").innerHTML = "INR ₹0";
    document.getElementById("show2").innerHTML = "INR ₹0";
    document.getElementById("show3").innerHTML = "INR ₹0";



    // let pla=document.getElementById("input1id");
    // let pla1=document.getElementById("input1id1");
    // let pla2=document.getElementById("input1id2");



    // document.getElementById("input1id")[0].placeholder = "Enter Total  km  "
    // document.getElementById("input1id1")[0].placeholder = "Enter Total km  "
    // document.getElementById("input1id2")[0].placeholder = "Enter Total km  "




    // document.getElementById("w9v1").setAttribute("id", "w9v11");
    // document.getElementById("w10v2").setAttribute("id", "w10v22");
    // document.getElementById("w11v3").setAttribute("id", "w11v33");
    document.getElementById("calid1").addEventListener("click", multiply)
    function multiply() {
        var number_1 = document.getElementById("input1id").value;
        var number_2 = 19;

        var result = 0;
        result = number_1 * number_2;
        document.getElementById("show1").innerHTML = "INR ₹" + result;


        return result;
    }

    document.getElementById("calid2").addEventListener("click", multiply1)
    function multiply1() {
        var number_1 = document.getElementById("input1id1").value;
        var number_2 = 16;

        var result1 = 0;
        result1 = number_1 * number_2;
        document.getElementById("show2").innerHTML = "INR ₹" + result1;


        return result1;
    }


    document.getElementById("calid3").addEventListener("click", multiply2)
    function multiply2() {
        var number_1 = document.getElementById("input1id2").value;
        var number_2 = 21;

        var result2 = 0;
        result2 = number_1 * number_2;
        document.getElementById("show3").innerHTML = "INR ₹" + result2;


        return result2;
    }


    carsec.forEach(matchp => {


        if (matchp.id == "w9v1" || matchp.id == "w10v2" || matchp.id == "w11v3") {
            // alert("enter se to su")
            document.getElementById("w9v1").setAttribute("id", "w9v1-su");
            document.getElementById("w10v2").setAttribute("id", "w10v2-su");
            document.getElementById("w11v3").setAttribute("id", "w11v3-su");

            document.getElementById("w9v1-su").innerHTML = "🤍"
            document.getElementById("w10v2-su").innerHTML = "🤍"
            document.getElementById("w11v3-su").innerHTML = "🤍"



        }
        else if (matchp.id == "w9v1-mu" || matchp.id == "w10v2-mu" || matchp.id == "w11v3-mu") {
            // alert("enter mu to su")
            document.getElementById("w9v1-mu").setAttribute("id", "w9v1-su");
            document.getElementById("w10v2-mu").setAttribute("id", "w10v2-su");
            document.getElementById("w11v3-mu").setAttribute("id", "w11v3-su");

            document.getElementById("w9v1-su").innerHTML = "🤍"
            document.getElementById("w10v2-su").innerHTML = "🤍"
            document.getElementById("w11v3-su").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1-lu" || matchp.id == "w10v2-lu" || matchp.id == "w11v3-lu") {
            // alert("enter lu to su")
            document.getElementById("w9v1-lu").setAttribute("id", "w9v1-su");
            document.getElementById("w10v2-lu").setAttribute("id", "w10v2-su");
            document.getElementById("w11v3-lu").setAttribute("id", "w11v3-su");

            document.getElementById("w9v1-su").innerHTML = "🤍"
            document.getElementById("w10v2-su").innerHTML = "🤍"
            document.getElementById("w11v3-su").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1-tr" || matchp.id == "w10v2-tr" || matchp.id == "w11v3-tr") {
            // alert("enter  tr to su")
            document.getElementById("w9v1-tr").setAttribute("id", "w9v1-su");
            document.getElementById("w10v2-tr").setAttribute("id", "w10v2-su");
            document.getElementById("w11v3-tr").setAttribute("id", "w11v3-su");

            document.getElementById("w9v1-su").innerHTML = "🤍"
            document.getElementById("w10v2-su").innerHTML = "🤍"
            document.getElementById("w11v3-su").innerHTML = "🤍"




        }

    })





}


document.getElementById("car3").addEventListener("click", car3c);
let carin1 = document.querySelectorAll(".carinfo");
function car3c() {
    // alert("enterv2")

    document.getElementById("carhi3").style.borderBottom = "1px solid red"
    document.getElementById("carhi2").style.border = "none"
    document.getElementById("carhi1").style.border = "none"
    document.getElementById("carhi4").style.border = "none"
    document.getElementById("carhi5").style.border = "none"


    document.getElementById("mcs").style.animation = "carslide3 2s "

    document.getElementById("carimgch1").src = "RP/car/muv/mu1.jpeg"
    document.getElementById("carimgch2").src = "RP/car/muv/mu4.png"
    document.getElementById("carimgch3").src = "RP/car/muv/tmuv.jpeg"
    document.getElementById("carimgch2").style.background = "white";

    document.getElementById("carsec").innerHTML = "MUV"
    carin[0].innerHTML = "Suzuki Eartiga"
    carin[1].innerHTML = "* seat up to 7 Persons."
    carin[2].innerHTML = "* The  Suzuki Eartiga mileage is 20.3 kmpl."
    carin[3].innerHTML = "* The Sefety Rating of suzuki eartiga is 3 star."
    carin[4].innerHTML = "* INR ₹18/km|."

    carin[5].innerHTML = "Kia Carnival "
    carin[6].innerHTML = "* seat up to 11 Persons."
    carin[7].innerHTML = "* The Kia Carnival  mileage is 13.9 kmpl."
    carin[8].innerHTML = "* The Sefety Rating of Kia Carnival  is 5 star."
    carin[9].innerHTML = "* INR ₹25/km|."


    carin[10].innerHTML = "Tata Hexa"
    carin[11].innerHTML = "* seat up to 7 Persons."
    carin[12].innerHTML = "* The Tata Hexa mileage is 14.4 kmpl."
    carin[13].innerHTML = "* The Sefety Rating of Tata Hexa 4 STAR ."
    carin[14].innerHTML = "* INR ₹21/km|."



    // document.getElementById("w9v1").setAttribute("id", "w9v11");
    // document.getElementById("w10v2").setAttribute("id", "w10v22");
    // document.getElementById("w11v3").setAttribute("id", "w11v33");


    document.getElementById("input1id").value = " "
    document.getElementById("input1id1").value = " "
    document.getElementById("input1id2").value = " "
    document.getElementById("input1id").placeholder = "Enter Total km "
    document.getElementById("input1id1").placeholder = "Enter Total km "
    document.getElementById("input1id2").placeholder = "Enter Total km "
    document.getElementById("show1").innerHTML = "INR ₹0"
    document.getElementById("show2").innerHTML = "INR ₹0"
    document.getElementById("show3").innerHTML = "INR ₹0"




    document.getElementById("calid1").addEventListener("click", multiply)
    function multiply() {
        var number_1 = document.getElementById("input1id").value;
        var number_2 = 18;

        var result = 0;
        result = number_1 * number_2;
        document.getElementById("show1").innerHTML = "INR ₹" + result;


        return result;
    }

    document.getElementById("calid2").addEventListener("click", multiply1)
    function multiply1() {
        var number_1 = document.getElementById("input1id1").value;
        var number_2 = 25;

        var result1 = 0;
        result1 = number_1 * number_2;
        document.getElementById("show2").innerHTML = "INR ₹" + result1;


        return result1;
    }


    document.getElementById("calid3").addEventListener("click", multiply2)
    function multiply2() {
        var number_1 = document.getElementById("input1id2").value;
        var number_2 = 21;

        var result2 = 0;
        result2 = number_1 * number_2;
        document.getElementById("show3").innerHTML = "INR ₹" + result2;


        return result2;
    }


    carsec.forEach(matchp => {


        if (matchp.id == "w9v1-su" || matchp.id == "w10v2-su" || matchp.id == "w11v3-su") {
            // alert("enter su to mu")
            document.getElementById("w9v1-su").setAttribute("id", "w9v1-mu");
            document.getElementById("w10v2-su").setAttribute("id", "w10v2-mu");
            document.getElementById("w11v3-su").setAttribute("id", "w11v3-mu");

            document.getElementById("w9v1-mu").innerHTML = "🤍"
            document.getElementById("w10v2-mu").innerHTML = "🤍"
            document.getElementById("w11v3-mu").innerHTML = "🤍"



        }
        else if (matchp.id == "w9v1" || matchp.id == "w10v2" || matchp.id == "w11v3") {
            // alert("entere se to mu")
            document.getElementById("w9v1").setAttribute("id", "w9v1-mu");
            document.getElementById("w10v2").setAttribute("id", "w10v2-mu");
            document.getElementById("w11v3").setAttribute("id", "w11v3-mu");

            document.getElementById("w9v1-mu").innerHTML = "🤍"
            document.getElementById("w10v2-mu").innerHTML = "🤍"
            document.getElementById("w11v3-mu").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1-lu" || matchp.id == "w10v2-lu" || matchp.id == "w11v3-lu") {
            // alert("entere lu to mu")
            document.getElementById("w9v1-lu").setAttribute("id", "w9v1-mu");
            document.getElementById("w10v2-lu").setAttribute("id", "w10v2-mu");
            document.getElementById("w11v3-lu").setAttribute("id", "w11v3-mu");

            document.getElementById("w9v1-mu").innerHTML = "🤍"
            document.getElementById("w10v2-mu").innerHTML = "🤍"
            document.getElementById("w11v3-mu").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1-tr" || matchp.id == "w10v2-tr" || matchp.id == "w11v3-tr") {
            // alert("enter tr to mu")
            document.getElementById("w9v1-tr").setAttribute("id", "w9v1-mu");
            document.getElementById("w10v2-tr").setAttribute("id", "w10v2-mu");
            document.getElementById("w11v3-tr").setAttribute("id", "w11v3-mu");

            document.getElementById("w9v1-mu").innerHTML = "🤍"
            document.getElementById("w10v2-mu").innerHTML = "🤍"
            document.getElementById("w11v3-mu").innerHTML = "🤍"




        }

    })




}




document.getElementById("car4").addEventListener("click", car4c);
let carin2 = document.querySelectorAll(".carinfo");
function car4c() {
    // alert("enterv2")

    document.getElementById("carhi4").style.borderBottom = "1px solid red"
    document.getElementById("carhi3").style.border = "none"
    document.getElementById("carhi2").style.border = "none"
    document.getElementById("carhi1").style.border = "none"
    document.getElementById("carhi5").style.border = "none"


    document.getElementById("mcs").style.animation = "carslide4 2s "

    document.getElementById("carimgch1").src = "RP/car/lux/lu3.jpeg"
    document.getElementById("carimgch2").src = "RP/car/lux/blu.jpg"
    document.getElementById("carimgch3").src = "RP/car/lux/alu1.jpeg"
    document.getElementById("carimgch3").style.background = "white";

    document.getElementById("carsec").innerHTML = "LUXURY"
    carin[0].innerHTML = "Jaguar F-Pace"
    carin[1].innerHTML = "* seat up to 5 Persons."
    carin[2].innerHTML = "* The  Jaguar F-Pace mileage is 12.9 kmpl."
    carin[3].innerHTML = "* The Sefety Rating of Jaguar F-Pace is 5 star."
    carin[4].innerHTML = "* INR ₹100/km|."

    carin[5].innerHTML = "BMW i7"
    carin[6].innerHTML = "* seat up to 4 Persons."
    carin[7].innerHTML = "* The BMW i7  mileage is 595 to 625 Km/Full Charge."
    carin[8].innerHTML = "* The Sefety Rating of BMW i7  is 5 star."
    carin[9].innerHTML = "* INR ₹1000/km|."


    carin[10].innerHTML = "Audi A4"
    carin[11].innerHTML = "* seat up to 5 Persons."
    carin[12].innerHTML = "* The Tata Audi A4 is 17.4 kmpl"
    carin[13].innerHTML = "* The Sefety Rating of Audi A4 5 STAR ."
    carin[14].innerHTML = "* INR ₹900/km|."



    // document.getElementById("w9v1").setAttribute("id", "w9v11");
    // document.getElementById("w10v2").setAttribute("id", "w10v22");
    // document.getElementById("w11v3").setAttribute("id", "w11v33");


    document.getElementById("input1id").value = " "
    document.getElementById("input1id1").value = " "
    document.getElementById("input1id2").value = " "
    document.getElementById("input1id").placeholder = "Enter Total km "
    document.getElementById("input1id1").placeholder = "Enter Total km "
    document.getElementById("input1id2").placeholder = "Enter Total km "
    document.getElementById("show1").innerHTML = "INR ₹0"
    document.getElementById("show2").innerHTML = "INR ₹0"
    document.getElementById("show3").innerHTML = "INR ₹0"



    document.getElementById("calid1").addEventListener("click", multiply)
    function multiply() {
        var number_1 = document.getElementById("input1id").value;
        var number_2 = 100;

        var result = 0;
        result = number_1 * number_2;
        document.getElementById("show1").innerHTML = "INR ₹" + result;


        return result;
    }

    document.getElementById("calid2").addEventListener("click", multiply1)
    function multiply1() {
        var number_1 = document.getElementById("input1id1").value;
        var number_2 = 1000;

        var result1 = 0;
        result1 = number_1 * number_2;
        document.getElementById("show2").innerHTML = "INR ₹" + result1;


        return result1;
    }


    document.getElementById("calid3").addEventListener("click", multiply2)
    function multiply2() {
        var number_1 = document.getElementById("input1id2").value;
        var number_2 = 900;

        var result2 = 0;
        result2 = number_1 * number_2;
        document.getElementById("show3").innerHTML = "INR ₹" + result2;


        return result2;
    }


    carsec.forEach(matchp => {


        if (matchp.id == "w9v1-su" || matchp.id == "w10v2-su" || matchp.id == "w11v3-su") {
            // alert("enter su to lu")
            document.getElementById("w9v1-su").setAttribute("id", "w9v1-lu");
            document.getElementById("w10v2-su").setAttribute("id", "w10v2-lu");
            document.getElementById("w11v3-su").setAttribute("id", "w11v3-lu");

            document.getElementById("w9v1-lu").innerHTML = "🤍"
            document.getElementById("w10v2-lu").innerHTML = "🤍"
            document.getElementById("w11v3-lu").innerHTML = "🤍"



        }
        else if (matchp.id == "w9v1-mu" || matchp.id == "w10v2-mu" || matchp.id == "w11v3-mu") {
            // alert("entere mu to lu")
            document.getElementById("w9v1-mu").setAttribute("id", "w9v1-lu");
            document.getElementById("w10v2-mu").setAttribute("id", "w10v2-lu");
            document.getElementById("w11v3-mu").setAttribute("id", "w11v3-lu");

            document.getElementById("w9v1-lu").innerHTML = "🤍"
            document.getElementById("w10v2-lu").innerHTML = "🤍"
            document.getElementById("w11v3-lu").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1" || matchp.id == "w10v2" || matchp.id == "w11v3") {
            // alert("entere se to lu")
            document.getElementById("w9v1").setAttribute("id", "w9v1-lu");
            document.getElementById("w10v2").setAttribute("id", "w10v2-lu");
            document.getElementById("w11v3").setAttribute("id", "w11v3-lu");

            document.getElementById("w9v1-lu").innerHTML = "🤍"
            document.getElementById("w10v2-lu").innerHTML = "🤍"
            document.getElementById("w11v3-lu").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1-tr" || matchp.id == "w10v2-tr" || matchp.id == "w11v3-tr") {
            // alert("enter tr to lu")
            document.getElementById("w9v1-tr").setAttribute("id", "w9v1-lu");
            document.getElementById("w10v2-tr").setAttribute("id", "w10v2-lu");
            document.getElementById("w11v3-tr").setAttribute("id", "w11v3-lu");

            document.getElementById("w9v1-lu").innerHTML = "🤍"
            document.getElementById("w10v2-lu").innerHTML = "🤍"
            document.getElementById("w11v3-lu").innerHTML = "🤍"




        }

    })


}



document.getElementById("car5").addEventListener("click", car5c);
let carin5 = document.querySelectorAll(".carinfo");
function car5c() {
    // alert("enterv2")

    document.getElementById("carhi5").style.borderBottom = "1px solid red"
    document.getElementById("carhi4").style.border = "none"
    document.getElementById("carhi3").style.border = "none"
    document.getElementById("carhi2").style.border = "none"
    document.getElementById("carhi1").style.border = "none"


    document.getElementById("mcs").style.animation = "carslide5 2s "

    document.getElementById("carimgch1").src = "RP/car/trav/tra1.jpeg"
    document.getElementById("carimgch2").src = "RP/car/trav/tran1.jpg"
    document.getElementById("carimgch3").src = "RP/car/trav/tralu1.jpg"
    document.getElementById("carimgch3").style.background = "white";

    document.getElementById("carsec").innerHTML = "TRAVELLERS"
    carin[0].innerHTML = "Force Traveller"
    carin[1].innerHTML = "* seat up to 14 Persons."
    carin[2].innerHTML = "* The  Force Traveller mileage is 17 KMPL."
    carin[3].innerHTML = "* The Sefety Rating of Force Traveller is 5 star."
    carin[4].innerHTML = "* INR ₹--/km|depend on group size."

    carin[5].innerHTML = "TOYOTA COASTER"
    carin[6].innerHTML = "* seat up to 29 Persons."
    carin[7].innerHTML = "* The TOYOTA COASTER  mileage is 20 kmpl."
    carin[8].innerHTML = "* The Sefety Rating of TOYOTA COASTER  is 5 star."
    carin[9].innerHTML = "* INR ₹--/km|depend on group size."


    carin[10].innerHTML = "Mercedes-Benz Sprinter"
    carin[11].innerHTML = "* seat up to 12 Persons."
    carin[12].innerHTML = "* The TataMercedes-Benz Sprinter is 16.44 kmpl"
    carin[13].innerHTML = "* The Sefety Rating of Mercedes-Benz Sprinter 5 STAR ."
    carin[14].innerHTML = "* INR ₹--/km|depend on group size."



    // document.getElementById("w9v1").setAttribute("id", "w9v11");
    // document.getElementById("w10v2").setAttribute("id", "w10v22");
    // document.getElementById("w11v3").setAttribute("id", "w11v33");
    document.getElementById("input1id").value = " "
    document.getElementById("input1id1").value = " "
    document.getElementById("input1id2").value = " "
    document.getElementById("input1id").placeholder = "Enter Total km "
    document.getElementById("input1id1").placeholder = "Enter Total km "
    document.getElementById("input1id2").placeholder = "Enter Total km "
    document.getElementById("show1").innerHTML = "INR ₹0"
    document.getElementById("show2").innerHTML = "INR ₹0"
    document.getElementById("show3").innerHTML = "INR ₹0"

    carsec.forEach(matchp => {


        if (matchp.id == "w9v1-su" || matchp.id == "w10v2-su" || matchp.id == "w11v3-su") {
            // alert("enter su to tr")
            document.getElementById("w9v1-su").setAttribute("id", "w9v1-tr");
            document.getElementById("w10v2-su").setAttribute("id", "w10v2-tr");
            document.getElementById("w11v3-su").setAttribute("id", "w11v3-tr");

            document.getElementById("w9v1-tr").innerHTML = "🤍"
            document.getElementById("w10v2-tr").innerHTML = "🤍"
            document.getElementById("w11v3-tr").innerHTML = "🤍"



        }
        else if (matchp.id == "w9v1-mu" || matchp.id == "w10v2-mu" || matchp.id == "w11v3-mu") {
            // alert("entere mu to tr")
            document.getElementById("w9v1-mu").setAttribute("id", "w9v1-tr");
            document.getElementById("w10v2-mu").setAttribute("id", "w10v2-tr");
            document.getElementById("w11v3-mu").setAttribute("id", "v11v3-tr");

            document.getElementById("w9v1-tr").innerHTML = "🤍"
            document.getElementById("w10v2-tr").innerHTML = "🤍"
            document.getElementById("w11v3-tr").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1-lu" || matchp.id == "w10v2-lu" || matchp.id == "w11v3-lu") {
            // alert("entere lu to tr")
            document.getElementById("w9v1-lu").setAttribute("id", "w9v1-tr");
            document.getElementById("w10v2-lu").setAttribute("id", "w10v2-tr");
            document.getElementById("w11v3-lu").setAttribute("id", "w11v3-tr");

            document.getElementById("w9v1-tr").innerHTML = "🤍"
            document.getElementById("w10v2-tr").innerHTML = "🤍"
            document.getElementById("w11v3-tr").innerHTML = "🤍"




        }
        else if (matchp.id == "w9v1" || matchp.id == "w10v2" || matchp.id == "w11v3") {
            // alert("enter se to tr")
            document.getElementById("w9v1").setAttribute("id", "w9v1-tr");
            document.getElementById("w10v2").setAttribute("id", "w10v2-tr");
            document.getElementById("w11v3").setAttribute("id", "w11v3-tr");

            document.getElementById("w9v1-tr").innerHTML = "🤍"
            document.getElementById("w10v2-tr").innerHTML = "🤍"
            document.getElementById("w11v3-tr").innerHTML = "🤍"




        }

    })


    document.getElementById("calid1").addEventListener("click", multiply)
    function multiply() {
        var number_1 = document.getElementById("input1id").value;
        var number_2 = 0;

        var result = 0;
        result = number_1 * number_2;
        document.getElementById("show1").innerHTML = "INR ₹" + result;


        return result;
    }

    document.getElementById("calid2").addEventListener("click", multiply1)
    function multiply1() {
        var number_1 = document.getElementById("input1id1").value;
        var number_2 = 0;

        var result1 = 0;
        result1 = number_1 * number_2;
        document.getElementById("show2").innerHTML = "INR ₹" + result1;


        return result1;
    }


    document.getElementById("calid3").addEventListener("click", multiply2)
    function multiply2() {
        var number_1 = document.getElementById("input1id2").value;
        var number_2 = 0;

        var result2 = 0;
        result2 = number_1 * number_2;
        document.getElementById("show3").innerHTML = "INR ₹" + result2;


        return result2;
    }


}

document.getElementById("nextdi").addEventListener("click", nextpe)
document.getElementById("prevdi").addEventListener("click", prevpe)


let sliderimg = document.querySelectorAll(".colimg"),

    currentco = 0;

// Clear all images
function resetco() {
    for (let i = 0; i < sliderimg.length; i++) {
        sliderimg[i].style.display = "none";
    }
}

// Initial slide
function startSlideco() {
    resetco();
    sliderimg[0].style.display = "block";
}

// Show previous
function slideLeftco() {
    resetco();
    sliderimg[currentco - 1].style.display = "block";
    currentco--;
}

// Show next
function slideRightco() {
    resetco();
    sliderimg[currentco + 1].style.display = "block";
    currentco++;
}

// Left arrow click

function prevpe() {
    // alert("enter - ")


    if (currentco === 0) {
        currentco = sliderimg.length;
    }
    slideLeftco();

}

// Right arrow click

function nextpe() {
    // alert("enter +")

    if (currentco === sliderimg.length - 1) {
        currentco = -1;
    }
    slideRightco();

}


startSlideco();


var PHONE = window.matchMedia('(max-width: 600px)');

if (PHONE.matches) {
    // alert("enter")

    document.getElementById("nexti").removeEventListener("click", next);
    document.getElementById("previ").removeEventListener("click", prev);

    document.getElementById("nexti").setAttribute("id", "nextiph");
    document.getElementById("previ").setAttribute("id", "previph");



    document.getElementById("nextiph").addEventListener("click", plussSlides);
    document.getElementById("previph").addEventListener("click", subtSlides)



    let sliderImages = document.querySelectorAll(".c1"),

        current = 0;

    // Clear all images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
    }

    // Show previous
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = "block";
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        current++;
    }

    // Left arrow click

    function subtSlides() {
        // alert("enter - ")


        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();

    }

    // Right arrow click

    function plussSlides() {
        // alert("enter +")

        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();

    }


    startSlide();

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=== hotels slider ===%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    document.getElementById("nexthotelid").addEventListener("click", plussSlidesfhotel);
    document.getElementById("prevhotelid").addEventListener("click", subtSlidesfhotel)



    let sliderImagesfhotel = document.querySelectorAll(".rr1"),

        currentfhotel = 0;

    // Clear all images
    function resetfhotel() {
        for (let i = 0; i < sliderImagesfhotel.length; i++) {
            sliderImagesfhotel[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlidefhotel() {
        resetfhotel();
        sliderImagesfhotel[0].style.display = "block";
    }

    // Show previous
    function slideLeftfhotel() {
        resetfhotel();
        sliderImagesfhotel[currentfhotel - 1].style.display = "block";
        currentfhotel--;
    }

    // Show next
    function slideRightfhotel() {
        resetfhotel();
        sliderImagesfhotel[currentfhotel + 1].style.display = "block";
        currentfhotel++;
    }

    // Left arrow click

    function subtSlidesfhotel() {
        // alert("enter - ")
        if (currentfhotel === 0) {
            currentfhotel = sliderImagesfhotel.length;
        }
        slideLeftfhotel();

    }

    // Right arrow click

    function plussSlidesfhotel() {
        // alert("enter +")

        if (currentfhotel === sliderImagesfhotel.length - 1) {
            currentfhotel = -1;
        }
        slideRightfhotel();

    }


    startSlidefhotel();


    document.getElementById('sfd1h2id1').style.display = "none";
    document.getElementById('sfd1h2id2').style.display = "none";




    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=== slide car ===%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    document.getElementById("nextcarid").addEventListener("click", plussSlidesfcar);
    document.getElementById("prevcarid").addEventListener("click", subtSlidesfcar);



    let sliderImagesfcar = document.querySelectorAll(".v-c-d2"),

        currentfcar = 0;

    // Clear all images
    function resetfcar() {
        for (let i = 0; i < sliderImagesfcar.length; i++) {
            sliderImagesfcar[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlidefcar() {
        resetfcar();
        sliderImagesfcar[0].style.display = "block";
    }

    // Show previous
    function slideLeftfcar() {
        resetfcar();
        sliderImagesfcar[currentfcar - 1].style.display = "block";
        currentfcar--;
    }

    // Show next
    function slideRightfcar() {
        resetfcar();
        sliderImagesfcar[currentfcar + 1].style.display = "block";
        currentfcar++;
    }

    // Left arrow click

    function subtSlidesfcar() {
        // alert("enter - ")
        if (currentfcar === 0) {
            currentfcar = sliderImagesfcar.length;
        }
        slideLeftfcar();

    }

    // Right arrow click

    function plussSlidesfcar() {
        // alert("enter +")

        if (currentfcar === sliderImagesfcar.length - 1) {
            currentfcar = -1;
        }
        slideRightfcar();

    }


    startSlidefcar();




    window.addEventListener('mouseup', function (event) {
        var pol = document.getElementById('nav-li');
        if (event.target != pol && event.target.parentNode != pol) {
            pol.style.display = 'none';

        }
    });

    document.getElementById("dotnavid").addEventListener("click", dotnav);

    function dotnav() {
        document.getElementById('nav-li').style.display = "block";

    }






}

// var Tab = window.matchMedia('(min-width:600px)');
var Tab = window.matchMedia('screen and (min-width: 600px) and (max-width: 768px');

if (Tab.matches) {
    alert("Tab");


    document.getElementById("nexti").removeEventListener("click", next);
    document.getElementById("previ").removeEventListener("click", prev);

    document.getElementById("nexti").setAttribute("id", "nextiph");
    document.getElementById("previ").setAttribute("id", "previph");



    document.getElementById("nextiph").addEventListener("click", plussSlides);
    document.getElementById("previph").addEventListener("click", subtSlides)



    let sliderImages = document.querySelectorAll(".c1"),

        current = 0;

    // Clear all images
    function reset() {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlide() {
        reset();
        sliderImages[0].style.display = "block";
    }

    // Show previous
    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = "block";
        current--;
    }

    // Show next
    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = "block";
        current++;
    }

    // Left arrow click

    function subtSlides() {
        // alert("enter - ")


        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();

    }

    // Right arrow click

    function plussSlides() {
        // alert("enter +")

        if (current === sliderImages.length - 1) {
            current = -1;
        }
        slideRight();

    }


    startSlide();

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=== hotels slider ===%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    document.getElementById("nexthotelid").addEventListener("click", plussSlidesfhotel);
    document.getElementById("prevhotelid").addEventListener("click", subtSlidesfhotel)



    let sliderImagesfhotel = document.querySelectorAll(".rr1"),

        currentfhotel = 0;

    // Clear all images
    function resetfhotel() {
        for (let i = 0; i < sliderImagesfhotel.length; i++) {
            sliderImagesfhotel[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlidefhotel() {
        resetfhotel();
        sliderImagesfhotel[0].style.display = "block";
    }

    // Show previous
    function slideLeftfhotel() {
        resetfhotel();
        sliderImagesfhotel[currentfhotel - 1].style.display = "block";
        currentfhotel--;
    }

    // Show next
    function slideRightfhotel() {
        resetfhotel();
        sliderImagesfhotel[currentfhotel + 1].style.display = "block";
        currentfhotel++;
    }

    // Left arrow click

    function subtSlidesfhotel() {
        // alert("enter - ")
        if (currentfhotel === 0) {
            currentfhotel = sliderImagesfhotel.length;
        }
        slideLeftfhotel();

    }

    // Right arrow click

    function plussSlidesfhotel() {
        // alert("enter +")

        if (currentfhotel === sliderImagesfhotel.length - 1) {
            currentfhotel = -1;
        }
        slideRightfhotel();

    }


    startSlidefhotel();


    document.getElementById('sfd1h2id1').style.display = "block";
    document.getElementById('sfd1h2id2').style.display = "block";
    document.getElementById('sfd1h2id2').style.display = "flex";




    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=== slide car ===%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    document.getElementById("nextcarid").addEventListener("click", plussSlidesfcar);
    document.getElementById("prevcarid").addEventListener("click", subtSlidesfcar);



    let sliderImagesfcar = document.querySelectorAll(".v-c-d2"),

        currentfcar = 0;

    // Clear all images
    function resetfcar() {
        for (let i = 0; i < sliderImagesfcar.length; i++) {
            sliderImagesfcar[i].style.display = "none";
        }
    }

    // Initial slide
    function startSlidefcar() {
        resetfcar();
        sliderImagesfcar[0].style.display = "block";
    }

    // Show previous
    function slideLeftfcar() {
        resetfcar();
        sliderImagesfcar[currentfcar - 1].style.display = "block";
        currentfcar--;
    }

    // Show next
    function slideRightfcar() {
        resetfcar();
        sliderImagesfcar[currentfcar + 1].style.display = "block";
        currentfcar++;
    }

    // Left arrow click

    function subtSlidesfcar() {
        // alert("enter - ")
        if (currentfcar === 0) {
            currentfcar = sliderImagesfcar.length;
        }
        slideLeftfcar();

    }

    // Right arrow click

    function plussSlidesfcar() {
        // alert("enter +")

        if (currentfcar === sliderImagesfcar.length - 1) {
            currentfcar = -1;
        }
        slideRightfcar();

    }


    startSlidefcar();




    window.addEventListener('mouseup', function (event) {
        var pol = document.getElementById('nav-li');
        if (event.target != pol && event.target.parentNode != pol) {
            pol.style.display = 'none';
            document.getElementById("dotnavid").style.width = "80%"


        }
    });

    document.getElementById("dotnavid").addEventListener("click", dotnav);

    function dotnav() {
        document.getElementById('nav-li').style.display = "block";
        document.getElementById("dotnavid").style.width = "0%"

    }










}


