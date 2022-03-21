import Container from "./Container";
import { useState } from "react";

import './acordion.css'
const Acordion = () => {

    const [ativo, setAtivo] = useState(0)

    const check = idElem => {

        var elems = document.querySelectorAll('.abc')

        elems.forEach(element => {
            element.classList.add("aco-faixa-hidden");
        });

        var elem = document.getElementById(idElem)
        elem.classList.remove("aco-faixa-hidden");


    }

    const show = elem => {
        setAtivo(elem)
    }

    return (
        <div>
            <div onClick={() => show(1)} style={{ borderBottom: '1px solid grey' }} >
                <h4>Titulo 01</h4>
                {
                    ativo == 1 &&
                    <div id='faixa01' className="abc">
                        <p>11111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat aliquet velit, et viverra sem porta id. Maecenas eu orci vulputate, hendrerit quam eu, gravida dui. Praesent et turpis a neque placerat commodo in et nunc. Curabitur non eros facilisis lacus porttitor rhoncus in ut nisl. Sed molestie mollis vestibulum. Sed ornare mauris dolor, at malesuada sapien rutrum ut. Nulla consectetur, justo ac gravida viverra, tellus purus elementum nulla, ut malesuada ex tellus et magna. Quisque vel tincidunt magna, quis sodales diam. Donec congue elit eu nisi viverra blandit. Mauris at vehicula ex, sit amet congue eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec velit tempus dui accumsan porttitor a quis velit. Suspendisse quis pharetra felis. In a nulla in metus tempor malesuada in in turpis. Sed at eros justo.</p>
                    </div>
                }
            </div>
            <div onClick={() => show(2)} style={{ borderBottom: '1px solid grey' }} >
                <h4>Titulo 02</h4>
                {
                    ativo == 2 &&
                <div id='faixa02' className="abc">
                    <p>22222Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat aliquet velit, et viverra sem porta id. Maecenas eu orci vulputate, hendrerit quam eu, gravida dui. Praesent et turpis a neque placerat commodo in et nunc. Curabitur non eros facilisis lacus porttitor rhoncus in ut nisl. Sed molestie mollis vestibulum. Sed ornare mauris dolor, at malesuada sapien rutrum ut. Nulla consectetur, justo ac gravida viverra, tellus purus elementum nulla, ut malesuada ex tellus et magna. Quisque vel tincidunt magna, quis sodales diam. Donec congue elit eu nisi viverra blandit. Mauris at vehicula ex, sit amet congue eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec velit tempus dui accumsan porttitor a quis velit. Suspendisse quis pharetra felis. In a nulla in metus tempor malesuada in in turpis. Sed at eros justo.</p>
                </div>
                }
            </div>
            <div onClick={() => show(3)} style={{ borderBottom: '1px solid grey' }} >
                <h4>Titulo 03</h4>
                {
                    ativo == 3 &&
                <div id='faixa03' className="abc">
                    <p>333333Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat aliquet velit, et viverra sem porta id. Maecenas eu orci vulputate, hendrerit quam eu, gravida dui. Praesent et turpis a neque placerat commodo in et nunc. Curabitur non eros facilisis lacus porttitor rhoncus in ut nisl. Sed molestie mollis vestibulum. Sed ornare mauris dolor, at malesuada sapien rutrum ut. Nulla consectetur, justo ac gravida viverra, tellus purus elementum nulla, ut malesuada ex tellus et magna. Quisque vel tincidunt magna, quis sodales diam. Donec congue elit eu nisi viverra blandit. Mauris at vehicula ex, sit amet congue eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec velit tempus dui accumsan porttitor a quis velit. Suspendisse quis pharetra felis. In a nulla in metus tempor malesuada in in turpis. Sed at eros justo.</p>
                </div>
            }
            </div>


        </div>
    );
}

export default Acordion;