import StatusLabel, {
  Status,
} from '@/app/components/status-label';
import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  // console.log(headers());
  return (
    <main>
      <h1 className="text-xl">
        Home page {new Date().toTimeString()}
      </h1>
      <AddCompanyButton />
    </main>
  );
}
