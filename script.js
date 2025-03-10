function generateQR() {
    let userLink = document.getElementById("linkInput").value;
    if (userLink.trim() === "") {
        alert("Iltimos, havolani kiriting!");
        return;
    }
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), {
        text: userLink,
        width: 128,
        height: 128
    });
}

function toggleMoreInfo() {
    let moreInfo = document.getElementById("moreInfo");
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}

function toggleMoreInfo(button) {
let moreInfo = document.getElementById("moreInfo");

// Matnni ko'rsatish/yashirish
if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    button.style.backgroundColor = "#eaeaea"; // Tugma fon rangini o'zgartirish
} else {
    moreInfo.style.display = "none";
    button.style.backgroundColor = ""; // Tugmani asl holatiga qaytarish
}
}