console.log("rrrawr");


fetch("/calculatecooldinosaurs")
.then(response => response.json())
.then(dinosaurs => {
    console.log(dinosaurs);
    const amountdino = document.getElementById("cool-dinosaurs")

    amountdino.innerText = dinosaurs.data;
});