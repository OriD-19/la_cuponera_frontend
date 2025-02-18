import React from 'react'

export const Filtro = () => {
    return (
        <div className="flex space-x-2 py-4 px-20 bg-white shadow-md mt-4 rounded">
            <button className="border border-red-500 px-4 py-2 rounded text-red-500">Categoría</button>
            <button className="border border-red-500 px-4 py-2 rounded text-red-500">Marca</button>
            <div className="flex-grow">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="w-full border border-red-500 px-4 py-2 rounded"
                />
            </div>
        </div>
    )
}
