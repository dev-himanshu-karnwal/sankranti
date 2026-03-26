import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/components";

export default function OnboardPage() {
    const navigate = useNavigate();
    
    return (
        <div className="h-screen bg-surface-muted flex flex-col items-center justify-between">
            <div
                className="w-full h-[66px] bg-repeat-x bg-size-[auto_66px]"
                style={{ backgroundImage: "url('/images/decorative_ribbon.png')" }}
            />

            <div className="flex flex-col items-center justify-center gap-7">
                <img src="/images/flower_half_logo.png" className="w-[100px]" alt="" />

                <div className="bg-surface-accent text-center flex flex-col items-center justify-center p-7 w-[90vw] max-w-[500px] relative rounded-[20px]">
                    <span className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-surface-accent rotate-45" />
                    <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-surface-accent rotate-45" />
                    <h2 className="text-xl font-bold leading-none tracking-normal text-center">Taste and feel the Difference</h2>
                    <p className="text-[12px] font-normal leading-[150%] text-center mb-6">Sankranti is about growth, <br />celebration, and eating great food together</p>

                    <div className="flex flex-col gap-3 items-stretch justify-center mb-3">
                        <Button variant="primary" onClick={() => navigate('/auth/create-account')}>Create Account</Button>
                        <Button variant="secondary" onClick={() => navigate('/auth/sign-in')}>Sign in</Button>
                    </div>

                    <Link className="relative flex items-center text-[10px] text-secondary gap-1 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full" to="#">
                        Continue as Guest
                        <span className="h-[7px]">
                            <svg className="w-full h-full" width="3" height="5" viewBox="0 0 3 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 2.49999C3 2.55811 2.97556 2.6163 2.92675 2.66067L0.426763 4.93339C0.329076 5.0222 0.17089 5.0222 0.0732652 4.93339C-0.0243592 4.84459 -0.0244217 4.70078 0.0732653 4.61203L2.3965 2.49999L0.0732653 0.387947C-0.0244217 0.29914 -0.0244217 0.155334 0.0732653 0.0665836C0.170952 -0.0221663 0.329139 -0.022223 0.426763 0.0665836L2.92675 2.33931C2.97556 2.38368 3 2.44186 3 2.49999Z" fill="var(--color-secondary)" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>

            <div
                className="rotate-180 w-full h-[66px] bg-repeat-x bg-size-[auto_66px]"
                style={{ backgroundImage: "url('/images/decorative_ribbon.png')" }}
            />
        </div>
    )
}