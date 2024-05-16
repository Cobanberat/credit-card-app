
$(document).ready(function () {
    $(".inp").on("keyup change", function () {
        $t = $(this);
        if ($t.val().length == 4) {
            $t.next().focus();
        }
    })
})

const span1 = () => {
    let x = document.getElementById("inp1");
    if (x.value) {
        x.value = x.value.match(/\d{1,4}/g).join(" ");
        document.getElementById("1").innerHTML = x.value;
    } else {
        document.getElementById("1").textContent = ""
    }
}

function Cardname() {
    var x = document.getElementById("cardName").value;
    document.getElementById("span_name").innerHTML = x;

    let x1 = document.getElementById("cardName");
    x1.value = x1.value.toUpperCase();

}

$('#cardName').on('keyup change', function () {
    $t = $(this);
    $('#span_name').html($t.val());
});

$('#cardName').on('keyup change', function () {
    $t = $(this);
    $('span_name').html($t.val());
    $t.value = $t.val().toUpperCase();
});

function selected() {
    var x = document.getElementById("cardMonth").value;
    document.getElementById("month").innerHTML = x;

}

function year() {
    var x = document.getElementById("cardYear").value;
    document.getElementById("year").innerHTML = x;

}
function cvvkeyup() {
    var x = document.getElementById("cvv_id").value;
    document.getElementById("cvv_span").innerHTML = x;
}

function cvv() {
    var x = document.getElementById("thecard");
    x.style.transform = "rotateY(180deg)";
}

function reverseCvv() {
    var x = document.getElementById("thecard");
    x.style.transform = "rotateY(0deg)";
}
function sayiKontrol(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 32)
        return false;
    return true;
}
$(document).ready(function () {
    $('#inp1').on('keyup', function (event) {
        var inputveri = $('#inp1').val();
        var deger = inputveri.charAt(0);
        var card = document.querySelector(".cards");
        var back_card = document.querySelector(".back_card");


        $("#visa").hide();
        $("#mastercard").hide();
        $("#americanexpress").hide();
        $("#discover").hide();

        if (deger === '4') {
            $("#visa").show();
            card.style.background = "linear-gradient(100deg, #2cdbd8, #a9b7bc)";
            back_card.style.background = "linear-gradient(100deg, #a9b7bc, #2cdbd8)";

        } else if (deger === '5') {
            $("#mastercard").show();
            card.style.background = "linear-gradient(100deg, #72c768, #a9b7bc)";
            back_card.style.background = "linear-gradient(100deg, #a9b7bc, #72c768)";

        } else if (deger === '3') {
            $("#americanexpress").show();
            card.style.background = "linear-gradient(100deg, #b067c7, #a9b7bc)";
            back_card.style.background = "linear-gradient(100deg, #a9b7bc, #b067c7)";

        } else if (deger === '6') {
            $("#discover").show();
            card.style.background = "linear-gradient(100deg, #c7a467, #a9b7bc)";
            back_card.style.background = "linear-gradient(100deg, #a9b7bc, #c7a467)";
        } else {
            card.style.background = "none";
        }
    });
});
function harfKontrol(event) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122 || event.keyCode === 32))
        return true;
    return false;
}
