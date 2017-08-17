function main(number){
    let string;
    let i = parseInt(number);
    for ( ;i > 2; i--){
        string = i + " bottles of beer on the wall, "+i+" bottles of beer.\n" +
            "Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.\n"
    }
    if (i === 2 ){
        string += "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n"
        i--;
    }
    if (i === 1 ){
        string += "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n"
        i--;
    }
    if (i === 0 ){
        string += "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
    }
    console.log(string);
    return "";
}

module.exports = main;
