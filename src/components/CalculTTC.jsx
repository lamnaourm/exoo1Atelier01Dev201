import Buttons from "./Buttons";
import Pht from "./Pht";
import Res from "./Res";
import Tva from "./Tva";

function CalculTTC(){
    return <fieldset>
        <legend>Calcul TTC</legend>
        <Pht />
        <Tva />
        <Buttons />
        <Res />
    </fieldset>
}

export default CalculTTC;