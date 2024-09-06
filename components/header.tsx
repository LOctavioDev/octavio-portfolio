import Link from "next/link";
import MotionTransition from "./transition-component";

const Header = () => {
    return ( 
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href="/">Octavio Dev</Link>
                </div>
            </header>
        </MotionTransition>
     );
}
 
export default Header;