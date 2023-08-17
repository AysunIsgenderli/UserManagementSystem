import { Header, Menu, Content } from "../components"

export const DashboardPage = () => {
    return (
        <div>
            <Header />
            <div className="flex w-full">
                <Menu />
                <Content />
            </div>
        </div>
    )
}

