import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

// Forma convencional de se escrever >>> export function Post(props) {
// Formula com desestruturação das Props (trazer dentro de cochetes apenas o que deseja usar das props para não quer ficar escrevendo props.)
export function Post({ author, publishedAt, content, id }) {
  // Após a o termo reservado Const fazemos uma declaração com desestruturação
  // onde o primeira posição do array é o estado que armazena o valor inicial que desejamos
  // Guardar na variavel e no segunda posição trazemos a função do react que por
  // debaixo dos panos permite alterar o estado e avisar o react que devemos
  // atualizar o conteudo/componente/estado.
  const [comments, setComments] = useState(["Deck topado papai"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    // Aqui usamos o spread operator para ler comments e so dai adicionar o proximo
    setComments([...comments, newCommentText]);

    // Limpar o input após o submit
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  //   Função para deletar comentario
  function deleteComment(comment) {
    console.log(`Deletar comentario ${comment}`)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "h1") {
            return <h1 key={line.content}>{line.content}</h1>;
          } else if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              // eslint-disable-next-line react/jsx-key
              <p key={line.content}>
                <a target="_blank" href={line.content}>
                  Criador
                </a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentario"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} deleteComment={deleteComment}/>;
        })}
      </div>
    </article>
  );
}
