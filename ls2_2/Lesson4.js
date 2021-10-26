var s = "aabca";
var e = "a"
var out = "";
for(var i = 0; i < s.length  ; i++){
    if(e == s[i])
    {
        out = out + (s[i] + s[i]);
    }
    else
        out = out + s[i];
}
console.log(out);



