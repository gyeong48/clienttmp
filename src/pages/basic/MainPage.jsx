import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import ImageSlider from '../../components/basic/main/ImageSlider'

function MainPage() {
  return (
    <BasicLayout>
      <div className="w-screen h-screen">
        <ImageSlider />
      </div>
    </BasicLayout>
  )
}

export default MainPage