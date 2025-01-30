'use client';

import {
  HomeIcon, EyeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navilinks = [
  { name: 'Beratungsstellen', href: '/dashboard', icon: HomeIcon },
  { name: 'Impressum', href: '/impressum', icon: EyeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      { navilinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {'bg-white-900 text-red-600': pathname === link.href,},
              )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
