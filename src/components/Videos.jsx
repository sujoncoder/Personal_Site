import datas from '../data';

const Videos = () => {

    return (
        <div className="bg-[url('./assets/bg_img.png')] bg-cover bg-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                    ভিডিওস
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {datas.map((data) => (
                        <div
                            key={data.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform"
                        >
                            {/* Larger Video Container */}
                            <div className="aspect-w-16 aspect-h-9 w-full h-56">
                                <iframe
                                    src={data.link}
                                    title={data.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-t-xl"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600">
                                    {data.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Videos;