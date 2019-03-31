$(document).ready(function () {
    var magicNumber;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var skull1Num;
    var skull2Num;
    var skull3Num;
    var skull4Num;

    function newNumbers() {
        magicNumber = Math.floor(Math.random() * 110) + 20;
         skull1Num = Math.ceil(Math.random() * 12);
         skull2Num = Math.ceil(Math.random() * 12);
         skull3Num = Math.ceil(Math.random() * 12);
         skull4Num = Math.ceil(Math.random() * 12);
    }

    function newGame() {
        newNumbers();
        totalScore = 0;
        $("#magicNumber").text(magicNumber);
        $("#totalScore").text(totalScore);
        $("#skull1").attr("data-skullvalue", skull1Num);
        $("#skull2").attr("data-skullvalue", skull2Num);
        $("#skull3").attr("data-skullvalue",  skull3Num);
        $("#skull4").attr("data-skullvalue",  skull4Num);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#playAgain").text("");

       
    }

    function youWin() {
        $("#playAgain").text("YOU WIN!");
        wins++;
        $("#wins").text(wins);
    }

    function youLose() {
        $("#playAgain").text("YOU LOSE");
        losses++;
        $("#losses").text(losses);
    }

    newGame();

    $(".skullimg").hover(function () {
        $(this).css({ opacity: 0.3 });
    },
        function () {
            $(this).css({ opacity: 1 });
        });

    // Function to add the skulls values together
    $(".skullimg").on("click", function () {
        if (totalScore >= magicNumber) {
            return;
        }

        var skullValue = $(this).attr("data-skullvalue");
        skullValue = parseInt(skullValue);
        totalScore += skullValue;
        $("#totalScore").text(totalScore);

        if (totalScore === magicNumber) {
            youWin();
        } else if (totalScore > magicNumber) {
            youLose();
        }
    });

    $(".btn").on("click", function () {
        newGame();
    });

});
