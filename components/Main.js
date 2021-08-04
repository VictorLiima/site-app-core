import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import { useEffect, useState } from 'react';


function Main(props){
  const [emailSubject, setEmailSubject] = useState("");
  const [timeout, setTimeout] = useState(true)

  useEffect(()=>{
    setTimeout(props.timeout)
  }, [])

  async function closeArticle(){
    props.onCloseArticle();
  }

  function redirect(subject){
    setEmailSubject(subject)
    props.onOpenArticle('contactWithProduct')
  }

  function sendEmailContact(event){
    try {
  
        event.preventDefault()
        
    
        const name = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        
        if(!name && email && message){
          let error_form = new Error();
          error_form.message = "Campo nome é obrigatório!"
          error_form.status = 400
          throw error_form
        }else if(!email && name && message){
          let error_form = new Error();
          error_form.message = "Campo email é obrigatório!"
          error_form.status = 400
          throw error_form;
        }else if(!message && email && name){
          let error_form = new Error();
          error_form.message = "Campo mensagem é obrigatório!"
          error_form.status = 400
          throw error_form;
        }else if(!name && !email && !message || !name && !email && message || name && !email && !message || !name && email && !message || name && email && !message){
          let error_form = new Error();
          error_form.message = "Preencha todos os campos!"
          error_form.status = 400
          throw error_form;
        }
  
        fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            message,
            subject : emailSubject
          })
        })
        
        const form = document.getElementById('formEmailContact')
        form.reset()

        props.onOpenArticle('sendEmail', `Email enviado com sucesso! <b/> Responderei o mais rapido possível`)

      } catch (error) {
        if(error.status == 400){
          alert(error.message)
        }else{
          props.onOpenArticle('sendEmailError', error.message)
        }
      }
  }


  function sendEmailContactProduct(event){
    try {
  
        event.preventDefault()
        
    
        const name = document.getElementById('nome2').value
        const email = document.getElementById('email2').value
        const message = document.getElementById('message2').value
        
        if(!name && email && message){
          let error_form = new Error();
          error_form.message = "Campo nome é obrigatório!"
          error_form.status = 400
          throw error_form
        }else if(!email && name && message){
          let error_form = new Error();
          error_form.message = "Campo email é obrigatório!"
          error_form.status = 400
          throw error_form;
        }else if(!message && email && name){
          let error_form = new Error();
          error_form.message = "Campo mensagem é obrigatório!"
          error_form.status = 400
          throw error_form;
        }else if(!name && !email && !message || !name && !email && message || name && !email && !message || !name && email && !message || name && email && !message){
          let error_form = new Error();
          error_form.message = "Preencha todos os campos!"
          error_form.status = 400
          throw error_form;
        }
  
        fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            message,
            subject : emailSubject
          })
        })
        
        const form = document.getElementById('formEmailContactProduct')
        form.reset()

        props.onOpenArticle('sendEmail', `Email enviado com sucesso! <b/> Responderei o mais rapido possível`)

      } catch (error) {
        if(error.status == 400){
          alert(error.message)
        }else{
          props.onOpenArticle('sendEmailError', error.message)
        }
      }
  }
    
    let close = <div className="close" onClick={closeArticle}></div>

    return (
      <div id="main" style={props.article ? {display: 'flex'} : {display: 'none'}}>
        <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={props.article == 'work' ? {display: 'flex', opacity: 1} : {display: 'none'}} >
          <h2 className="work">Serviços</h2>
          <ul>
            <li>
            <h3>
              <a onClick={()=>{redirect('E-commerce')}}>E-commerce</a>
              </h3>
              <p>Modelo de negócios que mais vem crescendo nos últimos tempos, crie sua loja online ou migre um negócio ja existente, não fique para trás.</p>
            </li>
            <li>
              <h3>
                <a onClick={()=>{redirect('Sites Institucionais')}}>Sites Institucionais</a>
              </h3>
              <p>Nada melhor do que ter uma fachada virtual para a sua empresa, apresentar os seus serviços no meio mais acessado de todos os tempos.</p>
            </li>
            <li>
              <h3>
                <a onClick={()=>{redirect('Sites pessoais')}}>Sites pessoais</a>
              </h3>
              <p>Nada melhor do que ter uma fachada virtual para a sua empresa, apresentar os seus serviços no meio mais acessado de todos os tempos.</p>
            </li>
            <li>
              <h3>
                <a onClick={()=>{redirect('Web-services')}}>Web-services</a>
              </h3>
              <p>Serviços para controlar melhor o seu negócio, tenha controle de estoque, clientes e finanças no conforto do seu computador.</p>
            </li>
            <li>
              <h3>
                <a onClick={()=>{redirect('Apps Mobile')}}>Apps Mobile</a>
              </h3>
              <p>Apps personalizados para o seu negócio, tenha controle de tudo na palma da sua mão.</p>
            </li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={props.article == 'about' ? {display: 'flex', opacity: 1} : {display: 'none'}}>
          <h2 className="about">Sobre</h2>
          <p>Olá, me chamo João Victor de Lima Martins, tenho 21 anos, natural de Castro-pr, cidade onde resido atualmente. Sou graduado em Tecnologia em Análise e Desenvolvimento de Sistemas, pela Universidade Tecnológica Federal do Paraná, obtive meu primeiro contato com a área de desenvolvimento quando entrei na faculdade em 2017, e me apaixonei pela área desde então.</p>
          <p>Sou muito esforçado,e sempre busco a maneira ideal para solucionar os problemas de vez. Meus conhecimentos em linguagens são variados nunca busquei focar em apenas uma, tenho mais familiaridade com javascript, o que trás um conhecimento em Node.js. Porém tive contato com uma gama grande de linguagens, desde C até PHP, então com certeza conseguirei atender as demandas com a linguagem mais apropriada.</p>
          <p>Para finalizar, sempre estarei disponível para analisar propostas, entre em contato e solicite seu orçamento.</p>
          {close}
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={props.article == 'contact' ? {display: 'flex', opacity: 1} : {display: 'none'}}>
          
          <h2 className="contact">Contato</h2>
          <form id="formEmailContact" method="post">
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
              <li><input onClick={sendEmailContact} type="submit" value="Enviar Mensagem" className="special" /></li>
              <li><input type="reset" value="Exluir" /></li>
            </ul>
          </form>
          <h2 className="social" >Redes Sociais</h2>
          <ul className="icons">
            {/* <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li> */}
            <li><a target="_blank" href="https://www.facebook.com/Victor.Lima1327/">
              <FontAwesomeIcon icon={faFacebook}/>
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

        <article id="contactWithProduct" className={`${props.article === 'contactWithProduct' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={props.article == 'contactWithProduct' ? {display: 'flex', opacity: 1} : {display: 'none'}}>
          
          <h2 className="contact">Contato {emailSubject}</h2>
          <form id="formEmailContactProduct" method="post">
            <div className="field half first">
              <label htmlFor="nome">*Nome</label>
              <input type="text" name="nome" id="nome2"/>
            </div>
            <div className="field half">
              <label htmlFor="email">*Email</label>
              <input type="text" name="email" id="email2"/>
            </div>
            <div className="field">
              <label htmlFor="message">*Mensagem</label>
              <textarea name="message" id="message2" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input onClick={sendEmailContactProduct} type="submit" value="Enviar Mensagem" className="special" /></li>
              <li><input type="reset" value="Exluir" /></li>
            </ul>
          </form>
          <h2 className="social" >Redes Sociais</h2>
          <ul className="icons">
            {/* <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li> */}
            <li><a target="_blank" href="https://www.facebook.com/Victor.Lima1327/">
              <FontAwesomeIcon icon={faFacebook}/>
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

        <article id="sendEmail" className={`${props.article === 'sendEmail' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={props.article == 'sendEmail' ? {display: 'flex', opacity: 1} : {display: 'none'}}>
          <h2 className="about">Confirmação de Envio</h2>
          <p>Email enviado com sucesso</p>
          {close}
        </article>

        <article id="sendEmailError" className={`${props.article === 'sendEmailError' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={props.article == 'sendEmailError' ? {display: 'flex', opacity: 1} : {display: 'none'}}>
          <h2 className="about">Confirmação de Envio</h2>
          <p>Falha ao enviar o email</p>
          <p>{props.message}</p>
          {close}
        </article>
      </div>
    )

}

export default Main