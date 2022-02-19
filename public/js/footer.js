const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Gujrat</li>
            <li><a href="#" class="footer-link">Dwarka</a></li>
            <li><a href="#" class="footer-link">shivRajpur</a></li>
            <li><a href="#" class="footer-link">Palitana</a></li>
            <li><a href="#" class="footer-link">ahemdabad</a></li>
            <li><a href="#" class="footer-link">baroda</a></li>
            <li><a href="#" class="footer-link">Kuch</a></li>
            <li><a href="#" class="footer-link">DIV</a></li>
            <li><a href="#" class="footer-link">Bet-dwarka</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about Us</p>
<p class="info">
    A remarkable About page is genuine, approachable, and distinguished. It should give the visitor a glimpse into what working with you and your business might be like. You can include personal interests, stories, and photos that convey the unique story
    of your business. Since About pages are creative and personal to you and your company, there are several ways to constrt.
</p>
<p class="info">
    support emails - helptravellifestyle@gmail.com, customersupporttravellife@gmail.com
</p>
<p class="info">
    telephone - 8866227170
</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Travellife, Best traveling platform in india</p>
    `;
}
createFooter();