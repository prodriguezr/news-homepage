export interface NewArticleProps {
  title?: string;
  paragraph?: string;
}

export const NewArticle = ({ title = '', paragraph = '' }: NewArticleProps) => {
  return (
    <article className='h-[140px] border-b-2 border-DarkGrayishBlue py-7 last:border-none md:w-[343px] md:flex-grow'>
      <h2 className='cursor-pointer hover:text-SoftOrange text-[20px] lg:text-[18px] mb-3 font-bold'>
        {title}
      </h2>
      <p className='text-[15px]'>{paragraph}</p>
    </article>
  );
};
