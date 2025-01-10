import React from "react";
import TextRevealVideo from "./animated/TextRevealVideo";

/**
 * Hero Component
 *
 * A landing page hero section that displays the main heading, subheading,
 * and call-to-action buttons (Join Beta and Discord).
 *
 * @component
 * @returns {JSX.Element} The rendered Hero component
 */
const Hero = () => {
  return (
    // Main container - vertically centered with top offset
    <div className="flex flex-col items-center w-full h-auto relative top-[23px]">
      {/* Content wrapper - provides additional vertical spacing */}
      <div className="flex flex-col items-center w-auto h-auto relative top-[32px]">
        {/* Main heading - split into two lines for visual effect */}
        <h1 className="text-[80px] md:text-[80px] leading-none font-medium tracking-tight text-neutral-100">
          A new era of
        </h1>
        <h1 className="text-[80px] md:text-[80px] leading-none font-medium tracking-tight text-neutral-100">
          organization.
        </h1>

        {/* Subheading container with two-line description */}
        <div className="flex flex-col items-center justify-center relative top-[16px]">
          <p className="text-xl md:text-md text-neutral-500 tracking-tight font-semibold">
            Transforming the future of storytelling using
          </p>
          <p className="text-xl md:text-md text-neutral-500 tracking-tight font-semibold">
            breakthrough technologies.
          </p>
        </div>

        {/* CTA buttons container */}
        <div className="flex items-center justify-between w-[211.53px] h-[40px] relative top-[34px]">
          {/* Join Beta CTA button */}
          <button className="flex items-center justify-center p-2 w-[81px] h-[37px] rounded-md bg-[#0075FF] text-[12.69px] transition-all duration-200 delay-75 hover:bg-[#0061d0] font-semibold cursor-pointer">
            Join Beta
          </button>

          {/* Discord button with icon */}
          <div className="flex items-center justify-center p-2 w-[122px] h-[37px] rounded-md bg-[#444444] text-[12.69px] transition-all duration-200 delay-75 hover:bg-[#4e4e4e]">
            <div className="flex w-[98.73px] h-[20.16px] items-center justify-evenly cursor-pointer">
              {/* Discord SVG icon wrapper */}
              <div className="flex items-center justify-center">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Discord icon"
                  role="img"
                >
                  <path
                    d="M12.0952 4.86008C12.092 4.85426 12.0867 4.8497 12.0802 4.84721C11.3327 4.52568 10.5438 4.29641 9.73339 4.16511C9.72605 4.16383 9.71842 4.16475 9.71165 4.16777C9.70487 4.17077 9.69932 4.17569 9.69574 4.18185C9.58826 4.36461 9.49079 4.55236 9.40355 4.74434C8.52996 4.62002 7.64135 4.62002 6.76775 4.74434C6.67994 4.55187 6.58087 4.36409 6.47099 4.18185C6.46722 4.17582 6.46161 4.17101 6.45488 4.16803C6.44815 4.16505 6.44062 4.16403 6.43326 4.16511C5.62274 4.29612 4.83386 4.52542 4.08643 4.84723C4.08004 4.84977 4.07464 4.85412 4.07099 4.85965C2.5763 6.95226 2.16685 8.99342 2.36771 11.0093C2.36828 11.0143 2.3699 11.0191 2.37248 11.0234C2.37506 11.0277 2.37854 11.0315 2.38272 11.0346C3.25305 11.6387 4.22655 12.0999 5.26163 12.3984C5.26893 12.4004 5.27671 12.4003 5.28394 12.3981C5.29117 12.3959 5.2975 12.3916 5.30209 12.3859C5.5244 12.1024 5.72139 11.802 5.89105 11.488C5.89338 11.4838 5.89471 11.4791 5.89495 11.4742C5.8952 11.4694 5.89434 11.4646 5.89246 11.4601C5.89057 11.4556 5.88769 11.4515 5.884 11.4481C5.88032 11.4448 5.8759 11.4422 5.87106 11.4405C5.56043 11.3291 5.2597 11.1948 4.9717 11.0388C4.96646 11.0359 4.96207 11.0319 4.9589 11.0271C4.95573 11.0222 4.95389 11.0167 4.95353 11.011C4.95317 11.0053 4.95431 10.9997 4.95684 10.9945C4.95938 10.9893 4.96323 10.9848 4.96806 10.9813C5.0285 10.9389 5.08897 10.8947 5.14667 10.8501C5.1518 10.8462 5.158 10.8436 5.16459 10.8428C5.17117 10.842 5.17787 10.8429 5.18393 10.8454C7.07077 11.6528 9.11354 11.6528 10.978 10.8454C10.9841 10.8428 10.9909 10.8417 10.9976 10.8425C11.0043 10.8432 11.0106 10.8457 11.0157 10.8497C11.0735 10.8944 11.134 10.9389 11.1948 10.9813C11.1996 10.9847 11.2036 10.9892 11.2061 10.9944C11.2087 10.9995 11.2099 11.0052 11.2096 11.0109C11.2092 11.0165 11.2075 11.0221 11.2044 11.027C11.2012 11.0319 11.1968 11.0359 11.1916 11.0388C10.9043 11.1961 10.6033 11.3303 10.2919 11.4401C10.287 11.4418 10.2827 11.4445 10.279 11.448C10.2753 11.4513 10.2724 11.4555 10.2706 11.46C10.2687 11.4645 10.268 11.4693 10.2683 11.4742C10.2685 11.479 10.2699 11.4838 10.2722 11.488C10.4447 11.8003 10.6414 12.1002 10.8607 12.3855C10.8652 12.3913 10.8715 12.3956 10.8788 12.398C10.886 12.4003 10.8939 12.4004 10.9012 12.3983C11.9382 12.1008 12.9133 11.6397 13.7848 11.0346C13.789 11.0317 13.7926 11.028 13.7951 11.0237C13.7978 11.0193 13.7993 11.0146 13.7997 11.0097C14.0402 8.67916 13.3972 6.65473 12.0952 4.86008Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              {/* Discord button text */}
              <p className="text-[12.69px] font-semibold">Join Discord</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video reveal animation component */}
      <TextRevealVideo />
    </div>
  );
};

export default Hero;
