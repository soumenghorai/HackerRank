// Function to remove spaces and convert into camel case
function convert( s){
var n = s.length;
    var str="";
    for (var i = 0; i < n; i++){
     // check for spaces in the sentence
        if (s[i] == ' ')
        {
            // conversion into upper case
            str+= s[i+1].toUpperCase();
            i++;     
        }
        // If not space, copy character
        else{
            str+= s[i];
            }
    }
    // return string to main
    return str;
}
var str = "I get intern at geeksforgeeks";
    console.log(convert(str));