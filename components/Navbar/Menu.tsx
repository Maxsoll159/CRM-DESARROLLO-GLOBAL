import { BarraMenu } from './components/BarraMenu';

export default function Menu() {
    return (
        <>
            <div className="space-y-2 w-[18%] shadow-lg bg-[#2D62ED] hidden lg:block xl:block z-100 h-screen">
                <BarraMenu />
            </div>
        </>
    )
}