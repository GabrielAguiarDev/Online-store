import { Overlay } from "./styles";

export default function indexOverlay({ zIndex, background, onClick }) {
    return <Overlay zIndex={zIndex} background={background} onClick={onClick} />

}