import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CareerCounsellingMid = () => {
    const data = [
        {
            title: 'For Classes 11th to 12th',
            description:
                'Foundation building & exploring interest & subjects; visualizing career options. Effective stream/subjects selection, suitable career options, and profile building.',
            iconClass: 'fas fa-graduation-cap',
        },
        {
            title: 'For College Students',
            description:
                'Effective career planning, institution choices & course selection & profile building (including social work projects, research, AP exams, internships etc.)',
            iconClass: 'fas fa-university',
        },
        {
            title: 'Study Abroad (After Graduation)',
            description: 'Institution & job selection, profile planning and development.',
            iconClass: 'fas fa-globe',
        },
        {
            title: 'Study Abroad (Profile Analysis)',
            description: 'Profile analysis, course, country & institutions selection, application process, visa planning.',
            iconClass: 'fas fa-chart-bar',
        },
    ];

    const data1 = [
        {
            title: 'Initial Counselling',
            description:
                'Basic information: liked and disliked subjects, hobbies, reading/ writing, etc Academic background Background of Extra-curricular activities',
        },
        {
            title: 'Psychometric Test',
            description:
                'Evaluates students’ Interests, Aptitude and Personality No prior preparation required Tests conducted by us: CIS: Interest test is a paired comparison test; sheds light on individual’s interest profile DBDA: Interest test is a paired comparison test; sheds light on individual’s interest profile MAP T: Personality test to understand the student’s personality on the parameters of Adaptability, Academic, Achievement, Boldness, Creativity, etc.',
        },
        {
            title: 'Generation of the Report and Evaluation',
            description: 'Generation of the Report and Evaluation',
        },
        {
            title: 'Final Counselling',
            description: 'On the basis of your Psychometric tests, you would be guided about stream selection, subject selection, suitable career opportunities, courses available, institutions offering courses, right career path',
        },
    ];
    return (
        <div className="max-w-[1140px] mx-auto mb-[30px] mt-[50px]">
            <div className="text-center md:text-[30px] text-[30px] font-sans md:mt-[40px] md:mb-[90px] max-md:my-[20%]">
                <h2>Aptitude Testing and <span className="shape-bg"> Career</span> Counselling</h2>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {data.map((item, index) => (
                    <div key={index} className={`card-${index + 1}  shadow-xl  bg-gray-100  hover:scale-[110%] duration-100 max-h-[550px] relative`}>
                        <div className='justify-center flex my-[20px]'><i className={`text-4xl text-center mx-auto ${item.iconClass} text-red-500`} /></div>
                        <p className="text-center text-[115%] my-[20px] text-black">{item.title}</p>
                        <p className="text-center text-[95%] mx-auto w-[80%] text-black mb-[50px]">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center md:text-[30px] text-[30px] font-sans md:mt-[80px] md:mb-[90px] max-md:my-[20%]">
                <h2>Process of Aptitude Testing and Career <span className="shape-bg"> Counselling</span></h2>
            </div>
            <div className="grid gap-6 grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-4">
                {data1.map((item, index) => (
                    <div key={index} className={`card-${index + 1} border-[1px] shadow-xl   hover:scale-[110%] duration-100 max-h-[650px] relative`}>
                        <div className="relative mt-[10px] text-center left-1/2 transform -translate-x-1/2 flex items-center justify-center w-[60px] h-[60px] bg-red-500 font-extrabold text-[1.3em] text-black rounded-full">
                            {index + 1}
                        </div>
                        <p className="text-center my-[20px] text-black">{item.title}</p>
                        <p className="text-center text-[.8em] mx-auto w-[80%]  mb-[50px]">{item.description}</p>
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
