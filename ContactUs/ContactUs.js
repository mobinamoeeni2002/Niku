import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, ArrowLeft } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="contact-info-icon" />,
      title: "آدرس",
      content: "شرکت دوران رخ اکسیر، مشهد ایران",
      subContent: "کد پستی: 1234567890"
    },
    {
      icon: <Phone className="contact-info-icon" />,
      title: "تلفن تماس",
      content: "+98 21 1234 5678",
      subContent: "شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر"
    },
    {
      icon: <Mail className="contact-info-icon" />,
      title: "ایمیل",
      content: "info@drbeauty.com",
      subContent: "پاسخ در کمتر از ۲۴ ساعت"
    },
    {
      icon: <MessageCircle className="contact-info-icon" />,
      title: "شبکه‌های اجتماعی",
      content: "IG: estetiqe.Lta",
      subContent: "پیگیری سریع درخواست‌ها"
    }
  ];

  const businessHours = [
    { day: "شنبه - چهارشنبه", hours: "۹:۰۰ - ۱۸:۰۰" },
    { day: "پنج‌شنبه", hours: "۹:۰۰ - ۱۴:۰۰" },
    { day: "جمعه", hours: "تعطیل" }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">تماس با ما</h1>
            <p className="contact-hero-subtitle">
              ما اینجا هستیم تا به سوالات شما پاسخ دهیم و بهترین خدمات را ارائه کنیم
            </p>
            <div className="hero-decoration">
              <div className="decoration-circle hero-circle-1"></div>
              <div className="decoration-circle hero-circle-2"></div>
              <div className="decoration-circle hero-circle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon-container">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-content">{info.content}</p>
                <p className="contact-info-subcontent">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2 className="form-title">پیام خود را برای ما ارسال کنید</h2>
                <p className="form-subtitle">
                  در اسرع وقت با شما تماس خواهیم گرفت
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      <User className="label-icon" />
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="نام خود را وارد کنید"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <Mail className="label-icon" />
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <Phone className="label-icon" />
                      شماره تلفن
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <MessageCircle className="label-icon" />
                      موضوع *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input form-select"
                      required
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="product-inquiry">استعلام محصول</option>
                      <option value="order-support">پشتیبانی سفارش</option>
                      <option value="skin-consultation">مشاوره پوستی</option>
                      <option value="partnership">همکاری</option>
                      <option value="complaint">شکایت</option>
                      <option value="other">سایر</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <MessageCircle className="label-icon" />
                    پیام شما *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="پیام خود را اینجا بنویسید..."
                    rows="5"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      ارسال پیام
                      <Send className="button-icon" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    پیام شما با موفقیت ارسال شد. در اسرع وقت با شما تماس خواهیم گرفت.
                  </div>
                )}
              </form>
            </div>

            {/* Business Hours & Additional Info */}
            <div className="contact-sidebar">
              {/* Business Hours */}
              <div className="sidebar-card">
                <div className="sidebar-card-header">
                  <Clock className="sidebar-icon" />
                  <h3 className="sidebar-title">ساعات کاری</h3>
                </div>
                <div className="business-hours">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="business-hour-item">
                      <span className="day">{schedule.day}</span>
                      <span className="hours">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="sidebar-card">
                <div className="sidebar-card-header">
                  <MessageCircle className="sidebar-icon" />
                  <h3 className="sidebar-title">سوالات متداول</h3>
                </div>
                <div className="faq-links">
                  <a href="#" className="faq-link">
                    <ArrowLeft className="faq-arrow" />
                    نحوه ارسال سفارشات
                  </a>
                  <a href="#" className="faq-link">
                    <ArrowLeft className="faq-arrow" />
                    نحوه مرجوع کردن کالا
                  </a>
                  <a href="#" className="faq-link">
                    <ArrowLeft className="faq-arrow" />
                    مشاوره انتخاب محصول
                  </a>
                  <a href="#" className="faq-link">
                    <ArrowLeft className="faq-arrow" />
                    نحوه پرداخت
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="sidebar-card emergency-card">
                <div className="sidebar-card-header">
                  <Phone className="sidebar-icon" />
                  <h3 className="sidebar-title">تماس اضطراری</h3>
                </div>
                <p className="emergency-text">
                  برای موارد اضطراری و فوری، می‌توانید با شماره زیر تماس بگیرید:
                </p>
                <a href="tel:+989123456789" className="emergency-phone">
                  ۰۹۱۲۳۴۵۶۷۸۹
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">موقعیت ما</h2>
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <MapPin className="map-placeholder-icon" />
              <p className="map-placeholder-text">
                نقشه دفتر مرکزی
                <br />
                <small>شرکت دوران رخ اکسیر، تهران</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;