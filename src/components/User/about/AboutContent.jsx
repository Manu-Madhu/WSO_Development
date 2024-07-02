import { about_us } from "@/data/about_us.json"
import MemberCard from "./MemberCard";
function AboutContent({ currentIndex, setCurrentIndex }) {

    return (
        <div className="w-full flex  mt-10">
            <div className="w-4/12">
                {
                    about_us.map((item, index) => (
                        <div key={index} className={`cursor-pointer ${currentIndex === index ? 'text-primaryColor font-semibold' : 'text-gray-900 font-medium'} mb-2 `} onClick={() => setCurrentIndex(index)}>
                            {item.title}
                        </div>
                    ))
                }
            </div>
            <div className="w-8/12">
                {
                    about_us[currentIndex].content.map((item, index) => {
                        if (Array.isArray(item)) {
                            return (
                                <ul key={index} className="list-disc ml-4">
                                    {item.map((subItem, subIndex) => (
                                        <li key={subIndex}>{subItem}</li>
                                    ))}
                                </ul>
                            );
                        }
                        if (typeof item === 'object') {
                            return (
                                <div key={index} className="grid grid-cols-4 gap-x-4 gap-y-5">
                                    {item.members.map((member, subIndex) => (
                                        <MemberCard key={subIndex} {...member} />
                                    ))}
                                </div>
                            );
                        }
                        return <div key={index}> {index !== 0 ? <><br /></> : null}{item}</div>;
                    })
                }
            </div>
        </div>
    )
}

export default AboutContent
