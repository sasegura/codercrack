'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (value: string) => {
    router.replace(pathname, { locale: value });
  };

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">EN</SelectItem>
        <SelectItem value="es">ES</SelectItem>
      </SelectContent>
    </Select>
  );
}
