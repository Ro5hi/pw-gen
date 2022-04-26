var generator = document.getElementById("randomizeToken");
    
    function generateToken() {
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const strLength = 16;
        let token = "";
        
        for ( var i = 0; i <= strLength; i++) {
            var randomNumber = Math.floor(Math.random() * str.length);
            token += str.substring(randomNumber, randomNumber +1);
        }
        document.getElementById("randomizeToken").value = token;
        
    }
    
    function copyToken() {
        const token = document.getElementById('randomizeToken').value;
        navigator.clipboard.writeText(token);
    };
    
    function copyLink() {
        const link = document.getElementById('passwordLink').value;
        navigator.clipboard.writeText(link);
    };