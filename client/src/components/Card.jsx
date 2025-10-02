import { Link } from "react-router-dom";

const Card = ({ CardClass, TopicClass, topic, svgicon, content,linkPath }) => {
    return (
        <div
            className={`relative group md:h-[100px] sm:h-[100px] h-[75px]  ${CardClass}`}
        >
            <div
                className={`bg-gray-100 h-full group-hover:bg-gray-800 group-hover:text-white shadow-md  rounded-md ${TopicClass}`}
            >
                <div className="flex items-center justify-evenly w-full h-full">
                    <div className="absolute flex items-center justify-center top-2 right-2 
                          bg-gray-800 text-white w-4 h-4 md:w-6 md:h-6 rounded-full 
                          transition-colors duration-100 
                          group-hover:bg-white active:bg-blue-400 group-hover:text-gray-900 ">
                        <button className="">
                            <Link to={linkPath}>
                            
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="md:w-3 w-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                            </Link>
                          
                        </button>
                    </div>

                    <div className="flex flex-col items-center justify-center w-[50px] md:w-[50px]">
                        <div className="text-gray-900 group-hover:text-white">{svgicon}</div>
                        <div className="sm:text-sm md:text-md flex items-center justify-center text-gray-900 group-hover:text-white">
                            <div>{topic}</div>
                        </div>
                    </div>

                    <div className="text-3xl md:text-4xl lg:text-5xl text-gray-900 group-hover:text-white">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
