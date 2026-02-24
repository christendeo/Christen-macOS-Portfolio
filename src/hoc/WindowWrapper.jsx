import React, {useLayoutEffect} from "react";
import useWindowStore from "#store/window.js";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);

        // Animate windows
        useGSAP(() => {
            const currentElement = ref.current;

            // Check if it exists
            if (!currentElement || !isOpen) {
                return;
            }

            currentElement.style.display = "block";

            // Add open and close window animation
            gsap.fromTo(
                currentElement,
                {scale: 0.8, opacity: 0, y: 40},
                {scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power3.out"}
            );
        }, [isOpen]);

        // Drag windows
        useGSAP(() => {
            const currentElement = ref.current;

            // Check if it exists
            if (!currentElement) {
                return;
            }

            const [instance] = Draggable.create(
                currentElement, {onPress: () => focusWindow(windowKey)}
            );

            // Keep track only on the window clicked on
            return () => instance.kill();
        }, []);

        useLayoutEffect(() => {
            const currentElement = ref.current;

            // Check if it exists
            if (!currentElement) {
                return;
            }

            currentElement.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{zIndex}}
                className="absolute"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};

export default WindowWrapper;