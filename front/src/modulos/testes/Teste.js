import './teste.css'

const Teste = props => {

    return (
        <div>
            <div>
                <p className='simple-content'>Here is some generic content</p>
            </div>

            <div>
                <blockquote>
                    This is a blockquote
                </blockquote>
            </div>

            <div>
                <p className='paragrafo-container' >It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum

                    is that it has a more-or-less
                    normal distribution of letters, as opposed to using

                    <a href='#' data-tool-tip='a cool tool tip'> 'Content here' </a>

                    , making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>

            <div className='paragrafo-container counters'>
                <p className='section'>aaaaaaaaaaaaaaaaaa</p>
                <p className='section'>aaaaaaaaaaaaaaaaaa</p>
                <p className='section'>aaaaaaaaaaaaaaaaaa</p>
                <p className='section'>aaaaaaaaaaaaaaaaaa</p>
                <p className='section'>aaaaaaaaaaaaaaaaaa</p>
                <ol>
                    <li>I'm a list item</li>
                    <li>me too!</li>
                    <li>me three</li>
                    <li>Hello there</li>
                </ol>
            </div>

            <div>
                <p className='paragrafo-container' >
                Many desktop
                    publishing packages and web page editors now use Lorem Ipsum as their
                    default model text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. <span className='span-teste' msg='Teste de tool tip'>Various</span> versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>

        </div>
    )
}

export default Teste