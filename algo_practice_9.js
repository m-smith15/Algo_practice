/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
    // let result = false;
    // const mapS = new Map();
    // const mapT = new Map();

    // for(i in s){
    //     if(mapS.has(s[i])){
    //         mapS.set(s[i], mapS.get(s[i]) + 1)
    //     } 
    //     else {
    //         mapS.set(s[i],1)
    //     }
    // }

    // for(i in t){
    //     if(mapT.has(t[i])){
    //         mapT.set(t[i], mapT.get(t[i]) + 1)
    //     } else {
    //         mapT.set(t[i],1)
    //     }
    // }

    // console.log("Map S:" + mapS.size)
    // console.log("Map T:" + mapT.size)

    // if(mapS.size != mapT.size){
    //     return false;
    // }

    const sMap = {}, tMap = {};
    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] != tMap[t[i]]) {
            return false;
        }
        // console.log(sMap[s[i]])
        sMap[s[i]] = i;
        tMap[t[i]] = i;
    }
    return true;

};

// let s = "bbbaaaba", t="aaabbbba";
// console.log(isIsomorphic(s,t));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const mapT = new Map();
    const mapS = new Map();


    for(i in s){
        if(mapS.has(s[i])){
            mapS.set(s[i], mapS.get(s[i]) + 1)
        } 
        else {
            mapS.set(s[i],1)
        }
    }

    for(i in t){
        if(mapT.has(t[i])){
            mapT.set(t[i], mapT.get(t[i]) + 1)
        } else {
            mapT.set(t[i],1)
        }
    }

    console.log(mapS);
    console.log(mapT);
    console.log(Object.keys(mapT)[0])
    let indexCheck = 0;
    for(i in s){
        if(mapT.has(s[i])){
            if(mapT.get(s[i]) < indexCheck || mapT.get(s[i]) != mapS.get(s[i])){
                return false;
            }
            indexCheck = i;
            // console.log(indexCheck);
            // console.log("has it");
        }else{
            return false;
        }
    }

    return true;
};

let s="acb", t="ahbgdc";
console.log(isSubsequence(s,t));