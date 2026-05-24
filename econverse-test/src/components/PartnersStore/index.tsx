import "./style.scss";

function PartnersStore() {
    const partnersInfo = [
        {
            partnerName: "Parceiros",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur",
        },
        {
            partnerName: "Parceiros",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur",
        }
    ];

    return (<>
            <section id="sectionPartners">
                {partnersInfo.map((e, i) => (
                    <article key={i} className="sectionContainer">
                        <div className="sectionContent">
                            <h2>{e.partnerName}</h2>
                            <p>{e.descriptionText}</p>
                            
                            <button>
                                confira
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}

export default PartnersStore;