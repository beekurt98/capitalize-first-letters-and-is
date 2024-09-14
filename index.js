// givenText = prompt("Give me a text: ")

// CAPITALIZES EVERY FIRST LETTER
function capitalize_text(text) {
    var quotes = ['“', '"', '”']
    var marks = ['.', '?', '!']
    var cap_text = ''
    var capt_letter = ''

    for(num=0; num < text.length; num++) {
        if (quotes.includes(text[num-1])) {

            capt_letter = text[num].toUpperCase();
            cap_text += capt_letter;

        } else if (quotes.includes(text[num-2]) & text[num-3] == ".") {

            capt_letter = text[num].toUpperCase();
            cap_text += capt_letter;

        } else if (quotes.includes(text[num-2]) & text[num-3] == ".") {

            cap_text += text[num];

        } else if (marks.includes(text[num-2]) & num > 1 | num == 0) {

            capt_letter = text[num].toUpperCase();
            cap_text += capt_letter;

        } else {

            cap_text += text[num]

        }
    } 

    return cap_text;

}

// CAPITALIZES THE PRONOUN I
function capitalize_i(text) {
    var possibilities = [" ", ".", "?", "!"]
    var capt_i = ""
    for(num=0; num<text.length; num++) {
        if (text[num] == "i" & text[num-1] == " " & text[num+1] == " ") {
            var cap_i = text[num].toUpperCase()
            capt_i += cap_i;
        } else if (num == 0 & text[num] == "i" & text[num+1] == " ") {
            var cap_i = text[num].toUpperCase()
            capt_i += cap_i;
        } else {
            capt_i += text[num]
        }

    }
    return capt_i;
}

// CAPITALIZE EVERYTHING
function cap_everything() {
    var givenText = $('#userText').val()

    var textArray = givenText.split("\n");

    var finalText = ""

    for (i=0; i<textArray.length; i++) {
        var text = textArray[i]
        capitalizedParagraph = capitalize_text(text);
        captIText = capitalize_i(capitalizedParagraph)
        finalText += captIText + "</br>"

    }
    $('.output-text-area').html(finalText)
    // $('.text-area').text(finalText)
}

// COPY TO CLIPBOARD W3SCHOOLS

function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
}


// USER CLICKS THE SUBMIT BUTTON
$('.submit').click(()=>{
    $('h1').css("color", "purple");
    cap_everything();
}) 

// COPIES THE VALUE
$('.copy-text').click(()=>{
    var outputValue = String($('.output-text-area').html()).replaceAll("<br>", '\n')
    copyToClipboard(outputValue);
})

$('.clear').click(()=>{
    $('#userText').val('');
    $('.output-text-area').text('');
})
