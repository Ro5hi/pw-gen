const randomizeButton = document.getElementById('randomizeButton');
const copyToken = document.getElementById('copyToken');
const copyLink = document.getElementById('copyLink');
    
    function generateToken(length) {
        const url = "https://www.snackcrate.com/password-change/?token=";
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let token = '';
        const strLength = str.length;
        
        for ( let i = 0; i < length; i++) {
            str += str.charAt(Math.floor(Math.random() * strLength));
        }
        return url.join(token)
    }
    
    console.log((generateString(16)));