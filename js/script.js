// Theme switching functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

themeToggle.style.display = "none";

// Set initial theme
document.documentElement.setAttribute('data-theme', 
    localStorage.getItem('theme') || 
    (prefersDark.matches ? 'dark' : 'light')
);

themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => themeToggle.style.transform = '', 150);

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Enhanced mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    const icon = mobileMenuBtn.querySelector('i');
    
    // Toggle menu state
    navLinks.classList.toggle('active');
    
    // Update icon and button state
    if (!isOpen) {
        icon.className = 'ri-close-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        icon.className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu') && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Enhanced active link handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        e.target.closest('.nav-link').classList.add('active');
        
        // Close mobile menu after link click
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Add animation to nav links
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach((link, index) => {
    link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});

// Add hover effect to logo
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mousemove', (e) => {
    const bound = logo.getBoundingClientRect();
    const x = e.clientX - bound.left;
    const y = e.clientY - bound.top;
    
    logo.style.setProperty('--x', `${x}px`);
    logo.style.setProperty('--y', `${y}px`);
});
let textName = document.getElementById("name");
let textEmail = document.getElementById("email");
let textMessage = document.getElementById("message");
let buttonSend = document.querySelector(".buttonSend");

// Contact us Event Function
let ContactUs = (name, email, message) =>{
    let textName = document.getElementById(name).value;
    let textEmail = document.getElementById(email).value;
    let textMessage = document.getElementById(message).value;
    console.log("textName=================="+ textName);
    console.log("textEmail=================="+ textEmail);
    console.log("textMeassge=================="+ textMessage);
    if(!isEmpty(textName) && !isEmpty(textEmail) && !isEmpty(textMessage)) {
        alert("Thank you for your sending feedback");
    }
    else{
        if(textName && textEmail && textMessage == false){
            alert("Please Enter all information")
        }
        else if(textName == false){
            alert("Please Enter name");
        }
        else if(textEmail == false){
            alert("Pleasse Enter email");
        }
        else if(textMessage == false){
            alert("Please Enter Message");
        }
    }
    
}

function isEmpty(value){
    if(value == "" || value == null ){
        return true;
    }else{
        return false;
    }
}

buttonSend.addEventListener("click", function(){
    ContactUs("name", "email", "message");
})
    
