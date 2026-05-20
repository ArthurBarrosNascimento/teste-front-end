function NewsLetter() {
    return(<>
         <div>
            <div id="description_form">
                <h3>Inscreva-se na nossa newsletter</h3>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <div id="newsLetter_input">
                <div>
                    <input
                        type="text"
                        placeholder="Digite seu Nome"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Digite seu e-mail" 
                        required
                    />

                    <button>
                        inscrever
                    </button>
                </div>
                <input type="checkbox" required/>
                <label htmlFor="">
                    Aceito os termos e condições
                </label>
            </div>
        </div>   
    </>)
}

export default NewsLetter;
