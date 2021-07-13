function addClickToButtons() {
  const parent = document.getElementById("helicopter-parent");
  parent.addEventListener("click", (event) => {
      // console.dir(event.target)
      switch (event.target.dataset.name) {
          case "alert":
              alert("I was clicked");
              break;

          case "log":
              console.log("I was clicked");
              break;

          case "error":
              console.error("I was clicked");
              break;
      
          default:
              console.warn("Something else was clicked");
              break;
      }
  })
}