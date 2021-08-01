import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

function sendEmail(){
  const form = document.getElementById('formEmail')

  form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if(!name || !email || !message){
      alert('Preecha todos os campos porfavor')
    }
    
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }).then((response)=>{
      console.log(response);
      alert('Email enviado com sucesso');
    }).catch((error)=>{
      console.error(error);
      alert('Erro ao enviar o email')
    })

  })

}
class Main extends React.Component {

  render() {
    
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (

      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>


        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Serviços</h2>
          {/* <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span> */}
          <ul>
            <li>
              <h3>E-commerce</h3>
              <p>Modelo de negócios que mais vem crescendo nos últimos tempos, crie sua loja online ou migre um negócio ja existente, não fique para trás.</p>
            </li>
            <li>
              <h3>
                Sites Institucionais
              </h3>
              <p>Nada melhor do que ter uma fachada virtual para a sua empresa, apresentar os seus serviços no meio mais acessado de todos os tempos.</p>
            </li>
            <li>
              <h3>
                Sites pessoais
              </h3>
              <p>Nada melhor do que ter uma fachada virtual para a sua empresa, apresentar os seus serviços no meio mais acessado de todos os tempos.</p>
            </li>
            <li>
              <h3>
                Web-services
              </h3>
              <p>Serviços para controlar melhor o seu negócio, tenha controle de estoque, clientes e finanças no conforto do seu computador.</p>
            </li>
            <li>
              <h3>
                Apps Mobile
              </h3>
              <p>Apps personalizados para o seu negócio, tenha controle de tudo na palma da sua mão.</p>
            </li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
          <p>Olá, me chamo João Victor de Lima Martins, tenho 21 anos, natural de Castro-pr, cidade onde resido atualmente. Sou graduado em Tecnologia em Análise e Desenvolvimento de Sistemas, pela Universidade Tecnológica Federal do Paraná, obtive meu primeiro contato com a área de desenvolvimento quando entrei na faculdade em 2017, e me apaixonei pela área desde então.</p>
          <p>Sou muito esforçado,e sempre busco a maneira ideal para solucionar os problemas de vez. Meus conhecimentos em linguagens são variados nunca busquei focar em apenas uma, tenho mais familiaridade com javascript, o que trás um conhecimento em Node.js. Porém tive contato com uma gama grande de linguagens, desde C até PHP, então com certeza conseguirei atender as demandas com a linguagem mais apropriada.</p>
          <p>Para finalizar, sempre estarei disponível para analisar propostas, entre em contato e solicite seu orçamento.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          
          <h2 className="major">Contato</h2>
          <form id="formEmail" method="post">
            <div className="field half first">
              <label htmlFor="nome">*Nome</label>
              <input type="text" name="nome" id="nome"/>
            </div>
            <div className="field half">
              <label htmlFor="email">*Email</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="message">*Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input onClick={sendEmail}type="submit" value="Enviar Mensagem" className="special" /></li>
              <li><input type="reset" value="Exluir" /></li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li> */}
            <li><a target="_blank" href="https://www.facebook.com/Victor.Lima1327/">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a target="_blank" href="https://www.instagram.com/victor.developer/">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a target="_blank" href="https://github.com/Victorliima">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/victor-lima-developer/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )

}
}


Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    sendEmail: PropTypes.func
}

export default Main