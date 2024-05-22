function show() {

    /* Get image and change value
    of src attribute */
    let image1 = document.getElementById("image1");

    image1.src =
        "https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png"

    document.getElementById("btnID1")
        .style.display = "none";
}