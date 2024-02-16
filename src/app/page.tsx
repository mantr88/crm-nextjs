import ActiveLabel from '@/components/active-label';
import NonActiveLabel from '@/components/non-active-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NonActiveLabel>Non Active</NonActiveLabel>
    </main>
  );
}
