import React, { useContext } from 'react'
import GridInputBox from '../common/GridInputBox';
import GridSelectBox from '../common/GridSelectBox';
import AddressBox from '../common/AddressBox';
import { PortfolioAddContext } from '../../context/PortfolioAddProvider';
import ThumbnailUploadBox from './ThumbnailUploadBox';
import ImageFileUploadBox from './ImageFileUploadBox';
import { postAddPortfolio } from '../../api/portfolioApi';
import { useNavigate } from 'react-router-dom';
import { defaultDate } from '../../util/localDate';

function PortfolioAddForm() {
  const localDate = defaultDate;
  const navigate = useNavigate()
  const context = PortfolioAddContext;
  const { formData } = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const portfolioAddFormData = new FormData();

    for (let i = 0; i < formData.imageFiles.length; i++) {
      portfolioAddFormData.append("imageFiles", formData.imageFiles[i]);
    }

    if (formData.imageFiles.length === 0) {
      portfolioAddFormData.append("imageFiles", null);
    }

    portfolioAddFormData.append("title", formData.title);
    portfolioAddFormData.append("buildingType", formData.buildingType);
    portfolioAddFormData.append("supplyArea", formData.supplyArea ? formData.supplyArea : 0);
    portfolioAddFormData.append("exclusiveArea", formData.exclusiveArea ? formData.exclusiveArea : 0);
    portfolioAddFormData.append("startDate", formData.startDate === "" ? localDate : formData.startDate);
    portfolioAddFormData.append("endDate", formData.endDate === "" ? localDate : formData.endDate);
    portfolioAddFormData.append("mainAddress", formData.mainAddress);
    portfolioAddFormData.append("detailAddress", formData.detailAddress);
    portfolioAddFormData.append("postCode", formData.postCode);
    portfolioAddFormData.append("latitude", formData.latitude ? formData.latitude : 0);
    portfolioAddFormData.append("longitude", formData.longitude ? formData.longitude : 0);
    portfolioAddFormData.append("budget", formData.budget ? formData.budget : 0);
    portfolioAddFormData.append("interiorType", formData.interiorType);
    portfolioAddFormData.append("thumbnail", formData.thumbnail ? formData.thumbnail : null);

    for (const [key, value] of portfolioAddFormData.entries()) {
      console.log(`${key} : ${value}`);
    }

    postAddPortfolio(portfolioAddFormData)
      .then(res => {
        console.log(res);
        navigate({ pathname: "../portfolio" });
      })
  }

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8 p-6 mt-6">
      <form className="pt-10 space-y-14 bg-white p-6">
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"제목"}
            id={"title"}
            type={"text"}
            placeholder={"제목을 입력해주세요."}
            context={context}
            isModifiable={true}
          />
          <GridSelectBox
            isLabel={true}
            label={"유형"}
            id={"buildingType"}
            options={[{ value: "APARTMENT", content: "아파트" }, { value: "SMALLAPARTMENT", content: "빌라" }, { value: "HOUSE", content: "주택" }]}
            placeholder={"선택"}
            context={context}
            isModifiable={true}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"공급면적"}
            id={"supplyArea"}
            type={"number"}
            placeholder={"공급 면적을 입력해주세요 - 단위: 평"}
            context={context}
            isModifiable={true}
          />
          <GridInputBox
            label={"전용면적"}
            id={"exclusiveArea"}
            type={"number"}
            placeholder={"전용 면적을 입력해주세요 - 단위: 평"}
            context={context}
            isModifiable={true}
          />
        </div>

        {/* 주소 검색 */}
        <AddressBox context={context} isModifiable={true} />

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"공사시작일"}
            id={"startDate"}
            type={"date"}
            placeholder={null}
            context={context}
            isModifiable={true}
          />
          <GridInputBox
            label={"공사완료일"}
            id={"endDate"}
            type={"date"}
            placeholder={null}
            context={context}
            isModifiable={true}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:space-x-4 mb-2 lg:space-y-0 space-y-2'>
          <GridInputBox
            label={"시공비용"}
            id={"budget"}
            type={"number"}
            placeholder={"시공비용을 입력해 주세요 - 단위: 만원"}
            context={context}
            isModifiable={true}
          />
          <GridSelectBox
            isLabel={true}
            label={"공사범위"}
            id={"interiorType"}
            placeholder={"선택"}
            options={[{ value: "PART", content: "부분시공" }, { value: "ALL", content: "전체시공" }]}
            context={context}
            isModifiable={true}
          />
        </div>

        {/** 대표 이미지 업로드 박스 추가 */}
        <ThumbnailUploadBox context={context} />

        {/* 이미지 업로드 박스 추가 */}
        <ImageFileUploadBox context={context} />

        <div className='flex justify-center'>
          <button
            onClick={handleSubmit}
            className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 font-body bg-black hover:opacity-75 text-white rounded-md'>등록</button>
        </div>
      </form>
    </div>
  )
}

export default PortfolioAddForm