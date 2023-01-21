AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderElement = this.createBorder(position.item.id);
      const thumbnailElement = this.createThumbnail(item);
      borderElement.appendChild(thumbnailElement);
      const titletextElement = this.createTitletext(position.item);
      borderElement.appendChild(titletextElement);
      this.placesContainer.appendChild(borderElement);
    }
  },
  // Border Element
  createBorder: function (pos, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 5,
      radiusOuter: 7,
    });
    entityEl.setAttribute("position", pos);
    entityEl.setAttribute("material", { color: "red", opacity: 1.0 });
    return entityEl;
  },
  // Thumbnail Element
  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", { primitive: "circle", radius: 5 });
    entityEl.setAttribute("material", { src: item.url() });
    return entityEl;
  },
  // Title Text Element
  createTitletext: function (pos, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exotobold",
      align: "center",
      width: 60,
      color: "grey",
      value: item.title,
    });
    const el_pos = pos;
    el_pos.y = -20;
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("position", el_pos);
    return entityEl;
  },
});
