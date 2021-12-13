    //solução 1
    function verificandoPalindromo(string) {
        if(!string) return;

        return string.split("").reverse().join("") === string;
    }

     //solução 2

     function verificandoPalindromo2(string) {
        if (!string) return "string inexistente";

        for(let i = 0; i < string.length /2; i++) {
            if(string[i] !== string[string.length -1 -i]) { // length entende zero como valor
                return false;
            }

        }

        return true;

    } 

    console.log(verificandoPalindromo("ovo"));

    console.log(verificandoPalindromo("galinha"));
