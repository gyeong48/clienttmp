import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import SubTitle from '../../components/basic/common/SubTitle'
import ServiceContent from '../../components/basic/services/ServiceContent'

function ServicesPage() {
    return (
        <BasicLayout>
            <div className="max-w-3xl mx-auto px-4 py-8">
                <SubTitle content={"SERVICES"} />
                <ServiceContent />
                <ServiceContent />
                <ServiceContent />
                <ServiceContent />
            </div>
        </BasicLayout>
    )
}

export default ServicesPage