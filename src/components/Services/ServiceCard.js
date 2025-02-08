import { useEffect, useMemo, useRef } from "react";
import { Stack } from "react-bootstrap";
import { useServiceCardContext } from "../../context/ServiceCardContext";

export default function ServiceCard({ order, header, text, longestHeaderIndex }) {
    const { longestHeaderRef, lognestHeaderHeight, setLognestHeaderHeight } = useServiceCardContext();
    // classes starts
    const _card = useMemo(() => "service_card h-100 align-items-start",[])
    const _orderIndicator = useMemo(() => "order_num fw-light rounded text-white", []);
    const _header = useMemo(() => "fs_lg mb-2", []);
    const _text = useMemo(() => "fs_sm mb-0", []);
    // classes ends
    const headerRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        createSpacing();
        window.addEventListener('resize', createSpacing);
        return () => {
            window.removeEventListener('resize', createSpacing);
        };
    }, [headerRef, longestHeaderRef, lognestHeaderHeight]);
    // spacing for text
    const createSpacing = () => {
        let headerHeight = 0;
        if (parseInt(longestHeaderIndex) === parseInt(order - 1)) {
            if(longestHeaderRef) headerHeight = longestHeaderRef.current.offsetHeight;
            if(longestHeaderRef) setLognestHeaderHeight(longestHeaderRef.current.offsetHeight);
        } else {
            if(headerRef) headerHeight = headerRef.current.offsetHeight;
        }
        textRef.current.style.marginTop = lognestHeaderHeight - headerHeight + 'px';
    }
    return(
        <Stack 
            direction="horizontal"
            className={_card}
        >
            <div className={_orderIndicator}>
                {order}
            </div>
            <Stack
                className="ms-2">
                <h5 className={_header} ref={
                    parseInt(order - 1) === parseInt(longestHeaderIndex)?
                    longestHeaderRef
                    :headerRef} >
                    {header}
                </h5>
                <p className={_text} ref={textRef}>
                    {text}
                </p>
            </Stack>
        </Stack>
    );
}