function move() {
    let fills = document.querySelectorAll(".fill");
    let spans = document.querySelectorAll("span")
    let width = 50;
    let id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        fills.forEach(fill => {
            fill.style.width = width + '%'; 
            spans.forEach(span => {
                span.innerHTML = width * 1  + '%';
            })
        });
        
      }
    }
  }