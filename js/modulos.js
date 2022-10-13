function showModule(idmodulo,plus,minus) {
    let x = document.getElementById(idmodulo);
    let p = document.getElementById(plus);
    let m = document.getElementById(minus);
    if (x.style.display === "block") {
        x.style.display = "none";
        m.style.display = "none";
        p.style.display = "block";
      } else {
        x.style.display = "block";
        m.style.display = "block";
        p.style.display = "none";
        
      }
}

