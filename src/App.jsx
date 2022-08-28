import style from "./style";
import {
  Navbar,
  Hero,
  Companies,
  Value,
  FeatureFirst,
  NewsLetter,
  FeatureSecond,
  Testimonials,
  CTA,
  Footer,
  FooterBar,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-spbg ${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-spbg ${style.flexStart} bg-cut relative`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Companies />
          <Value />
          <FeatureFirst />
          <NewsLetter />
          <FeatureSecond />
          <Testimonials />
          <CTA />
          <Footer />
          <FooterBar />
        </div>
      </div>
    </div>
  );
}

export default App;
