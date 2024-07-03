import NormalTextField from '@/components/Common/NormalTextField'
import FileUploadField from '@/components/Common/FileUploadField'
import CountrySelector from './CountrySelector'
import { Me } from 'react-flags-select'
import MembershipDropdown from './MembershipApplied'
const options = [
    { value: '1', label: 'option 1' },
    { value: '2', label: 'option 2' },
    { value: '3', label: 'option 3' }
]
function MembershipForm() {
    return (
        <div className='flex flex-col w-full px-10 max-md:p-4 border-separate rounded-xl border  mr-10 max-md:mr-0 pb-10'>
            <NormalTextField editable label="Username" placeholder="Username" key='usename' top />
            <NormalTextField editable label="Password" placeholder="Password" type='password' key="password" />
            <NormalTextField editable label="Name of the Applicant" placeholder="Name of the Applicant" key="name" />
            <NormalTextField editable label="Address" placeholder="Address" type="textarea" key="address" />
            <NormalTextField editable label="State/Province" placeholder="State" key="state" />
            <div className='flex max-md:flex-col border-t w-full border-gray-3 00 py-5 justify-between'>
                <div className='w-[35%] max-md:w-full font-medium'>
                    <h2>Country</h2>
                </div>
                <CountrySelector />
            </div>
            <NormalTextField editable label="Telephone" placeholder="Telephone" key="Telephone" type="tel" />
            <NormalTextField editable label="Fax" placeholder="Fax" key="fax" />
            <NormalTextField editable label="Email" placeholder="Email" key="email" type="email" />
            <NormalTextField editable label="Website" placeholder="Website" key="Website" type="url" />
            <NormalTextField editable label="Contact Person" placeholder="Contact Person" key="person" />
            <NormalTextField editable label="Telephone" placeholder="Telephone" key="Telephone" type="tel" />
            <NormalTextField editable label="Nature of business/product line" placeholder="Nature of business" key="Nature of business" />
            <MembershipDropdown options={options} placeholder={"Membership applied for"} />
            <NormalTextField editable label="Name of the business/entity associated with" placeholder="business" key="business" />
            <NormalTextField editable label="Address of the business/entity" placeholder="Address here" type="textarea" key="Address of the business" />
            <NormalTextField editable label="Registration number business/entity" placeholder="Registration number business/entity" key="regno" />
            <NormalTextField editable label="Registration date of business/entity" key="regdate" type="date" />
            <NormalTextField editable label="Date of commencement of business/entity" key="comdate" type="date" />
            <NormalTextField editable label="Name of the authorized person representing business/entity" placeholder="Name" key="business person name" />
            <NormalTextField editable label="Name of person authorized to attend meetings" placeholder="Position" key="position" />
            <div className='flex max-md:flex-col justify-between border-t w-full border-gray-3 py-5'>
                <div className='w-[35%] max-md:w-full font-medium'>
                    <h2>Attach Identity Proof File</h2>
                </div>
                <div className='w-[64%] max-md:w-full'>
                    <FileUploadField fileTypes={['image/jpeg', 'image/png', 'image/gif', 'applicatin/pdf']} />
                </div>
            </div>
            <div className='flex justify-between border-t w-full border-gray-3 py-5'>
                <div className='w-[35%] max-md:w-fit font-medium'>
                    <h2>Including Renewal Payment</h2>
                </div>
                <div className='w-[64%] max-md:w-fit'>
                    <input type="checkbox" className="scale-150 accent-[#266941]" />
                </div>
            </div>
            <MembershipDropdown options={options} placeholder={"Payment Mode"} />
            <div>
                <button className="bg-[#266941] text-white px-5 py-2 font-semibold rounded-lg mt-5">
                    Register as a Member
                </button>
            </div>
        </div>
    )
}

export default MembershipForm
