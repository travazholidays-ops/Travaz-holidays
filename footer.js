document.addEventListener("DOMContentLoaded", function () {

  /* ===== FOOTER HTML ===== */
  const footerContent = `
    <footer class="custom-footer">

      <div class="footer-glow"></div>

      <div class="container">

        <div class="row gy-4 align-items-start">

          <div class="col-lg-7 text-center text-lg-start">

            <h4 class="footer-brand">
              Travaz <span>Holidays</span>
            </h4>

            <p class="footer-description">
              Premium holiday experiences, sightseeing tours,
              cab services, and customized travel packages
              across South India.
            </p>

            <div class="footer-info">

              <p class="footer-text">
                <i class="fas fa-phone-alt text-brand"></i>
                <strong>Phone:</strong> +91 73058 68976
              </p>

              <p class="footer-text">
                <i class="fas fa-envelope text-brand"></i>
                <strong>Email:</strong> travazholidays@gmail.com
              </p>

              <p class="footer-text">
                <i class="fas fa-route text-brand"></i>
                <strong>Service Areas:</strong>
                Bangalore (Karnataka) & Coimbatore (Tamil Nadu)
              </p>
              
              <p class="footer-text">
                <i class="fas fa-map-marker-alt text-brand"></i>
                <strong>Headquarters:</strong>
                No 159, Gurunathan Street, Varanapuram,
                Bhavani, Tamil Nadu 638301, India
              </p>



            </div>

          </div>

          <div class="col-lg-5 text-center text-lg-end">

            <h5 class="footer-heading">Connect With Us</h5>

            <div class="footer-social-wrap">

              <a href="#" class="footer-social-icon facebook" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>

              <a href="#" class="footer-social-icon instagram" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>

            </div>

          </div>

        </div>

        <hr>

        <div class="footer-bottom">

          <div class="footer-copy">
            © 2026 <strong>Travaz Holidays</strong>. All rights reserved.
          </div>

          <div class="footer-links">
            <a href="index.html" class="footer-link">Home</a>
            <a href="tour packages.html" class="footer-link">Tour Packages</a>
            <a href="services.html" class="footer-link">Services</a>
            <a href="about.html" class="footer-link">About Us</a>
            <a href="contact.html" class="footer-link">Contact</a>
          </div>

        </div>

        <div class="footer-credit">
          Website crafted by
          <a href="https://marcinmind.in" target="_blank">
            Marc In Mind Technologies
          </a>
        </div>

      </div>
    </footer>
  `;

  /* ===== FOOTER CSS ===== */
  const footerStyles = `
    <style>

      .custom-footer{
        position:relative;
        overflow:hidden;
        background:linear-gradient(180deg,#ffffff 0%, #f7f9fc 100%);
        border-top:1px solid #e5e7eb;
        padding:60px 0 30px;
        margin-top:70px;
        font-family:'Manrope',sans-serif;
      }

      .footer-glow{
        position:absolute;
        width:320px;
        height:320px;
        background:rgba(20,184,166,0.08);
        border-radius:50%;
        top:-150px;
        right:-120px;
        filter:blur(55px);
      }

      .custom-footer .container{
        position:relative;
        z-index:2;
      }

      .footer-brand{
        font-size:2rem;
        font-weight:800;
        color:#111111;
        margin-bottom:.8rem;
        font-family:'Outfit',sans-serif;
        letter-spacing:-0.03em;
      }

      .footer-brand span{
        color:#14b8a6;
      }

      .footer-description{
        color:#6b7280;
        max-width:580px;
        line-height:1.9;
        margin-bottom:1.4rem;
        font-size:.98rem;
      }

      .footer-heading{
        color:#111111;
        font-weight:700;
        margin-bottom:1rem;
        font-size:1.05rem;
      }

      .footer-text{
        color:#374151;
        margin-bottom:.9rem;
        line-height:1.8;
        font-size:.96rem;
      }

      .footer-text strong{
        color:#111111;
      }

      .text-brand{
        color:#14b8a6;
        margin-right:10px;
        width:18px;
      }

      .footer-social-wrap{
        display:flex;
        justify-content:flex-end;
        gap:14px;
      }

      .footer-social-icon{
        width:48px;
        height:48px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:14px;
        background:#ffffff;
        border:1px solid #e5e7eb;
        color:#374151;
        font-size:1.1rem;
        transition:all .28s ease;
        text-decoration:none;
        box-shadow:0 4px 14px rgba(0,0,0,0.05);
      }

      .footer-social-icon:hover{
        transform:translateY(-5px);
      }

      .footer-social-icon.facebook:hover{
        background:#1877f2;
        color:#fff;
        border-color:#1877f2;
      }

      .footer-social-icon.instagram:hover{
        background:linear-gradient(
          135deg,
          #f9ce34,
          #ee2a7b,
          #6228d7
        );
        color:#fff;
        border-color:transparent;
      }

      .custom-footer hr{
        border:none;
        height:1px;
        background:#e5e7eb;
        margin:2.2rem 0 1.8rem;
      }

      .footer-bottom{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:20px;
        flex-wrap:wrap;
      }

      .footer-copy{
        color:#6b7280;
        font-size:.94rem;
      }

      .footer-copy strong{
        color:#111111;
      }

      .footer-links{
        display:flex;
        flex-wrap:wrap;
        gap:18px;
      }

      .footer-link{
        color:#374151;
        font-size:.95rem;
        font-weight:600;
        text-decoration:none;
        transition:all .25s ease;
        position:relative;
      }

      .footer-link:hover{
        color:#14b8a6;
      }

      .footer-link::after{
        content:"";
        position:absolute;
        left:0;
        bottom:-4px;
        width:0%;
        height:2px;
        background:#14b8a6;
        transition:width .25s ease;
      }

      .footer-link:hover::after{
        width:100%;
      }

      .footer-credit{
        margin-top:26px;
        padding-top:18px;
        border-top:1px solid #eceff3;
        color:#6b7280;
        font-size:.92rem;
        text-align:center;
      }

      .footer-credit a{
        color:#14b8a6;
        font-weight:700;
        text-decoration:none;
      }

      .footer-credit a:hover{
        text-decoration:underline;
      }

      @media(max-width:991px){

        .custom-footer{
          text-align:center;
          padding:50px 0 28px;
        }

        .footer-description{
          margin-inline:auto;
        }

        .footer-social-wrap{
          justify-content:center;
          margin-top:10px;
        }

        .footer-bottom{
          justify-content:center;
          text-align:center;
        }

        .footer-links{
          justify-content:center;
          gap:14px;
        }

      }

    </style>
  `;

  /* ===== APPEND ===== */
  document.head.insertAdjacentHTML("beforeend", footerStyles);

  const footerContainer = document.createElement("div");
  footerContainer.innerHTML = footerContent;

  document.body.appendChild(footerContainer);

});
