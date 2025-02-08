import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "react-bootstrap";

export default function AdvantageCard({
        header, description, headerIcon, desIcon 
    }) {
    return(
        <Stack className="card_advantage bottom_line rounded-3 h-100 p-4 p-md-5 justify-content-between gap-4">
            <Stack direction="horizontal"
                className="align-items-baseline fs_lg fw-bold order-0">
                    <FontAwesomeIcon icon={headerIcon} />
                    <p className="ps-2 mb-0 text-capitalize">
                        {header}
                    </p>
            </Stack>
            <Stack direction="horizontal"
                className="align-items-baseline fs_md order-2">
                    <FontAwesomeIcon icon={desIcon} />
                    <p className="ps-2 mb-0">
                        {description}
                    </p>
            </Stack>
        </Stack>
    );
}