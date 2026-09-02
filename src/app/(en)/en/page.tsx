import HomePage from '@/components/HomePage';
import JsonLd from '@/components/JsonLd';
import { personGraph } from '@/lib/jsonld';

export default function Page() {
  return (
    <>
      <JsonLd data={personGraph('en')} />
      <HomePage lang="en" />
    </>
  );
}
