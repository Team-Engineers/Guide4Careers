import React from 'react';

const CareerCounsellingMid = () => {
    const data = [
        {
            title: 'For Classes 11th to 12th',
            description:
                'Foundation building & exploring interest & subjects; visualizing career options. Effective stream/subjects selection, suitable career options, and profile building.',
        },
        {
            title: 'For College Students',
            description:
                'Effective career planning, institution choices & course selection & profile building (including social work projects, research, AP exams, internships etc.)',
        },
        {
            title: 'Study Abroad (After Graduation)',
            description: 'Institution & job selection, profile planning and development.',
        },
        {
            title: 'Study Abroad (Profile Analysis)',
            description: 'Profile analysis, course, country & institutions selection, application process, visa planning.',
        },
    ];
    // const data1 = [
    //     {
    //         title: 'For Classes 11th to 12th',
    //         description:
    //             'Foundation building & exploring interest & subjects; visualizing career options. Effective stream/subjects selection, suitable career options, and profile building.',
    //     },
    //     {
    //         title: 'For College Students',
    //         description:
    //             'Effective career planning, institution choices & course selection & profile building (including social work projects, research, AP exams, internships etc.)',
    //     },
    //     {
    //         title: 'Study Abroad (After Graduation)',
    //         description: 'Institution & job selection, profile planning and development.',
    //     },
    //     {
    //         title: 'Study Abroad (Profile Analysis)',
    //         description: 'Profile analysis, course, country & institutions selection, application process, visa planning.',
    //     },
    // ];
    return (
        <div className="max-w-[1140px] mx-auto mb-[30px] mt-[50px]">
            <div className="text-center md:text-[30px] text-[30px] font-sans md:mt-[40px] md:mb-[90px] max-md:my-[20%]">
                <h2>Aptitude Testing and Career Counselling</h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data.map((item, index) => (
                    <div key={index} className={`card-${index + 1} border-[1px] shadow-xl   hover:scale-[110%] duration-100 max-h-[550px] relative`}>
                        <div className="relative mt-[10px] text-center left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[60px] h-[60px] bg-red-500 font-extrabold text-[1.3em] text-black rounded-full">
                            {index + 1}
                        </div>
                        <p className="text-center my-[20px] text-black">{item.title}</p>
                        <p className="text-center mx-auto w-[80%]  mb-[50px]">{item.description}</p>
                    </div>
                ))}
            </div>
            <div
                className="max-w-[1200px] mt-[50px]  mx-auto lg:grid grid-cols-2 gap-[35px]">
                <div>
                    <div className="mb-[50px]  mx-auto container my-10  ">
                        <img
                            src="https://jitinchawla.com/wp-content/uploads/2021/12/unsplash-image-gMsnXqILjp4-2048x1366.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col relative lg:top-[50px]">
                    <h3 className="text-[#063970] lg:mb-[30px] max-lg:hidden font-bold flex text-center justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
                        Why is Aptitude Testing and Career Counselling necessary?
                    </h3>
                    <ul className="list-disc text-[90%] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-black text-justify pl-5">
                        <li className='my-[5px]' >Extensive frame of career choices</li>
                        <li className='my-[5px]'>Emerging trends of careers of which people are unaware</li>
                        <li className='my-[5px]'>Misconceptions about various careers</li>
                        <li className='my-[5px]'>Lack of in-depth knowledge about courses and the scope</li>
                        <li className='my-[5px]'>Cost of wrong career choice is high</li>
                        <li className='my-[5px]'>Dynamic scenario of higher education system in India</li>
                        <li className='my-[5px]'>Confusion with respect to stream selection and career decisions</li>
                    </ul>
                </div>

            </div>
            <div
                className="max-w-[1200px] mb-[50px] justify-center  mx-auto lg:grid grid-cols-2 gap-[35px]">
                
                <div className="flex flex-col  relative lg:top-[50px]">
                    <h3 className="text-[#063970] lg:mb-[30px] max-lg:hidden font-bold flex text-center justify-center my-2 mx-auto font-sans; text-3xl md:text-4xl  ">
                    Points to remember before visiting us
                    </h3>
                    <ul className="list-disc text-black text-[90%] p-[30px] lg:text-[15px] xl:text-[15px] 2xl:text-[17px] text-justify pl-5">
                        <li className='my-[15px]' > Record of academic qualifications</li>
                        <li className='my-[15px]'> Record of extra-curricular activities</li>
                        <li className='my-[15px]'>Preparedness for full disclosure</li>
                        <li className='my-[15px]'>Mental preparedness for counselling</li>
                    </ul>
                </div>
                <div>
                    <div className=" mb-[50px]  mx-auto container my-10  ">
                        <img
                            src="https://jitinchawla.com/wp-content/uploads/2022/05/image-10.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CareerCounsellingMid;
