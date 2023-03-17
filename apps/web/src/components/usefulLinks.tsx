import React from 'react'

const UsefulLinks = ({ title, link }: { title: string, link: string }) => {
    return (
        <div>
            <p className="mb-4">
                <a href={link} className="text-black hover:text-white">
                    {title}
                </a>
            </p>
        </div>
    )
}

export default UsefulLinks