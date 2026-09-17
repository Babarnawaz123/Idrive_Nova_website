(() => {
  const isAreaDetail = /\/area\//.test(window.location.pathname.replace(/\\/g, '/'));
  const rootPrefix = isAreaDetail ? '../' : '';

  const helpMarkup = `
    <div class="help-head">
      <span>HOW iDRIVENOVA CAN HELP YOU</span>
      <h3>Everything you need. <em>One straightforward price.</em></h3>
      <p>Some providers charge extra for features. We focus on giving students a complete learning experience without unnecessary complexity.</p>
    </div>
    <div class="benefit-grid">
      <article><img alt="Safer driver icon" src="https://idrivenova.com/wp-content/uploads/drive-safe.png"/><span>01</span><h4>Become a Safer Driver</h4><p>Boost your driving proficiency with expert guidance, interactive lessons, and practical learning for a safer, more confident experience.</p></article>
      <article><img alt="Dismiss citation icon" src="https://idrivenova.com/wp-content/uploads/dismiss-a-citation.png"/><span>02</span><h4>Dismiss a Citation</h4><p>Build the knowledge needed to navigate traffic requirements and improve your driving record.</p></article>
      <article><img alt="Insurance points icon" src="https://idrivenova.com/wp-content/uploads/reduce-point-insurance.png"/><span>03</span><h4>Reduce Insurance Points</h4><p>Master defensive-driving techniques that may help reduce points and support potential insurance savings.</p></article>
      <article><img alt="Learner permit icon" src="https://idrivenova.com/wp-content/uploads/online-driving-certificate.png"/><span>04</span><h4>Obtain a Learner's Permit</h4><p>Prepare efficiently with courses designed to help you meet knowledge-test and licensing requirements.</p></article>
      <article><img alt="Five star support icon" src="https://idrivenova.com/wp-content/uploads/five-star-rating.png"/><span>05</span><h4>5 Star Support</h4><p>Get dedicated assistance and guidance throughout your learning journey.</p></article>
      <article class="benefit-stat"><img alt="Success target icon" src="https://idrivenova.com/wp-content/uploads/target-icon.png"/><span>06</span><h4><strong data-counter="99">99</strong>% Success Rate</h4><p>Move toward your driving goals with a strong track record supporting Virginia learners.</p></article>
    </div>`;

  const footerMarkup = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="brand footer-logo" href="${rootPrefix}index.html#home"><span class="brand-mark">i</span><span class="brand-text">DRIVE<span>NOVA</span></span></a>
            <p>The Best Professional Driving School in VA.</p>
          </div>
          <div class="footer-column">
            <span>Useful Links</span>
            <a href="${rootPrefix}index.html#about">About Us</a>
            <a href="${rootPrefix}index.html#courses">Our Courses</a>
            <a href="${rootPrefix}index.html#registration">Sign Up</a>
            <a href="${rootPrefix}index.html#contact">Contact Us</a>
          </div>
          <div class="footer-column">
            <span>Contact Information</span>
            <a href="tel:7039576682">703-957-6682</a>
            <a href="mailto:Idrivenova@gmail.com">Idrivenova@gmail.com</a>
            <p>44330 Mercure Cir Suite 161<br/>Dulles, VA 20166</p>
          </div>
          <div class="footer-column">
            <span>We Accept Cards*</span>
            <img alt="Accepted payment cards" class="payment-image" src="https://idrivenova.com/wp-content/uploads/nova-accept-all-cards.webp"/>
            <small>* Subject to an extra 5% charge</small>
            <span class="follow-title">Payment / Zelle</span>
            <p class="zelle-footer"><strong>Nova Driving School</strong><br/>571-271-5667</p>
            <span class="follow-title">Follow Us</span>
            <div class="socials"><a aria-label="Facebook" href="#"><i class="ri-facebook-fill"></i></a><a aria-label="Instagram" href="#"><i class="ri-instagram-line"></i></a></div>
          </div>
        </div>
        <div class="footer-bottom"><span>© 2026 iDriveNova Driving School VA</span><span>DMV Approved · Virginia</span></div>
      </div>
    </footer>`;

  document.querySelectorAll('[data-idrive-help]').forEach((node) => {
    node.innerHTML = helpMarkup;
  });

  document.querySelectorAll('[data-idrive-footer]').forEach((node) => {
    node.innerHTML = footerMarkup;
  });
})();
