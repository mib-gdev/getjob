import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { Stack } from "react-bootstrap";

export default function MainAdvantageCard({ icon, header }) {
    const _header = useMemo(() => "fs_xl fw-bold text-center mb-0 mt-2 text-capitalize", []);
    const _card = useMemo(() => "p-4 p-lg-5 bg_mainAdv", []);
    return(
        <Stack className={_card}>
            <FontAwesomeIcon icon={icon} size="3x"/>
            <p className={_header}>
                {header}
            </p>
        </Stack>
    );
}