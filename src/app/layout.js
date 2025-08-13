import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../../components/Header";
import MidHeader from "../../components/midheader";
import NavMenuWrapper from "../../components/NavMenuWrapper";
import Footer from "../../components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anand Car Driver Hire",
  description: "Professional driver and vehicle hire services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Ridek Online Taxi Booking HTML5 Template"
        />
        <meta name="author" content="DynamicLayers" />

        <title>Ridek - Online Taxi Booking Service HTML5 Template</title>

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/favicon.png"
        />

        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="assets/css/keyframe-animation.css" />
        <link
          rel="stylesheet"
          href="assets/css/jquery.datetimepicker.min.css"
        />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/venobox.min.css" />
        <link rel="stylesheet" href="assets/css/swiper.min.css" />
        <link rel="stylesheet" href="assets/css/elements.css" />
        <link rel="stylesheet" href="assets/css/header.css" />
        <link rel="stylesheet" href="assets/css/slider.css" />
        <link rel="stylesheet" href="assets/css/blog.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Header />
        <MidHeader />
        <NavMenuWrapper />

        {children}
        <Footer />
{/* 
        <div className="site-preloader">
          <div className="car">
            <div className="strike"></div>
            <div className="strike strike2"></div>
            <div className="strike strike3"></div>
            <div className="strike strike4"></div>
            <div className="strike strike5"></div>
            <div className="car-detail spoiler"></div>
            <div className="car-detail back"></div>
            <div className="car-detail center"></div>
            <div className="car-detail center1"></div>
            <div className="car-detail front"></div>
            <div className="car-detail wheel"></div>
            <div className="car-detail wheel wheel2"></div>
          </div>
        </div> */}

        <script src="assets/js/vendor/jquary-3.6.0.min.js"></script>
        <script src="assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
        <script src="assets/js/vendor/jquery.ajaxchimp.min.js"></script>
        <script src="assets/js/vendor/bootstrap.min.js"></script>
        <script src="assets/js/vendor/popper.min.js"></script>
        <script src="assets/js/vendor/swiper.min.js"></script>
        <script src="assets/js/vendor/jquery.datetimepicker.full.js"></script>
        <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
        <script src="assets/js/vendor/venobox.min.js"></script>
        <script src="assets/js/vendor/smooth-scroll.js"></script>
        <script src="assets/js/vendor/wow.min.js"></script>
        <script src="assets/js/main.js"></script>
      </body>
    </html>
  );
}
