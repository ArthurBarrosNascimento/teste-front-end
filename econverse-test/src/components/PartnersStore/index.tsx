import image_background from "../../assets/parceiroBK.png";

function PartnersStore() {
    const partnersInfo = [
        {
            partnerName: "Parceiros",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur",
            link: "",
            imagem: image_background
        },
        {
            partnerName: "Parceiros",
            descriptionText: "Lorem ipsum dolor sit amet, consectetur",
            link: "",
            imagem: image_background
        }
    ];

    return (<>
        {partnersInfo.map((e, i) => (
            <div key={i} id={`partnerName_${e.partnerName}`}>
                <img src={e.imagem} alt={e.partnerName} />
                <p>{e.descriptionText}</p>
                <button>
                    <link rel="stylesheet" href={e.link}/>
                    confira
                </button>
            </div>
        ))}
    </>)
}

export default PartnersStore;
