import useIsMobile from "../hooks/useIsMobile";

const isMobile = useIsMobile();

const initialPath = `
        M0 300 
        Q${window.innerWidth / 2} ${isMobile ? 220 : 0} ${window.innerWidth} 300
        L${window.innerWidth} ${window.innerHeight + 300}
        Q${window.innerWidth / 2} ${window.innerHeight + (isMobile ? 440 : 600)} 0 ${window.innerHeight + 300}
        L0 0
    `;
const targetPath = `
        M0 300 
        Q${window.innerWidth / 2} 0 ${window.innerWidth} 300
        L${window.innerWidth} ${window.innerHeight}
        Q${window.innerWidth / 2} ${window.innerHeight} 0 ${window.innerHeight}
        L0 0
    `;
