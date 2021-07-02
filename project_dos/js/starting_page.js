const text_memory = document.querySelector(".test");
const start_file = "Project_Dos.exe";
let i = 0;
let speed = 60; 

text_memory.textContent += "Memory Test: "

$(function(){
    let number_memory = 0;
    $(".commands_site").hide();
    const up_up = setInterval(
        function (){
            if($('.testing_num').text()==2560){
                clearInterval(up_up);
                $(".starting_title").html("Staring MS-DOS 6.22...");
                $(".commands_site").show();
                typeCommand()
            }
            number_memory = parseFloat(number_memory) + parseFloat(1);
            number_memory = Math.ceil(number_memory);

            $('.testing_num').html(number_memory);

        }, 0.0000001)


})

function typeCommand() {
    if (i < start_file.length) {
        document.getElementById("text").innerHTML += start_file.charAt(i);
        i++
        setTimeout(typeCommand, speed);
    }
}
