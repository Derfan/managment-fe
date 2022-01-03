import { useRef, useState, useEffect } from "react";

const defaultOptions = { root: null, rootMargin: "0px", threshold: 1 };

export const useElementOnScreen = (options = defaultOptions, cb) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [element] = entries;

            setIsVisible(element.isIntersecting);

            if (cb) cb();
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, options]);

    return { elementRef, isVisible };
};