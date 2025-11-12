const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
            <img src="logo.jpg" alt="" class="brand-logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search for your option">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="login.png" alt=""></a>
            </div>
    </div>
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">Home</a></li>
                <li class="link-item"><a href="#" class="link">Eye Glasses</a></li>
                <li class="link-item"><a href="#" class="link">Computer Glasses</a></li>
                <li class="link-item"><a href="#" class="link">Contact Lenses</a></li>

            </ul>
    
    `;
}
