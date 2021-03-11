function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();

}

function logShout(string) {
    console.log(shout('hello'));

}

function logWhisper(string) {
    console.log(whisper('HELLO'));

}

function sayHiToGrandma(string){
    let string1 = string;
    if (string1 === string.toUpperCase()) {
        return "YES INDEED!";
        }
        else if(string1 === string.toLowerCase()) {
            return "I can\'t hear you!" ;
        } else if(string === "I love you, Grandma."){
                    return "I love you, too." ;
        }
    }
