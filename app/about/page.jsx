import React from 'react'

const page = () => {
return (
<main className="bg-orange-500 font-sans text-gray-900">
    <div className="bg-orange-500 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">ScholarNote</h1>
            <p className="text-xl font-medium opacity-90">Revolutionizing the 2026 Research Lifecycle</p>
        </div>
    </div>

    <main className="max-w-4xl mx-auto -mt-16 mb-20 px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            <section className="mb-12">
                <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Our Vision</span>
                <h2 className="text-3xl font-bold mt-2 mb-6 border-l-4 border-orange-500 pl-4">Bridging Data and Discovery</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Launched to meet the evolving needs of the 2026 research landscape, <strong>ScholarNote</strong> is a centralized hub designed for the modern academic. We eliminate silos by providing a unified space where data sets, literature reviews, and collaborative notes coexist.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">Core Capabilities</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center p-4 bg-orange-50 rounded-lg">
                        <span className="bg-orange-500 text-white rounded-full p-1 mr-3">✓</span>
                        Real-time Peer Collaboration
                    </li>
                    <li className="flex items-center p-4 bg-orange-50 rounded-lg">
                        <span className="bg-orange-500 text-white rounded-full p-1 mr-3">✓</span>
                        Manuscript Formatting Engine
                    </li>
                    <li className="flex items-center p-4 bg-orange-50 rounded-lg">
                        <span className="bg-orange-500 text-white rounded-full p-1 mr-3">✓</span>
                        Secure Dataset Versioning
                    </li>
                    <li className="flex items-center p-4 bg-orange-50 rounded-lg">
                        <span className="bg-orange-500 text-white rounded-full p-1 mr-3">✓</span>
                        Cross-Institutional Networking
                    </li>
                </ul>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t border-gray-100 pt-12">
                <div>
                    <div className="text-4xl font-black text-orange-600">50k+</div>
                    <div className="text-sm text-gray-500 font-semibold uppercase">Researchers</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-orange-600">1.2M</div>
                    <div className="text-sm text-gray-500 font-semibold uppercase">Papers Indexed</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-orange-600">200+</div>
                    <div className="text-sm text-gray-500 font-semibold uppercase">Institutions</div>
                </div>
            </div>
        </div>
    </main>
</main>
)
}

export default page