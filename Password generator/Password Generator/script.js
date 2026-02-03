const passwordDisplay = document.getElementById('passwordDisplay'); 
const generateBtn = document.getElementById('generateBtn');
const toggleBtn = document.getElementById('toggleBtn');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', () => {
    generateBtn.classList.add('generating');
    
    const length = 14;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for(let i=0; i < length; i++) {
        const randomIndex=Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    passwordDisplay.value = password;
    
    setTimeout(() => {
        generateBtn.classList.remove('generating');
    }, 600);
}); 

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.add('clicked');
    if(passwordDisplay.type==="password"){
        passwordDisplay.type="text";
        toggleBtn.innerHTML = '<span class="toggle-icon">👀</span>';
    }
    else{
        passwordDisplay.type="password"
        toggleBtn.innerHTML = '<span class="toggle-icon">👁️</span>'
    }
    setTimeout(() => {
        toggleBtn.classList.remove('clicked');
    }, 300);
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        navigator.clipboard.writeText(passwordDisplay.value).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = '<span class="copy-icon">✓</span>';
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = '<span class="copy-icon">📋</span>';
            }, 2000);
        });
    }
});