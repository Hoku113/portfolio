import { FaInstagram } from "react-icons/fa";

export const Instagram = () => (
    <>
        <svg width={0} height={0}>
            <linearGradient id="instagram" gradientTransform="rotate(100)">
                <stop offset="8%" stopColor="#5B51D8" />
                <stop offset="5%" stopColor="#405DE6" />
                <stop offset="15%" stopColor="#833AB4" />
                <stop offset="40%" stopColor="#C13584" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="60%" stopColor="#FD1D1D" />
                <stop offset="70%" stopColor="#F56040" />
                <stop offset="80%" stopColor="#F77737" />
                <stop offset="90%" stopColor="#FCAF45" />
                <stop offset="100%" stopColor="#FFDC80" />
            </linearGradient>
        </svg>

        <FaInstagram fill="url(#instagram)" />
    </>
)