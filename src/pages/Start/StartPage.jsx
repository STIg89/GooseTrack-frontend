import AuthSection from 'components/Start/AuthSection/AuthSection';
import Description from 'components/Start/Description/Description';
import ReviewsSlider from 'components/Start/ReviewsSlider/ReviewsSlider';
import { ThemeToggler } from 'components/MainLayout/Header/ThemeToggler/ThemeToggler';

const StartPage = () => {
  return (
    <>
      <ThemeToggler />
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </>
  );
};

export default StartPage;
