import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import PortfolioImageList from '../../components/basic/portfolio/PortfolioImageList'
import SubTitle from '../../components/basic/common/SubTitle'

function PortfolioPage() {
    return (
        <BasicLayout>
            <div className="mx-auto px-4 py-8">
                <SubTitle content={"PORTFOLIO"} />
                <PortfolioImageList />
            </div>
        </BasicLayout>
    )
}

export default PortfolioPage