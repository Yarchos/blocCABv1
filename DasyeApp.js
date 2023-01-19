// Fonction survol

let bloc = document.querySelector("#bloc");
let rects = document.querySelectorAll(".blocCabineSvg a");
let links = document.querySelectorAll(".links a");

rects.forEach(function (rect) {
  rect.addEventListener("mouseenter", function () {
    let id = this.id.replace("rect-", "");
    bloc.querySelectorAll(".is-active").forEach(function (item) {
      item.classList.remove("is-active");
    });
    document.querySelector("#list-" + id).classList.add("is-active");
    document.querySelector("#rect-" + id).classList.add("is-active");
  });
});

links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    let id = this.id.replace("list-", "");
    bloc.querySelectorAll(".is-active").forEach(function (item) {
      item.classList.remove("is-active");
    });
    document.querySelector("#list-" + id).classList.add("is-active");
    document.querySelector("#rect-" + id).classList.add("is-active");
  });
});

bloc.addEventListener("mouseover", function () {
  bloc.querySelectorAll(".is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });
});

// Barre de recherche
function search_dj2() {
  // Entrée utilisateur
  let input = document.getElementById("searchBar").value;
  input = input.toLowerCase();
  console.log(input);

  //Formatage et comparaison
  function hreff() {
    let hrefRemove = document.querySelectorAll(".links a");
    let hrefs = Array.from(document.querySelectorAll(".links a"));
    let href = hrefs.map(function (href) {
      return href.getAttribute("href").replace("#rect-", "");
    });
    console.log(href);
    for (i = 0; i < href.length; i++) {
      if (!href[i].includes(input)) {
        hrefs[i].style.display = "none";
        console.log("none");
      } else {
        hrefs[i].style.display = "inline";
        console.log("inline");
        // document.querySelector("#list-" + href[i]).classList.add("is-active");
        let hhref = href[i];
        document.getElementById("rechercher").onclick = function () {
          console.log(hhref);
          document.querySelector("#rect-" + hhref).classList.add("is-active");
          self.location.href = "#rect-" + hhref;
        };
      }
    }
    return hrefs;
  }
  hreff();
}
search_dj2();

//console.log(hreff())
// Logique de recherche
// for (i = 0; i < hrefs.length; i++) {
//   if (!hrefs[i].innerHTML.toLowerCase().includes(input)) {
//     hrefs[i].style.display = "none";
//     console.log("none");
//   } else {
//     hrefs[i].style.display = "inline";
//     console.log("inline");
//   }
// }

// function hreff(hrefs) {
//   hrefs = document.querySelectorAll(".links a");
//   return hrefs.map(function (href) {
//     return href.getAttribute("href").replace(".html", "");
//   });
// }

//document.getElementById("rechercher").onclick = function () {
//var href = document.querySelector("a").getAttribute("href");
//alert(href);
//};

// document.getElementById('searchbar').addEventListener('keyup', function (event)
//         {
//           if (event.code === 'Enter')
//                       {event.preventDefault();
//                         document.querySelector('form').submit();
//                       }})
