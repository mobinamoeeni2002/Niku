import React from "react";
import { Link } from "react-router-dom";
import { User, Heart, ShoppingCart } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="left">
          <Link to="/Products" className="link">محصولات</Link>
          <Link to="/contact" className="link">تماس با ما</Link>
          <Link to="/Test" className="link">شروع تست </Link>
        </div>
        <div className="center">
          <Link to="/" className="brand">niku</Link>
        </div>
        <div className="right">
          <Link to="/login" className="link icon-link">
            <User size={20} />
            <span>ورود</span>
          </Link>
          <Link to="/wishlist" className="link icon-link">
            <Heart size={20} />
            <span>علاقه مندی ها</span>
          </Link>
          <Link to="/cart" className="link icon-link">
            <ShoppingCart size={20} />
            <span>سبد خرید</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;