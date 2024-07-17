document.addEventListener("DOMContentLoaded", function () {
    const soundButton = document.getElementById("soundButton1");
    const video = document.getElementById("myVideo1");
  
    soundButton.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false;
        this.innerHTML = "";
        var svg = createSVG("Mute");
        this.appendChild(svg);
      } else {
        video.muted = true;
        this.innerHTML = "";
        var svg = createSVG("Unmute");
        this.appendChild(svg);
      }
    });
  
    function createSVG(type) {
      var svgNS = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("id", "Calque_1");
      svg.setAttribute("data-name", "Calque 1");
      svg.setAttribute("viewBox", "0 0 262.02 190.54");
      svg.setAttribute("width", "25"); // Définir la largeur à 3px
      svg.setAttribute("height", "25"); // Définir la hauteur à 3px

      svg.style.transform = "translate(-0%, -0%)";
  
      if (type === "Mute") {
        // Ajoutez les éléments du SVG pour Mute ici
        var path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("class", "cls-1");
        path1.setAttribute("d", "m131.28,95.76c0,26.71,0,53.41,0,80.12,0,1,.22,2.07-.06,2.98-.54,1.8-.91,4.16-2.2,5.07-.93.65-3.51-.28-4.9-1.2-9.63-6.35-19.15-12.87-28.68-19.36-13.17-8.97-26.37-17.9-39.42-27.04-1.42-1-2.73-3.3-2.74-5.01-.18-23.99-.17-47.98,0-71.98.01-1.58,1.25-3.72,2.57-4.63,22.39-15.43,44.86-30.74,67.42-45.92,1.68-1.13,4.49-1.95,6.13-1.3,1.19.47,1.81,3.63,1.82,5.59.11,27.56.08,55.12.08,82.69Z");
        path1.setAttribute("stroke", "black"); // Définir la couleur de trait sur noir
        svg.appendChild(path1);
  
        var path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("class", "cls-1");
        path2.setAttribute("d", "m262.02,93.79c-.59,37.01-12.76,67.4-37.25,92.74-4.85,5.02-10.22,5.28-14.63,1-4.18-4.06-3.73-9.78.91-14.71,23.11-24.55,33.73-53.55,30.95-87.29-2.17-26.44-12.91-48.97-31.14-68.06-4.43-4.64-4.78-10.35-.78-14.37,4.32-4.35,9.79-4.17,14.61.8,20.36,21.01,32.63,45.97,36.14,75.09.66,5.51.91,11.07,1.2,14.79Z");
        path2.setAttribute("stroke", "black"); // Définir la couleur de trait sur noir
        svg.appendChild(path2);
  
        var path3 = document.createElementNS(svgNS, "path");
        path3.setAttribute("class", "cls-1");
        path3.setAttribute("d", "m36.67,134.63c-8.86,0-17.29.13-25.71-.04-6.75-.14-10.89-4.41-10.91-11.12-.06-18.72-.06-37.44,0-56.16.02-6.64,4.05-10.63,10.67-10.68,8.56-.06,17.11-.02,25.95-.02v78.02Z");
        path3.setAttribute("stroke", "black"); // Définir la couleur de trait sur noir
        svg.appendChild(path3);
  
        var path4 = document.createElementNS(svgNS, "path");
        path4.setAttribute("class", "cls-1");
        path4.setAttribute("d", "m222.25,95.55c-.71,24.09-8.77,45.39-25.99,62.91-4.62,4.7-10.03,4.98-14.35.9-4.02-3.8-3.83-9.93.46-14.45,27.21-28.76,27.2-70.38-.02-99.34-4.26-4.53-4.41-10.53-.36-14.45,4.21-4.08,9.74-3.76,14.33.96,17.11,17.59,25.32,38.85,25.93,63.47Z");
        path4.setAttribute("stroke", "black"); // Définir la couleur de trait sur noir
        svg.appendChild(path4);
  
        var path5 = document.createElementNS(svgNS, "path");
        path5.setAttribute("class", "cls-1");
        path5.setAttribute("d", "m183.68,95.67c-.12,13.89-5.1,25.82-14.6,35.87-4.28,4.52-10.26,4.64-14.38.58-4.05-3.99-3.89-9.31.42-14.03,12.09-13.24,12.24-31.88.37-45.34-4.8-5.44-4.87-10.85-.2-14.94,4.21-3.68,10.27-2.95,14.7,2.05,9.03,10.2,13.84,22.06,13.7,35.81Z");
        path5.setAttribute("stroke", "black"); // Définir la couleur de trait sur noir
        svg.appendChild(path5);
      } else {
        // Ajoutez les éléments du SVG pour Unmute ici
        var path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("class", "cls-1");
        path1.setAttribute("d", "m55.42,138.34c-8.86,0-17.29.13-25.71-.04-6.75-.14-10.89-4.41-10.91-11.12-.06-18.72-.06-37.44,0-56.16.02-6.64,4.05-10.63,10.67-10.68,8.56-.06,17.11-.02,25.95-.02v78.02Z");
        path1.setAttribute("stroke", "black");
        svg.appendChild(path1);
  
        var path2 = document.createElementNS(svgNS, "path");
        path2.setAttribute("class", "cls-1");
        path2.setAttribute("d", "m150.03,99.48c0,26.71,0,53.41,0,80.12,0,1,.22,2.07-.06,2.98-.54,1.8-.91,4.16-2.2,5.07-.93.65-3.51-.28-4.9-1.2-9.63-6.35-19.15-12.87-28.68-19.36-13.17-8.97-26.37-17.9-39.42-27.04-1.42-1-2.73-3.3-2.74-5.01-.18-23.99-.17-47.98,0-71.98.01-1.58,1.25-3.72,2.57-4.63,22.39-15.43,44.86-30.74,67.42-45.92,1.68-1.13,4.49-1.95,6.13-1.3,1.19.47,1.81,3.63,1.82,5.59.11,27.56.08,55.12.08,82.69Z");
        path2.setAttribute("stroke", "black");
        svg.appendChild(path2);
  
        var rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("class", "cls-1");
        rect.setAttribute("x", "96.62");
        rect.setAttribute("y", "-36.71");
        rect.setAttribute("width", "20.15");
        rect.setAttribute("height", "270.22");
        rect.setAttribute("transform", "translate(-37.9 111.06) rotate(-47.69)");
        rect.setAttribute("stroke", "black");
        svg.appendChild(rect);
      }
  
      return svg;
    }
  
    // Créer le SVG "unmute" lorsque la page est chargée
    var svg = createSVG("Unmute");
    soundButton.appendChild(svg);
  });