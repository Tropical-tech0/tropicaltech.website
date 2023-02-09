
interface DataMail {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    price: string,
    description: string
}

//html mail
const HtmlMail = (data: DataMail) => (`
<div style="background-color: #fff; width: 600px; height: 600px; font-family: Arial, Helvetica, sans-serif;">
        <div style="display: flex; background-color: #141414">
            <img src="https://tropical-tech.netlify.app/img/logo-icon.png" alt="logo"
                style="width: 30px; height: 30px; margin-top: 10px; margin-left:10px "
            >
            <h4 style="margin-left: 20px; margin-top: -60px; color: white; font-weight: 700">Tropical Tech</h4>
        </div>
        <div>
            <div style="margin: 10px 0; padding: 10px; border: 2px solid lightgray; border-radius: 5px;">
                <strong>De</strong>: ${data.email}
            </div>
            <div style="margin: 10px 0; padding: 10px; border: 2px solid lightgray;border-radius: 5px;">
                <strong>Para</strong>: contato@tropical-tech.com
            </div>
            <div style="margin: 10px 0; padding: 10px; border: 2px solid lightgray;border-radius: 5px;">
                <strong>Nome</strong>: ${data.firstName}
            </div>
            <div style="margin: 10px 0; padding: 10px; border: 2px solid lightgray;border-radius: 5px;">
                <strong>Número de telefone</strong>: ${data.phone}
            </div>
            <div style="margin: 10px 0; padding: 10px; border: 2px solid lightgray;border-radius: 5px;">
                <strong>Faixa de preço</strong>: ${data.price}
            </div>
            <div style="margin: 10px 0; padding: 10px; border: 2px solid lightgray;border-radius: 5px;">
                <strong>Descrição do projeto</strong>: ${data.description}
            </div>
        </div>
    </div>
`)

export default HtmlMail