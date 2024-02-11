var computers=[];
computers.push({id:1,
    brand:'HP',
    model:"Pavilion",ram:1,imagePath:"images/acer.jpg",username:"musa"});

computers.push({id:2,
        brand:'Acer',
        model:"Pavilion",ram:1,imagePath:"images/acer.jpg",username:"musa"});

computers.push({id:3,
            brand:'NVIDA',
            model:"Pavilion",ram:1,imagePath:"images/acer.jpg",username:"kenan"});
computers.push({id:4,
                brand:'MSI',
                model:"Pavilion",ram:1,imagePath:"images/acer.jpg",username:"kenan"});        
           
     for (let i = 5; i <=40; i++) {
        computers.push({id:i,
            brand:'HP',
            model:"Pavilion "+i,ram:8,imagePath:"images/acer.jpg",username:"musa"});         
     }           
localStorage.setItem('computers',JSON.stringify(computers));

var users=[];
users.push({id:1, username:'musa', password:'1234'});
users.push({id:2, username:'kenan', password:'1234'});
localStorage.setItem('users',JSON.stringify(users));


var loginButton = document.getElementById('login-button');
loginButton.addEventListener('click',function(){
    window.location.href = "login.html"
});

var usernameLabel = document.getElementById('username-label');
var loggedInUsername = localStorage.getItem('logged-in-username');
var logoutButton = document.getElementById('logout-button');
var computersButton = document.getElementById('computers-button');
var settingsButton = document.getElementById('settings-button');
var ordersButton = document.getElementById('orders-button');
var shoppingButton = document.getElementById('shopping-button');



if(loggedInUsername == null){
    usernameLabel.innerHTML = '';
    loginButton.style.display = 'inline-block';
    shoppingButton.style.display = 'inline-block';
    settingsButton.style.display = 'inline-block';

    
    logoutButton.style.display = 'none';
    computersButton.style.display = 'none';
    ordersButton.style.display = 'none';



}else {
    usernameLabel.innerHTML = loggedInUsername;

    loginButton.style.display = 'none';
    shoppingButton.style.display = 'inline-block';
    settingsButton.style.display = 'inline-block';

    
    logoutButton.style.display = 'inline-block';
    computersButton.style.display = 'inline-block';
    ordersButton.style.display = 'inline-block';
}

logoutButton.addEventListener('click',function () {
    localStorage.removeItem('logged-in-username');
    window.location.reload();
});

settingsButton.addEventListener('click',function () {
    window.location.href='settings.html';
});
ordersButton.addEventListener('click',function () {
    window.location.href='orders.html';
});
shoppingButton.addEventListener('click',function () {
    window.location.href='shopping.html';
});
computersButton.addEventListener('click',function () {
    window.location.href='computers.html';
});