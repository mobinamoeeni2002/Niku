import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, User, Zap } from 'lucide-react';
import Products, { productsData } from '../Products/Products';
import './Test.css';
import '../Products/Products.css';

const Test = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState('');

  const questions = [
    {
      id: 'name',
      type: 'text',
      question: 'نام شما چیست؟',
      subtitle: 'برای شخصی سازی نتایج، لطفا نام خود را وارد کنید'
    },
    {
      id: 'age',
      type: 'multiple',
      question: 'سن شما در کدام بازه قرار دارد؟',
      subtitle: 'سن برای تعیین نیازهای پوستی مهم است',
      options: [
        { value: 'under20', label: 'زیر 20 سال' },
        { value: '20-30', label: '20 تا 30 سال' },
        { value: '30-40', label: '30 تا 40 سال' },
        { value: 'over40', label: 'بالای 40 سال' }
      ]
    },
    {
      id: 'skinType',
      type: 'multiple',
      question: 'نوع پوست شما چگونه است؟',
      subtitle: 'چگونگی احساس پوست شما در طول روز',
      options: [
        { value: 'dry', label: 'خشک', description: 'پوست کشیده و خشن'},
        { value: 'oily', label: 'چرب', description: 'براق و چربی زیاد'},
        { value: 'combination', label: 'مختلط', description: 'چرب در ناحیه T، خشک در سایر نواحی' },
        { value: 'normal', label: 'عادی', description: 'متعادل و سالم'},
        { value: 'sensitive', label: 'حساس', description: 'واکنش به محصولات' }
      ]
    },
    {
      id: 'skinConcerns',
      type: 'multiple',
      question: 'اصلی ترین نگرانی پوستی شما چیست؟',
      subtitle: 'می توانید چندین گزینه انتخاب کنید',
      multiple: true,
      options: [
        { value: 'acne', label: 'جوش و آکنه'},
        { value: 'darkSpots', label: 'لکه های تیره'},
        { value: 'wrinkles', label: 'چین و چروک' },
        { value: 'dullness', label: 'کمبود درخشندگی' },
        { value: 'redness', label: 'قرمزی پوست' },
        { value: 'largeSpores', label: 'منافذ بزرگ' },
        { value: 'dryness', label: 'خشکی' },
        { value: 'oiliness', label: 'چربی زیاد' }
      ]
    },
    {
      id: 'sunExposure',
      type: 'multiple',
      question: 'چقدر در معرض نور آفتاب قرار می گیرید؟',
      subtitle: 'میزان قرارگیری روزانه در برابر نور خورشید',
      options: [
        { value: 'minimal', label: 'بسیار کم', description: 'بیشتر داخل خانه'},
        { value: 'moderate', label: 'متوسط', description: '1-2 ساعت در روز'},
        { value: 'high', label: 'زیاد', description: 'بیش از 3 ساعت در روز' },
        { value: 'extreme', label: 'بسیار زیاد', description: 'کار در فضای باز' }
      ]
    },
    {
      id: 'routine',
      type: 'multiple',
      question: 'در حال حاضر چه روتین مراقبتی دارید؟',
      subtitle: 'محصولاتی که به طور منظم استفاده می کنید',
      options: [
        { value: 'none', label: 'هیچ روتین خاصی'},
        { value: 'basic', label: 'فقط شستشو' },
        { value: 'simple', label: 'شستشو + مرطوب کننده' },
        { value: 'complete', label: 'روتین کامل' }
      ]
    },
    {
      id: 'lifestyle',
      type: 'multiple',
      question: 'سبک زندگی شما چگونه است؟',
      subtitle: 'عوامل محیطی و زندگی روزانه',
      multiple: true,
      options: [
        { value: 'stress', label: 'استرس زیاد' },
        { value: 'exercise', label: 'ورزش منظم' },
        { value: 'smoking', label: 'سیگار کشیدن' },
        { value: 'goodSleep', label: 'خواب کافی' },
        { value: 'pollution', label: 'محیط آلوده' },
        { value: 'healthy', label: 'تغذیه سالم'}
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    const question = questions[currentStep];
    
    if (question.multiple) {
      const currentAnswers = answers[questionId] || [];
      const newAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter(a => a !== answer)
        : [...currentAnswers, answer];
      
      setAnswers(prev => ({
        ...prev,
        [questionId]: newAnswers
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }));
      
      if (questionId === 'name') {
        setUserName(answer);
      }
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const getPersonalizedRecommendations = () => {
    const skinType = answers.skinType;
    const concerns = answers.skinConcerns || [];
    let recommendations = [];
    let skinAnalysis = '';
    
    // Skin type analysis
    switch (skinType) {
      case 'dry':
        skinAnalysis = 'پوست شما از نوع خشک است. نیاز به مرطوب کننده های قوی و محصولات آبرسان دارید.';
        recommendations.push(productsData[0]); // Vitamin C 8%
        break;
      case 'oily':
        skinAnalysis = 'پوست شما چرب است. محصولات کنترل کننده چربی و تنظیم کننده منافذ برای شما مناسب است.';
        recommendations.push(productsData[2]); // Niacinamide 10%
        break;
      case 'combination':
        skinAnalysis = 'پوست شما مختلط است. نیاز به محصولاتی دارید که هم چربی را کنترل کنند و هم خشکی را برطرف کنند.';
        recommendations.push(productsData[3]); // Niacinamide 5%
        recommendations.push(productsData[0]); // Vitamin C 8%
        break;
      case 'sensitive':
        skinAnalysis = 'پوست شما حساس است. محصولات ملایم و بدون مواد تحریک کننده برای شما بهتر است.';
        recommendations.push(productsData[3]); // Niacinamide 5%
        break;
      case 'normal':
        skinAnalysis = 'پوست شما عادی و سالم است. محصولات پیشگیری کننده و حفظ کننده سلامت پوست مناسب شما است.';
        recommendations.push(productsData[0]); // Vitamin C 8%
        break;
      default:
        skinAnalysis = 'بر اساس پاسخ های شما، پوست شما نیاز به مراقبت های خاصی دارد.';
        recommendations.push(productsData[0]);
        break;
    }
    
    // Add products based on concerns
    if (concerns.includes('darkSpots') || concerns.includes('dullness')) {
      if (!recommendations.find(p => p.id === 2)) {
        recommendations.push(productsData[1]); // Vitamin C 15%
      }
    }
    
    if (concerns.includes('acne') || concerns.includes('largeSpores')) {
      if (!recommendations.find(p => p.id === 3)) {
        recommendations.push(productsData[2]); // Niacinamide 10%
      }
    }

    return {
      skinAnalysis,
      recommendations: recommendations.slice(0, 3) // Limit to 3 products
    };
  };

  const restartTest = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setUserName('');
  };

  if (showResults) {
    const { skinAnalysis, recommendations } = getPersonalizedRecommendations();
    
    return (
      <div className="test-container">
        <div className="results-container">
          {/* Results Header */}
          <div className="results-header">
            <div className="success-icon">
              <CheckCircle size={64} />
            </div>
            <h1 className="results-title">
              {userName ? `${userName} عزیز، ` : ''}نتایج تست پوستی شما
            </h1>
            <p className="results-subtitle">
              بر اساس پاسخ های شما، تحلیل کاملی از پوست شما تهیه شده است
            </p>
          </div>

          {/* Skin Analysis */}
          <div className="analysis-section">
            <h2 className="analysis-title">
              <User className="section-icon" />
              تحلیل نوع پوست شما
            </h2>
            <div className="analysis-content">
              <p className="analysis-text">{skinAnalysis}</p>
              
              <div className="skin-stats">
                <div className="stat-item">
                  <span className="stat-label">نوع پوست:</span>
                  <span className="stat-value">
                    {answers.skinType === 'dry' ? 'خشک' :
                     answers.skinType === 'oily' ? 'چرب' :
                     answers.skinType === 'combination' ? 'مختلط' :
                     answers.skinType === 'sensitive' ? 'حساس' : 'عادی'}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">سن:</span>
                  <span className="stat-value">
                    {answers.age === 'under20' ? 'زیر 20 سال' :
                     answers.age === '20-30' ? '20-30 سال' :
                     answers.age === '30-40' ? '30-40 سال' : 'بالای 40 سال'}
                  </span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">نگرانی اصلی:</span>
                  <span className="stat-value">
                    {answers.skinConcerns && answers.skinConcerns.length > 0 
                      ? answers.skinConcerns.slice(0, 2).join(', ')
                      : 'عمومی'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Recommendations */}
          <div className="recommendations-section">
            <h2 className="recommendations-title">
              <Zap className="section-icon" />
              محصولات پیشنهادی برای شما
            </h2>
            <p className="recommendations-subtitle">
              بر اساس تحلیل پوست شما، این محصولات برای شما مناسب هستند
            </p>
            
            <div className="recommended-products">
              {recommendations.map((product, index) => (
                <Products
                  key={product.id}
                  product={product}
                  isRecommended={true}
                  recommendationIndex={index}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="results-actions">
            <button onClick={restartTest} className="restart-button">
              <ChevronLeft className="button-icon" />
              تست مجدد
            </button>
            <button className="continue-shopping">
              مشاهده همه محصولات
              <ChevronRight className="button-icon" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="test-container">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">
          {currentStep + 1} از {questions.length} سوال
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card">
        <div className="question-header">
          <h2 className="question-title">{currentQuestion.question}</h2>
          <p className="question-subtitle">{currentQuestion.subtitle}</p>
        </div>

        <div className="question-content">
          {currentQuestion.type === 'text' ? (
            <div className="text-input-container">
              <input
                type="text"
                className="text-input"
                placeholder="نام خود را وارد کنید..."
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              />
            </div>
          ) : (
            <div className="options-container">
              {currentQuestion.options.map((option) => {
                const isSelected = currentQuestion.multiple 
                  ? (answers[currentQuestion.id] || []).includes(option.value)
                  : answers[currentQuestion.id] === option.value;

                return (
                  <button
                    key={option.value}
                    className={`option-button ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  >
                    <div className="option-icon">{option.icon}</div>
                    <div className="option-text">
                      <div className="option-label">{option.label}</div>
                      {option.description && (
                        <div className="option-description">{option.description}</div>
                      )}
                    </div>
                    {isSelected && (
                      <CheckCircle className="selected-icon" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="question-navigation">
          <button 
            onClick={prevStep}
            className="nav-button prev"
            disabled={currentStep === 0}
          >
            <ChevronLeft className="nav-icon" />
            قبلی
          </button>
          
          <button 
            onClick={nextStep}
            className="nav-button next"
            disabled={!answers[currentQuestion.id] || 
                     (currentQuestion.multiple && 
                      (!answers[currentQuestion.id] || answers[currentQuestion.id].length === 0))}
          >
            {currentStep === questions.length - 1 ? 'مشاهده نتایج' : 'بعدی'}
            <ChevronRight className="nav-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;