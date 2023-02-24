import { InfinitySpin } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div className='spinner'>
      <InfinitySpin 
        width='200'
        color="#125125"
      />
    </div>
  );
}
