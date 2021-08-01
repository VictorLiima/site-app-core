import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

function sendEmail(){
  const form = document.getElementById('formEmail')

  form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

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
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sobre</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          
          <h2 className="major">Contato</h2>
          <form id="formEmail" method="post">
            <div className="field half first">
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input onClick={sendEmail}type="submit" value="Enviar Mensagem" className="special" /></li>
              <li><input type="reset" value="Exluir" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>
        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
            <h2 className="major">Habilidades</h2>
            <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
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