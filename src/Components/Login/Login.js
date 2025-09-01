import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Heart, MessageCircle, CheckCircle } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Allow only numbers and basic formatting characters
    const cleanValue = value.replace(/[^\d\-\+\s]/g, '');
    
    setFormData(prev => ({
      ...prev,
      [name]: cleanValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'شماره تلفن الزامی است';
    } else if (formData.phoneNumber.replace(/[\s\-\+]/g, '').length < 10) {
      newErrors.phoneNumber = 'شماره تلفن معتبر وارد کنید';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        console.log('SMS sent to:', formData.phoneNumber);
        setIsSubmitted(true);
        setIsLoading(false);
      }, 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleTryAgain = () => {
    setIsSubmitted(false);
    setFormData({ phoneNumber: '' });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="login-page">
        <div className="login-container success-container">
          <div className="login-card">
            <div className="success-content">
              <div className="success-icon">
                <CheckCircle className="check-icon" />
              </div>
              <h1 className="success-title">پیام ارسال شد!</h1>
              <p className="success-description">
                کد تایید به شماره <strong>{formData.phoneNumber}</strong> ارسال شد.
                لطفاً کد دریافتی را بررسی کنید.
              </p>
              <div className="success-actions">
                <button className="primary-button">
                  <MessageCircle className="button-icon" />
                  <span>وارد کردن کد تایید</span>
                </button>
                <button className="secondary-button" onClick={handleTryAgain}>
                  شماره دیگری امتحان کنید
                </button>
              </div>
              <div className="resend-info">
                <p>کد را دریافت نکردید؟</p>
                <button className="resend-link">ارسال مجدد (۰۵:۰۰)</button>
              </div>
            </div>
          </div>
          
          <div className="login-side">
            <div className="side-content">
              <h2 className="side-title">ورود سریع و آسان</h2>
              <p className="side-description">
                با استفاده از شماره تلفن همراه خود، به سرعت وارد حساب کاربری شوید
              </p>
              <div className="side-features">
                <div className="feature-item">
                  <span>🔒 امنیت بالا</span>
                </div>
                <div className="feature-item">
                  <span>⚡ ورود سریع</span>
                </div>
                <div className="feature-item">
                  <span>📱 بدون نیاز به رمز عبور</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Background decoration */}
        <div className="login-decoration">
          <div className="decoration-circle large"></div>
          <div className="decoration-circle medium"></div>
          <div className="decoration-circle small"></div>
        </div>

        {/* Login Form */}
        <div className="login-card">
          <div className="login-header">
            <div className="brand-icon">
              <Heart className="heart-icon" />
            </div>
            <h1 className="login-title">خوش آمدید</h1>
            <p className="login-subtitle">شماره تلفن همراه خود را وارد کنید</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">شماره تلفن همراه</label>
              <div className="input-container">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="09123456789"
                  className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                  disabled={isLoading}
                />
              </div>
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
              <div className="input-help">
                <small>کد تایید به این شماره ارسال خواهد شد</small>
              </div>
            </div>

            <button type="submit" className={`login-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>در حال ارسال...</span>
                </>
              ) : (
                <>
                  <span>ارسال کد تایید</span>
                  <ArrowRight className="button-icon" />
                </>
              )}
            </button>
          </form>

          <div className="login-divider">
            <span>یا</span>
          </div>

          <div className="social-login">
            <button className="social-button google">
              <span className="social-icon">G</span>
              <span>ورود با گوگل</span>
            </button>
          </div>

          <div className="login-footer">
            <p>
              حساب کاربری ندارید؟ 
              <Link to="/register" className="register-link"> ثبت نام کنید</Link>
            </p>
          </div>
        </div>

        {/* Side Image/Content */}
        <div className="login-side">
          <div className="side-content">
            <h2 className="side-title">ورود با شماره تلفن</h2>
            <p className="side-description">
               فقط شماره تلفن همراه خود را وارد کنید
            </p>
            <div className="side-features">
              <div className="feature-item">
                <span> امنیت دو مرحله‌ای</span>
              </div>
              <div className="feature-item">
                <span> دریافت کد فوری</span>
              </div>
              <div className="feature-item">
                <span> ورود بدون رمز عبور</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;