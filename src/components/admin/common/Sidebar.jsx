import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const submenu = [
        { menu: "메인", url: "/admin/about" },
        { menu: "어바웃", url: "/admin/about" },
        { menu: "서비스", url: "/admin/serivces" },
        { menu: "회사정보", url: "/admin/company" },
    ]

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };

    const toggleMenu = () => {
        setOpenMenu(prev => !prev);
    };

    const handleMovePage = (url) => {
        setIsOpen(false)
        navigate({ pathname: url });
    }

    return (
        <div className="relative">
            {/* 토글 버튼 */}
            <button
                onClick={toggleSidebar}
                className={`text-xl p-1 block lg:hidden z-50 absolute ${isOpen ? "top-4 left-56 text-white" : "top-0 left-0"}`}
            >
                {isOpen ? "✖" : "☰"}
            </button>

            <div className={`${isOpen ? "w-screen h-screen absolute bg-gray-200 opacity-50" : ""}`}></div>

            <div className={`w-64 h-screen bg-gray-800 text-white p-4 fixed ${isOpen ? "block" : "hidden"} lg:block`}>
                <h2 className="text-3xl font-bold mb-6">TheRoom</h2>

                <ul>
                    <li className="mb-2 border-b">
                        <button
                            onClick={() => handleMovePage("/admin/account")}
                            className="w-full text-left p-2 hover:bg-gray-600 rounded flex justify-between"
                        >
                            계정관리
                        </button>
                    </li>
                    <li className="mb-2 border-b">
                        <button
                            onClick={() => handleMovePage("/admin/contact")}
                            className="w-full text-left p-2 hover:bg-gray-600 rounded flex justify-between"
                        >
                            견적문의관리
                        </button>
                    </li>
                    <li className="mb-2 border-b">
                        <button
                            onClick={() => handleMovePage("/admin/portfolio")}
                            className="w-full text-left p-2 hover:bg-gray-600 rounded flex justify-between"
                        >
                            포트폴리오관리
                        </button>
                    </li>
                    <li className="mb-2 border-b">
                        <button
                            onClick={() => toggleMenu()}
                            className="w-full text-left p-2 hover:bg-gray-600 rounded flex justify-between"
                        >
                            컨텐츠관리
                            <span>{openMenu ? "▲" : "▼"}</span>
                        </button>
                        <ul
                            className={`transition-all duration-300 overflow-hidden ${openMenu ? "max-h-40" : "max-h-0"}`}
                        >
                            {submenu.map((sub, index) => (
                                <li key={index} className="pl-6 py-2 bg-gray-900 hover:bg-gray-700" onClick={() => handleMovePage(sub.url)}>
                                    {sub.menu}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
