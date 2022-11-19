// function matchingStrings(strings, queries) {
//     const occurrences = {}
//     const result = Array(queries.length)
//     strings.forEach(str => {
//         if (occurrences[str]) {
//             occurrences[str]++;
//         } else {
//             occurrences[str] = 1;
//         }
//     })
//     queries.forEach((q, index) => {
//         if (occurrences[q]) {
//             result[index] = occurrences[q]
//         } else {
//             result[index] = 0
//         }
        
//     });
//     return result
// }
// let strings = ['ab', 'ab', 'abc'];
// let queries = ['ab', 'abc', 'bc'];
// console.log(matchingStrings(strings, queries));

function matchingStrings(strings, queries) {
    // Write your code here
    var result=[];
    let counts={};
    
    for (const str of strings) 
    counts[str] = counts[str] ? counts[str] + 1 : 1;
    
    for(var i=0;i<queries.length;i++)
    if(counts.hasOwnProperty(queries[i]))
    result.push(counts[queries[i]]);
    else
     result.push(0);
    
    return result;
}
let strings = ['ab', 'ab', 'abc'];
let queries = ['ab', 'abc', 'bc'];
console.log(matchingStrings(strings, queries));