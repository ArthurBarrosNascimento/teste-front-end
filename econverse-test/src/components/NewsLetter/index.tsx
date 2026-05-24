import "./style.scss";

function NewsLetter() {
    return (<>
            <section id="newsletter_section">
                <div id="description_form">
                    <h3>
                        Inscreva-se na nossa newsletter
                    </h3>
                    <p>
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </div>
                <form id="newsletter_input">

                    <div className="newsletter_fields">
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                        <button type="submit">
                            inscrever
                        </button>
                    </div>

                    <div className="newsletter_terms">
                        <input
                            type="checkbox"
                            id="terms"
                            required
                        />
                        <label htmlFor="terms">
                            Aceito os termos e condições
                        </label>
                    </div>
                </form>
            </section>
        </>
    );
}

export default NewsLetter;