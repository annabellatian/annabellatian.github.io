'use client';
import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

export default function Fade({ children }) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.85', 'start 0.65']
    })

    return (
        <motion.div
            ref={ element }
            style={{ opacity: scrollYProgress }}
        >
            { children }
        </motion.div>
    )
}