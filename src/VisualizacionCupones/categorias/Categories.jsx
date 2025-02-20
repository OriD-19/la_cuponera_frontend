// de la documentacion de 'Tailwindcss':https://tailwindui.com/components/application-ui/elements/dropdowns y https://headlessui.com/react/menu
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CategoriesList } from './CategoriesList';
import { useFilteredCoupons } from './useFilteredCoupons';

export default function CategoriesMenu({}) {
  const { categories, setSelectedCategory } = useFilteredCoupons();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md border-3 bg-base border-resaltador px-6 py-2 text-resaltador font-semibold shadow-xs hover:bg-gray-50">
          Categoría
          <ChevronDownIcon className="size-5.5 fill-resaltador" />
        </MenuButton>
      </div>

      <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => setSelectedCategory ("Todos")}
              className="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100 hover:text-resaltador w-full text-left"
            >
              Todos
            </button>
          </MenuItem>
          {CategoriesList.map((cat) => (
            <MenuItem key={cat.slug}>
              <button
                onClick={() => setSelectedCategory(cat.slug)}
                className="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-gray-100 hover:text-resaltador w-full text-left"
              >
                {cat.name}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}