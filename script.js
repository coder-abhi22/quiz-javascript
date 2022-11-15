
$.ajax({
    url:"https://5d76bf96515d1a0014085cf9.mockapi.io/quiz",
    method: "GET",
    success: function (data) {
   $('.form').html(`
<h3>Q.${data[0].id}&nbsp ${data[0].question}</h3>
<label for="q1opt1">
<input type='radio' id="q1opt1" name="que1" value="${data[0].options[0]}"> ${data[0].options[0]}
</label><br><br>
<label for="q1opt2">
<input type='radio' id="q1opt2" name="que1" value="${data[0].options[1]}"> ${data[0].options[1]}</label><br><br>
<label for="q1opt3">
<input type='radio' id="q1opt3" name="que1" value="${data[0].options[2]}"> ${data[0].options[2]}</label><br><br>
<label for="q1opt4">
<input type='radio' id="q1opt4" name="que1" value="${data[0].options[3]}"> ${data[0].options[3]}</label><br>
<br><hr>

<h3>Q.${data[1].id}&nbsp ${data[1].question}</h3>
<label for="q2opt1">
<input type='radio' id="q2opt1" name="que2" value="${data[1].options[0]}"> ${data[1].options[0]}</label><br><br>
<label for="q2opt2">
<input type='radio' id="q2opt2" name="que2" value="${data[1].options[1]}"> ${data[1].options[1]}</label><br><br>
<label for="q2opt3">
<input type='radio' id="q2opt3" name="que2" value="${data[1].options[2]}"> ${data[1].options[2]}</label><br><br>
<label for="q2opt4">
<input type='radio' id="q2opt4" name="que2" value="${data[1].options[3]}"> ${data[1].options[3]}</label><br>
<br><hr>

<h3>Q.${data[2].id} &nbsp ${data[2].question}</h3>
<label for="q3opt1">
<input type='radio' id="q3opt1" name="que3" value="${data[2].options[0]}"> ${data[2].options[0]}</label><br><br>
<label for="q3opt2">
<input type='radio' id="q3opt2" name="que3" value= "${data[2].options[1]}"> ${data[2].options[1]}</label><br><br>
<label for="q3opt3">
<input type='radio' id="q3opt3" name="que3" value="${data[2].options[2]}"> ${data[2].options[2]}</label><br><br>
<label for="q3opt4">
<input type='radio' id="q3opt4" name="que3" value="${data[2].options[3]}"> ${data[2].options[3]}</label><br>
<br><hr>


<h3>Q.${data[3].id}&nbsp ${data[3].question}</h3>
<label for="q4opt1">
<input type='radio' id="q4opt1" name="que4" value="${data[3].options[0]}"> ${data[3].options[0]}</label><br><br>
<label for="q4opt2">
<input type='radio' id="q4opt2" name="que4" value= "${data[3].options[1]}"> ${data[3].options[1]}</label><br><br>
<label for="q4opt3">
<input type='radio' id="q4opt3" name="que4" value="${data[3].options[2]}"> ${data[3].options[2]}</label><br><br>
<label for="q4opt4">
<input type='radio' id="q4opt4" name="que4" value="${data[3].options[3]}"> ${data[3].options[3]}</label><br>
<br><hr>

<h3>Q.${data[4].id}&nbsp ${data[4].question}</h3>
<label for="q5opt1">
<input type='radio' id="q5opt1" name="que5" value="${data[4].options[0]}"> ${data[4].options[0]}</label><br><br>
<label for="q5opt2">
<input type='radio' id="q5opt2" name="que5" value= "${data[4].options[1]}"> ${data[4].options[1]}</label><br><br>
<label for="q5opt3">
<input type='radio' id="q5opt3" name="que5" value="${data[4].options[2]}"> ${data[4].options[2]}</label><br><br>
<label for="q5opt4">
<input type='radio' id="q5opt4" name="que5" value="${data[4].options[3]}"> ${data[4].options[3]}</label><br>
<br><hr><br>
<input type="submit" id="btn" value="Submit">
`)
}
});

var c
var ans;
function check(e){
    // e.preventDefault();
    var c =0;
    // console.log(e)
    var ans1 = $("input[type='radio'][name='que1']:checked").val();
    var ans2 = $("input[type='radio'][name='que2']:checked").val();
    var ans3 = $("input[type='radio'][name='que3']:checked").val();
    var ans4 = $("input[type='radio'][name='que4']:checked").val();
    var ans5 = $("input[type='radio'][name='que5']:checked").val();

    // var ans = $(".form")['name'].value;
    if(ans1 == "Helga's Diadem"){c++}
    if(ans2 == "Grawp"){c++}
    if(ans3 == "Defense Against Dark Arts"){c++}
    if(ans4 == "Ravenclaw"){c++}
    if(ans5 == "Herbology"){c++}

    console.log(c)
    $('#score').text(c)

}

$('.form').submit(function(e){
    e.preventDefault();
})
$('.form').on('submit',check)
