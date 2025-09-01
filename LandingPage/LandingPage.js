import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, RotateCcw, Headphones, CreditCard, Star, ArrowRight, ShoppingCart } from 'lucide-react';
import './LandingPage.css';
import soloc8 from './ceight.JPG';
import soloc15 from './cfifthin.JPG';
import soloNi5 from './Nifive.JPG';
import soloNi10 from './Niten.JPG';
import bannerimg from './banner.JPG';
 

const LandingPage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      title: "تخفیفات تابستانه",
      subtitle: "با جدید ترین ترند ها آشنا شو",
      buttonText: "خرید",
      image: bannerimg //"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "مشاوره رایگان پوستی",
      subtitle: "پیشنهاد محصولات با توجه به نیاز پوست شما",
      buttonText: "شروع تست",
      link: "./Test.js",
      image: bannerimg 
    },
    {
      id: 3,
      title: "ارسال رایگان به سراسر کشور",
      subtitle: "برای تمامی محصولات",
      buttonText: "اطلاعات بیشتر",
      image: bannerimg
    }
  ];

  const products = [
    {
      id: 1,
      name: "C8%سولو سرم ویتامین ",
      price: "816,000",
      originalPrice: "960,000",
      image: soloc8 ,
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: "C15%سولو سرم ویتامین ",
      price: "855,100",
      originalPrice: "1,060,000",
      image: soloc15,
      rating: 3.6,
      isNew: true
    },
    {
      id: 3,
      name: "10% سولو سرم نیاسینامید",
      price: "935,000",
      image: soloNi10,
      rating: 4.9,
      isNew: false
    },
    {
      id: 4,
      name: "5% سولو سرم نیاسینامید",
      price: "714,000",
      image: soloNi5,
      rating: 4.7,
      isNew: false
    }
  ];

  const benefits = [
    {
      icon: <Truck className="benefit-icon" />,
      title: "ارسال رایگان",
      description: "ارسال رایگان بسته های شما به سراسر کشور"
    },
    {
      icon: <RotateCcw className="benefit-icon" />,
      title: "تعویض کالا",
      description: "امکان مرجوع کردن کالا تا 30 روز"
    },
    {
      icon: <Headphones className="benefit-icon" />,
      title: "پشتیبانی 24 ساعت",
      description: "پشتیبان آنلاین در هر زمان از طریق ایمیل و چت"
    },
    {
      icon: <CreditCard className="benefit-icon" />,
      title: "تنوع نوع پرداخت",
      description: "امکان خرید آنلاین حضوری و یا با اقساط"
    }
  ];

  // Auto-rotate banners every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="landing-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-container">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`banner-slide ${index === currentBanner ? 'active' : ''}`}
            >
              
              <div 
                className="banner-content"
                style={{
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="banner-overlay"></div>
                <div className="banner-text">
                  <div className="banner-text-content">
                    <h1 className="banner-title">
                      {banner.title}
                    </h1>
                    <p className="banner-subtitle">
                      {banner.subtitle}
                    </p>
                    <button className="banner-button">  
                      {banner.buttonText}
                      <ArrowRight className="button-icon" />
                    </button>
                  </div>
                </div>
                <div className="banner-decoration">
                  <div className="decoration-circle large"></div>
                  <div className="decoration-circle small"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Navigation */}
        <button onClick={prevBanner} className="banner-nav prev">
          <ChevronLeft className="nav-icon" />
        </button>
        <button onClick={nextBanner} className="banner-nav next">
          <ChevronRight className="nav-icon" />
        </button>

        {/* Banner Dots */}
        <div className="banner-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`dot ${index === currentBanner ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">محصولات پرفروش</h2>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  {product.isNew && (
                    <span className="new-badge">New</span>
                  )}
                  <div className="product-overlay"></div>
                </div>
                
                <div className="product-info">
                  <h3 className="ame">{product.name}</h3>
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  <div className="product-price-container">
                    <div className="price-group">
                      <span className="current-price">{product.price} تومان</span>
                      {product.originalPrice && (
                        <span className="original-price">{product.originalPrice} تومان</span>
                      )}
                    </div>
                    <button className="add-to-cart-btn">
                      <ShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">درباره ما</h2>
            <p className="section-subtitle">هدف ما اراعه بهترین خدمات به مشتریان است</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-container">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-column">
              <h3 className="footer-brand">YourBrand</h3>
              <p className="cription">
               Lta 
               Solo
               Flo
              </p>
              <div className="social-links">
                <div className="social-link">IG</div>
                <div className="social-link">tel</div>
                <div className="social-link">W</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">دسترسی سریع</h4>
              <ul className="footer-links">
                {['خانه', 'محصولات', 'تماس با ما', 'ورود', 'علاقه مندی ها', 'قوانین'].map((link) => (
                  <li key={link}>
                    <a href="/" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-column">
              <h4 className="footer-heading">خدمات مشتریان</h4>
              <ul className="footer-links">
                {['نحوه ارسال', 'مرجوع و تعویض کالا', 'کیفیت اجناس', 'مراقبت از کالا', 'پیگیری سفارش', 'نظرات مشتریان'].map((service) => (
                  <li key={service}>
                    <a href="/" className="footer-link">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-heading">با ما در تماس باشید</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <p>شرکت دوران رخ اکسیر</p>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <p>051-35098323</p>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <p>IG:estetiqe.Lta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h4 className="newsletter-title">باشگاه مشتریان</h4>
              <p className="newsletter-description">برای دریافت جدید ترین اخبار ایمیل خود را وارد کنید</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">
                  ثبت نام
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>© 2024 YourBrand. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;