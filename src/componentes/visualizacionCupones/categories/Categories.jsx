import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { SelectedCategoryContext, SetSelectedCategoryContext } from "../../../context/CategoryContext";

export default function CategoriesMenu() {

  const { categories, selectedCategory } = useContext(SelectedCategoryContext);
  const setSelectedCategory = useContext(SetSelectedCategoryContext);

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
          {categories.map((cat) => (
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
