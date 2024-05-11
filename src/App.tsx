import { Header, MainArticle, News, NewsWithPhoto } from './components';

function App() {
  return (
    <main className='px-4 pt-6'>
      <Header />
      <div className='lg:flex lg:gap-8'>
        <MainArticle />
        <News />
      </div>
      <NewsWithPhoto />
    </main>
  );
}

export default App;
