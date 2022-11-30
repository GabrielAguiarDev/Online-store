import { ButtonForm } from "./styles";

export default function button({ onclick, text, color, background }) {
    return (
        <ButtonForm onclick={onclick} color={color} background={background}>
            {text}
        </ButtonForm>
    )
}