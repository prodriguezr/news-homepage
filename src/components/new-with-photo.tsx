export interface Props {
  id: string;
  image?: string;
  title?: string;
  paragraph?: string;
}

export const NewWithPhoto = ({
  id,
  image = '',
  title = '',
  paragraph = '',
}: Props) => {
  return (
    <article className='flex h-[162px]'>
      <div className='w-[100px] flex-none'>
        <img src={image} alt='Image 01' />
      </div>
      <div className='pl-6'>
        <p className='text-3xl mb-[18px] font-bold text-GrayishBlue'>{id}</p>
        <h2 className='font-bold mb-[18px] hover:text-SoftOrange cursor-pointer'>
          {title}
        </h2>
        <p className='text-DarkGrayishBlue'>{paragraph}</p>
      </div>
    </article>
  );
};
