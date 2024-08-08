import { Button } from '@/components/ui/button';

function HomePage() {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
      <Button variant='outline' size='lg' className='p-4 capitalize m-8'>
        Click me
      </Button>
    </div>
  );
}

export default HomePage;
