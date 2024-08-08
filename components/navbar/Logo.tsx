import { Button } from '../ui/button';
import { MdOutlineHomeWork } from 'react-icons/md';
import Link from 'next/link';

function Logo() {
  return (
    <Button asChild size='icon'>
      <Link href='/'>
        <MdOutlineHomeWork />
      </Link>
    </Button>
  );
}

export default Logo;
