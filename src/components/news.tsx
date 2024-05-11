// import { New } from '../interfaces';
import { New } from '../interfaces';
import { NewArticle } from './new-article';

const news: New[] = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    paragraph:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    paragraph:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

export const News = () => {
  return (
    <aside className='bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]'>
      <h1 className='text-SoftOrange text-4xl font-bold'>New</h1>
      {news.map((n) => (
        <NewArticle key={n.id} {...n} />
      ))}
    </aside>
  );
};
