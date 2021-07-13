function addClickToButtons() {
  const parent = document.getElementById("helicopter-parent");
  parent.addEventListener("click", (event) => {
      // console.dir(event.target);
      switch (event.target.dataset.name) {
          case "alert":
              alert("Aren't alerts annoying?");
              break;

          case "log":
              console.log("I was clicked");
              break;

          case "error":
              console.error("Uh oh!");
              break;
      
          default:
              console.warn("We've got a problem.");
              break;
      };
  });
};
