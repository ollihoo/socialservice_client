import Link from 'next/link';
import Logo from './ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-red-800 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          Die Suche nach einer geeigneten Beratungsstelle ist alles andere als einfach. Wir helfen
          Dir mit einer Datenbank, die entsprechende Websites sammelt und Kategorien zuordnet.
          <Link
            className="md:h-20s mb-2 flex h-20 items-end justify-start rounded-md p-4 text-red-500"
            href="/dashboard/"
          >
            <ArrowRightIcon className="w-5 md:w-6" /> Hier geht's zur Beratungsdatenbank
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        </div>
      </div>
    </main>
  );
}
