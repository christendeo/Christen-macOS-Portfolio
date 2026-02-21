import React, {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

// For fonts
const FONT_WEIGHTS = {
    subtitle: {min: 100, max: 400, default: 100},
    title: {min: 400, max: 900, default: 400}
}

// Import animations
const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{fontVariationSettings: `'wght' ${baseWeight}`}}
        >
            {char === " " ? "\u00A0" : char}

        </span>
    ));
};

// For hovering text animation
const setupTextHover = (container, type) => {
    if (!container) {
        return;
    }

    const letters = container.querySelectorAll("span");
    const {min, max, default: base} = FONT_WEIGHTS[type];

    // Animate each letter
    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    // For handling when mouse moves along text
    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        // Know measurements
        letters.forEach((letter) => {
            const {left: l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    // For handling when mouse leaves text
    const handleMouseLeave = () => letters.forEach((letter) =>
        animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    // Activate animations
    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title");
        const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

        return () => {
            titleCleanup();
            subtitleCleanup();
        }
    }, []);

    return (
        <section id="welcome">

            {/*For displaying text*/}
            <p ref={subtitleRef}>
                {renderText(
                    "Hi, I'm Christen! Welcome to my",
                    "text-3xl font-arial",
                    100
                )}
            </p>

            <h1 ref={titleRef} className="mt-7">
                {renderText(
                    "portfolio",
                    "text-9xl italic font-arial"
                )}
            </h1>

            <div className="small-screen">
                <p>This Portfolio is designed for desktop and tablet screens only.</p>
            </div>
        </section>
    );
};

export default Welcome;