import './App.css';
import { useState } from 'react';

function Calculator() {
    const [ans, setans] = useState('');
    let [val1, setval] = useState('');
    let [sin, setsin] = useState('');
    function total() {
        try{
            if (sin == 1)
                setans(parseFloat(val1) + parseFloat(ans));

            if (sin == 2)
                setans(parseFloat(val1) - parseFloat(ans));

            if (sin == 3)
                setans(parseFloat(val1) * parseFloat(ans));

            if (sin == 4){
                setans(parseFloat(val1) / parseFloat(ans));
                let temp= (String(parseFloat(val1) / parseFloat(ans)));
                if(temp == Infinity)
                {
                    throw('cannot divide by zero');
                }else{
                    setans(temp);
                }
            }
            if (sin == 5)//%
                setans(parseFloat(val1) * parseFloat(ans) / 100);

        }
        catch(x){
            setans(x)
        }
    }

    return (
        <table border="2" align="center" bordercolor="blue" bgcolor='lightblue'>

            <tr>
                <td colSpan={4}><input type="text" className="display " value={ans}></input></td>
            </tr>
            <tr>
                <td><input type='button' value={"C"} onClick={(e) => setans(' ')}></input></td>
                <td><input type='button' value={"CE"} onClick={(e) => setans(ans.slice(0, -1))}></input></td>
                <td colSpan={2}><input style={{ width: 120 }} type='button' value={"="} onClick={total}></input></td>
            </tr>

            <tr>
                <td><input type='button' value={7} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={8} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={9} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><button onClick={(e) => { setans(''); setval(ans); setsin('1') }}>+</button></td>
            </tr>

            <tr>
                <td><input type='button' value={4} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={5} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={6} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><button onClick={(e) => { setans(''); setval(ans); setsin('2') }}>-</button></td>
            </tr>

            <tr>
                <td><input type='button' value={1} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={2} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={3} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><button onClick={(e) => { setans(''); setval(ans); setsin('3') }}>*</button></td>
            </tr>

            <tr>
                <td><input type='button' value={0} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><input type='button' value={"."} onClick={(e) => setans(ans + e.target.value)}></input></td>
                <td><button onClick={(e) => { setans(''); setval(ans); setsin('5') }}>%</button></td>
                <td><button onClick={(e) => { setans(''); setval(ans); setsin('4') }}>/</button></td>
            </tr>

        </table>
    );
}
export default Calculator;