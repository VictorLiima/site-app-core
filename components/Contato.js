// import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
// import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

// function sendEmail(){
//     const form = document.getElementById('formEmail')
  
//     form.addEventListener('submit', (e)=>{
//       e.preventDefault()
  
//       const name = document.getElementById('nome').value
//       const email = document.getElementById('email').value
//       const message = document.getElementById('message').value
  
//       if(!name || !email || !message){
//         alert('Preecha todos os campos porfavor')
//       }
//       fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           message
//         })
//       }).then((response)=>{
//         console.log(response);
//         alert('Email enviado com sucesso');
//       }).catch((error)=>{
//         console.error(error);
//         alert('Erro ao enviar o email')
//       })
  
//     })
// }

// class Contato extends React.Component{
//     render(){
//         let close = <div className="close" onClick={() => {this.props.onCloseArticleContato()}}></div>
//         return(

//         <div>
//             <h2 className="major">Contato</h2>
//               <form id="formEmail" method="post">
//                 <div className="field half first">
//                   <label htmlFor="nome">*Nome</label>
//                   <input type="text" name="nome" id="nome"/>
//                 </div>
//                 <div className="field half">
//                   <label htmlFor="email">*Email</label>
//                   <input type="text" name="email" id="email"/>
//                 </div>
//                 <div className="field">
//                   <label htmlFor="message">*Mensagem</label>
//                   <textarea name="message" id="message" rows="4"></textarea>
//                 </div>
//                 <ul className="actions">
//                   <li><input onClick={sendEmail}type="submit" value="Enviar Mensagem" className="special" /></li>
//                   <li><input type="reset" value="Exluir" /></li>
//                 </ul>
//               </form>
//               <ul className="icons">
//                 <li><a href="#">
//                   <FontAwesomeIcon icon={faTwitter} />
//                 </a></li>
//                 <li><a href="#">
//                   <FontAwesomeIcon icon={faFacebook} />
//                 </a></li>
//                 <li><a href="#">
//                   <FontAwesomeIcon icon={faInstagram} />
//                 </a></li>
//                 <li><a href="#">
//                   <FontAwesomeIcon icon={faGithub} />
//                 </a></li>
//               </ul>
//               {close}
//         </div>
//         )
//     }
// }

// Contato.propTypes = {
//     route: PropTypes.object,
//     article: PropTypes.string,
//     onCloseArticleContato: PropTypes.func,
//     sendEmail: PropTypes.func
// }

// export default Contato;