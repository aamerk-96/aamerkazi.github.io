import Image from "next/image";
import profilePicture from "../profile_pic.jpg";

export default function Hero() {
    return (
        <div className="container hero-grid">
            <div className="hero-left">
                <div className="hero-name">Aamer Kazi</div>
                <div className="hero-title">Research, FEA, AI and ML at Align Technology</div>
            </div>
            <div className="hero-right">
                <div className="avatar-circle">
                    <Image src={profilePicture} alt="Profile" fill sizes="(max-width: 900px) 72vw, 420px" style={{ objectFit: "cover" }} />
                </div>
            </div>
        </div>
    );
}
