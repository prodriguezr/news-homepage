import { NewWithPhoto } from './new-with-photo';

import image1 from '../assets/images/image-retro-pcs.jpg';
import image2 from '../assets/images/image-top-laptops.jpg';
import image3 from '../assets/images/image-gaming-growth.jpg';

export const NewsWithPhoto = () => {
  return (
    <section className='md:flex mt-8 md:flex-wrap md:gap-10'>
      <NewWithPhoto
        id='01'
        image={image1}
        title='Reviving Retro PCs'
        paragraph='What happens when old PCs are given modern upgrades?'
      />
      <NewWithPhoto
        id='02'
        image={image2}
        title='Top 10 Laptops of 2022'
        paragraph='Our best picks for various needs and budgets.'
      />
      <NewWithPhoto
        id='03'
        image={image3}
        title='The Growth of Gaming'
        paragraph='How the pandemic has sparked fresh opportunities.'
      />
    </section>
  );
};
