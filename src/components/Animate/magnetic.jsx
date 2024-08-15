'use client';
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Magnetic({ children }) {

    const ref = useRef(null);
    const [position, setPosition] = useState({x: 0, y: 0});

    const onMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x, y});
    }

    const { x, y } = position;

    const onMouseLeave = (e) => {
        setPosition({x: 0, y: 0});
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 180, damping: 15}}
        >
            {
                children
            }
        </motion.div>
    )
}