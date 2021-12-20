var reviewCards = document.getElementById("reviews__cards");







function addNewreview() {
    var newCard = document.createElement("a");
    newCard.className += "review__card";
    newCard.style = "cursor:pointer";

    const img = document.createElement("img");
    img.src = "images/client.png";
    img.className += "client__img";


    var newP = document.createElement("p");
    newP.className += "card__text";

    var newSpan = document.createElement("span");
    newSpan.className += "clients__name";


    var br = document.createElement("br")
    var br1 = document.createElement("br")

    var inputName = document.getElementById("feedback__name").value;

    if (inputName == "Akyl") {
        img.src = "окно.png";
        img.style = "width:25%";


    }

    var inputComment = document.getElementById("fComment").value;
    newSpan.append(inputName);
    newP.append(newSpan, br, br1, inputComment);
    newCard.append(img, newP)

    console.log(newCard);
    reviewCards.prepend(newCard);
    //document.getElementById("fComment").value = NULL;
    //document.getElementById("fComment").value = NULL;

}