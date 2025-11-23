export const pageVariants = {
hidden: { opacity: 0, y: 20 },
enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
exit: { opacity: 0, y: -10, transition: { duration: 0.35, ease: 'easeIn' } }
}


export const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
export const zoomIn = { hidden: { scale: 0.96, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.42 } } }
export const slideLeft = { hidden: { x: -40, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.45 } } }
export const slideRight = { hidden: { x: 40, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.45 } } }
export const stagger = { visible: { transition: { staggerChildren: 0.08 } }, hidden: { transition: { staggerChildren: 0 } } }