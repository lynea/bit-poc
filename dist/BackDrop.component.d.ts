import { FunctionComponent, ReactNode } from "react";

interface BackDropProps {

    children?: ReactNode;

    active: boolean;

    onClose: () => void;

}

declare const Backdrop: FunctionComponent<BackDropProps>;

export default Backdrop;

