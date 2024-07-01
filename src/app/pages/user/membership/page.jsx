
import image1 from "@/../public/Assets/user/membership/membership_img_1.webp";
import image2 from "@/../public/Assets/user/membership/membership_img_2.webp";
import image3 from "@/../public/Assets/user/membership/membership_img_3.webp";
import image4 from "@/../public/Assets/user/membership/membership_img_4.webp";
import MembershipForm from "@/components/User/membership/MembershipDropdown";
import Image from 'next/image';
const images = [image1, image2, image4, image3];
function Page() {
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className="text-title font-bold my-9">Member Registration Form</h1>
            <div className='flex h-fit'>
                <MembershipForm />
                <div className='flex flex-col gap-12 h-full justify-between'>
                    {
                        images.map((image, index) => (
                            <Image key={index} src={image} alt="Membership" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Page
