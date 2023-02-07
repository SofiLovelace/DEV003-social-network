import { informationUser } from '../lib/firebase';
import { updatePost, createID } from '../lib/functions_post';

export function comments(post, containerRender) {
  const user = informationUser();
  console.log('comments si corre');
  // console.log(user);
  let comentarios = [];
  const dataComments = post.comentarios;
  console.log(comentarios);
  if (dataComments) {
    comentarios = dataComments;
  }
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'commentsContainer';

  const commentsDiv = document.createElement('div');
  commentsDiv.innerHTML = '';
  commentsDiv.className = 'commentsDiv';
  commentsDiv.id = 'coments-Div';

  const commentsForm = document.createElement('form');
  const commentsInput = document.createElement('input');
  commentsInput.type = 'texto';
  commentsInput.required = true;
  commentsInput.placeholder = 'Escribe un comentario';
  const btnComments = document.createElement('button');
  btnComments.type = 'submit';
  btnComments.textContent = 'comentar';
  commentsForm.className = 'commentsForm';
  commentsForm.addEventListener('submit', (e) => {
    comentarios.push({
      contenido: commentsInput.value, userId: user.uid, commentID: createID('comment'), date: new Date(),
    });
    e.preventDefault();
    // console.log(comentarios);
    updatePost(post.uid, {
      comentarios,
    }).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  });
  if (comentarios) {
    comentarios.forEach((comentario) => {
      // console.log(comentario);
      const commentContainer = document.createElement('div');
      commentContainer.className = 'commentContainer';
      commentContainer.textContent = comentario.contenido;
      commentsDiv.appendChild(commentContainer);
    });
  } else {
    commentsContainer.textContent = 'No hay comentarios';
  }

  commentsContainer.append(commentsDiv, commentsForm);
  commentsForm.append(commentsInput, btnComments);
  containerRender.appendChild(commentsContainer);

  return commentsContainer;
}
