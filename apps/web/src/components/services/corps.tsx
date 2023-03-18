import React from 'react'
import { ICategories } from '../../types'

const Corps = ({ data }: { data: ICategories }) => {
    return (
        <div className="flex flex-col justify-start items-start w-full mt-5">
            <div className="bg-[#93d9f0] w-full justify-center flex">
                <h2 className="text-2xl font-bold">{data.title}</h2>
            </div>
            <div className="mt-4 ml-4">
                <ul className="list-disc">
                    {data.other.map((other) => (
                        <li key={other.nom} className="text-sm">
                            {other.nom} ({other.duration}) - {other.price} FCFA
                        </li>
                    ))}
                </ul>
            </div>
            {data.categories?.map((category) => (
                <div key={category.nom} className="my-4">
                    <h3 className="text-md font-bold text-[#93d9f0] underline">{category.nom}</h3>
                    <ul className="list-disc ml-4">
                        {category.elements.map((element) => (
                            <li key={element.nom} className="text-sm">
                                {element.nom} {element.duration ? `(${element.duration})` : ''} - {element.price} FCFA
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Corps