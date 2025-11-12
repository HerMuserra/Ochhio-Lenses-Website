const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="logo.jpg" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title"> MEN</li>
            <li><a href="#" class="footer-link">EyeGlasses</a></li>
            <li><a href="#" class="footer-link">Contact Lenses</a></li>
            <li><a href="#" class="footer-link">SunGlasses</a></li>
            <li><a href="#" class="footer-link">Accessories</a></li>
        </ul>

        <ul class="category">
            <li class="category-title"> WOMEN</li>
            <li><a href="#" class="footer-link">EyeGlasses</a></li>
            <li><a href="#" class="footer-link">Contact Lenses</a></li>
            <li><a href="#" class="footer-link">SunGlasses</a></li>
            <li><a href="#" class="footer-link">Accessories</a></li>
        </ul>

        <ul class="category">
            <li class="category-title"> KIDS</li>
            <li><a href="#" class="footer-link">EyeGlasses</a></li>
            <li><a href="#" class="footer-link">Contact Lenses</a></li>
            <li><a href="#" class="footer-link">SunGlasses</a></li>
            <li><a href="#" class="footer-link">Accessories</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Our population needs glasses but does not have access to them, making us the blind capital of the world with over 15 million blind people.
In this country, 153 million people are in need of reading glasses, but they do not have access to them.
There are not enough optometrists to care for our people. Unfortunately, we only have 8,000.
Our vision is to provide every Indian with high-quality designer glasses without breaking the bank. We rocked our brains. We split our backs to come up with a plan that will not just change the way this industry works, but also will completely sweep customers off their feet. It can only be achieved if we provide.
</p>
<p class="info">Support emails - customercare@gmail.com ,
    customercare.com</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">Terms And Condition</a>
        <a href="#" class="social-link">Privacy Page</a>
    </div>
    <div>
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Facebook</a>
    </div>
</div>
<p class="footer-credit">Best Lenses Store TO SEE</p>
    
    `;
}

createFooter(); /**/