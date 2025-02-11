import React, { useContext, useState } from 'react'
import { ContactAddContext } from '../../context/ContactAddProvider';
import { validate } from '../../util/validator';

function PersonalInformationForm({ errors, setErrors }) {
    const [isAgreed, setIsAgreed] = useState(false);
    const { setFormData } = useContext(ContactAddContext);

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
        setFormData(prev => ({ ...prev, personalInformationAgree: e.target.checked }))
        setErrors((prevErrors) => ({ ...prevErrors, personalInformationAgree: validate("personalInformationAgree", e.target.checked) }));
    };

    return (
        <div className='font-body mb-4'>
            <div className='text-lg font-medium mb-1'>
                <h4>5. 개인정보처리방침 동의 <small>(필수*)</small></h4>
            </div>
            <textarea
                readOnly
                rows="6"
                className="w-full p-2 border border-gray-300 rounded-md mb-1 focus:outline-none"
                value={`[여기에 개인정보처리방침 내용을 입력하세요]`}
            />

            <div className="flex items-center">
                {/* 체크박스 */}
                <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={isAgreed}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                />
                <label htmlFor="agree" className="text-gray-700">
                    개인정보처리방침에 동의합니다.
                </label>
            </div>
            {!isAgreed && <p><small className='text-red-400'>개인정보처리방침에 동의하여야 견적문의가 가능합니다.</small></p>}
        </div>
    )
}

export default PersonalInformationForm